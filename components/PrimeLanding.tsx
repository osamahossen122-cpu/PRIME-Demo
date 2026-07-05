"use client";

import type { CSSProperties } from "react";
import { useCallback, useMemo, useSyncExternalStore } from "react";
import Link from "next/link";
import BranchHtmlController from "@/components/BranchHtmlController";
import BrandLogo from "@/components/BrandLogo";
import BranchSelector from "@/components/BranchSelector";
import FeaturedServices from "@/components/FeaturedServices";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { useLanguage } from "@/components/LanguageProvider";
import { getBranchConfig, resolveLocaleValue, siteConfig } from "@/config/site";
import { getThemeVariables } from "@/config/theme";

type PrimeMode = "light" | "dark";

const modeStorageKey = "prime-home-mode";
const modeChangeEvent = "prime-home-mode-change";

function readModeSnapshot(): PrimeMode {
  if (typeof window === "undefined") return "light";

  const stored = window.localStorage.getItem(modeStorageKey);
  if (stored === "light" || stored === "dark") return stored;

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function subscribeToModeChanges(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(modeChangeEvent, onStoreChange);
  mediaQuery.addEventListener("change", onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(modeChangeEvent, onStoreChange);
    mediaQuery.removeEventListener("change", onStoreChange);
  };
}

const primeDarkTheme = {
  "--page-bg": "#0d1118",
  "--surface": "rgba(13, 17, 24, 0.82)",
  "--surface-strong": "rgba(18, 24, 34, 0.94)",
  "--theme-text": "#f2f5fa",
  "--muted-text": "#9aa8bb",
  "--theme-border": "rgba(255,255,255,0.12)",
  "--accent": "#c9a35d",
  "--accent-strong": "#e2bd7b",
  "--accent-foreground": "#11161f",
  "--tint": "#131923",
  "--background": "#0d1118",
  "--foreground": "#f2f5fa",
  "--color-primary": "#c9a35d",
  "--color-primary-foreground": "#11161f",
  "--color-muted": "#9aa8bb",
  "--color-border": "rgba(255,255,255,0.12)",
  "--color-card-background": "rgba(13, 17, 24, 0.82)",
  colorScheme: "dark",
} as CSSProperties;

export default function PrimeLanding() {
  const { locale, t } = useLanguage();
  const mode = useSyncExternalStore(subscribeToModeChanges, readModeSnapshot, () => "light");
  const home = siteConfig.home;

  const setMode = useCallback((nextMode: PrimeMode) => {
    window.localStorage.setItem(modeStorageKey, nextMode);
    window.dispatchEvent(new Event(modeChangeEvent));
  }, []);

  const pageTheme = useMemo<CSSProperties>(() => {
    if (mode === "dark") return primeDarkTheme;
    return { ...getThemeVariables("prime"), colorScheme: "light" };
  }, [mode]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: getBranchConfig("renovation").path, label: "BAU" },
    { href: getBranchConfig("security").path, label: "SEC" },
  ];

  return (
    <div data-branch="prime" className="min-h-screen bg-[var(--page-bg)] text-[var(--theme-text)]" style={pageTheme}>
      <BranchHtmlController branch="prime" />

      <header dir="ltr" className="fixed inset-x-0 top-0 z-30 border-b px-2 sm:px-3" style={{ borderColor: "var(--theme-border)", background: "var(--page-bg)" }}>
        <div
          className="flex h-14 w-full items-center justify-between gap-2 sm:h-16 lg:gap-3"
        >
          <Link href="/" className="group flex min-w-0 flex-none items-center">
            <span className="sr-only">Prime GMBH</span>
            <BrandLogo variant="prime" size="branchNav" priority />
          </Link>

          <nav className="flex shrink-0 items-center gap-3 sm:gap-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-[var(--accent)] focus-visible:text-[var(--accent)]"
                style={{ color: item.href === "/" ? "var(--theme-text)" : "var(--muted-text)" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-card-background)] text-[var(--theme-text)] shadow-sm transition-[transform,background-color,border-color] duration-200 ease-vanguard hover:bg-[var(--subtle)] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--page-bg)]"
              aria-label={`Theme mode: ${mode === "dark" ? t.common.dark : t.common.light}`}
              onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            >
              <span
                aria-hidden="true"
                className="h-4 w-4 rounded-full border"
                style={{
                  borderColor: "currentColor",
                  background:
                    mode === "dark"
                      ? "linear-gradient(90deg, rgba(17,22,31,0.95) 50%, rgba(255,255,255,0.76) 50%)"
                      : "linear-gradient(90deg, rgba(255,255,255,0.92) 50%, rgba(17,22,31,0.9) 50%)",
                }}
              />
            </button>
            <LocaleSwitcher compact />
          </div>
        </div>
      </header>

      <main className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-[4rem] z-20 px-4 sm:top-[4.5rem] sm:px-6 lg:top-[5rem]">
          <div className="mx-auto max-w-lg px-4 py-2 text-center sm:px-5">
            <h1
              lang={locale}
              dir={siteConfig.locales.direction[locale]}
              className="text-2xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl"
              style={{
                color: mode === "dark" ? "#f2f5fa" : "#f2f5fa",
                textShadow: mode === "dark"
                  ? "0 0 20px rgba(201,163,93,0.5), 0 0 40px rgba(201,163,93,0.25), 0 0 80px rgba(201,163,93,0.1)"
                  : "0 0 20px rgba(180,130,60,0.35), 0 0 40px rgba(180,130,60,0.15), 0 0 80px rgba(180,130,60,0.08)",
              }}
            >
              {resolveLocaleValue(home.title, locale)}
            </h1>
          </div>
        </div>

        <BranchSelector />
        <FeaturedServices />
      </main>

    </div>
  );
}
