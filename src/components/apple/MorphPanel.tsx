"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Glass from "./Glass";

interface MorphPanelProps {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
}

/** Scroll-driven morph: position, scale, and corner radius shift */
export default function MorphPanel({
  children,
  className = "",
  glass = true,
}: MorphPanelProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.45, 1], [0.88, 1, 0.96]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [64, 0, -20]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 0.85]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5, 1], [48, 12, 4]);

  if (reduced) {
    return (
      <div ref={ref} className={className}>
        {glass ? <Glass variant="liquid">{children}</Glass> : children}
      </div>
    );
  }

  const inner = (
    <motion.div
      style={{ scale, y, opacity, borderRadius }}
      className={`overflow-hidden ${glass ? "glass-liquid" : "border border-white/10 bg-[var(--bg-dark-panel)]"} ${className}`.trim()}
    >
      {children}
    </motion.div>
  );

  return <div ref={ref}>{inner}</div>;
}
