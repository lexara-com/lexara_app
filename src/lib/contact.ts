/**
 * lexara.app contact forms deliver through the Contact Forms plugin on
 * lexara.com (form "engage-contact", notifications to support@lexara.com).
 * The plugin stores each submission in the lexara.com CMS and emails it.
 */

export const FORM_SLUG = "engage-contact";
const SUBMIT_URL = "https://lexara.com/_emdash/api/plugins/r_yk64utpm6ndn2zpp/submit";

export type ContactStatus = "sent" | "invalid" | "rate_limited" | "error";

const RETURN_PATHS = new Set(["/", "/contact"]);

const str = (fd: FormData, key: string) => String(fd.get(key) ?? "").trim();

export function buildSubmission(fd: FormData): URLSearchParams {
  const name = str(fd, "name") || [str(fd, "firstName"), str(fd, "lastName")].filter(Boolean).join(" ");
  const p = new URLSearchParams();
  p.set("cf_slug", FORM_SLUG);
  p.set("cf_page", "/engage-contact");
  p.set("cf_ts", str(fd, "cf_ts"));
  p.set("cf_hp", str(fd, "cf_hp"));
  p.set("name", name);
  p.set("email", str(fd, "email"));
  p.set("firm", str(fd, "firm"));
  p.set("attorneys", str(fd, "attorneys"));
  p.set("message", str(fd, "message"));
  return p;
}

export function statusFromLocation(location: string | null): ContactStatus {
  if (!location) return "error";
  let raw: string | null = null;
  try {
    raw = new URL(location, "https://lexara.com").searchParams.get("cf_status");
  } catch {
    return "error";
  }
  if (raw === "sent" || raw === "saved") return "sent";
  if (raw === "invalid" || raw === "rate_limited") return raw;
  return "error";
}

export function safeReturnPath(value: FormDataEntryValue | null): string {
  const v = typeof value === "string" ? value : "";
  return RETURN_PATHS.has(v) ? v : "/contact";
}

export async function submitContact(body: URLSearchParams, fetchImpl: typeof fetch = fetch): Promise<ContactStatus> {
  try {
    const res = await fetchImpl(SUBMIT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": "lexara-app-contact/1.0" },
      body: body.toString(),
      redirect: "manual",
    });
    return statusFromLocation(res.headers.get("location"));
  } catch {
    return "error";
  }
}

export const STATUS_MESSAGES: Record<ContactStatus, { ok: boolean; text: string }> = {
  sent: { ok: true, text: "Thanks — we'll reply within one business day." },
  invalid: { ok: false, text: "Some fields need attention. Check them and try again." },
  rate_limited: { ok: false, text: "Too many attempts. Please wait a few minutes and try again, or email support@lexara.com." },
  error: { ok: false, text: "Your message didn't go through. Please email support@lexara.com instead." },
};

export function messageFor(param: string | null) {
  return param && param in STATUS_MESSAGES ? STATUS_MESSAGES[param as ContactStatus] : null;
}
