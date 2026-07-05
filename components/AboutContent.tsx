"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { getBranchConfig, resolveLocaleValue } from "@/config/site";
import type { BranchKey } from "@/config/types";

type AboutContentProps = {
  branch: BranchKey;
  compact?: boolean;
};

export default function AboutContent({ branch, compact = false }: AboutContentProps) {
  const { locale, t } = useLanguage();
  const branchConfig = getBranchConfig(branch);
  const about = branchConfig.about;
  const points = resolveLocaleValue(about.points, locale);

  return (
    <section className="px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--muted-text)" }}>
              {resolveLocaleValue(about.eyebrow, locale)}
            </p>
            <h1 className={`${compact ? "text-3xl sm:text-4xl" : "text-4xl sm:text-5xl"} mt-4 font-semibold tracking-tight`}>
              {resolveLocaleValue(about.title, locale)}
            </h1>
          </div>

          <div>
            <p className="text-base leading-8" style={{ color: "var(--muted-text)" }}>
              {resolveLocaleValue(about.description, locale)}
            </p>
            <p className="mt-5 text-base leading-8" style={{ color: "var(--muted-text)" }}>
              {resolveLocaleValue(about.story, locale)}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {points.map((point) => (
                <div key={point} className="rounded-[24px] border px-4 py-5 text-sm leading-7" style={{ borderColor: "var(--theme-border)", background: "var(--surface)" }}>
                  {point}
                </div>
              ))}
            </div>
            {compact ? (
              <Link
                href={`${branchConfig.path}/about`}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: "var(--accent)" }}
              >
                <span>{t.nav.about}</span>
                <span aria-hidden="true">→</span>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
