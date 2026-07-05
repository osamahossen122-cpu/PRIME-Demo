"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { getBranchConfig, resolveLocaleValue } from "@/config/site";
import type { BranchKey } from "@/config/types";
import Reveal from "@/components/Reveal";
import SectionCaption from "@/components/SectionCaption";

export default function BranchWhyUs({ branch }: { branch: BranchKey }) {
  const { locale } = useLanguage();
  const branchConfig = getBranchConfig(branch);
  const whyUs = branchConfig.whyUs;
  const allBullets = resolveLocaleValue(whyUs.bullets, locale);
  const featuredBullets = allBullets.slice(0, 3);
  const supportingBullets = allBullets.slice(3);

  return (
    <section id="why-us" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="container-narrow">
        <Reveal className="mb-14 max-w-3xl sm:mb-20" as="section">
          <SectionCaption label={resolveLocaleValue(whyUs.eyebrow, locale)} className="mb-5" />
          <h2 className="mt-6 text-balance text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.02em] sm:text-6xl">
            {resolveLocaleValue(whyUs.title, locale)}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 sm:text-lg" style={{ color: "var(--color-muted)" }}>
            {resolveLocaleValue(whyUs.intro, locale)}
          </p>
        </Reveal>

        <Reveal as="section" delay={80}>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <div className="h-full rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-card-background)] p-6 sm:p-8 lg:p-10">
                <p className="eyebrow mb-4">{resolveLocaleValue(whyUs.eyebrow, locale)}</p>
                <h3 className="text-balance text-[clamp(1.6rem,3.6vw,2.5rem)] font-bold leading-[1.05] tracking-[-0.03em]">
                  {resolveLocaleValue(whyUs.title, locale)}
                </h3>
                <p className="mt-4 max-w-[34ch] text-[15px] leading-7" style={{ color: "var(--color-muted)" }}>
                  {resolveLocaleValue(whyUs.featuredDescription, locale)}
                </p>

                <div className="mt-8 space-y-3">
                  {featuredBullets.map((bullet) => (
                    <div key={bullet} className="rounded-[1rem] border border-[var(--color-border)] bg-[var(--subtle)] px-4 py-3 text-[15px] font-medium leading-6 sm:text-base">
                      {bullet}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {supportingBullets.map((bullet, index) => (
                  <div
                    key={bullet}
                    className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-card-background)] p-5 transition-all duration-300 ease-vanguard hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)]"
                    style={index === 0 ? { gridColumn: "1 / -1" } : undefined}
                  >
                    <p className="text-[15px] font-semibold leading-snug sm:text-base">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
