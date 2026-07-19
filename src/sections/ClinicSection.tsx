"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { CLINIC_GALLERY } from "@/lib/clinic-images";

const DEFAULT_FALLBACK_IMAGE = "/placeholder-dental.svg";

function wrapIndex(index: number, total: number) {
  return ((index % total) + total) % total;
}

function GalleryImage({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      draggable={false}
      onError={(e) => {
        const img = e.currentTarget;
        if (img.dataset.fallbackApplied === "true") return;
        img.dataset.fallbackApplied = "true";
        img.src = DEFAULT_FALLBACK_IMAGE;
      }}
      className={className}
    />
  );
}

export default function ClinicSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduced = useReducedMotion();
  const total = CLINIC_GALLERY.length;

  const goTo = useCallback(
    (index: number) => setActiveIndex(wrapIndex(index, total)),
    [total],
  );

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  const active = CLINIC_GALLERY[activeIndex];
  const prev = CLINIC_GALLERY[wrapIndex(activeIndex - 1, total)];
  const next = CLINIC_GALLERY[wrapIndex(activeIndex + 1, total)];

  return (
    <section aria-label="Our clinic interior" className="sanctuary-section bg-transparent">
      <SectionHeader
        title="The Sanctuary"
        eyebrow="Refining the patient experience"
        withDivider
      />

      <div className="sanctuary-stage">
        {/* Tabs */}
        <div className="sanctuary-tabs-wrap">
          <div className="sanctuary-tabs" role="tablist" aria-label="Clinic spaces">
            {CLINIC_GALLERY.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                role="tab"
                aria-selected={i === activeIndex}
                aria-controls="sanctuary-panel"
                id={`sanctuary-tab-${i}`}
                onClick={() => goTo(i)}
                className={`sanctuary-tab ${i === activeIndex ? "is-active" : ""}`}
              >
                {photo.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery viewport */}
        <div className="sanctuary-carousel">
          <div className="sanctuary-ambient" aria-hidden />

          <div className="sanctuary-layout">
            {/* Side preview — desktop only */}
            <button
              type="button"
              className="sanctuary-side sanctuary-side--prev"
              onClick={goPrev}
              aria-label={`Previous: ${prev.label}`}
            >
              <div className="sanctuary-side-frame">
                <GalleryImage src={prev.src} alt={prev.alt} className="sanctuary-side-img" />
              </div>
              <span className="sanctuary-side-label">{prev.label}</span>
            </button>

            {/* Main active slide */}
            <div
              id="sanctuary-panel"
              role="tabpanel"
              aria-labelledby={`sanctuary-tab-${activeIndex}`}
              className="sanctuary-main"
            >
              <button
                type="button"
                className="sanctuary-arrow sanctuary-arrow--prev"
                onClick={goPrev}
                aria-label="Previous space"
              >
                ‹
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.src}
                  initial={reduced ? false : { opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduced ? undefined : { opacity: 0, scale: 0.98 }}
                  transition={{ duration: reduced ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="sanctuary-main-frame"
                >
                  <GalleryImage
                    src={active.src}
                    alt={active.alt}
                    priority
                    className="sanctuary-main-img"
                  />
                </motion.div>
              </AnimatePresence>

              <button
                type="button"
                className="sanctuary-arrow sanctuary-arrow--next"
                onClick={goNext}
                aria-label="Next space"
              >
                ›
              </button>
            </div>

            {/* Side preview — desktop only */}
            <button
              type="button"
              className="sanctuary-side sanctuary-side--next"
              onClick={goNext}
              aria-label={`Next: ${next.label}`}
            >
              <div className="sanctuary-side-frame">
                <GalleryImage src={next.src} alt={next.alt} className="sanctuary-side-img" />
              </div>
              <span className="sanctuary-side-label">{next.label}</span>
            </button>
          </div>

          {/* Footer: counter + dots + caption */}
          <div className="sanctuary-footer">
            <p className="sanctuary-counter" aria-hidden>
              {String(activeIndex + 1).padStart(2, "0")}
              <span className="sanctuary-counter-sep"> / </span>
              {String(total).padStart(2, "0")}
            </p>

            <div className="sanctuary-dots" role="group" aria-label="Gallery slides">
              {CLINIC_GALLERY.map((photo, i) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to ${photo.label}`}
                  aria-current={i === activeIndex ? "true" : undefined}
                  className={`sanctuary-dot ${i === activeIndex ? "is-active" : ""}`}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={active.label}
                initial={reduced ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="sanctuary-caption"
              >
                {active.label}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
