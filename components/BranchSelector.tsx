"use client";

import { useState, type CSSProperties } from "react";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
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
      className="grid gap-2 px-2 pb-2 pt-[6.1rem] sm:gap-3 sm:px-3 sm:pb-3 sm:pt-[6.5rem] lg:min-h-screen lg:gap-0 lg:px-0 lg:pb-0 lg:pt-0 lg:[grid-template-columns:var(--branch-columns)] lg:transition-[grid-template-columns] lg:duration-500 lg:ease-out"
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
              className={`relative z-10 flex min-h-[38dvh] flex-col justify-end px-5 pb-7 sm:px-7 sm:pb-8 lg:min-h-screen lg:px-10 lg:pb-12 ${
                index === 0 ? "pt-10 sm:pt-12 lg:pt-0" : "pt-6 sm:pt-7 lg:pt-0"
              }`}
            >
              <div className="max-w-[30rem] translate-y-0 transition-transform duration-500 group-hover:-translate-y-1">
                <h2 className="text-[1.9rem] font-semibold tracking-[-0.04em] sm:text-[2.4rem] lg:text-[2.9rem]">
                  {title}
                </h2>
                <p className="mt-3 max-w-[30rem] text-sm leading-6 sm:text-[14px]" style={{ color: style.muted }}>
                  {summary}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] transition-[color,transform] duration-500 group-hover:translate-x-1 group-hover:text-[var(--accent-strong)]">
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
