"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { SCROLL_OFFSET } from "@/lib/apple-scroll";

interface SectionBridgeProps {
  label?: string;
}

/** Zoom + fade bridge between major sections */
export default function SectionBridge({ label }: SectionBridgeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: SCROLL_OFFSET.bridge,
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.75, 1.08, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.35, 1], [0, 1, 0.6]);
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  if (reduced) {
    return label ? (
      <div className="py-10 text-center">
        <span className="font-display text-[9px] uppercase tracking-[0.5em] text-[var(--accent-warm)]/40">
          {label}
        </span>
      </div>
    ) : null;
  }

  return (
    <div ref={ref} className="section-bridge flex h-[28vh] min-h-[180px] items-center justify-center">
      <motion.div
        style={{ scale, opacity }}
        className="flex flex-col items-center gap-6 px-8"
      >
        <motion.div
          style={{ scaleX: lineScale }}
          className="h-px w-[min(90vw,32rem)] origin-center bg-gradient-to-r from-transparent via-[var(--accent-warm)]/50 to-transparent"
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
    </div>
  );
}
