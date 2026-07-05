"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { getBranchConfig, resolveLocaleValue } from "@/config/site";
import type { BranchKey } from "@/config/types";
import Reveal from "@/components/Reveal";
import SectionCaption from "@/components/SectionCaption";

function ShieldIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 3 4 6v6c0 4.6 3.2 8.5 8 9 4.8-.5 8-4.4 8-9V6l-8-3z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ClockIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function AwardIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function VerifiedIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="m9 12 2 2 4-4" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}

const signalIcons = [ShieldIcon, ClockIcon, AwardIcon, VerifiedIcon] as const;

export default function BranchTrustSignals({ branch }: { branch: BranchKey }) {
  const { locale } = useLanguage();
  const branchConfig = getBranchConfig(branch);
  const trustSignals = branchConfig.trustSignals;
  const items = resolveLocaleValue(trustSignals.items, locale);

  return (
    <section id="trust" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="container-narrow">
        <Reveal className="mb-14 max-w-3xl sm:mb-20" as="section">
          <SectionCaption label={resolveLocaleValue(trustSignals.eyebrow, locale)} className="mb-5" />
          <h2 className="mt-6 text-balance text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.02em] sm:text-6xl">
            {resolveLocaleValue(trustSignals.title, locale)}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 sm:text-lg" style={{ color: "var(--color-muted)" }}>
            {resolveLocaleValue(trustSignals.intro, locale)}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((signal, index) => {
            const Icon = signalIcons[index] ?? ShieldIcon;
            return (
              <Reveal key={signal.title} delay={index * 80}>
                <div className="h-full rounded-[1.125rem] border border-[var(--color-border)] bg-[var(--color-card-background)] transition-all duration-300 ease-vanguard hover:-translate-y-1 hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)]">
                  <div className="flex h-full flex-col gap-4 p-6 lg:p-7">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ background: "var(--color-accent)", color: "var(--color-on-accent)" }}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-bold leading-tight tracking-[-0.02em]">{signal.title}</h3>
                    <p className="text-[15px] leading-6" style={{ color: "var(--color-muted)" }}>
                      {signal.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
