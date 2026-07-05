"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  once?: boolean;
  rootMargin?: string;
  as?: "div" | "span" | "section" | "article";
  className?: string;
  style?: CSSProperties;
};

export default function Reveal({
  children,
  delay = 0,
  once = true,
  rootMargin = "0px 0px -8% 0px",
  as = "div",
  className,
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      Promise.resolve().then(() => setRevealed(true));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (delay > 0) {
              const timer = window.setTimeout(() => setRevealed(true), delay);
              observer.disconnect();
              return () => window.clearTimeout(timer);
            }
            setRevealed(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setRevealed(false);
          }
        }
      },
      { rootMargin, threshold: 0.05 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay, once, rootMargin]);

  const combinedClassName = ["reveal", className].filter(Boolean).join(" ");
  const data: Record<string, string> = {};
  if (revealed) data["data-revealed"] = "true";

  if (as === "section") {
    return (
      <section ref={ref as React.RefObject<HTMLElement>} className={combinedClassName} style={style} {...data}>
        {children}
      </section>
    );
  }
  if (as === "article") {
    return (
      <article ref={ref as React.RefObject<HTMLElement>} className={combinedClassName} style={style} {...data}>
        {children}
      </article>
    );
  }
  if (as === "span") {
    return (
      <span ref={ref as React.RefObject<HTMLSpanElement>} className={combinedClassName} style={style} {...data}>
        {children}
      </span>
    );
  }
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={combinedClassName} style={style} {...data}>
      {children}
    </div>
  );
}
