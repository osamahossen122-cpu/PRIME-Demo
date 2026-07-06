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
        </div>
      </div>
    </section>
  );
}
