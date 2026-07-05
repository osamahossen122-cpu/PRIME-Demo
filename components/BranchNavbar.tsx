"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "@/components/BrandLogo";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { useLanguage } from "@/components/LanguageProvider";
import { getBranchConfig, siteConfig } from "@/config/site";
import type { BranchKey } from "@/config/types";
import type { LocaleKey } from "@/config/translations";

type BranchMode = "light" | "dark";

type BranchNavbarProps = {
  branch: BranchKey;
  mode?: BranchMode;
  onToggleMode?: () => void;
};

function SunIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export default function BranchNavbar({ branch, mode, onToggleMode }: BranchNavbarProps) {
  const [open, setOpen] = useState(false);
  const [mobileLanguageOpen, setMobileLanguageOpen] = useState(false);
  const pathname = usePathname();
  const { t, locale, setLocale } = useLanguage();
  const navRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const lastPathRef = useRef<string | null>(null);
  const branchConfig = getBranchConfig(branch);

  const isDark = mode === "dark";

  const navItems = [
    { href: "/", label: t.nav.allBranches },
    { href: branchConfig.path, label: t.nav.home },
    { href: `${branchConfig.path}/services`, label: t.nav.services },
    { href: `${branchConfig.path}/about`, label: t.nav.about },
    { href: `${branchConfig.path}/contact`, label: t.nav.contact },
    { href: `${branchConfig.path}/book`, label: t.nav.book },
  ];

  useEffect(() => {
    if (lastPathRef.current !== null && lastPathRef.current !== pathname && open) {
      setOpen(false);
      setMobileLanguageOpen(false);
    }
    lastPathRef.current = pathname;
  }, [pathname, open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setMobileLanguageOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!navRef.current?.contains(target) && !mobileMenuRef.current?.contains(target)) {
        setOpen(false);
        setMobileLanguageOpen(false);
      }
    };
    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === branchConfig.path) return pathname === branchConfig.path;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const closeMobileMenu = () => {
    setMobileLanguageOpen(false);
    setOpen(false);
  };

  return (
    <>
      <div
        ref={navRef}
        className="sticky top-0 z-[var(--z-nav)] w-full px-2 sm:px-3"
        style={{
          background: "color-mix(in srgb, var(--color-card-background) 94%, transparent)",
          boxShadow: "0 1px 0 color-mix(in srgb, var(--theme-text) 4%, transparent) inset",
          backdropFilter: "blur(14px) saturate(140%)",
          WebkitBackdropFilter: "blur(14px) saturate(140%)",
        }}
      >
        <nav className="flex h-14 w-full items-center justify-between gap-2 sm:h-16 lg:gap-3" aria-label="Main" dir="ltr">
          <Link href="/" className="group flex min-w-0 flex-none items-center" aria-label={`${siteConfig.brand} homepage`}>
            <BrandLogo variant={branch} size="branchNav" priority />
          </Link>

          <ul className="hidden flex-1 items-center justify-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link href={item.href} className="nav-link" aria-current={active ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            {mode && onToggleMode ? (
              <button
                type="button"
                onClick={onToggleMode}
                aria-label={isDark ? t.common.light : t.common.dark}
                title={isDark ? t.common.light : t.common.dark}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-card-background)] text-[var(--theme-text)] shadow-sm transition-[transform,background-color,border-color] duration-200 ease-vanguard hover:bg-[var(--subtle)] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--page-bg)]"
              >
                {isDark ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
              </button>
            ) : null}
            <LocaleSwitcher compact />
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-card-background)] text-[var(--theme-text)] shadow-sm transition-[transform,background-color,border-color] duration-200 ease-vanguard hover:bg-[var(--subtle)] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--page-bg)] lg:hidden"
              aria-label={open ? t.common.closeMenu : t.common.openMenu}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              <span className="hamburger" data-open={open ? "true" : "false"} />
            </button>
          </div>
        </nav>
      </div>

      {open ? (
        <div id="mobile-nav" ref={mobileMenuRef} className="fixed inset-x-0 top-[4rem] bottom-0 z-[var(--z-overlay)] lg:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            aria-label={t.common.closeMenu}
            className="absolute inset-0 cursor-default bg-black/25 backdrop-blur-[10px]"
            onClick={closeMobileMenu}
            style={{ background: "color-mix(in srgb, var(--page-bg) 86%, transparent)" }}
          />
          <div className="absolute inset-0 px-3 pb-3 pt-0 sm:px-4">
            <div className="ml-auto flex w-full max-w-sm flex-col overflow-hidden rounded-[1.5rem] border bg-[var(--color-card-background)] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]" style={{ borderColor: "var(--color-border)" }}>
              <div className="flex items-center justify-between gap-3 p-3.5 sm:p-4">
                <div>
                  <p className="eyebrow">{t.common.menu}</p>
                  <p className="mt-1 text-sm" style={{ color: "var(--color-muted)" }}>
                    {branchConfig.name}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeMobileMenu}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-card-background)] transition-transform duration-200 ease-vanguard hover:bg-[var(--subtle)] active:scale-[0.96]"
                  aria-label={t.common.closeMenu}
                >
                  <span className="hamburger" data-open="true" />
                </button>
              </div>

              <div className="grid gap-3 px-3 pb-3 sm:px-4 sm:pb-4">
                <div className="grid gap-2">
                  {navItems.map((item) => {
                    const active = isActive(item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={`group flex items-center justify-between gap-3 rounded-[1rem] border px-4 py-3 text-[15px] font-medium transition-colors duration-200 ease-vanguard ${active ? "bg-[var(--subtle)]" : "bg-transparent"}`}
                        style={{ borderColor: "var(--color-border)", color: "var(--theme-text)" }}
                        aria-current={active ? "page" : undefined}
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight className="btn-island h-4 w-4" />
                      </Link>
                    );
                  })}
                </div>

                <div className="rounded-[1rem] border p-3.5" style={{ borderColor: "var(--color-border)" }}>
                  <button
                    type="button"
                    onClick={() => setMobileLanguageOpen((prev) => !prev)}
                    className="flex w-full items-center justify-between gap-3 px-1 py-1 text-left text-[15px] font-medium transition-colors duration-200 ease-vanguard hover:bg-[var(--subtle)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-card-background)]"
                    style={{ color: "var(--theme-text)" }}
                    aria-expanded={mobileLanguageOpen}
                    aria-controls="mobile-language-menu"
                  >
                    <span>{t.common.language}</span>
                    <span className="flex items-center gap-2">
                      <span className="text-sm" style={{ color: "var(--color-muted)" }}>{locale}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ease-vanguard ${mobileLanguageOpen ? "rotate-180" : ""}`} />
                    </span>
                  </button>

                  {mobileLanguageOpen ? (
                    <div id="mobile-language-menu" className="mt-2 grid gap-1 border-t pt-2" style={{ borderColor: "var(--color-border)" }}>
                      {siteConfig.locales.supported.map((supportedLocale) => {
                        const activeLocale = locale === supportedLocale;
                        return (
                          <button
                            key={supportedLocale}
                            type="button"
                            onClick={() => {
                              setLocale(supportedLocale as LocaleKey);
                              setMobileLanguageOpen(false);
                            }}
                            className="flex items-center justify-between rounded-[0.85rem] px-3 py-2 text-sm font-medium transition-colors duration-200 ease-vanguard hover:bg-[var(--subtle)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-card-background)]"
                            style={{
                              background: activeLocale ? "var(--subtle)" : "transparent",
                              color: "var(--theme-text)",
                            }}
                            aria-pressed={activeLocale}
                          >
                            <span>{siteConfig.locales.labels[supportedLocale]}</span>
                            {activeLocale ? <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-primary)" }} /> : null}
                          </button>
                        );
                      })}
                    </div>
                  ) : null}
                </div>

                <Link href={`${branchConfig.path}/book`} onClick={closeMobileMenu} className="group btn btn-primary btn-lg w-full">
                  <span>{t.nav.book}</span>
                  <ArrowUpRight className="btn-island h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
