"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CLINIC_PHOTOS } from "@/lib/clinic-images";
import { EASE_SFLOW } from "@/lib/apple-scroll";

const clinicSlides = [
  {
    number: "01",
    tagline: "A WARM WELCOME",
    heading: "Main Reception & Concierge Desk",
    image: CLINIC_PHOTOS.receptionMain.src,
    alt: CLINIC_PHOTOS.receptionMain.alt,
  },
  {
    number: "02",
    tagline: "CLINICAL EXCELLENCE",
    heading: "Advanced Treatment Suite",
    image: CLINIC_PHOTOS.treatmentSuite.src,
    alt: CLINIC_PHOTOS.treatmentSuite.alt,
  },
  {
    number: "03",
    tagline: "PRECISION SURGERY",
    heading: "State-of-the-Art Operating Room",
    image: CLINIC_PHOTOS.operatingRoom.src,
    alt: CLINIC_PHOTOS.operatingRoom.alt,
  },
  {
    number: "04",
    tagline: "LUXURY AMBIANCE",
    heading: "Illuminated Lobby & Botanical Wall",
    image: CLINIC_PHOTOS.planterLobby.src,
    alt: CLINIC_PHOTOS.planterLobby.alt,
  },
  {
    number: "05",
    tagline: "CONSULTATION SUITE",
    heading: "Private Doctor Consultation Room",
    image: CLINIC_PHOTOS.consultationSuite.src,
    alt: CLINIC_PHOTOS.consultationSuite.alt,
  },
  {
    number: "06",
    tagline: "PATIENT LOUNGE",
    heading: "Serene Waiting Lounge",
    image: CLINIC_PHOTOS.waitingLoungeArea.src,
    alt: CLINIC_PHOTOS.waitingLoungeArea.alt,
  },
] as const;

const AUTOPLAY_MS = 4800;

export default function AppleStickyShowcase() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);
  const touchStartRef = useRef<number | null>(null);

  const total = clinicSlides.length;

  const goTo = useCallback(
    (index: number) => {
      setActive(((index % total) + total) % total);
    },
    [total]
  );

  const goNext = useCallback(() => goTo(active + 1), [active, goTo]);
  const goPrev = useCallback(() => goTo(active - 1), [active, goTo]);

  // Tab visibility listener
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(!document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Autoplay timer
  useEffect(() => {
    if (reduced || paused || !isTabVisible) return;
    const interval = setInterval(() => {
      goNext();
    }, AUTOPLAY_MS);
    return () => clearInterval(interval);
  }, [goNext, paused, reduced, isTabVisible]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartRef.current === null) return;
    const diff = touchStartRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) goNext();
      else goPrev();
    }
    touchStartRef.current = null;
  };

  const currentSlide = clinicSlides[active];
  const prevIndex = (active - 1 + total) % total;
  const nextIndex = (active + 1) % total;

  return (
    <section
      aria-label="Inside the Clinic Gallery"
      className="relative overflow-hidden bg-transparent py-8 sm:py-12 md:py-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 h-[350px] -translate-y-1/2 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(197,160,89,0.08),transparent_70%)]"
        aria-hidden
      />

      <div className="page-container relative z-10 px-3 sm:px-6">
        {/* Section Header */}
        <header className="mx-auto max-w-3xl text-center">
          <p
            className="font-display text-[11px] uppercase tracking-[0.45em] text-[var(--accent-warm)] font-semibold"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            INSIDE THE CLINIC
          </p>
          <div className="mx-auto mt-2.5 h-px w-16 bg-gradient-to-r from-transparent via-[var(--accent-warm)]/80 to-transparent" />
        </header>

        {/* Gallery Carousel Container */}
        <div className="mt-5 sm:mt-7 md:mt-8">
          {/* Main Stage: Carousel with Peek Side Cards */}
          <div
            className="relative flex items-center justify-center overflow-hidden py-1"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Desktop Left Peek Card */}
            <button
              type="button"
              onClick={goPrev}
              aria-label={`Previous slide: ${clinicSlides[prevIndex].heading}`}
              className="group pointer-events-auto absolute left-0 z-10 hidden w-[20%] max-w-[260px] shrink-0 cursor-pointer overflow-hidden rounded-[20px] border border-white/10 bg-[#080b10] opacity-40 transition-all duration-500 hover:opacity-80 md:block"
              style={{ transform: "translateX(-10%) scale(0.9)" }}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={clinicSlides[prevIndex].image}
                  alt={clinicSlides[prevIndex].alt}
                  className="h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>
            </button>

            {/* Active Main Center Slide Card */}
            <div className="relative z-20 w-full max-w-4xl">
              <div className="group relative overflow-hidden rounded-[24px] border border-white/15 bg-[#080b10] shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-colors duration-500 hover:border-[#c5a059]/40">
                {/* Mobile: 420px-450px tall card; Desktop: 480px-520px */}
                <div className="relative h-[420px] w-full overflow-hidden min-[380px]:h-[450px] sm:h-[480px] md:h-[500px] lg:h-[520px]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentSlide.image}
                      src={currentSlide.image}
                      alt={currentSlide.alt}
                      initial={reduced ? false : { opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={reduced ? undefined : { opacity: 0, scale: 0.98 }}
                      transition={{ duration: reduced ? 0 : 0.45, ease: EASE_SFLOW }}
                      className="h-full w-full object-cover"
                      draggable={false}
                    />
                  </AnimatePresence>

                  {/* Deep gradient overlay for mobile caption contrast */}
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"
                    aria-hidden
                  />

                  {/* Gold Corner Accents */}
                  <span className="pointer-events-none absolute left-0 top-0 h-8 w-px bg-gradient-to-b from-[#c5a059] to-transparent" aria-hidden />
                  <span className="pointer-events-none absolute left-0 top-0 h-px w-8 bg-gradient-to-r from-[#c5a059] to-transparent" aria-hidden />

                  {/* Top-Right Pill Badge: Number indicator */}
                  <div className="absolute right-4 top-4 z-20 rounded-full border border-[#c5a059]/30 bg-black/60 px-3.5 py-1 backdrop-blur-md sm:right-5 sm:top-5">
                    <span className="font-display text-[11px] font-semibold tracking-[0.2em] text-[#c5a059]">
                      0{active + 1} / 0{total}
                    </span>
                  </div>

                  {/* Slide Content Overlay inside Image */}
                  <div className="absolute inset-x-0 bottom-0 z-20 p-5 min-[380px]:p-6 sm:p-8 md:p-10">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSlide.number}
                        initial={reduced ? false : { opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduced ? undefined : { opacity: 0, y: -8 }}
                        transition={{ duration: reduced ? 0 : 0.35, ease: EASE_SFLOW }}
                        className="max-w-2xl text-left"
                      >
                        <p
                          className="font-display text-[10px] uppercase tracking-[0.3em] text-[#c5a059] font-medium min-[380px]:text-[11px]"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          {currentSlide.number} — {currentSlide.tagline}
                        </p>
                        <h3
                          className="mt-1 font-serif text-[24px] font-medium text-white leading-tight min-[380px]:text-[27px] sm:text-[32px] md:text-4xl"
                          style={{ fontFamily: "var(--font-serif)" }}
                        >
                          {currentSlide.heading}
                        </h3>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Right Peek Card */}
            <button
              type="button"
              onClick={goNext}
              aria-label={`Next slide: ${clinicSlides[nextIndex].heading}`}
              className="group pointer-events-auto absolute right-0 z-10 hidden w-[20%] max-w-[260px] shrink-0 cursor-pointer overflow-hidden rounded-[20px] border border-white/10 bg-[#080b10] opacity-40 transition-all duration-500 hover:opacity-80 md:block"
              style={{ transform: "translateX(10%) scale(0.9)" }}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={clinicSlides[nextIndex].image}
                  alt={clinicSlides[nextIndex].alt}
                  className="h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>
            </button>
          </div>

          {/* Navigation Controls & Progress Bar */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-2 sm:mt-6">
            {/* Left: Counter & Autoplay Progress Bar */}
            <div className="flex items-center gap-3">
              <span className="font-display text-[11px] tracking-[0.2em] text-white/70 sm:text-xs">
                0{active + 1} <span className="text-white/30">/</span> 0{total}
              </span>
              <div className="h-[2px] w-20 overflow-hidden bg-white/10 min-[380px]:w-28 sm:w-36" aria-hidden>
                {!reduced && (
                  <motion.div
                    key={`${active}-${paused}-${isTabVisible}`}
                    className="h-full bg-[#c5a059]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: paused || !isTabVisible ? 0 : 1 }}
                    transition={
                      paused || !isTabVisible
                        ? { duration: 0.2 }
                        : { duration: AUTOPLAY_MS / 1000, ease: "linear" }
                    }
                    style={{ transformOrigin: "left center" }}
                  />
                )}
              </div>
            </div>

            {/* Center: Slide Dot Bullet Indicators */}
            <div className="flex items-center gap-1.5" role="tablist" aria-label="Gallery slide selection">
              {clinicSlides.map((slide, i) => (
                <button
                  key={slide.number}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Go to slide ${i + 1}: ${slide.heading}`}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a059] ${
                    i === active
                      ? "w-6 bg-[#c5a059]"
                      : "w-1.5 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Right: Prev / Next Navigation Arrow Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous image"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition-all duration-300 hover:border-[#c5a059] hover:bg-[#c5a059]/15 hover:text-[#c5a059] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059]"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next image"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition-all duration-300 hover:border-[#c5a059] hover:bg-[#c5a059]/15 hover:text-[#c5a059] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059]"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
