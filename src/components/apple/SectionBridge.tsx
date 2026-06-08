"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { SCROLL_OFFSET } from "@/lib/apple-scroll";
import { BRIDGE_TRANSITION_PHOTOS } from "@/lib/clinic-images";

interface SectionBridgeProps {
  label?: string;
  photos?: readonly { src: string; alt: string }[];
}

function BridgePhoto({
  src,
  alt,
  side,
  progress,
}: {
  src: string;
  alt: string;
  side: "left" | "right";
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const opacity = useTransform(progress, [0, 0.35, 0.65, 1], [0, 1, 1, 0]);
  const scale = useTransform(progress, [0, 0.5, 1], [0.88, 1, 0.94]);
  const x = useTransform(
    progress,
    [0, 0.5, 1],
    side === "left" ? [-28, 0, 12] : [28, 0, -12],
  );

  return (
    <motion.div
      className={`section-bridge-photo section-bridge-photo--${side}`}
      style={{ opacity, scale, x }}
    >
      <img src={src} alt={alt} className="section-bridge-photo__img" loading="lazy" decoding="async" />
      <div className="section-bridge-photo__shine" aria-hidden />
    </motion.div>
  );
}

/** Zoom + fade bridge between major sections, with flanking clinic photos */
export default function SectionBridge({
  label,
  photos = BRIDGE_TRANSITION_PHOTOS,
}: SectionBridgeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: SCROLL_OFFSET.bridge,
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.75, 1.08, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.35, 1], [0, 1, 0.6]);
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const [leftPhoto, rightPhoto] = photos;

  if (reduced) {
    return label ? (
      <div className="section-bridge section-bridge--static py-10 text-center">
        <span className="font-display text-[9px] uppercase tracking-[0.5em] text-[var(--accent-warm)]/40">
          {label}
        </span>
      </div>
    ) : null;
  }

  return (
    <div
      ref={ref}
      className="section-bridge section-bridge--photos flex min-h-[200px] items-center justify-center py-6 sm:min-h-[240px] sm:py-8"
    >
      {leftPhoto && (
        <BridgePhoto
          src={leftPhoto.src}
          alt={leftPhoto.alt}
          side="left"
          progress={scrollYProgress}
        />
      )}

      <motion.div
        style={{ scale, opacity }}
        className="section-bridge-core relative z-10 flex flex-col items-center gap-5 px-4 sm:gap-6 sm:px-8"
      >
        <motion.div
          style={{ scaleX: lineScale }}
          className="h-px w-[min(72vw,28rem)] origin-center bg-gradient-to-r from-transparent via-[var(--accent-warm)]/50 to-transparent"
        />
        {label && (
          <span
            className="font-display text-[9px] uppercase tracking-[0.55em] text-[var(--accent-warm)]/45"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {label}
          </span>
        )}
        <motion.div
          style={{ scaleX: lineScale }}
          className="h-px w-24 origin-center bg-[var(--accent-warm)]/30"
        />
      </motion.div>

      {rightPhoto && (
        <BridgePhoto
          src={rightPhoto.src}
          alt={rightPhoto.alt}
          side="right"
          progress={scrollYProgress}
        />
      )}
    </div>
  );
}
