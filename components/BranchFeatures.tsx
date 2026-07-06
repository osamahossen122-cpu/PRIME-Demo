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
  const { locale, t } = useLanguage();
  const branchConfig = getBranchConfig(branch);
  const home = branchConfig.home;
  const features = resolveLocaleValue(home.features, locale);

  return (
    <section className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="container-narrow">
        <Reveal className="mb-14 max-w-3xl sm:mb-20" as="section">
          <SectionCaption label={t.common.features} className="mb-5" />
          <h2 className="mt-6 text-balance text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.02em] sm:text-6xl">
            {resolveLocaleValue(home.featuresTitle, locale)}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 sm:text-lg" style={{ color: "var(--color-muted)" }}>
            {resolveLocaleValue(home.featuresDescription, locale)}
          </p>
        </Reveal>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 70}>
              <li className="flex flex-col gap-3">
                <h3 className="text-[clamp(1.1rem,1.5vw,1.35rem)] font-bold leading-[1.15] tracking-[-0.025em]">
                  {feature.title}
                </h3>
                <p className="text-[14px] leading-6" style={{ color: "var(--color-muted)" }}>
                  {feature.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
