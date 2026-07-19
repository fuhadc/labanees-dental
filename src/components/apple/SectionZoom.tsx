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

/** Light enter presence only — no continuous fade that hides nested content */
export default function SectionZoom({ children, className = "", id }: SectionZoomProps) {
  const ref = useRef<HTMLDivElement>(null);
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
    stiffness: 80,
    damping: 28,
    mass: 0.45,
  });

  const y = useTransform(progress, [0, 0.2, 0.8, 1], [12, 0, 0, -6]);

  const shouldAnimate = mounted && !reduced && viewport.isDesktop && !viewport.isShort;

  return (
    <motion.div
      id={id}
      ref={ref}
      style={shouldAnimate ? { y } : undefined}
      className={`section-zoom ${className}`.trim()}
    >
      {children}
    </motion.div>
  );
}
