import type { Metadata } from "next";
import type { BranchSeoPage } from "./types";

function normalizeSiteUrl(value?: string) {
  if (!value) return "http://localhost:3000";

  const trimmed = value.trim();
  if (!trimmed) return "http://localhost:3000";
  if (/^https?:\/\//i.test(trimmed)) return trimmed.replace(/\/$/, "");

  return `https://${trimmed.replace(/\/$/, "")}`;
}

export const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL
);

export function getAbsoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function buildMetadata(page: BranchSeoPage, siteName = "Prime GMBH"): Metadata {
  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: getAbsoluteUrl(page.path),
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: getAbsoluteUrl(page.path),
      siteName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

export function buildServiceMetadata(
  path: string,
  title: string,
  description: string,
  siteName = "Prime GMBH"
): Metadata {
  return buildMetadata({ path, title, description }, siteName);
}
