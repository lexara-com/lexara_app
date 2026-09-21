import { beforeEach, describe, expect, it } from "vitest";
import { setMockEnv } from "../../testing/mocks/cloudflare-workers";
import { getConsoleUrl } from "./env";

beforeEach(() => {
  setMockEnv({});
});

describe("getConsoleUrl", () => {
  it("prefers the worker binding", () => {
    setMockEnv({ PUBLIC_CONSOLE_URL: "https://dev.console.lexara.app" });
    expect(getConsoleUrl()).toBe("https://dev.console.lexara.app");
  });

  it("falls back to production when no binding is available", () => {
    expect(getConsoleUrl()).toBe("https://console.lexara.app");
  });
});