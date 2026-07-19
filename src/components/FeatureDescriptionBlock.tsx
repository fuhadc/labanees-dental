"use client";

import { BoxReveal, BoxRevealItem, BoxRevealStagger } from "@/components/BoxReveal";

export interface FeatureDescriptionBlockProps {
  heading: string;
  description: string;
  items?: string[];
  id?: string;
  className?: string;
}

export default function FeatureDescriptionBlock({
  heading,
  description,
  items = [],
  id,
  className = "",
}: FeatureDescriptionBlockProps) {
  return (
    <section
      className={`page-container py-[clamp(2rem,5.5vh,5.5rem)] ${className}`}
    >
      <div className="flex flex-col gap-[clamp(1.25rem,3.5vh,2.5rem)]">
        <BoxReveal
          origin="bottom"
          className="flex flex-col items-center px-[clamp(1.25rem,3vw,2.5rem)] py-[clamp(1.5rem,4vh,2.75rem)] text-center"
        >
          <h2
            id={id ? `block-heading-${id}` : undefined}
            className="font-serif text-[clamp(1.85rem,2.2vw+1.4rem,4.25rem)] font-medium tracking-tight text-white italic leading-[1.15]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {heading}
          </h2>
          <div className="mt-[clamp(0.85rem,2vh,1.75rem)] h-px w-[120px] bg-gradient-to-r from-transparent via-[var(--accent-warm)] to-transparent" />
          <p
            className="mt-[clamp(1rem,2.5vh,2rem)] max-w-3xl text-[clamp(0.95rem,0.4vw+0.85rem,1.2rem)] font-light leading-relaxed tracking-wide text-white/70 italic"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {description}
          </p>
        </BoxReveal>

        {items.length > 0 && (
          <BoxRevealStagger
            className={`grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 ${
              items.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
            }`}
          >
            {items.map((item) => (
              <BoxRevealItem
                key={item}
                stagger
                className="flex flex-col items-center gap-3 px-[clamp(1rem,2vw,1.5rem)] py-[clamp(1.1rem,2.5vh,1.75rem)] text-center"
              >
                <div className="h-px w-10 bg-[var(--accent-warm)]/50" />
                <span className="text-[11px] font-light uppercase tracking-[0.3em] text-white/65">
                  {item}
                </span>
              </BoxRevealItem>
            ))}
          </BoxRevealStagger>
        )}
      </div>
    </section>
  );
}
