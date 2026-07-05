"use client";

import { useState } from "react";

type MapEmbedProps = {
  src: string;
  title: string;
};

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export default function MapEmbed({ src, title }: MapEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={src}
        title={title}
        className="h-80 w-full sm:h-96"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <button
      type="button"
      className="group flex h-64 w-full flex-col items-center justify-center gap-2 px-6 text-center transition-[background-color] duration-200 ease-vanguard hover:bg-[var(--subtle)] sm:h-80"
      onClick={() => setLoaded(true)}
      style={{ background: "var(--color-card-background)" }}
    >
      <span className="eyebrow">Interactive map</span>
      <span className="mt-1 text-[15px] font-medium">{title}</span>
      <span className="text-xs" style={{ color: "var(--color-muted)" }}>
        Click to load the map
      </span>
      <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium" style={{ color: "var(--theme-text)" }}>
        <span>Open</span>
        <ArrowUpRight className="btn-island h-4 w-4" />
      </span>
    </button>
  );
}
