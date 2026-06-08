"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { SCROLL_OFFSET } from "@/lib/apple-scroll";

interface SectionZoomProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

/** Seamless zoom: section scales up as it enters, eases down as it leaves */
export default function SectionZoom({ children, className = "", id }: SectionZoomProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: SCROLL_OFFSET.sectionPass,
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 26,
    mass: 0.5,
  });

  const scale = useTransform(progress, [0, 0.2, 0.5, 0.8, 1], [0.86, 0.94, 1, 0.98, 0.9]);
  const opacity = useTransform(progress, [0, 0.12, 0.88, 1], [0.35, 1, 1, 0.5]);
  const y = useTransform(progress, [0, 0.25, 0.75, 1], [48, 0, 0, -32]);

  if (reduced) {
    return (
      <section id={id} ref={ref} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      ref={ref}
      style={{ scale, opacity, y }}
      className={`section-zoom ${className}`.trim()}
    >
      {children}
    </motion.section>
  );
}
