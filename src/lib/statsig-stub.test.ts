import { describe, expect, it } from "vitest";
import { checkGate, getClientInitializeValues, getStatsigUser } from "./statsig-stub";

describe("Statsig fallback helpers", () => {
  it("denies gates by default", async () => {
    await expect(checkGate("unknown_gate", {})).resolves.toBe(false);
  });

  it("returns empty client initialization values", async () => {
    await expect(getClientInitializeValues({})).resolves.toEqual({});
  });

  it("returns a stable stub user", async () => {
    await expect(getStatsigUser({})).resolves.toEqual({
      userID: "stub-user",
      customIDs: { stableID: "stub-user" },
    });
  });
});