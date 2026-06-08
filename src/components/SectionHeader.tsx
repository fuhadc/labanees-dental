"use client";

import { BoxReveal } from "@/components/BoxReveal";

export interface SectionHeaderProps {
  title: string;
  withDivider?: boolean;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeader({
  title,
  withDivider = true,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  return (
    <BoxReveal
      origin="bottom"
      className={`content-padding ${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      <h2
        className="font-serif text-[length:var(--text-section)] font-medium tracking-tight text-white italic"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {title}
      </h2>
      {withDivider && (
        <div
          className={`mt-6 h-px w-32 bg-gradient-to-r from-transparent via-[var(--accent-warm)] to-transparent ${align === "center" ? "mx-auto" : ""}`}
          aria-hidden
        />
      )}
    </BoxReveal>
  );
}
