import { ar } from "@/translations/ar";
import { de } from "@/translations/de";
import { en } from "@/translations/en";

export const translations = {
  en,
  de,
  ar,
} as const;

export type LocaleKey = keyof typeof translations;
export type TranslationBundle = (typeof translations)[LocaleKey];
