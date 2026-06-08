"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

interface ScrollParallaxProps {
  children: React.ReactNode;
  className?: string;
  /** Vertical travel in px */
  distance?: number;
  fade?: boolean;
  scale?: boolean;
}

export default function ScrollParallax({
  children,
  className = "",
  distance = 48,
  fade = true,
  scale = true,
}: ScrollParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [distance * 0.5, -distance * 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.35, 1, 1, 0.35]);
  const s = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.97]);

  if (reduced) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={{
          y,
          ...(fade ? { opacity } : {}),
          ...(scale ? { scale: s } : {}),
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
