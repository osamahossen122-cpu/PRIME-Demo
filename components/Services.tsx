"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { getBranchConfig, resolveLocaleValue } from "@/config/site";
import type { BranchKey } from "@/config/types";
import Reveal from "@/components/Reveal";

type ServicesProps = {
  branch: BranchKey;
  limit?: number;
  showHeading?: boolean;
};

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export default function Services({ branch, limit, showHeading = true }: ServicesProps) {
  const { locale, t } = useLanguage();
  const branchConfig = getBranchConfig(branch);
  const services = typeof limit === "number" ? branchConfig.services.slice(0, limit) : branchConfig.services;

  if (services.length === 0) return null;

  return (
    <section id="services" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="container-narrow">
        {showHeading ? (
          <Reveal className="mb-14 max-w-3xl sm:mb-20" as="section">
            <h2 className="text-balance text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.02em] sm:text-6xl">
              {t.nav.services}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 sm:text-lg" style={{ color: "var(--color-muted)" }}>
              {resolveLocaleValue(branchConfig.home.featuresDescription, locale)}
            </p>
          </Reveal>
        ) : null}

        <div className="grid grid-cols-12 gap-3 sm:gap-4">
          {services.map((service, index) => {
            const card = (
              <div className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-card-background)] transition-[transform,box-shadow,border-color] duration-300 ease-vanguard hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08),0_20px_40px_-12px_rgba(0,0,0,0.06)]">
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-start justify-end gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--theme-text)] transition-transform duration-300 ease-vanguard group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  <h3 className="mt-8 max-w-[18ch] text-[clamp(1.2rem,1.6vw,1.5rem)] font-bold leading-[1.15] tracking-[-0.025em]">
                    {resolveLocaleValue(service.title, locale)}
                  </h3>
                  <p className="mt-2.5 max-w-[36ch] text-[14px] leading-6" style={{ color: "var(--color-muted)" }}>
                    {resolveLocaleValue(service.summary, locale)}
                  </p>

                  <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[13px] font-semibold" style={{ color: "var(--color-primary)" }}>
                    {resolveLocaleValue(service.ctaLabel, locale)}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-vanguard group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            );

            const sizeClass = index === 0
              ? "col-span-12 sm:col-span-7"
              : index === 1
              ? "col-span-12 sm:col-span-5"
              : "col-span-12 sm:col-span-4";

            return (
              <Reveal key={service.slug} delay={index * 70} className={sizeClass}>
                <Link
                  href={`${branchConfig.path}/services/${service.slug}`}
                  className="group block h-full rounded-[1.5rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
                >
                  {card}
                </Link>
              </Reveal>
            );
          })}
        </div>

        {typeof limit === "number" ? (
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={`${branchConfig.path}/services`} className="group btn btn-primary btn-sm">
              <span>{t.common.viewAllServices}</span>
              <ArrowUpRight className="btn-island h-3.5 w-3.5" />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
