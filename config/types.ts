import type { LocaleKey } from "./locales";

export type BranchKey = "renovation" | "security";
export type ThemeKey = "prime" | BranchKey;

export type LocalizedText = Record<LocaleKey, string>;
export type LocalizedList = Record<LocaleKey, readonly string[]>;
export type LocalizedStats = Record<LocaleKey, readonly { value: string; label: string }[]>;
export type LocalizedFeatures = Record<LocaleKey, readonly { title: string; description: string }[]>;
export type LocalizedChecks = Record<LocaleKey, readonly { label: string; value: string }[]>;

export type BranchService = {
  code: string;
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  detailTitle: LocalizedText;
  paragraphs: LocalizedList;
  highlights: LocalizedList;
  ctaLabel: LocalizedText;
  seo: {
    title: string;
    description: string;
  };
};

export type BranchServiceSection = {
  id: string;
  title: LocalizedText;
  slugs: readonly string[];
};

export type BranchBookingConfig = {
  title: LocalizedText;
  description: LocalizedText;
  submitLabel: LocalizedText;
  successMessage: LocalizedText;
  errorMessage: LocalizedText;
  sidebarTitle: LocalizedText;
  sidebarItems: LocalizedChecks;
  storage: {
    provider: "local_file" | "webhook" | "email";
    webhookUrl: string;
    recipientEmail: string;
  };
};

export type BranchFaqItem = {
  question: LocalizedText;
  answer: LocalizedText;
};

export type BranchTestimonialItem = {
  name: LocalizedText;
  quote: LocalizedText;
};

export type BranchTrustBar = {
  enabled: boolean;
  title: LocalizedText;
  items: LocalizedList;
};

export type BranchOfferStrip = {
  enabled: boolean;
  badge: LocalizedText;
  headline: LocalizedText;
  subtext?: LocalizedText;
  ctaLabel: LocalizedText;
  ctaHref: string;
};

export type BranchSeoPage = {
  title: string;
  description: string;
  path: string;
};

export type BranchSeoConfig = {
  home: BranchSeoPage;
  services: BranchSeoPage;
  about: BranchSeoPage;
  contact: BranchSeoPage;
  book: BranchSeoPage;
  whyUs: BranchSeoPage;
  serviceArea: BranchSeoPage;
};

export type BranchHomeSectionKey =
  | "hero"
  | "intro"
  | "features"
  | "services"
  | "trustSignals"
  | "whyUsPreview"
  | "whyUs"
  | "howItWorks"
  | "testimonials"
  | "faq"
  | "contact"
  | "serviceArea"
  | "trustBar"
  | "offerStrip"
  | "map";

export type BranchHomeSections = Record<BranchHomeSectionKey, boolean>;

export type BranchConfig = {
  id: BranchKey;
  name: string;
  shortName: string;
  path: `/${BranchKey}`;
  theme: BranchKey;
  phone: string;
  email: string;
  whatsapp: string;
  address: string;
  hours: string;
  mapEmbedUrl: string;
  serviceAreas: readonly string[];
  serviceSections?: readonly BranchServiceSection[];
  homeSections: BranchHomeSections;
  homeSectionsOrder: readonly BranchHomeSectionKey[];
  home: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    subtitle: LocalizedText;
    primaryCta: LocalizedText;
    secondaryCta: LocalizedText;
    stats: LocalizedStats;
    featuresTitle: LocalizedText;
    featuresDescription: LocalizedText;
    features: LocalizedFeatures;
  };
  about: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    story: LocalizedText;
    points: LocalizedList;
  };
  contact: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    responseLabel: LocalizedText;
    responseValue: LocalizedText;
  };
  footer: {
    description: LocalizedText;
    legal: LocalizedText;
  };
  services: readonly BranchService[];
  booking: BranchBookingConfig;
  faq: readonly BranchFaqItem[];
  testimonials: readonly BranchTestimonialItem[];
  trustBar: BranchTrustBar;
  offerStrip: BranchOfferStrip;
  whyUs: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    intro: LocalizedText;
    bullets: LocalizedList;
    featuredDescription: LocalizedText;
  };
  howItWorks: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    intro: LocalizedText;
    steps: Record<LocaleKey, readonly { title: string; description: string }[]>;
  };
  trustSignals: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    intro: LocalizedText;
    items: Record<LocaleKey, readonly { title: string; description: string }[]>;
  };
  intro: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    body: LocalizedText;
    bullets: LocalizedList;
  };
  serviceArea: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    cities: LocalizedList;
  };
  seo: BranchSeoConfig;
};

export type PrimeHomeContent = {
  seo: BranchSeoPage;
  eyebrow: LocalizedText;
  title: LocalizedText;
  subtitle: LocalizedText;
  primaryCta: LocalizedText;
  secondaryCta: LocalizedText;
  selectorTitle: LocalizedText;
  selectorDescription: LocalizedText;
  trustPoints: LocalizedList;
  cards: Record<
    BranchKey,
    {
      badge: LocalizedText;
      title: LocalizedText;
      summary: LocalizedText;
      cta: LocalizedText;
      bullets: LocalizedList;
    }
  >;
  footerNote: LocalizedText;
};
