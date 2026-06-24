"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { EASE_SFLOW } from "@/lib/apple-scroll";

export interface HeroBannerProps {
  brandLine?: string;
  brandAccent?: string;
  tagline?: string;
  backgroundImage?: string;
  insetImage?: string;
  insetAlt?: string;
}

export default function HeroBanner({
  brandLine = "LABANEES",
  brandAccent = "DENTAL",
  tagline = "Advanced cosmetic dentistry and high-precision implantology in the heart of Muscat.",
  backgroundImage,
  insetImage,
  insetAlt = "Labanees Dental clinic interior",
}: HeroBannerProps) {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.12]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);

  return (
    <section
      ref={ref}
      className="hero-editorial relative h-[100dvh] max-h-[100dvh] min-h-0 overflow-hidden bg-[var(--bg-dark)]"
      aria-labelledby="hero-brand"
    >
      <div className="hero-editorial__media pointer-events-none absolute inset-0" aria-hidden>
        {backgroundImage ? (
          <motion.div
            className="hero-editorial__image absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              y: reduced ? 0 : imageY,
              scale: reduced ? 1.05 : imageScale,
            }}
          />
        ) : (
          <div className="absolute inset-0 bg-[var(--bg-charcoal)]" />
        )}
        <div className="hero-editorial__overlay absolute inset-0" />
      </div>

      <motion.div
        className="hero-editorial__shell relative z-10 flex h-full min-h-0 flex-col pt-[calc(var(--header-height)+env(safe-area-inset-top,0px))]"
        style={reduced ? undefined : { opacity: contentOpacity }}
      >
        <div className="page-container flex min-h-0 flex-1 flex-col pb-[clamp(1.25rem,4vh,2.5rem)]">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE_SFLOW }}
          >
            <h1
              id="hero-brand"
              className="hero-editorial__brand font-display font-medium uppercase text-white"
            >
              <span className="block">{brandLine}</span>
              {brandAccent ? (
                <span className="hero-editorial__brand-accent block">{brandAccent}</span>
              ) : null}
            </h1>
            <div className="hero-editorial__rule" aria-hidden />
          </motion.div>

          <div className="hero-editorial__lower mt-auto">
            {tagline ? (
              <motion.p
                className="hero-editorial__lede"
                initial={reduced ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.15, ease: EASE_SFLOW }}
              >
                {tagline}
              </motion.p>
            ) : null}

            {insetImage ? (
              <motion.figure
                className="hero-editorial__inset"
                initial={reduced ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.25, ease: EASE_SFLOW }}
              >
                <img
                  src={insetImage}
                  alt={insetAlt}
                  className="h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </motion.figure>
            ) : null}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
