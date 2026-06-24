"use client";

import { BoxReveal } from "@/components/BoxReveal";

interface SectionDividerProps {
  label?: string;
}

export default function SectionDivider({ label }: SectionDividerProps) {
  return (
    <BoxReveal
      origin="center"
      framed={false}
      accent={false}
      className="flex items-center justify-center py-8 md:py-10"
    >
      <div className="page-container flex w-full items-center justify-center">
        <div className="absolute left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-[var(--accent-warm)]/35 to-transparent" />
        {label && (
          <span
            className="relative z-10 bg-[var(--bg-dark)] px-5 font-display text-[9px] uppercase tracking-[0.5em] text-[var(--accent-warm)]/60"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {label}
          </span>
        )}
      </div>
    </BoxReveal>
  );
}
