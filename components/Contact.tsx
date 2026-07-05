"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { getBranchConfig, resolveLocaleValue } from "@/config/site";
import type { BranchKey } from "@/config/types";
import Reveal from "@/components/Reveal";

type ContactProps = {
  branch: BranchKey;
  showMap?: boolean;
};

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function ClockIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 22s7-7.58 7-13a7 7 0 1 0-14 0c0 5.42 7 13 7 13z" />
      <circle cx="12" cy="9" r="2.5" />
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

export default function Contact({ branch, showMap = false }: ContactProps) {
  const { locale, t } = useLanguage();
  const branchConfig = getBranchConfig(branch);
  const contact = branchConfig.contact;

  const phoneHref = `tel:${branchConfig.phone.replace(/\s+/g, "")}`;
  const emailHref = `mailto:${branchConfig.email}`;

  return (
    <section id="contact" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="container-narrow">
        <Reveal className="mb-12 sm:mb-16" as="section">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <h2 className="text-balance text-[clamp(1.875rem,4.25vw,3rem)] font-semibold leading-[1.02] tracking-[-0.02em] sm:text-6xl">
                {resolveLocaleValue(contact.title, locale)}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 sm:text-lg" style={{ color: "var(--color-muted)" }}>
                {resolveLocaleValue(contact.description, locale)}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal as="section">
          <a
            href={phoneHref}
            className="group bezel-outer block rounded-[1.75rem] transition-transform duration-300 ease-vanguard hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
          >
            <div className="bezel-inner rounded-[calc(1.75rem-1px)] p-6 sm:p-8 lg:p-10">
              <div className="flex items-start justify-between gap-6">
                <div className="min-w-0 flex-1">
                  <div className="eyebrow mb-3 flex items-center gap-2">
                    <PhoneIcon className="h-3.5 w-3.5" />
                    <span>Direct line</span>
                  </div>
                  <p className="text-balance text-[clamp(2rem,6.5vw,4.25rem)] font-semibold leading-[0.98] tracking-[-0.025em]">
                    {branchConfig.phone}
                  </p>
                </div>
                <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ease-vanguard group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:inline-flex" style={{ border: "1px solid var(--color-border)" }}>
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </div>
          </a>
        </Reveal>

        <Reveal as="section" delay={120} className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <a
            href={emailHref}
            className="group bezel-outer block rounded-[1.25rem] transition-transform duration-300 ease-vanguard hover:-translate-y-0.5"
          >
            <div className="bezel-inner flex h-full items-start gap-4 rounded-[calc(1.25rem-1px)] p-5 sm:p-6">
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ background: "var(--subtle)", border: "1px solid var(--color-border)", color: "var(--theme-text)" }}>
                <MailIcon className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="eyebrow mb-1">Email</p>
                <p className="break-all text-[15px] font-medium sm:text-base">{branchConfig.email}</p>
              </div>
              <ArrowUpRight className="mt-1 h-4 w-4 opacity-0 transition-opacity duration-200 ease-vanguard group-hover:opacity-100" />
            </div>
          </a>

          <div className="bezel-outer rounded-[1.25rem]">
            <div className="bezel-inner flex h-full items-start gap-4 rounded-[calc(1.25rem-1px)] p-5 sm:p-6">
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ background: "var(--subtle)", border: "1px solid var(--color-border)", color: "var(--theme-text)" }}>
                <ClockIcon className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="eyebrow mb-1">Working hours</p>
                <p className="text-[15px] font-medium sm:text-base">{branchConfig.hours}</p>
              </div>
            </div>
          </div>

          <div className="bezel-outer rounded-[1.25rem]">
            <div className="bezel-inner flex h-full items-start gap-4 rounded-[calc(1.25rem-1px)] p-5 sm:p-6">
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ background: "var(--subtle)", border: "1px solid var(--color-border)", color: "var(--theme-text)" }}>
                <PinIcon className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="eyebrow mb-1">Service area</p>
                <p className="text-[15px] font-medium sm:text-base">{branchConfig.address}</p>
              </div>
            </div>
          </div>
        </Reveal>

        {showMap ? (
          <Reveal as="section" className="mt-4">
            <div className="overflow-hidden rounded-[1.5rem] border" style={{ borderColor: "var(--color-border)" }}>
              <iframe src={branchConfig.mapEmbedUrl} title={`${branchConfig.name} map`} className="h-80 w-full" loading="lazy" />
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
