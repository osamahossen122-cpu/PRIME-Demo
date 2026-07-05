import type { BranchKey } from "@/config/types";

type BrandLogoVariant = "prime" | BranchKey;
type BrandLogoSize = "homeNav" | "branchNav" | "footer" | "section";

type BrandLogoProps = {
  variant: BrandLogoVariant;
  size?: BrandLogoSize;
  priority?: boolean;
  className?: string;
};

const logoMap: Record<BrandLogoVariant, { src: string; alt: string }> = {
  prime: {
    src: "/images/logo-prime.svg",
    alt: "Prime GMBH",
  },
  renovation: {
    src: "/images/logo-bau.svg",
    alt: "Prime BAU",
  },
  security: {
    src: "/images/logo-sec.svg",
    alt: "Prime SEC",
  },
};

const sizeClasses: Record<BrandLogoSize, string> = {
  homeNav: "h-12 sm:h-14 lg:h-16 w-auto",
  branchNav: "h-12 sm:h-14 lg:h-16 w-auto",
  footer: "h-24 sm:h-28 w-auto",
  section: "h-7 sm:h-8 w-auto",
};

export default function BrandLogo({ variant, size = "homeNav", priority = false, className = "" }: BrandLogoProps) {
  const logo = logoMap[variant];

  return (
    <span className={`block shrink-0 ${sizeClasses[size]} ${className}`.trim()}>
      <img
        src={logo.src}
        alt={logo.alt}
        className="h-full w-auto"
        loading={priority ? "eager" : "lazy"}
      />
    </span>
  );
}
