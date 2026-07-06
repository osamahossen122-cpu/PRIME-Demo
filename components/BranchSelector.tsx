"use client";

import { useState, type CSSProperties } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { branchOrder, getBranchConfig, resolveLocaleValue, siteConfig } from "@/config/site";

const branchStyles = {
  renovation: {
    backgroundImage: "/images/home/renovation-branch-hero.png",
    overlay: "linear-gradient(180deg, rgba(18,12,8,0.16) 0%, rgba(18,12,8,0.42) 40%, rgba(18,12,8,0.86) 100%)",
    hoverOverlay: "linear-gradient(180deg, rgba(10,6,4,0.04) 0%, rgba(10,6,4,0.14) 44%, rgba(10,6,4,0.26) 100%)",
    border: "rgba(240,155,85,0.12)",
    label: "#f0c392",
    text: "#f5ede4",
    muted: "#d7c4b3",
  },
  security: {
    backgroundImage: "/images/home/security-branch-hero.png",
    overlay: "linear-gradient(180deg, rgba(5,11,19,0.14) 0%, rgba(5,11,19,0.38) 40%, rgba(5,11,19,0.86) 100%)",
    hoverOverlay: "linear-gradient(180deg, rgba(4,9,16,0.04) 0%, rgba(4,9,16,0.14) 44%, rgba(4,9,16,0.26) 100%)",
    border: "rgba(152,169,188,0.16)",
    label: "#d1dcea",
    text: "#f3f6fb",
    muted: "#b3bfd0",
  },
} as const;

export default function BranchSelector() {
  const { locale } = useLanguage();
  const [hoveredBranch, setHoveredBranch] = useState<(typeof branchOrder)[number] | null>(null);

  const branchColumns =
    hoveredBranch === "renovation" ? "65% 35%" : hoveredBranch === "security" ? "35% 65%" : "50% 50%";

  return (
    <div
      className="grid gap-3 px-3 pb-3 pt-[5.5rem] sm:pt-[6.5rem] lg:min-h-screen lg:gap-0 lg:px-0 lg:pb-0 lg:pt-0 lg:[grid-template-columns:var(--branch-columns)] lg:transition-[grid-template-columns] lg:duration-500 lg:ease-out"
      style={{ "--branch-columns": branchColumns } as CSSProperties}
      onMouseLeave={() => setHoveredBranch(null)}
    >
      {branchOrder.map((branch, index) => {
        const branchConfig = getBranchConfig(branch);
        const card = siteConfig.home.cards[branch];
        const style = branchStyles[branch];
        const title = resolveLocaleValue(card.title, locale);
        const summary = resolveLocaleValue(card.summary, locale);
        const cta = resolveLocaleValue(card.cta, locale);

        return (
          <Link
            key={branch}
            href={branchConfig.path}
            className={`group relative overflow-hidden rounded-[24px] border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] lg:rounded-none ${index === 0 ? "lg:border-r" : "lg:border-l-0"}`}
            style={{ borderColor: style.border, color: style.text }}
            onMouseEnter={() => setHoveredBranch(branch)}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              style={{ backgroundImage: `url(${style.backgroundImage})` }}
            />
            <div className="absolute inset-0 transition-opacity duration-500" style={{ background: style.overlay }} />
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: style.hoverOverlay }} />

            <div
              className={`relative z-10 flex min-h-[52dvh] flex-col items-start justify-end px-6 pb-8 sm:min-h-[58dvh] lg:min-h-screen lg:items-start lg:px-10 lg:pb-12 ${
                index === 0 ? "pt-10 sm:pt-12 lg:pt-0" : "pt-8 sm:pt-10 lg:pt-0"
              }`}
            >
              <div className="max-w-[30rem] translate-y-0 transition-transform duration-500 group-hover:-translate-y-1 lg:text-left">
                <span className="mb-3 inline-block rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wider" style={{ borderColor: style.border, color: style.label }}>
                  {branchConfig.shortName}
                </span>
                <h2 className="text-[2rem] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-[2.4rem] lg:text-[2.9rem]">
                  {title}
                </h2>
                <p className="mt-3 max-w-[30rem] text-base leading-6 sm:text-[14px] lg:text-sm" style={{ color: style.muted }}>
                  {summary}
                </p>
                <div className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-[background-color,transform] duration-300 group-hover:bg-white/20 group-hover:translate-x-1">
                  <span>{cta}</span>
                  <span aria-hidden="true">→</span>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
