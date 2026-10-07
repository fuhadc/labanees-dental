"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CLINIC_PHOTOS } from "@/lib/clinic-images";
import { EASE_SFLOW } from "@/lib/apple-scroll";

const clinicSlides = [
  {
    number: "01",
    tagline: "A WARM WELCOME",
    heading: "A Warm Welcome",
    quote: "“An elegant reception desk designed to make every visit feel calm and comfortable.”",
    image: CLINIC_PHOTOS.receptionMain.src,
    alt: CLINIC_PHOTOS.receptionMain.alt,
  },
  {
    number: "02",
    tagline: "CLINICAL SUITE",
    heading: "Advanced Treatment Suite",
    quote: "“Modern technology and ergonomic care in a sterile, peaceful clinical environment.”",
    image: CLINIC_PHOTOS.treatmentSuite.src,
    alt: CLINIC_PHOTOS.treatmentSuite.alt,
  },
  {
    number: "03",
    tagline: "LUXURY AMBIANCE",
    heading: "Illuminated Lobby & Botanical Feature",
    quote: "“Natural light, warm wood accents, and soothing greenery for maximum relaxation.”",
    image: CLINIC_PHOTOS.planterLobby.src,
    alt: CLINIC_PHOTOS.planterLobby.alt,
  },
  {
    number: "04",
    tagline: "CONSULTATION ROOM",
    heading: "Personalized Consultation",
    quote: "“Private consultation rooms focused entirely on your individual oral health goals.”",
    image: CLINIC_PHOTOS.consultationSuite.src,
    alt: CLINIC_PHOTOS.consultationSuite.alt,
  },
  {
    number: "05",
    tagline: "PATIENT LOUNGE",
    heading: "Private Patient Lounge",
    quote: "“Quiet, spacious seating areas designed for your peace of mind before and after care.”",
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
      className="relative overflow-hidden bg-transparent py-14 md:py-24"
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
        className="pointer-events-none absolute inset-x-0 top-1/2 h-[450px] -translate-y-1/2 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(197,160,89,0.07),transparent_70%)]"
        aria-hidden
      />

      <div className="page-container relative z-10">
        {/* Section Header */}
        <header className="mx-auto max-w-3xl text-center">
          <p
            className="font-display text-[10px] uppercase tracking-[0.45em] text-[var(--accent-warm)] font-semibold md:text-[11px]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            INSIDE THE CLINIC
          </p>
          <div className="mx-auto mt-4 h-px w-20 bg-gradient-to-r from-transparent via-[var(--accent-warm)]/80 to-transparent" />
        </header>

        {/* Gallery Carousel Container */}
        <div className="mt-10 md:mt-14">
          {/* Main Stage: Carousel with Peek Side Cards */}
          <div
            className="relative flex items-center justify-center overflow-hidden py-4"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Desktop Left Peek Card */}
            <button
              type="button"
              onClick={goPrev}
              aria-label={`Previous slide: ${clinicSlides[prevIndex].heading}`}
              className="group pointer-events-auto absolute left-0 z-10 hidden w-[22%] max-w-[280px] shrink-0 cursor-pointer overflow-hidden rounded-[20px] border border-white/10 bg-[#080b10] opacity-45 transition-all duration-700 hover:opacity-80 md:block lg:w-[25%]"
              style={{ transform: "translateX(-15%) scale(0.88)" }}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={clinicSlides[prevIndex].image}
                  alt={clinicSlides[prevIndex].alt}
                  className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
            </button>

            {/* Active Main Center Slide Card */}
            <div className="relative z-20 w-full max-w-4xl px-2 sm:px-4">
              <div className="group relative overflow-hidden rounded-[22px] border border-white/15 bg-[#080b10] shadow-[0_24px_60px_rgba(0,0,0,0.7)] transition-colors duration-500 hover:border-[#c5a059]/40">
                <div className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-[16/9] md:aspect-[16/9.2]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentSlide.image}
                      src={currentSlide.image}
                      alt={currentSlide.alt}
                      initial={reduced ? false : { opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1.01 }}
                      exit={reduced ? undefined : { opacity: 0, scale: 0.98 }}
                      transition={{ duration: reduced ? 0 : 0.85, ease: EASE_SFLOW }}
                      className="h-full w-full object-cover"
                      draggable={false}
                    />
                  </AnimatePresence>

                  {/* Gradient bottom overlay for caption legibility */}
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"
                    aria-hidden
                  />

                  {/* Gold Corner Accents */}
                  <span className="pointer-events-none absolute left-0 top-0 h-10 w-px bg-gradient-to-b from-[#c5a059] to-transparent" aria-hidden />
                  <span className="pointer-events-none absolute left-0 top-0 h-px w-10 bg-gradient-to-r from-[#c5a059] to-transparent" aria-hidden />

                  {/* Top-Right Badge: Number indicator */}
                  <div className="absolute right-5 top-5 rounded-full border border-white/15 bg-black/50 px-3.5 py-1 backdrop-blur-md">
                    <span className="font-display text-[10px] font-semibold tracking-[0.25em] text-[#c5a059]">
                      {currentSlide.number} / 0{total}
                    </span>
                  </div>

                  {/* Slide Content Caption Overlay inside Image */}
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-10">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSlide.number}
                        initial={reduced ? false : { opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduced ? undefined : { opacity: 0, y: -10 }}
                        transition={{ duration: reduced ? 0 : 0.5, ease: EASE_SFLOW }}
                        className="max-w-2xl text-left"
                      >
                        <p
                          className="font-display text-[10px] uppercase tracking-[0.35em] text-[#c5a059] font-medium sm:text-[11px]"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          {currentSlide.number} — {currentSlide.tagline}
                        </p>
                        <h3
                          className="mt-2 font-serif text-xl font-medium italic text-white sm:text-2xl md:text-3xl"
                          style={{ fontFamily: "var(--font-serif)" }}
                        >
                          {currentSlide.heading}
                        </h3>
                        <p
                          className="mt-2.5 text-xs font-light italic leading-relaxed text-white/80 sm:text-sm md:text-base"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          {currentSlide.quote}
                        </p>
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
              className="group pointer-events-auto absolute right-0 z-10 hidden w-[22%] max-w-[280px] shrink-0 cursor-pointer overflow-hidden rounded-[20px] border border-white/10 bg-[#080b10] opacity-45 transition-all duration-700 hover:opacity-80 md:block lg:w-[25%]"
              style={{ transform: "translateX(15%) scale(0.88)" }}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={clinicSlides[nextIndex].image}
                  alt={clinicSlides[nextIndex].alt}
                  className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
            </button>
          </div>

          {/* Navigation Controls & Progress Indicator */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
            {/* Left: Counter & Autoplay Progress Bar */}
            <div className="flex items-center gap-4">
              <span className="font-display text-xs tracking-[0.25em] text-white/70">
                0{active + 1} <span className="text-white/30">/</span> 0{total}
              </span>
              <div className="h-[2px] w-28 overflow-hidden bg-white/10 sm:w-36" aria-hidden>
                {!reduced && (
                  <motion.div
                    key={`${active}-${paused}-${isTabVisible}`}
                    className="h-full bg-[var(--accent-warm)]"
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
            <div className="flex items-center gap-2" role="tablist" aria-label="Gallery slide selection">
              {clinicSlides.map((slide, i) => (
                <button
                  key={slide.number}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Go to slide ${i + 1}: ${slide.heading}`}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a059] ${
                    i === active
                      ? "w-8 bg-[#c5a059]"
                      : "w-2 bg-white/20 hover:bg-white/45"
                  }`}
                />
              ))}
            </div>

            {/* Right: Prev / Next Navigation Arrow Buttons */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous image"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/80 transition-all duration-300 hover:border-[#c5a059] hover:bg-[#c5a059]/15 hover:text-[#c5a059] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059]"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next image"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/80 transition-all duration-300 hover:border-[#c5a059] hover:bg-[#c5a059]/15 hover:text-[#c5a059] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059]"
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
