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
    src: "/images/clean-logo.png",
    alt: "Prime GMBH",
  },
  renovation: {
    src: "/images/clean-bau.png",
    alt: "Prime BAU",
  },
  security: {
    src: "/images/clean-sec.png",
    alt: "Prime SEC",
  },
};

const sizeStyles: Record<BrandLogoSize, { wrapper: string; sizes: string }> = {
  homeNav: {
    wrapper: "relative h-12 w-12 shrink-0 sm:h-14 sm:w-14 lg:h-16 lg:w-16",
    sizes: "(max-width: 640px) 3rem, (max-width: 1024px) 3.5rem, 4rem",
  },
  branchNav: {
    wrapper: "relative h-12 w-12 shrink-0 sm:h-14 sm:w-14 lg:h-16 lg:w-16",
    sizes: "(max-width: 640px) 3rem, (max-width: 1024px) 3.5rem, 4rem",
  },
  footer: {
    wrapper: "relative h-14 w-14 shrink-0 sm:h-16 sm:w-16 lg:h-20 lg:w-20",
    sizes: "(max-width: 640px) 3.5rem, (max-width: 1024px) 4rem, 5rem",
  },
  section: {
    wrapper: "relative h-20 w-20 shrink-0 sm:h-24 sm:w-24 lg:h-28 lg:w-28",
    sizes: "(max-width: 640px) 5rem, (max-width: 1024px) 6rem, 7rem",
  },
};

export default function BrandLogo({ variant, size = "homeNav", priority = false, className = "" }: BrandLogoProps) {
  const logo = logoMap[variant];
  const styles = sizeStyles[size];

  return (
    <span className={`inline-flex shrink-0 items-center ${styles.wrapper} ${className}`.trim()}>
      <Image
        src={logo.src}
        alt={logo.alt}
        fill
        sizes={styles.sizes}
        className="logo-light object-contain mix-blend-multiply"
        draggable={false}
        priority={priority}
      />
      <Image
        src={logo.src}
        alt={logo.alt}
        fill
        sizes={styles.sizes}
        className="logo-dark object-contain mix-blend-screen invert"
        draggable={false}
        priority={priority}
      />
    </span>
  );
}
