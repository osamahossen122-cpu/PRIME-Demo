"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { getBranchConfig, resolveLocaleValue } from "@/config/site";
import type { BranchKey } from "@/config/types";
import Reveal from "@/components/Reveal";
import SectionCaption from "@/components/SectionCaption";

type BranchFaqProps = {
  branch: BranchKey;
};

function PlusIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function MinusIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M5 12h14" />
    </svg>
  );
}

export default function BranchFaq({ branch }: BranchFaqProps) {
  const { locale } = useLanguage();
  const branchConfig = getBranchConfig(branch);
  const faqItems = branchConfig.faq;

  if (!faqItems || faqItems.length === 0) return null;

  return (
    <section className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="container-narrow">
        <Reveal className="mb-12 max-w-2xl sm:mb-16" as="section">
          <SectionCaption number="§ 06" label="FAQ" className="mb-5" />
          <h2 className="text-balance text-[clamp(1.875rem,4vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.015em] sm:text-6xl">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <ul className="divide-y" style={{ borderColor: "var(--color-border)" }}>
          {faqItems.map((item, index) => (
            <li key={index}>
              <Reveal delay={index * 80}>
                <FaqItem
                  question={resolveLocaleValue(item.question, locale)}
                  answer={resolveLocaleValue(item.answer, locale)}
                />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details className="group py-5 sm:py-6" open={isOpen}>
      <summary
        className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-[15px] font-semibold leading-snug transition-colors duration-200 ease-vanguard hover:text-[var(--theme-text)] sm:text-base"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
      >
        <span>{question}</span>
        <span
          className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-[background-color] duration-200 ease-vanguard group-open:bg-[var(--subtle)]"
          style={{ border: "1px solid var(--color-border)" }}
          aria-hidden="true"
        >
          <span className="hidden group-open:block">
            <MinusIcon className="h-3.5 w-3.5" />
          </span>
          <span className="block group-open:hidden">
            <PlusIcon className="h-3.5 w-3.5" />
          </span>
        </span>
      </summary>
      <p className="mt-3 max-w-3xl text-[15px] leading-7" style={{ color: "var(--color-muted)" }}>
        {answer}
      </p>
    </details>
  );
}
