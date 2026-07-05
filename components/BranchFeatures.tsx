"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { getBranchConfig, resolveLocaleValue } from "@/config/site";
import type { BranchKey } from "@/config/types";
import Reveal from "@/components/Reveal";
import SectionCaption from "@/components/SectionCaption";

type BranchFeaturesProps = {
  branch: BranchKey;
};

export default function BranchFeatures({ branch }: BranchFeaturesProps) {
  const { locale } = useLanguage();
  const branchConfig = getBranchConfig(branch);
  const home = branchConfig.home;
  const features = resolveLocaleValue(home.features, locale);

  return (
    <section className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="container-narrow">
        <Reveal className="mb-14 max-w-3xl sm:mb-20" as="section">
          <SectionCaption label="Features" className="mb-5" />
          <h2 className="mt-6 text-balance text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.02em] sm:text-6xl">
            {resolveLocaleValue(home.featuresTitle, locale)}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 sm:text-lg" style={{ color: "var(--color-muted)" }}>
            {resolveLocaleValue(home.featuresDescription, locale)}
          </p>
        </Reveal>

        <div className="grid grid-cols-12 gap-3 sm:gap-4">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 70} className="col-span-12 sm:col-span-4">
              <div className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-card-background)] transition-[transform,box-shadow,border-color] duration-300 ease-vanguard hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08),0_20px_40px_-12px_rgba(0,0,0,0.06)]">
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-[clamp(1.2rem,1.6vw,1.5rem)] font-bold leading-[1.15] tracking-[-0.025em]">
                    {feature.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-6" style={{ color: "var(--color-muted)" }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
