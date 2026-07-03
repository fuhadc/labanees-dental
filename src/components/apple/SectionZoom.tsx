"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { SCROLL_OFFSET } from "@/lib/apple-scroll";
import { useViewport } from "@/hooks/useViewport";

interface SectionZoomProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

/** Seamless zoom: section scales up as it enters, eases down as it leaves */
export default function SectionZoom({ children, className = "", id }: SectionZoomProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const viewport = useViewport();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: SCROLL_OFFSET.sectionPass,
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 26,
    mass: 0.5,
  });

  // Forgiving parameters: ensures sections are readable and fully opaque early, and don't shrink/fade out aggressively
  const scale = useTransform(progress, [0, 0.15, 0.5, 0.85, 1], [0.96, 1, 1, 1, 0.98]);
  const opacity = useTransform(progress, [0, 0.08, 0.92, 1], [0.75, 1, 1, 0.85]);
  const y = useTransform(progress, [0, 0.15, 0.85, 1], [24, 0, 0, -12]);

  // Disable scroll animations on mobile, tablet, or short screens to avoid components staying hidden
  const shouldAnimate = mounted && !reduced && viewport.isDesktop && !viewport.isShort;

  return (
    <motion.section
      id={id}
      ref={ref}
      style={shouldAnimate ? { scale, opacity, y } : undefined}
      className={`section-zoom ${className}`.trim()}
    >
      {children}
    </motion.section>
  );
}
