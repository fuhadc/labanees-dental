"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { EASE_SFLOW } from "@/lib/apple-scroll";

export interface HeroBannerProps {
  backgroundImage?: string;
}

export default function HeroBanner({
  backgroundImage,
}: HeroBannerProps) {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax and zoom scroll effects
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.12]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="hero-editorial relative min-h-[100dvh] overflow-hidden bg-[#050609] flex items-center"
      aria-labelledby="hero-title"
    >
      {/* Background Media */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {backgroundImage ? (
          <motion.div
            className="absolute inset-0 bg-cover bg-[center_right_35%] md:bg-center"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              y: reduced ? 0 : imageY,
              scale: reduced ? 1.02 : imageScale,
            }}
          />
        ) : (
          <div className="absolute inset-0 bg-[#050609]" />
        )}
        
        {/* Left-to-right gradient — keeps hero copy legible over the reception photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 via-40% to-transparent z-1" />

        {/* Subtle vertical vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-1" />
      </div>

      {/* Hero Content Container */}
      <motion.div
        className="relative z-10 w-full pt-[calc(var(--header-height)+env(safe-area-inset-top,0px))] pb-[clamp(2rem,6vh,4rem)]"
        style={reduced ? undefined : { opacity: contentOpacity }}
      >
        <div className="page-container flex flex-col justify-center min-h-[calc(100dvh-var(--header-height)-env(safe-area-inset-top,0px)-4rem)]">
          <div className="max-w-xl md:max-w-2xl lg:max-w-3xl flex flex-col gap-6 md:gap-8 justify-center">
            <motion.div
              className="flex flex-col gap-4 md:gap-6"
              initial={reduced ? false : { opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: EASE_SFLOW }}
              style={reduced ? undefined : { y: copyY }}
            >
              {/* Heading — Playfair Display */}
              <h1
                id="hero-title"
                className="font-serif text-[clamp(2.5rem,6vw,4.75rem)] font-normal leading-[1.12] text-[var(--hero-text-primary)] tracking-[-0.01em] text-balance"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Advanced care.
                <span className="block text-[var(--accent-warm)] mt-1 md:mt-2">Beautiful results.</span>
              </h1>

              {/* Thin gold rule */}
              <div className="w-14 h-px bg-[var(--accent-warm)] mt-2" />

              {/* Lead — Montserrat, muted */}
              <p
                className="font-sans text-sm sm:text-[0.9375rem] md:text-base font-light leading-[1.85] text-[var(--hero-text-muted)] max-w-md md:max-w-lg mt-4"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Experience advanced aesthetic dentistry in Muscat, where precision, comfort, and elegance come together.
              </p>

              {/* CTA — solid gold, white label */}
              <div className="mt-10 flex">
                <a
                  href="#booking"
                  className="btn-animated group inline-flex items-center gap-3 rounded-sm bg-[var(--accent-warm)] px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition-all duration-500 hover:bg-[var(--accent-warm-hover)]"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Book Appointment
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Backlit Logo on Desk (visible on tablet/desktop) */}
      <motion.div
        className="hidden sm:flex absolute items-center select-none pointer-events-none z-20 gap-3 right-[4%] bottom-[12%] sm:right-[6%] sm:bottom-[15%] md:right-[8%] md:bottom-[18%] lg:right-[12%] lg:bottom-[20%] xl:right-[15%] xl:bottom-[22%] drop-shadow-[0_0_15px_rgba(197,160,89,0.4)]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, delay: 0.4 }}
      >
        {/* Monogram Circle Icon */}
        <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full border border-[var(--accent-warm)]/60 bg-black/20 backdrop-blur-[2px] shadow-[0_0_20px_rgba(197,160,89,0.15)]">
          <svg
            className="w-8 h-8 md:w-10 md:h-10 text-[var(--accent-warm)]"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M38,32 C38,32 46,25 54,25 C62,25 65,30 63,38 C60,48 46,65 42,70 C40,73 45,74 52,72 C60,70 66,64 68,60"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Vertical Separator Line */}
        <div className="w-[1px] h-10 md:h-12 bg-[var(--accent-warm)]/30 self-center" />

        {/* Stacked Logo Text */}
        <div className="flex flex-col leading-[1.1] text-[var(--accent-warm)] tracking-[0.16em] uppercase">
          <span className="font-serif text-sm md:text-base font-normal" style={{ fontFamily: "var(--font-serif)" }}>Labanees</span>
          <span className="font-serif text-sm md:text-base font-normal" style={{ fontFamily: "var(--font-serif)" }}>Dental</span>
          <span className="font-serif text-xs md:text-sm font-light text-[var(--accent-warm)]/75" style={{ fontFamily: "var(--font-serif)" }}>Clinic</span>
        </div>
      </motion.div>
    </section>
  );
}
