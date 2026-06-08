"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { EASE_SFLOW } from "@/lib/apple-scroll";

export interface HeroBannerProps {
  title: string;
  tagline?: string;
  label?: string;
  backgroundImage?: string;
  overlayOpacity?: number;
}

const STATS = [
  { value: "15+", label: "Years of mastery" },
  { value: "5k+", label: "Smiles transformed" },
  { value: "Muscat", label: "Premium care" },
] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: EASE_SFLOW },
  },
};

function splitTitle(title: string): [string, string] {
  const words = title.trim().split(/\s+/);
  if (words.length <= 4) return [title, ""];
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
}

export default function HeroBanner({
  title,
  tagline = "Providing smiles with passion.",
  label,
  backgroundImage,
}: HeroBannerProps) {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();
  const [lineOne, lineTwo] = splitTitle(title);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.18]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.92]);

  return (
    <section
      ref={ref}
      className="hero-cinematic relative h-[100dvh] max-h-[100dvh] min-h-0 overflow-hidden bg-[var(--bg-dark)]"
      aria-labelledby="hero-title"
    >
      {/* Background */}
      <div className="hero-media pointer-events-none absolute inset-0 opacity-60 md:opacity-45">
        {backgroundImage ? (
          <motion.div
            className={`hero-media-image absolute inset-0 bg-cover bg-center ${reduced ? "" : "hero-media-image--alive"}`}
            style={{
              backgroundImage: `url(${backgroundImage})`,
              y: reduced ? 0 : imageY,
              scale: reduced ? 1.08 : imageScale,
            }}
            aria-hidden
          />
        ) : (
          <div className="absolute inset-0 bg-[var(--bg-charcoal)]" aria-hidden />
        )}
        <motion.div
          className="hero-media-overlay absolute inset-0"
          style={{ opacity: reduced ? 1 : overlayOpacity }}
          aria-hidden
        />
        <div className="hero-grain absolute inset-0" aria-hidden />
        <div className="hero-frame" aria-hidden />
      </div>

      {/* Ambient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="hero-orb hero-orb--gold absolute -left-[10%] top-[18%] h-[45vw] w-[45vw] max-h-[420px] max-w-[420px]" />
        <div className="hero-orb hero-orb--cool absolute -right-[8%] bottom-[22%] h-[38vw] w-[38vw] max-h-[360px] max-w-[360px]" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex h-full min-h-0 flex-col justify-end pt-[calc(var(--header-height)+env(safe-area-inset-top,0px))]"
        style={reduced ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <div className="hero-inner mx-auto w-full max-w-[var(--content-max-width)]">
          <motion.div
            variants={reduced ? undefined : container}
            initial={reduced ? false : "hidden"}
            animate="show"
            className="hero-content-grid"
          >
            <div className="hero-copy">
              {label && (
                <motion.div variants={item} className="hero-eyebrow">
                  <span className="hero-eyebrow-line" aria-hidden />
                  <span className="hero-eyebrow-text font-display font-medium uppercase text-[var(--accent-warm)]">
                    {label}
                  </span>
                </motion.div>
              )}

              <motion.h1
                id="hero-title"
                variants={item}
                className="hero-headline font-serif font-medium italic text-white"
              >
                <span className="block text-balance">{lineOne}</span>
                {lineTwo ? (
                  <span className="hero-headline-accent mt-1 block text-balance sm:mt-2">
                    {lineTwo}
                  </span>
                ) : null}
              </motion.h1>

              {tagline && (
                <motion.p variants={item} className="hero-tagline max-w-xl text-pretty">
                  {tagline}
                </motion.p>
              )}

              <motion.div variants={item} className="hero-actions">
                <a href="#booking" className="hero-btn hero-btn--primary group">
                  <span>Book appointment</span>
                  <span className="hero-btn-arrow" aria-hidden>
                    →
                  </span>
                </a>
                <a href="#services" className="hero-btn hero-btn--ghost">
                  Explore treatments
                </a>
              </motion.div>
            </div>

            <motion.aside variants={item} className="hero-aside">
              <div className="hero-stats">
                {STATS.map((stat, i) => (
                  <div key={stat.label} className="hero-stat">
                    <span className="hero-stat-value font-serif italic text-[var(--accent-warm)]">
                      {stat.value}
                    </span>
                    <span className="hero-stat-label font-display uppercase tracking-[0.35em] text-white/35">
                      {stat.label}
                    </span>
                    {i < STATS.length - 1 && (
                      <span className="hero-stat-divider hidden sm:block" aria-hidden />
                    )}
                  </div>
                ))}
              </div>

              <a href="#about" className="hero-scroll-hint group" aria-label="Scroll to about section">
                <span className="font-display text-[9px] uppercase tracking-[0.5em] text-white/30 transition-colors group-hover:text-[var(--accent-warm)]">
                  Discover
                </span>
                <span className="hero-scroll-track" aria-hidden>
                  <motion.span
                    className="hero-scroll-thumb"
                    animate={reduced ? undefined : { y: [0, 14, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </span>
              </a>
            </motion.aside>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom fade into page */}
      <div className="hero-bottom-fade pointer-events-none absolute inset-x-0 bottom-0 h-32" aria-hidden />
    </section>
  );
}
