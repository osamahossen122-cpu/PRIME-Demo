"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { getBranchConfig, resolveLocaleValue, siteConfig } from "@/config/site";
import type { BranchKey } from "@/config/types";
import Reveal from "@/components/Reveal";
import SectionCaption from "@/components/SectionCaption";

export default function BranchIntro({ branch }: { branch: BranchKey }) {
  const { locale } = useLanguage();
  const branchConfig = getBranchConfig(branch);
  const intro = branchConfig.intro;

  return (
    <section
      id="intro"
      className="px-4 py-20 sm:px-6 sm:py-24"
      lang={locale}
      dir={siteConfig.locales.direction[locale]}
    >
      <div className="container-narrow">
        <div className="max-w-3xl">
          <Reveal className="max-w-3xl">
            <SectionCaption label={resolveLocaleValue(intro.eyebrow, locale)} className="mb-5" />
            <h2 className="mt-6 text-balance text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.02em] sm:text-6xl">
              {resolveLocaleValue(intro.title, locale)}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 sm:text-lg" style={{ color: "var(--color-muted)" }}>
              {resolveLocaleValue(intro.body, locale)}
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {resolveLocaleValue(intro.bullets, locale).map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-[15px] font-semibold">
                  <span
                    className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                    style={{ background: "var(--color-primary)", color: "var(--color-primary-foreground)" }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
