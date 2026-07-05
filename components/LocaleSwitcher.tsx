"use client";

import { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { siteConfig } from "@/config/site";
import type { LocaleKey } from "@/config/translations";

type LocaleSwitcherProps = {
  compact?: boolean;
  accented?: boolean;
};

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function LocaleSwitcher({ compact = false, accented = false }: LocaleSwitcherProps) {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`inline-flex items-center gap-1.5 rounded-full border text-xs font-medium transition-[background-color,border-color,color,box-shadow] duration-200 ease-vanguard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--page-bg)] ${
          compact
            ? "border-[var(--color-border)] bg-[var(--color-card-background)] px-2.5 py-1.5 text-[var(--theme-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            : "border-[var(--theme-border)] bg-transparent px-3 py-2 text-sm"
        } ${accented && !compact ? "hover:border-[var(--accent)] hover:text-[var(--accent)]" : ""}`}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t.common.language}
      >
        <span>{siteConfig.locales.labels[locale]}</span>
        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ease-vanguard ${open ? "rotate-180" : ""}`} />
      </button>

      {open ? (
        <div
          className="absolute right-0 top-full z-50 mt-1.5 min-w-[10rem] overflow-hidden rounded-[0.85rem] border bg-[var(--color-card-background)] shadow-[0_12px_40px_-12px_rgba(0,0,0,0.25)]"
          style={{ borderColor: "var(--color-border)" }}
          role="listbox"
          aria-label={t.common.language}
        >
          <div className="p-1">
            {siteConfig.locales.supported.map((supportedLocale) => {
              const active = locale === supportedLocale;
              return (
                <button
                  key={supportedLocale}
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => {
                    setLocale(supportedLocale as LocaleKey);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between gap-2 rounded-[0.65rem] px-3 py-2 text-xs font-medium transition-colors duration-150 ease-vanguard ${
                    active
                      ? "bg-[var(--subtle)] text-[var(--color-primary)]"
                      : "text-[var(--theme-text)] hover:bg-[var(--subtle)]"
                  }`}
                >
                  <span>{siteConfig.locales.labels[supportedLocale]}</span>
                  {active ? <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" /> : null}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
