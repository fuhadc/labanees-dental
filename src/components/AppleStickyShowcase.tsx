"use client";

import { useEffect, useEffectEvent, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CLINIC_PHOTOS } from "@/lib/clinic-images";
import { EASE_SFLOW } from "@/lib/apple-scroll";

const slides = [
  {
    title: "A Warm Welcome",
    body: "Step into our Muscat reception — refined interiors, calm lighting, and a team ready to greet you from the moment you arrive.",
    image: CLINIC_PHOTOS.reception.src,
    alt: CLINIC_PHOTOS.reception.alt,
  },
  {
    title: "Quiet Comfort",
    body: "Unwind in our waiting lounge — spacious seating, soft light, and a serene atmosphere designed around your peace of mind.",
    image: CLINIC_PHOTOS.waitingLounge.src,
    alt: CLINIC_PHOTOS.waitingLounge.alt,
  },
  {
    title: "The Labanees Experience",
    body: "Our flagship lobby reflects the standard we bring to every treatment — precision, artistry, and quiet luxury throughout.",
    image: CLINIC_PHOTOS.lobby.src,
    alt: CLINIC_PHOTOS.lobby.alt,
  },
] as const;

const AUTO_MS = 6500;

export default function AppleStickyShowcase() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useEffectEvent((index: number) => {
    setActive((index + slides.length) % slides.length);
  });

  useEffect(() => {
    if (reduced || paused) return;
    const id = window.setInterval(() => goTo(active + 1), AUTO_MS);
    return () => window.clearInterval(id);
  }, [active, paused, reduced]);

  const slide = slides[active];

  return (
    <section
      aria-label="The Labanees Standard"
      className="relative overflow-hidden bg-transparent"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[70%] bg-[radial-gradient(ellipse_90%_55%_at_50%_15%,rgba(212,175,55,0.1),transparent_65%)]"
        aria-hidden
      />

      <div className="page-container relative z-10 section-padding-y">
        {/* Section header — always visible */}
        <header className="mx-auto max-w-3xl text-center">
          <p
            className="font-display text-[10px] uppercase tracking-[0.45em] text-[var(--accent-warm)] md:text-[11px]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            The Labanees Standard
          </p>
          <h2
            className="mt-5 font-serif text-[clamp(1.85rem,3.5vw+0.75rem,3.75rem)] font-medium italic leading-[1.1] text-white text-balance md:mt-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Crafted like a flagship experience.
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-[var(--accent-warm)]/70" />
        </header>

        {/* Experience stage */}
        <div className="mt-12 grid items-stretch gap-8 lg:mt-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10 xl:gap-14">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-[var(--bg-dark-panel)] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[420px] xl:min-h-[480px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={slide.image}
                src={slide.image}
                alt={slide.alt}
                className="absolute inset-0 h-full w-full object-cover"
                initial={reduced ? false : { opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduced ? undefined : { opacity: 0, scale: 0.98 }}
                transition={{ duration: reduced ? 0 : 0.7, ease: EASE_SFLOW }}
                draggable={false}
              />
            </AnimatePresence>
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20"
              aria-hidden
            />
            <span
              className="pointer-events-none absolute left-0 top-0 h-px w-10 bg-[var(--accent-warm)]"
              aria-hidden
            />
            <span
              className="pointer-events-none absolute left-0 top-0 h-10 w-px bg-[var(--accent-warm)]"
              aria-hidden
            />
            <p className="absolute bottom-5 left-5 font-display text-[10px] uppercase tracking-[0.35em] text-white/80 md:bottom-6 md:left-6">
              0{active + 1} / 0{slides.length}
            </p>
          </div>

          {/* Copy + step controls */}
          <div className="flex min-h-0 flex-col justify-between gap-8 border border-white/10 bg-[var(--bg-dark-panel)] px-6 py-7 sm:px-8 sm:py-9 lg:px-9 lg:py-10">
            <div className="relative min-h-[9.5rem] sm:min-h-[10.5rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.title}
                  initial={reduced ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: reduced ? 0 : 0.45, ease: EASE_SFLOW }}
                >
                  <p className="font-display text-[10px] uppercase tracking-[0.4em] text-[var(--accent-warm)]/80">
                    0{active + 1}
                  </p>
                  <h3
                    className="mt-3 font-serif text-[clamp(1.6rem,2vw+0.9rem,2.5rem)] italic leading-tight text-white"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {slide.title}
                  </h3>
                  <p
                    className="mt-4 max-w-md text-sm font-light leading-relaxed text-white/60 sm:text-base"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {slide.body}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div
              className="flex flex-col gap-1 border-t border-white/8 pt-6"
              role="tablist"
              aria-label="Clinic experiences"
            >
              {slides.map((item, index) => {
                const isActive = index === active;
                return (
                  <button
                    key={item.title}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => goTo(index)}
                    className={`group flex w-full items-center gap-4 px-1 py-3 text-left transition-colors duration-300 ${
                      isActive ? "text-white" : "text-white/40 hover:text-white/70"
                    }`}
                  >
                    <span
                      className={`font-display text-[10px] tracking-[0.3em] transition-colors duration-300 ${
                        isActive ? "text-[var(--accent-warm)]" : "text-white/25 group-hover:text-white/45"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <span
                      className={`font-serif text-lg italic transition-colors duration-300 sm:text-xl ${
                        isActive ? "text-white" : ""
                      }`}
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {item.title}
                    </span>
                    <span
                      className={`ml-auto h-px flex-1 max-w-[4rem] origin-right transition-all duration-500 ${
                        isActive
                          ? "scale-x-100 bg-[var(--accent-warm)]"
                          : "scale-x-50 bg-white/10 group-hover:bg-white/25"
                      }`}
                      aria-hidden
                    />
                  </button>
                );
              })}
            </div>

            {/* Progress bar for auto-advance */}
            <div className="h-px w-full overflow-hidden bg-white/10" aria-hidden>
              {!reduced && (
                <motion.div
                  key={`${active}-${paused}`}
                  className="h-full bg-[var(--accent-warm)]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: paused ? 0 : 1 }}
                  transition={
                    paused
                      ? { duration: 0.2 }
                      : { duration: AUTO_MS / 1000, ease: "linear" }
                  }
                  style={{ transformOrigin: "left center" }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
