import type { CSSProperties } from "react";

export const themeConfig = {
  prime: {
    page: "#f6f1e7",
    surface: "#ffffff",
    surfaceStrong: "#f0e7d6",
    text: "#12141a",
    muted: "#6d7380",
    border: "rgba(18, 20, 26, 0.12)",
    accent: "#b58a36",
    accentStrong: "#d3b06a",
    accentForeground: "#12141a",
    tint: "#ebe0ca",
  },
  renovation: {
    page: "#17110d",
    surface: "#221913",
    surfaceStrong: "#2c2119",
    text: "#f5ede4",
    muted: "#b8a99a",
    border: "rgba(247, 221, 198, 0.12)",
    accent: "#d67a31",
    accentStrong: "#f09b55",
    accentForeground: "#17110d",
    tint: "#33251c",
  },
  security: {
    page: "#0c1017",
    surface: "#121926",
    surfaceStrong: "#182131",
    text: "#f3f6fb",
    muted: "#98a4b8",
    border: "rgba(164, 180, 204, 0.16)",
    accent: "#98a9bc",
    accentStrong: "#c0cede",
    accentForeground: "#0c1017",
    tint: "#1c2535",
  },
} as const;

export type ThemeConfig = typeof themeConfig;

export function getThemeVariables(themeName: keyof ThemeConfig) {
  const theme = themeConfig[themeName];

  return {
    "--page-bg": theme.page,
    "--surface": theme.surface,
    "--surface-strong": theme.surfaceStrong,
    "--theme-text": theme.text,
    "--muted-text": theme.muted,
    "--theme-border": theme.border,
    "--accent": theme.accent,
    "--accent-strong": theme.accentStrong,
    "--accent-foreground": theme.accentForeground,
    "--tint": theme.tint,
    "--background": theme.page,
    "--foreground": theme.text,
    "--color-primary": theme.accent,
    "--color-primary-foreground": theme.accentForeground,
    "--color-muted": theme.muted,
    "--color-border": theme.border,
    "--color-card-background": theme.surface,
  } as CSSProperties;
}
