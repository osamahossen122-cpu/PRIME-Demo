"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { getBranchConfig, resolveLocaleValue } from "@/config/site";
import type { BranchKey } from "@/config/types";

type HeroProps = {
  branch: BranchKey;
};

export default function Hero({ branch }: HeroProps) {
  const { locale } = useLanguage();
  const branchConfig = getBranchConfig(branch);
  const home = branchConfig.home;
  const stats = resolveLocaleValue(home.stats, locale);

  return (
    <section className="px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--muted-text)" }}>
            {resolveLocaleValue(home.eyebrow, locale)}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {resolveLocaleValue(home.title, locale)}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8" style={{ color: "var(--muted-text)" }}>
            {resolveLocaleValue(home.subtitle, locale)}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href={`${branchConfig.path}/book`}
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
              style={{ background: "var(--accent)", color: "var(--accent-foreground)" }}
            >
              {resolveLocaleValue(home.primaryCta, locale)}
            </Link>
            <Link
              href={`${branchConfig.path}/services`}
              className="inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold"
              style={{ borderColor: "var(--theme-border)" }}
            >
              {resolveLocaleValue(home.secondaryCta, locale)}
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {stats.map((item) => (
            <div key={item.label} className="rounded-[28px] border p-6" style={{ borderColor: "var(--theme-border)", background: "var(--surface)" }}>
              <p className="text-3xl font-semibold">{item.value}</p>
              <p className="mt-2 text-sm leading-6" style={{ color: "var(--muted-text)" }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
