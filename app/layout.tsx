import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import { siteConfig } from "@/config/site";
import { getAbsoluteUrl, siteUrl } from "@/config/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteConfig.brand,
  description: siteConfig.home.seo.description,
  alternates: {
    canonical: getAbsoluteUrl("/"),
  },
  openGraph: {
    title: siteConfig.home.seo.title,
    description: siteConfig.home.seo.description,
    url: getAbsoluteUrl("/"),
    siteName: siteConfig.brand,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.home.seo.title,
    description: siteConfig.home.seo.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={siteConfig.locales.active} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
