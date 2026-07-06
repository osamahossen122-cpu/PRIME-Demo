"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { getBranchConfig, resolveLocaleValue } from "@/config/site";
import type { BranchKey } from "@/config/types";
import Reveal from "@/components/Reveal";

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export default function BranchWhyUsPreview({ branch }: { branch: BranchKey }) {
  const { locale, t } = useLanguage();
  const branchConfig = getBranchConfig(branch);
  const whyUs = branchConfig.whyUs;
  const bullets = resolveLocaleValue(whyUs.bullets, locale).slice(0, 3);

  return (
    <section className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="container-narrow">
        <Reveal className="max-w-3xl" as="section">
          <p className="eyebrow mb-5">{resolveLocaleValue(whyUs.eyebrow, locale)}</p>
          <h2 className="text-balance text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.02em] sm:text-6xl">
            {resolveLocaleValue(whyUs.title, locale)}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 sm:text-lg" style={{ color: "var(--color-muted)" }}>
            {resolveLocaleValue(whyUs.intro, locale)}
          </p>

          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {bullets.map((bullet) => (
              <li key={bullet} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card-background)] px-4 py-4 text-[15px] font-medium leading-6">
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-5">
            <Link href={`${branchConfig.path}/why-us`} className="group btn btn-ghost">
              <span>{t.nav.whyUs}</span>
              <ArrowUpRight className="btn-island h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
