"use client";

import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";
import { getBranchConfig, resolveLocaleValue } from "@/config/site";
import type { BranchKey } from "@/config/types";

type BranchFooterProps = {
  branch: BranchKey;
};

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export default function BranchFooter({ branch }: BranchFooterProps) {
  const { locale, t } = useLanguage();
  const branchConfig = getBranchConfig(branch);
  const description = resolveLocaleValue(branchConfig.footer.description, locale);
  const legal = resolveLocaleValue(branchConfig.footer.legal, locale);

  const links = [
    { href: "/", label: t.nav.allBranches },
    { href: branchConfig.path, label: t.nav.home },
    { href: `${branchConfig.path}/services`, label: t.nav.services },
    { href: `${branchConfig.path}/about`, label: t.nav.about },
    { href: `${branchConfig.path}/contact`, label: t.nav.contact },
    { href: `${branchConfig.path}/book`, label: t.nav.book },
  ];

  return (
    <footer className="border-t px-4 sm:px-6" style={{ borderColor: "var(--color-border)" }}>
      <div className="container-narrow flex flex-col gap-12 py-14 sm:flex-row sm:items-start sm:justify-between sm:py-16">
        <Reveal className="max-w-sm" as="section">
          <div className="flex items-center gap-3">
            <Link href={branchConfig.path}>
              <BrandLogo variant={branch} size="footer" priority />
            </Link>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-6" style={{ color: "var(--color-muted)" }}>
            {description}
          </p>
          <p className="mt-3 text-xs leading-6" style={{ color: "var(--color-muted)" }}>
            {branchConfig.hours}
          </p>
        </Reveal>

        <Reveal className="flex flex-col items-start gap-6 sm:items-end" as="section" delay={120}>
          <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.8125rem]">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group inline-flex items-center gap-1.5 font-medium transition-colors duration-200 ease-vanguard hover:text-[var(--color-primary)]"
                style={{ color: "var(--theme-text)" }}
              >
                {item.label}
                <ArrowUpRight className="btn-island h-3 w-3" />
              </Link>
            ))}
          </nav>

          <Link href={`${branchConfig.path}/book`} className="group btn btn-soft">
            <span>{t.nav.book}</span>
            <ArrowUpRight className="btn-island h-4 w-4" />
          </Link>
        </Reveal>
      </div>
      <div className="border-t px-4 py-5 text-sm sm:px-6" style={{ borderColor: "var(--color-border)", color: "var(--color-muted)" }}>
        <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>{legal}</p>
          <p>{branchConfig.phone}</p>
        </div>
      </div>
    </footer>
  );
}
