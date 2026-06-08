"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { APPLE_TRANSITION, EASE_SFLOW } from "@/lib/apple-scroll";

interface FadeScaleProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  scaleFrom?: number;
  y?: number;
  once?: boolean;
}

export default function FadeScale({
  children,
  className = "",
  delay = 0,
  scaleFrom = 0.9,
  y = 40,
  once = true,
}: FadeScaleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount: 0.12, margin: "0px 0px -40px 0px" });
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={reduced ? false : { opacity: 0, scale: scaleFrom, y }}
      animate={reduced || inView ? { opacity: 1, scale: 1, y: 0 } : undefined}
      transition={{ ...APPLE_TRANSITION, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
