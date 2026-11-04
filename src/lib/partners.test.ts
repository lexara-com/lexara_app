import { describe, expect, it } from "vitest";
import { PARTNERS, SBMI, WYSB, partnerSignupUrl } from "./partners";

describe("partnerSignupUrl", () => {
  it("carries the State Bar of Michigan promo code into console signup", () => {
    expect(partnerSignupUrl(SBMI)).toBe(
      "https://console.lexara.app/signup?promo=SBMI20&utm_source=sbm&utm_medium=partner_page&utm_campaign=sbmi_launch",
    );
  });

  it("carries the Wyoming State Bar promo code into console signup", () => {
    expect(partnerSignupUrl(WYSB)).toBe(
      "https://console.lexara.app/signup?promo=WYBAR20&utm_source=wysb&utm_medium=partner_page&utm_campaign=wysb_launch",
    );
  });
});

describe("partner entries", () => {
  it.each(PARTNERS)("$slug has an uppercase Stripe-shaped promo code", (partner) => {
    // firm-console's normalizePromoCode rejects anything else, which would
    // silently drop the member discount at signup.
    expect(partner.promoCode).toMatch(/^[A-Z0-9_-]{1,64}$/);
  });

  it("gives every partner its own promo code", () => {
    const codes = PARTNERS.map((p) => p.promoCode);
    expect(new Set(codes).size).toBe(codes.length);
  });
});
