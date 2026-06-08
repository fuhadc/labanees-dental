"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import ThreeBackground from "./ThreeBackground";

/** Ambient gradients with scroll-linked parallax depth */
export default function BackgroundEffects() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, -320]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, -480]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.85, 0.65]);

  return (
    <div ref={ref} className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden>
      <motion.div style={{ y: ySlow, opacity }} className="absolute inset-0">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-[var(--accent-warm)]/[0.07]" />
      </motion.div>
      <motion.div style={{ y: yMid }} className="absolute inset-0">
        <div className="absolute top-[45%] -right-[15%] w-[55%] h-[55%] rounded-full bg-blue-900/[0.04]" />
      </motion.div>
      <motion.div style={{ y: yFast }} className="absolute inset-0">
        <div className="absolute -bottom-[15%] left-[15%] w-[45%] h-[45%] rounded-full bg-purple-900/[0.03]" />
      </motion.div>
      <ThreeBackground />
    </div>
  );
}
