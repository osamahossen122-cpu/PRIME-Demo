import Image from "next/image";
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
  homeNav: "h-12 w-auto sm:h-14 lg:h-16",
  branchNav: "h-12 w-auto sm:h-14 lg:h-16",
  footer: "h-24 w-auto sm:h-28",
  section: "h-7 w-auto sm:h-8",
};

export default function BrandLogo({ variant, size = "homeNav", priority = false, className = "" }: BrandLogoProps) {
  const logo = logoMap[variant];

  return (
    <span className={`relative block shrink-0 ${sizeClasses[size]} ${className}`.trim()}>
      <Image
        fill
        src={logo.src}
        alt={logo.alt}
        priority={priority}
        quality={100}
        sizes="(max-width: 640px) 48px, (max-width: 1024px) 56px, 64px"
        className="object-contain object-left"
      />
    </span>
  );
}
