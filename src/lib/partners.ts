// Bar-association partner landing pages (lexara.app/sbmi, lexara.app/wysb).
//
// Every partner page is the same page, rendered by components/PartnerLanding.astro;
// only the copy, logo and accent colors in these entries differ. Adding a
// partner is one entry here, its logo in public/images/, and a two-line page
// in src/pages/ that renders PartnerLanding with it.
//
// The promo code is the whole attribution mechanism. The signup CTA carries it
// into console signup as ?promo=, which is what applies the member discount in
// Stripe and what tells the console's welcome page whose branding to render —
// firm-console's src/lib/partners.ts is keyed by this same code, so a new
// partner needs an entry there too (and the code must exist in Stripe).

export interface PartnerTheme {
  /** Partner brand color: top bar, buttons, step numbers, borders. */
  accent: string;
  /** Hover state for accent buttons. */
  accentDark: string;
  /** Accent used as text or rings on the dark navy bands. */
  accentLight: string;
  /** The accent as bare `r,g,b`, for the translucent badge and button shadows. */
  accentRgb: string;
  /** Text drawn on top of the accent (buttons, step numbers). */
  onAccent: string;
  /** Hero badge text, on the translucent accent pill. */
  badgeText: string;
  /** "Your … Member Benefits" heading on the offer card. */
  offerHeading: string;
}

export interface PartnerLanding {
  /** URL slug of the landing page. */
  slug: string;
  /** The Stripe promotion code, uppercase. */
  promoCode: string;
  /** utm_source / utm_campaign on the signup link. Kept stable once live so
      the partner's traffic stays comparable over time. */
  utmSource: string;
  utmCampaign: string;
  /** Full organisation name, as a member would write it. */
  name: string;
  /** Short form used in body copy ("activate your SBM member pricing"). */
  shortName: string;
  /** State adjective for "Join the … attorneys". */
  region: string;
  /** What the member benefit program is called, for the endorsement disclaimer. */
  programName: string;
  logoSrc: string;
  /** Desktop logo height in px; partner logos have very different proportions. */
  logoHeight: number;
  /** Caption beside the logo, for logos that don't already say "Preferred Partner". */
  logoLabel?: string;
  /** Where the complimentary onboarding call is booked. */
  setupCallUrl: string;
  theme: PartnerTheme;
}

const NATALIE_SETUP_CALL = 'https://calendly.com/natalie-lexara/engage-set-up';

export const SBMI: PartnerLanding = {
  slug: 'sbmi',
  promoCode: 'MIBAR20',
  utmSource: 'sbm',
  utmCampaign: 'sbmi_launch',
  name: 'State Bar of Michigan',
  shortName: 'SBM',
  region: 'Michigan',
  programName: 'SBM Preferred Partner Program',
  logoSrc: '/images/smb_preferred_2.png',
  logoHeight: 75,
  setupCallUrl: NATALIE_SETUP_CALL,
  theme: {
    accent: '#00953b', // SBM green
    accentDark: '#007d31',
    accentLight: '#3fc873',
    accentRgb: '0,149,59',
    onAccent: '#ffffff',
    badgeText: '#8fe6ad',
    offerHeading: '#007d31',
  },
};

export const WYSB: PartnerLanding = {
  slug: 'wysb',
  promoCode: 'WYBAR20',
  utmSource: 'wysb',
  utmCampaign: 'wysb_launch',
  name: 'Wyoming State Bar',
  shortName: 'WSB',
  region: 'Wyoming',
  programName: 'Wyoming State Bar member benefit program',
  logoSrc: '/images/WYSB.png',
  logoHeight: 125,
  logoLabel: 'Preferred Partner of the',
  setupCallUrl: NATALIE_SETUP_CALL,
  theme: {
    accent: '#ffc425', // Wyoming gold
    accentDark: '#e6a800',
    accentLight: '#ffd65c',
    accentRgb: '255,196,37',
    // White on gold fails contrast, so the gold buttons carry navy text.
    onAccent: '#1e2b3b',
    badgeText: '#ffe08a',
    offerHeading: '#492f24', // UW brown
  },
};

/**
 * The console signup link for a partner: the promo code that applies the
 * member offer, plus UTM tags so the partner's traffic can be told apart.
 * Always production — the promo codes are only guaranteed to exist in the
 * production Stripe account.
 */
export function partnerSignupUrl(partner: PartnerLanding): string {
  const params = new URLSearchParams({
    promo: partner.promoCode,
    utm_source: partner.utmSource,
    utm_medium: 'partner_page',
    utm_campaign: partner.utmCampaign,
  });
  return `https://console.lexara.app/signup?${params}`;
}
