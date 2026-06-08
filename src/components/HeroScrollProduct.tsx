"use client";

import { motion, useReducedMotion, useTransform } from "framer-motion";
import { ParallaxLayer, ScrollImageSequence, useSequenceScrollProgress } from "@/components/apple";
import { sequenceFrameOpacity } from "@/lib/apple-scroll";

const FRAMES = [
  {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=1400&fit=crop&q=88",
    alt: "Premium dental clinic interior",
  },
  {
    src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200&h=1400&fit=crop&q=88",
    alt: "Advanced dental technology",
  },
  {
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=1400&fit=crop&q=88",
    alt: "Patient consultation",
  },
  {
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1200&h=1400&fit=crop&q=88",
    alt: "Cosmetic dentistry detail",
  },
  {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=1400&fit=crop&q=88",
    alt: "Smile transformation",
  },
];

const CAPTIONS = [
  "Precision imaging. Artisan finishing.",
  "Implantology without compromise.",
  "Calm, premium care in Muscat.",
  "Cosmetic artistry at every scale.",
  "Smiles designed to last.",
];

function SequenceCaptions() {
  const progress = useSequenceScrollProgress();
  if (!progress) return null;

  return (
    <div className="relative mt-8 min-h-[4rem] md:min-h-[5rem]">
      {CAPTIONS.map((line, i) => (
        <CaptionLine key={line} index={i} total={CAPTIONS.length} text={line} progress={progress} />
      ))}
    </div>
  );
}

function CaptionLine({
  index,
  total,
  progress,
  text,
}: {
  index: number;
  total: number;
  progress: NonNullable<ReturnType<typeof useSequenceScrollProgress>>;
  text: string;
}) {
  const opacity = useTransform(progress, (v) => sequenceFrameOpacity(v, index, total, 0.45));
  const y = useTransform(progress, (v) => {
    const o = sequenceFrameOpacity(v, index, total, 0.45);
    return (1 - o) * 24;
  });
  const scale = useTransform(progress, (v) => {
    const o = sequenceFrameOpacity(v, index, total, 0.45);
    return 0.92 + o * 0.08;
  });

  return (
    <motion.p
      className="absolute inset-x-0 top-0 font-serif text-xl font-medium italic text-white md:text-3xl"
      style={{ opacity, y, scale, fontFamily: "var(--font-serif)" }}
    >
      {text}
    </motion.p>
  );
}

/** Scroll-scrubbed hero product sequence — Apple launch-page style */
export default function HeroScrollProduct() {
  const reduced = useReducedMotion();

  if (reduced) return null;

  return (
    <section className="relative bg-[var(--bg-dark)]" aria-label="Technology showcase">
      <ParallaxLayer
        speed={-0.25}
        distance={100}
        fade
        className="pointer-events-none absolute inset-x-0 top-1/4 z-0"
      >
        <div className="mx-auto h-64 max-w-3xl rounded-full bg-[var(--accent-warm)]/10 blur-[100px]" />
      </ParallaxLayer>

      <div className="section-padding-x relative z-10 mx-auto max-w-[var(--content-max-width)] py-8">
        <div className="mb-8 max-w-lg px-2 lg:absolute lg:left-[var(--space-content-x)] lg:top-1/2 lg:z-20 lg:-translate-y-1/2">
          <p
            className="font-display text-[10px] uppercase tracking-[0.5em] text-[var(--accent-warm)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Scroll to explore
          </p>
          <h2
            className="mt-6 font-serif text-4xl font-medium italic text-white md:text-5xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Technology in motion.
          </h2>
        </div>

        <ScrollImageSequence images={FRAMES} scrollHeight="260vh" className="mx-auto lg:max-w-2xl">
          <div className="glass-liquid absolute -left-[min(88vw,420px)] top-1/2 hidden w-72 -translate-y-1/2 p-8 lg:block">
            <SequenceCaptions />
          </div>
        </ScrollImageSequence>

        <div className="mt-6 px-2 lg:hidden">
          <SequenceCaptions />
        </div>
      </div>
    </section>
  );
}
