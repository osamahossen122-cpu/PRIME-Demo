"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { getBranchConfig, resolveLocaleValue } from "@/config/site";
import type { BranchKey } from "@/config/types";
import Reveal from "@/components/Reveal";
import SectionCaption from "@/components/SectionCaption";

export default function BranchHowItWorks({ branch }: { branch: BranchKey }) {
  const { locale } = useLanguage();
  const branchConfig = getBranchConfig(branch);
  const howItWorks = branchConfig.howItWorks;
  const steps = resolveLocaleValue(howItWorks.steps, locale);

  return (
    <section id="how-it-works" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="container-narrow">
        <Reveal className="mb-14 max-w-3xl sm:mb-20" as="section">
          <SectionCaption number="§ 06" label={resolveLocaleValue(howItWorks.eyebrow, locale)} className="mb-5" />
          <h2 className="mt-6 text-balance text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.02em] sm:text-6xl">
            {resolveLocaleValue(howItWorks.title, locale)}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 sm:text-lg" style={{ color: "var(--color-muted)" }}>
            {resolveLocaleValue(howItWorks.intro, locale)}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 80}>
              <div className="relative h-full">
                <div className="h-full rounded-[1.125rem] border border-[var(--color-border)] bg-[var(--color-card-background)]">
                  <div className="flex h-full flex-col gap-3 p-6 lg:p-7">
                    <h3 className="text-lg font-bold leading-tight tracking-[-0.02em]">{step.title}</h3>
                    <p className="text-[15px] leading-6" style={{ color: "var(--color-muted)" }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
