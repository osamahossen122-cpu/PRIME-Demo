"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { getBranchConfig, resolveLocaleValue } from "@/config/site";
import type { BranchKey } from "@/config/types";
import Reveal from "@/components/Reveal";

type BranchTrustBarProps = {
  branch: BranchKey;
};

export default function BranchTrustBar({ branch }: BranchTrustBarProps) {
  const { locale } = useLanguage();
  const branchConfig = getBranchConfig(branch);
  const { trustBar } = branchConfig;

  if (!trustBar.enabled) return null;

  const title = resolveLocaleValue(trustBar.title, locale);
  const items = resolveLocaleValue(trustBar.items, locale);

  return (
    <section className="px-4 pt-2 sm:px-6">
      <Reveal className="container-narrow" as="section">
        <div className="flex flex-col gap-4 border-y py-9 sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:py-10" style={{ borderColor: "var(--color-border)" }}>
          <p className="max-w-md text-[15px] font-medium leading-snug tracking-[-0.005em]">{title}</p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.16em]" style={{ color: "var(--color-muted)" }}>
            {items.slice(0, 4).map((item) => (
              <li key={item} className="font-semibold">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
