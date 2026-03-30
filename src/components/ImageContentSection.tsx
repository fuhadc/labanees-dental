"use client";

/**
 * ImageContentSection — Alternating image + text (services / orthodontics).
 * Enhanced: card-style shadow, subtle image overlay, hover lift, elegant typography.
 */

export interface ImageContentSectionProps {
  /** Section heading (e.g. "GENERAL DENTISTRY") */
  heading: string;
  /** Short intro paragraph */
  description: string;
  /** Bullet list items */
  items: string[];
  /** Image src (URL or path from /public) */
  imageSrc: string;
  /** Optional fallback if `imageSrc` fails to load */
  imageFallbackSrc?: string;
  /** Image alt text */
  imageAlt: string;
  /** true = image left, text right; false = text left, image right */
  imageFirst?: boolean;
  /** Optional section id for anchor */
  id?: string;
}

const DEFAULT_FALLBACK_IMAGE =
  "/placeholder-dental.svg";

export default function ImageContentSection({
  heading,
  description,
  items,
  imageSrc,
  imageFallbackSrc,
  imageAlt,
  imageFirst = true,
  id,
}: ImageContentSectionProps) {
  const fallback = imageFallbackSrc ?? DEFAULT_FALLBACK_IMAGE;

  const contentBlock = (
    <div
      className="content-block-hover flex min-h-[300px] flex-col justify-center bg-[var(--bg-dark-panel)] px-6 py-10 md:min-h-[400px] md:px-12 md:py-16"
    >
      <h3
        className="font-serif text-xl font-semibold tracking-[var(--tracking-heading)] text-white md:text-2xl"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {heading}
      </h3>
      <p
        className="mt-4 text-[length:var(--text-body)] font-light text-white/95"
        style={{ lineHeight: "var(--leading-relaxed)" }}
      >
        {description}
      </p>
      {items.length > 0 && (
        <ul className="mt-6 space-y-2.5">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-[length:var(--text-body)] font-light text-white/90"
              style={{ lineHeight: "var(--leading-relaxed)" }}
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  const imageBlock = (
    <div className="group relative min-h-[260px] w-full overflow-hidden bg-[var(--bg-charcoal)] md:min-h-[400px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageSrc}
        alt={imageAlt}
        loading="lazy"
        decoding="async"
        onError={(e) => {
          // Avoid infinite loops if the fallback also fails.
          const img = e.currentTarget;
          if (img.dataset.fallbackApplied === "true") return;
          img.dataset.fallbackApplied = "true";
          img.src = fallback;
        }}
        className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        style={{ transitionDuration: "var(--transition-hover)" }}
      />
      {/* Subtle overlay for depth (reference: image overlays on service cards) */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"
        aria-hidden
      />
    </div>
  );

  return (
    <section
      id={id}
      className="card-hover group/card grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl border border-[var(--border-subtle)] shadow-card"
      aria-labelledby={id ? `heading-${id}` : undefined}
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
