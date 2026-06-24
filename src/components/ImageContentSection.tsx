"use client";

import { BoxReveal } from "@/components/BoxReveal";
import ScrollParallax from "@/components/ScrollParallax";
import type { BoxOrigin } from "@/lib/motion";

export interface ImageContentSectionProps {
  heading: string;
  description: string;
  items: string[];
  imageSrc: string;
  imageFallbackSrc?: string;
  imageAlt: string;
  imageFirst?: boolean;
  id?: string;
  sectionIndex?: number;
}

const DEFAULT_FALLBACK_IMAGE = "/placeholder-dental.svg";

export default function ImageContentSection({
  heading,
  description,
  items,
  imageSrc,
  imageFallbackSrc,
  imageAlt,
  imageFirst = true,
  id,
  sectionIndex = 0,
}: ImageContentSectionProps) {
  const fallback = imageFallbackSrc ?? DEFAULT_FALLBACK_IMAGE;
  const imageOrigin: BoxOrigin = imageFirst ? "left" : "right";
  const contentOrigin: BoxOrigin = imageFirst ? "right" : "left";

  const contentBlock = (
    <BoxReveal
      origin={contentOrigin}
      delay={sectionIndex * 0.06}
      className="box-inner-padding flex h-full min-h-[280px] flex-col justify-center md:min-h-[420px]"
    >
      <h3
        className="font-serif text-3xl font-medium tracking-tight text-white italic md:text-5xl"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {heading}
      </h3>
      <div className="mt-6 h-px w-16 bg-[var(--accent-warm)]" />
      <p
        className="mt-10 max-w-md text-base font-light leading-relaxed text-white/50 md:text-lg"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        {description}
      </p>
      {items.length > 0 && (
        <ul className="mt-10 space-y-4">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-4 text-sm font-light text-white/40"
            >
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-warm)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </BoxReveal>
  );

  const imageBlock = (
    <ScrollParallax distance={24} className="h-full min-h-[280px] md:min-h-[420px]">
      <BoxReveal
        origin={imageOrigin}
        delay={sectionIndex * 0.06 + 0.05}
        className="group relative h-full min-h-[280px] overflow-hidden p-0 md:min-h-[420px]"
        framed
      >
        <img
        src={imageSrc}
        alt={imageAlt}
        loading="lazy"
        onError={(e) => {
          const img = e.currentTarget;
          if (img.dataset.fallbackApplied === "true") return;
          img.dataset.fallbackApplied = "true";
          img.src = fallback;
        }}
        className="h-full min-h-[280px] w-full object-cover object-center grayscale transition-[filter,transform] duration-500 group-hover:scale-[1.02] group-hover:grayscale-0 md:min-h-[420px]"
      />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)]/50 via-transparent to-transparent" />
      </BoxReveal>
    </ScrollParallax>
  );

  return (
    <section
      id={id}
      className="page-container grid grid-cols-1 gap-6 py-12 md:grid-cols-2 md:items-stretch md:py-16"
    >
      {imageFirst ? (
        <>
          {imageBlock}
          {contentBlock}
        </>
      ) : (
        <>
          {contentBlock}
          {imageBlock}
        </>
      )}
    </section>
  );
}
