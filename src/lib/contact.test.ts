import { describe, it, expect, vi } from "vitest";
import { buildSubmission, statusFromLocation, safeReturnPath, submitContact, FORM_SLUG } from "./contact";

const form = (entries: Record<string, string>) => {
  const fd = new FormData();
  for (const [k, v] of Object.entries(entries)) fd.set(k, v);
  return fd;
};

describe("buildSubmission", () => {
  it("maps the /contact form fields to the CMS form keys", () => {
    const p = buildSubmission(form({ name: " Pat Lee ", email: "pat@firm.com", firm: "Lee Law", message: "Hi", cf_ts: "123" }));
    expect(p.get("cf_slug")).toBe(FORM_SLUG);
    expect(p.get("name")).toBe("Pat Lee");
    expect(p.get("email")).toBe("pat@firm.com");
    expect(p.get("firm")).toBe("Lee Law");
    expect(p.get("message")).toBe("Hi");
    expect(p.get("cf_ts")).toBe("123");
  });

  it("joins first and last name from the homepage form", () => {
    const p = buildSubmission(form({ firstName: "Pat", lastName: "Lee", email: "pat@firm.com", message: "Hi" }));
    expect(p.get("name")).toBe("Pat Lee");
  });

  it("passes the honeypot through so the CMS can reject bots", () => {
    expect(buildSubmission(form({ cf_hp: "spam" })).get("cf_hp")).toBe("spam");
  });
});

describe("statusFromLocation", () => {
  it("reads the CMS result from its redirect", () => {
    expect(statusFromLocation("https://lexara.com/x?cf=engage-contact&cf_status=sent")).toBe("sent");
    expect(statusFromLocation("/x?cf=engage-contact&cf_status=saved")).toBe("sent");
    expect(statusFromLocation("/x?cf=engage-contact&cf_status=invalid")).toBe("invalid");
  });
  it("treats anything unexpected as an error", () => {
    expect(statusFromLocation(null)).toBe("error");
    expect(statusFromLocation("/x?cf_status=weird")).toBe("error");
  });
});

describe("safeReturnPath", () => {
  it("allows only the two pages that host the form", () => {
    expect(safeReturnPath("/contact")).toBe("/contact");
    expect(safeReturnPath("/")).toBe("/");
    expect(safeReturnPath("https://evil.example")).toBe("/contact");
    expect(safeReturnPath("//evil.example")).toBe("/contact");
    expect(safeReturnPath(null)).toBe("/contact");
  });
});

describe("submitContact", () => {
  it("posts to the CMS without following the redirect and returns its status", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(null, { status: 303, headers: { location: "/contact?cf=engage-contact&cf_status=sent" } }),
    );
    const status = await submitContact(new URLSearchParams({ name: "a" }), fetchMock as unknown as typeof fetch);
    expect(status).toBe("sent");
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toMatch(/^https:\/\/lexara\.com\/_emdash\/api\/plugins\/.+\/submit$/);
    expect(init.method).toBe("POST");
    expect(init.redirect).toBe("manual");
  });

  it("returns error when the CMS can't be reached", async () => {
    const fetchMock = vi.fn().mockRejectedValue(new Error("down"));
    expect(await submitContact(new URLSearchParams(), fetchMock as unknown as typeof fetch)).toBe("error");
  });
});
