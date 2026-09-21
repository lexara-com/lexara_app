import { describe, expect, it } from "vitest";
import { getEnvironment, getGAMeasurementId } from "./analytics";

describe("getEnvironment", () => {
  it.each([
    ["test.lexara.app", "test"],
    ["dev.lexara.app", "development"],
    ["localhost:4321", "local"],
    ["lexara.app", "production"],
    ["preview.example.com", "unknown"],
  ])("maps %s to %s", (hostname, expected) => {
    expect(getEnvironment(hostname)).toBe(expected);
  });
});

describe("getGAMeasurementId", () => {
  it("returns the configured measurement id", () => {
    expect(getGAMeasurementId()).toBe("G-RQ7HHFQ4LE");
  });
});