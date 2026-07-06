"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { getBranchConfig, resolveLocaleValue } from "@/config/site";
import type { BranchKey } from "@/config/types";
import Reveal from "@/components/Reveal";
import SectionCaption from "@/components/SectionCaption";

type BranchTestimonialsProps = {
  branch: BranchKey;
};

function QuoteIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M7.17 6C4.87 6 3 7.87 3 10.17V18h6.4v-7.6H6.2c0-1.7 1.3-3 3-3V6zM18 6c-2.3 0-4.17 1.87-4.17 4.17V18h6.4v-7.6h-3.2c0-1.7 1.3-3 3-3V6z" />
    </svg>
  );
}

export default function BranchTestimonials({ branch }: BranchTestimonialsProps) {
  const { locale, t } = useLanguage();
  const branchConfig = getBranchConfig(branch);
  const items = branchConfig.testimonials;

  if (!items || items.length === 0) return null;

  return (
    <section className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="container-narrow">
        <Reveal className="mb-12 max-w-2xl sm:mb-16" as="section">
          <SectionCaption label={t.common.testimonials} className="mb-5" />
          <h2 className="text-balance text-[clamp(1.875rem,4vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.015em] sm:text-6xl">
            {t.common.whatOurClientsSay}
          </h2>
        </Reveal>

        <Reveal as="section">
          <div className="bezel-outer rounded-[1.5rem]">
            <div className="bezel-inner overflow-hidden rounded-[calc(1.5rem-1px)]">
              <ul className="grid grid-cols-1 gap-px sm:grid-cols-2" style={{ background: "var(--color-border)" }}>
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="rise flex flex-col gap-4 p-6 sm:p-8"
                    style={{ background: "var(--color-card-background)", animationDelay: `${index * 80}ms` }}
                  >
                    <QuoteIcon className="h-5 w-5 opacity-50" />
                    <p className="text-[15px] leading-7 sm:text-base">{resolveLocaleValue(item.quote, locale)}</p>
                    <p className="mt-auto text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--color-muted)" }}>
                      — {resolveLocaleValue(item.name, locale)}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
