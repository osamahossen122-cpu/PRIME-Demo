"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { getBranchConfig, resolveLocaleValue } from "@/config/site";
import type { BranchKey } from "@/config/types";
import Reveal from "@/components/Reveal";
import SectionCaption from "@/components/SectionCaption";

export default function BranchServiceArea({ branch }: { branch: BranchKey }) {
  const { locale } = useLanguage();
  const branchConfig = getBranchConfig(branch);
  const serviceArea = branchConfig.serviceArea;
  const cities = resolveLocaleValue(serviceArea.cities, locale);

  return (
    <section id="service-area" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="container-narrow">
        <Reveal className="mb-14 max-w-3xl sm:mb-20" as="section">
          <SectionCaption number="§ 08" label={resolveLocaleValue(serviceArea.eyebrow, locale)} className="mb-5" />
          <h2 className="mt-6 text-balance text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.02em] sm:text-6xl">
            {resolveLocaleValue(serviceArea.title, locale)}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 sm:text-lg" style={{ color: "var(--color-muted)" }}>
            {resolveLocaleValue(serviceArea.description, locale)}
          </p>
        </Reveal>

        <Reveal as="section">
          {cities.length > 0 ? (
            <div className="overflow-hidden rounded-[1.25rem] border border-[var(--color-border)] bg-[var(--color-card-background)]">
              <div className="px-6 py-6 sm:px-8 sm:py-8">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {cities.map((city) => (
                    <div
                      key={city}
                      className="rounded-xl border border-[var(--color-border)] bg-[var(--subtle)] px-4 py-3 text-[15px] font-medium leading-6 sm:text-base"
                    >
                      {city}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
