"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { getBranchConfig, getBranchService, resolveLocaleValue } from "@/config/site";
import type { BranchKey } from "@/config/types";

type ServiceDetailProps = {
  branch: BranchKey;
  slug: string;
};

export default function ServiceDetail({ branch, slug }: ServiceDetailProps) {
  const { locale, t } = useLanguage();
  const branchConfig = getBranchConfig(branch);
  const service = getBranchService(branch, slug);

  if (!service) {
    return null;
  }

  return (
    <main className="px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <Link href={`${branchConfig.path}/services`} className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--accent)" }}>
          <span aria-hidden="true">←</span>
          <span>{t.common.backToServices}</span>
        </Link>

        <div className="mt-8 rounded-[32px] border p-8 sm:p-10" style={{ borderColor: "var(--theme-border)", background: "var(--surface)" }}>
          <span className="rounded-full border px-3 py-1 text-xs font-semibold" style={{ borderColor: "var(--theme-border)", color: "var(--muted-text)" }}>
            {branchConfig.shortName}
          </span>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            {resolveLocaleValue(service.detailTitle, locale)}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8" style={{ color: "var(--muted-text)" }}>
            {resolveLocaleValue(service.summary, locale)}
          </p>

          <div className="mt-8 space-y-5 text-base leading-8">
            {resolveLocaleValue(service.paragraphs, locale).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <section className="mt-10 grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[28px] border p-7" style={{ borderColor: "var(--theme-border)", background: "var(--surface)" }}>
            <h2 className="text-2xl font-semibold">{branchConfig.name}</h2>
            <div className="mt-6 space-y-3">
              {resolveLocaleValue(service.highlights, locale).map((item) => (
                <div key={item} className="rounded-2xl border px-4 py-4 text-sm leading-7" style={{ borderColor: "var(--theme-border)", background: "var(--surface-strong)" }}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border p-7" style={{ borderColor: "var(--theme-border)", background: "var(--surface)" }}>
            <h2 className="text-2xl font-semibold">{t.common.bookNow}</h2>
            <p className="mt-4 text-sm leading-7" style={{ color: "var(--muted-text)" }}>
              {resolveLocaleValue(branchConfig.contact.description, locale)}
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href={`${branchConfig.path}/book?service=${service.slug}`}
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
                style={{ background: "var(--accent)", color: "var(--accent-foreground)" }}
              >
                {resolveLocaleValue(service.ctaLabel, locale)}
              </Link>
              <a
                href={`tel:${branchConfig.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold"
                style={{ borderColor: "var(--theme-border)" }}
              >
                {t.common.call}
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
