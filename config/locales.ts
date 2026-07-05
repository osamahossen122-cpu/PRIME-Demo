export const activeLocale = "en" as const;

export const localesConfig = {
  active: activeLocale,
  supported: ["en", "de", "ar"] as const,
  labels: {
    en: "English",
    de: "Deutsch",
    ar: "العربية",
  },
  direction: {
    en: "ltr",
    de: "ltr",
    ar: "rtl",
  },
} as const;

export type LocaleKey = (typeof localesConfig.supported)[number];

export function isLocaleKey(value: string): value is LocaleKey {
  return (localesConfig.supported as readonly string[]).includes(value);
}
