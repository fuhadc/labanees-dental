"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { EASE_SFLOW } from "@/lib/apple-scroll";

export interface HeroBannerProps {
  backgroundImage?: string;
}

export default function HeroBanner({ backgroundImage }: HeroBannerProps) {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.1]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 48]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -16]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="hero-editorial relative flex min-h-[100dvh] items-center overflow-hidden bg-[#050609]"
      aria-labelledby="hero-title"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
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
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black via-black/80 via-40% to-transparent" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      <motion.div
        className="relative z-10 w-full pb-[clamp(2rem,6vh,4rem)] pt-[calc(var(--header-height)+env(safe-area-inset-top,0px))]"
        style={reduced ? undefined : { opacity: contentOpacity }}
      >
        <div className="page-container flex min-h-[calc(100dvh-var(--header-height)-env(safe-area-inset-top,0px)-4rem)] flex-col justify-center">
          <div className="flex max-w-xl flex-col justify-center gap-5 md:max-w-2xl md:gap-6 lg:max-w-3xl">
            <motion.div
              className="flex flex-col gap-4 md:gap-5"
              initial={reduced ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: EASE_SFLOW }}
              style={reduced ? undefined : { y: copyY }}
            >
              <p
                className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] font-normal leading-none tracking-tight text-[var(--accent-warm)]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Labanees
              </p>

              <h1
                id="hero-title"
                className="font-serif text-[clamp(2.25rem,5.5vw,4.25rem)] font-normal leading-[1.12] tracking-[-0.01em] text-balance text-[var(--hero-text-primary)]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Expert dental care.
                <span className="mt-1 block text-[var(--accent-warm)] md:mt-2">
                  Beautiful results.
                </span>
              </h1>

              <div className="mt-1 h-px w-14 bg-[var(--accent-warm)]" />

              <p
                className="mt-2 max-w-md font-sans text-sm font-light leading-[1.85] text-[var(--hero-text-muted)] sm:text-[0.9375rem] md:max-w-lg md:text-base"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Aesthetic dentistry in Muscat — precision, comfort, and a calm clinical experience.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#booking"
                  className="inline-flex items-center gap-3 rounded-sm bg-[var(--accent-warm)] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-black transition-colors duration-300 hover:bg-[var(--accent-warm-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Book Appointment
                  <span aria-hidden>→</span>
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center px-2 py-4 text-[11px] font-medium uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Explore the clinic
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
