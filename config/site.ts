import { primeContent } from "./content";
import { renovationBooking } from "./branches/renovation/booking";
import { renovationContent } from "./branches/renovation/content";
import { renovationSeo } from "./branches/renovation/seo";
import { renovationServices } from "./branches/renovation/services";
import { securityBooking } from "./branches/security/booking";
import { securityContent } from "./branches/security/content";
import { securitySeo } from "./branches/security/seo";
import { securityServices } from "./branches/security/services";
import { localesConfig, type LocaleKey } from "./locales";
import { themeConfig } from "./theme";
import type { BranchConfig, BranchKey } from "./types";

const branches = {
  renovation: {
    ...renovationContent,
    services: renovationServices,
    booking: renovationBooking,
    seo: renovationSeo,
  },
  security: {
    ...securityContent,
    services: securityServices,
    booking: securityBooking,
    seo: securitySeo,
  },
} satisfies Record<BranchKey, BranchConfig>;

export const siteConfig = {
  brand: "Prime GMBH",
  legalName: "Prime GMBH",
  contact: {
    email: "hello@primegmbh.de",
    phone: "+49 000 000 000",
  },
  locales: localesConfig,
  themes: themeConfig,
  home: primeContent,
  branches,
} as const;

export type SiteConfig = typeof siteConfig;

export function isBranchKey(value: string): value is BranchKey {
  return value in branches;
}

export function getBranchConfig(branch: BranchKey): BranchConfig {
  return branches[branch];
}

export function getBranchService(branch: BranchKey, slug: string) {
  return branches[branch].services.find((service) => service.slug === slug);
}

export function resolveLocaleValue<T>(value: Record<LocaleKey, T>, locale: LocaleKey) {
  return value[locale] ?? value.en;
}

export const branchOrder = ["renovation", "security"] as const;
