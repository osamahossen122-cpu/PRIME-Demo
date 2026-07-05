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
    src: "/HOME-LOGO.png",
    alt: "Prime GMBH",
  },
  renovation: {
    src: "/LOGO-BAU.png",
    alt: "Prime BAU",
  },
  security: {
    src: "/LOGO-SEC.png",
    alt: "Prime SEC",
  },
};

const sizeClasses: Record<BrandLogoSize, string> = {
  homeNav: "h-12 w-[8.5rem] sm:h-14 sm:w-[10rem] lg:h-16 lg:w-[11.5rem]",
  branchNav: "h-12 w-[8.5rem] sm:h-14 sm:w-[10rem] lg:h-16 lg:w-[11.5rem]",
  footer: "h-24 w-[13rem] sm:h-28 sm:w-[15rem]",
  section: "h-7 w-[5.4rem] sm:h-8 sm:w-[6rem]",
};

export default function BrandLogo({ variant, size = "homeNav", priority = false, className = "" }: BrandLogoProps) {
  const logo = logoMap[variant];

  return (
    <span className={`relative block shrink-0 ${sizeClasses[size]} ${className}`.trim()}>
      <Image fill src={logo.src} alt={logo.alt} priority={priority} sizes="(max-width: 640px) 92px, 128px" className="object-contain object-left" />
    </span>
  );
}
