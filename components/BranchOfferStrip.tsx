"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { getBranchConfig, resolveLocaleValue } from "@/config/site";
import type { BranchKey } from "@/config/types";
import Reveal from "@/components/Reveal";

type BranchOfferStripProps = {
  branch: BranchKey;
};

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export default function BranchOfferStrip({ branch }: BranchOfferStripProps) {
  const { locale } = useLanguage();
  const branchConfig = getBranchConfig(branch);
  const { offerStrip } = branchConfig;

  if (!offerStrip.enabled) return null;

  return (
    <section className="px-4 pt-4 sm:px-6">
      <Reveal className="container-narrow" as="section">
        <div className="bezel-outer rounded-[1.5rem]">
          <div className="bezel-inner flex flex-col gap-4 rounded-[calc(1.5rem-1px)] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-6">
            <div>
              <span className="eyebrow-pill mb-2 inline-flex">
                {resolveLocaleValue(offerStrip.badge, locale)}
              </span>
              <p className="text-base font-semibold sm:text-lg">{resolveLocaleValue(offerStrip.headline, locale)}</p>
              {offerStrip.subtext ? (
                <p className="mt-1 text-sm" style={{ color: "var(--color-muted)" }}>
                  {resolveLocaleValue(offerStrip.subtext, locale)}
                </p>
              ) : null}
            </div>
            <Link href={offerStrip.ctaHref} className="group btn btn-primary">
              <span>{resolveLocaleValue(offerStrip.ctaLabel, locale)}</span>
              <ArrowUpRight className="btn-island h-4 w-4" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
