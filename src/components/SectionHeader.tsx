"use client";

import { BoxReveal } from "@/components/BoxReveal";

export interface SectionHeaderProps {
  title: string;
  eyebrow?: string;
  withDivider?: boolean;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeader({
  title,
  eyebrow,
  withDivider = true,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "" : "section-heading-block--left";

  return (
    <BoxReveal
      origin="bottom"
      framed={false}
      accent={false}
      className={`page-container pt-[var(--space-section-y)] pb-8 ${className}`}
    >
      <div className={`section-heading-block ${alignClass}`}>
        <h2 className="section-heading">{title}</h2>
        {withDivider && <div className="section-heading-divider" aria-hidden />}
        {eyebrow ? <p className="section-heading-eyebrow">{eyebrow}</p> : null}
      </div>
    </BoxReveal>
  );
}
