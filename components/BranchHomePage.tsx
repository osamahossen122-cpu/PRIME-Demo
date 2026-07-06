"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { getBranchConfig, resolveLocaleValue } from "@/config/site";
import type { BranchKey, BranchHomeSectionKey } from "@/config/types";
import Reveal from "@/components/Reveal";
import SectionCaption from "@/components/SectionCaption";
import BranchFeatures from "@/components/BranchFeatures";
import Services from "@/components/Services";
import BranchTrustBar from "@/components/BranchTrustBar";
import BranchOfferStrip from "@/components/BranchOfferStrip";
import BranchTestimonials from "@/components/BranchTestimonials";
import BranchFaq from "@/components/BranchFaq";
import Contact from "@/components/Contact";
import MapEmbed from "@/components/MapEmbed";
import BranchIntro from "@/components/BranchIntro";
import BranchWhyUsPreview from "@/components/BranchWhyUsPreview";
import BranchWhyUs from "@/components/BranchWhyUs";
import BranchHowItWorks from "@/components/BranchHowItWorks";
import BranchTrustSignals from "@/components/BranchTrustSignals";
import BranchServiceArea from "@/components/BranchServiceArea";

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

type ContactCellProps = {
  icon: React.ReactNode;
  eyebrow: string;
  body: string;
  href?: string;
};

function ContactCell({ icon, eyebrow, body, href }: ContactCellProps) {
  const inner = (
    <span className="flex items-start gap-3 px-5 py-5 sm:px-6 sm:py-6">
      <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-200 ease-vanguard group-hover:scale-105" style={{ background: "var(--subtle)", color: "var(--color-muted)", border: "1px solid var(--color-border)" }}>
        {icon}
      </span>
      <span className="min-w-0">
        <span className="eyebrow block">{eyebrow}</span>
        <span className="mt-1 block break-words text-[15px] font-medium">{body}</span>
      </span>
    </span>
  );

  const className = "group block transition-[background-color] duration-200 ease-vanguard hover:bg-[var(--subtle)]";
  const style = { background: "var(--color-card-background)" };

  if (href) {
    return (
      <a href={href} className={className} style={style}>
        {inner}
      </a>
    );
  }

  return (
    <div className={className} style={style}>
      {inner}
    </div>
  );
}

const heroImages: Record<BranchKey, { src: string; overlay: string }> = {
  renovation: {
    src: "/images/home/renovation-branch-hero.png",
    overlay: "linear-gradient(180deg, rgba(18,12,8,0.35) 0%, rgba(18,12,8,0.55) 50%, rgba(18,12,8,0.85) 100%)",
  },
  security: {
    src: "/images/home/security-branch-hero.png",
    overlay: "linear-gradient(180deg, rgba(5,11,19,0.30) 0%, rgba(5,11,19,0.50) 50%, rgba(5,11,19,0.85) 100%)",
  },
};

function HeroSection({ branch }: { branch: BranchKey }) {
  const { locale, t } = useLanguage();
  const branchConfig = getBranchConfig(branch);
  const home = branchConfig.home;
  const hero = heroImages[branch];

  const phoneHref = `tel:${branchConfig.phone.replace(/\s+/g, "")}`;
  const emailHref = `mailto:${branchConfig.email}`;

  return (
    <section className="relative overflow-hidden px-4 sm:px-6">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
        style={{ backgroundImage: `url(${hero.src})` }}
      />
      <div className="absolute inset-0" style={{ background: hero.overlay }} />
      <div className="container-narrow relative z-10 flex min-h-[28rem] flex-col items-center justify-start pt-28 pb-20 text-center sm:min-h-[34rem] sm:pt-32 lg:min-h-[40rem] lg:pt-36">
        <Reveal>
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.22em]" style={{ color: "var(--color-muted)" }}>
              {branchConfig.shortName} — {branchConfig.serviceAreas[0]}
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mx-auto mt-4 max-w-[28ch] whitespace-pre-line text-balance text-[clamp(1.75rem,5vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-white sm:mt-5 sm:max-w-[30ch]">
            {resolveLocaleValue(home.title, locale)}
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-balance text-base leading-7 sm:text-lg sm:leading-8" style={{ color: "var(--color-muted)" }}>
            {resolveLocaleValue(home.subtitle, locale)}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-8 flex flex-wrap gap-2.5">
            <Link href={`${branchConfig.path}/book`} className="group btn btn-primary btn-lg">
              <span>{resolveLocaleValue(home.primaryCta, locale)}</span>
              <ArrowUpRight className="btn-island h-4 w-4" />
            </Link>
            <Link
              href={`${branchConfig.path}/services`}
              className="group btn btn-lg border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <span>{resolveLocaleValue(home.secondaryCta, locale)}</span>
              <ArrowUpRight className="btn-island h-4 w-4 bg-white/20 text-white" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MapSection({ branch }: { branch: BranchKey }) {
  const { t } = useLanguage();
  const branchConfig = getBranchConfig(branch);

  return (
    <section className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="container-narrow">
        <Reveal className="mb-8 max-w-2xl" as="section">
          <SectionCaption label={t.common.findUs} className="mb-5" />
          <h2 className="text-balance text-[clamp(1.875rem,4vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.015em] sm:text-6xl">
            {branchConfig.name}
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-7" style={{ color: "var(--color-muted)" }}>
            {branchConfig.address}
          </p>
        </Reveal>
        <Reveal as="section">
          <div className="bezel-outer rounded-[1.5rem]">
            <div className="bezel-inner overflow-hidden rounded-[calc(1.5rem-1px)]">
              <MapEmbed src={branchConfig.mapEmbedUrl} title={`${branchConfig.name} map`} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const sectionComponents: Record<BranchHomeSectionKey, React.ComponentType<{ branch: BranchKey }>> = {
  hero: HeroSection,
  intro: BranchIntro,
  features: BranchFeatures,
  services: Services,
  trustSignals: BranchTrustSignals,
  whyUsPreview: BranchWhyUsPreview,
  whyUs: BranchWhyUs,
  howItWorks: BranchHowItWorks,
  testimonials: BranchTestimonials,
  faq: BranchFaq,
  contact: Contact,
  serviceArea: BranchServiceArea,
  trustBar: BranchTrustBar,
  offerStrip: BranchOfferStrip,
  map: MapSection,
};

type BranchHomePageProps = {
  branch: BranchKey;
  serviceLimit?: number;
};

export default function BranchHomePage({ branch, serviceLimit }: BranchHomePageProps) {
  const branchConfig = getBranchConfig(branch);
  const { homeSections, homeSectionsOrder } = branchConfig;

  return (
    <main>
      {homeSectionsOrder.map((sectionKey) => {
        if (!homeSections[sectionKey]) return null;
        const SectionComponent = sectionComponents[sectionKey];
        if (!SectionComponent) return null;
        return (
          <div key={sectionKey}>
            {sectionKey === "services" ? (
              <Services branch={branch} limit={serviceLimit} />
            ) : (
              <SectionComponent branch={branch} />
            )}
          </div>
        );
      })}
    </main>
  );
}
