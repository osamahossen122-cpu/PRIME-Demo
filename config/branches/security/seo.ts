import type { BranchSeoConfig } from "@/config/types";

export const securitySeo = {
  home: {
    title: "Prime Security | Prime GMBH",
    description: "Professional security branch for facility protection and CCTV camera system installation.",
    path: "/security",
  },
  services: {
    title: "Security Services | Prime GMBH",
    description: "Explore the Prime GMBH security branch services for protection and CCTV work.",
    path: "/security/services",
  },
  about: {
    title: "About Prime Security | Prime GMBH",
    description: "Learn how the security branch is positioned for controlled, professional service delivery.",
    path: "/security/about",
  },
  contact: {
    title: "Contact Prime Security | Prime GMBH",
    description: "Reach the security branch for facility protection and CCTV planning requests.",
    path: "/security/contact",
  },
  book: {
    title: "Book Prime Security | Prime GMBH",
    description: "Send a booking request to the Prime Security team.",
    path: "/security/book",
  },
  whyUs: {
    title: "Why Choose Prime Security | Prime GMBH",
    description: "Learn why Prime Security is the right choice for your facility protection needs in Germany.",
    path: "/security/why-us",
  },
  serviceArea: {
    title: "Service Area | Prime Security | Prime GMBH",
    description: "Prime Security provides protection services for facilities and commercial properties across Germany.",
    path: "/security/service-area",
  },
} satisfies BranchSeoConfig;
