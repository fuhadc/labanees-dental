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
      id={id}
      className={`section-padding-x section-padding-y ${className}`}
      aria-labelledby={id ? `block-heading-${id}` : undefined}
    >
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <BoxReveal
          origin="bottom"
          className="flex flex-col items-center px-8 py-16 text-center md:px-16 md:py-24"
        >
          <h2
            id={id ? `block-heading-${id}` : undefined}
            className="font-serif text-4xl font-medium tracking-tight text-white italic md:text-5xl lg:text-7xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {heading}
          </h2>
          <div className="mt-10 h-px w-[120px] bg-gradient-to-r from-transparent via-[var(--accent-warm)] to-transparent" />
          <p
            className="mt-12 max-w-3xl text-lg font-light leading-relaxed tracking-wide text-white/40 italic md:text-xl"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {description}
          </p>
        </BoxReveal>

        {items.length > 0 && (
          <BoxRevealStagger className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {items.map((item, i) => (
              <BoxRevealItem
                key={item}
                stagger
                className="flex flex-col items-center gap-6 px-6 py-10 text-center"
              >
                <div className="h-px w-10 bg-[var(--accent-warm)]/50" />
                <span className="text-[10px] font-light uppercase tracking-[0.3em] text-white/30">
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
