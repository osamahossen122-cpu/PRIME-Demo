type SectionCaptionProps = {
  number: string;
  label: string;
  className?: string;
};

export default function SectionCaption({ number, label, className }: SectionCaptionProps) {
  return (
    <div className={["flex items-baseline gap-4", className].filter(Boolean).join(" ")}>
      <span
        className="font-mono text-xs uppercase tracking-[0.22em]"
        style={{ color: "var(--color-muted)" }}
      >
        {number}
      </span>
      <span className="h-px flex-1" style={{ background: "var(--color-border)" }} />
      <span
        className="font-mono text-xs uppercase tracking-[0.22em]"
        style={{ color: "var(--color-muted)" }}
      >
        {label}
      </span>
    </div>
  );
}
