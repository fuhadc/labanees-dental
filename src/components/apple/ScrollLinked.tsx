"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

interface ScrollLinkedProps {
  children: React.ReactNode | ((values: { progress: MotionValue<number> }) => React.ReactNode);
  className?: string;
  offset?: ["start start", "end end"] | ["start end", "end start"];
  /** Vertical shift in px across scroll span */
  y?: [number, number];
  opacity?: [number, number];
  scale?: [number, number];
  rotate?: [number, number];
  spring?: boolean;
}

export default function ScrollLinked({
  children,
  className = "",
  offset = ["start end", "end start"],
  y,
  opacity,
  scale,
  rotate,
  spring: useSpringSmooth = true,
}: ScrollLinkedProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset });
  const progress = useSpringSmooth && !reduced
    ? useSpring(scrollYProgress, { stiffness: 90, damping: 28, mass: 0.4 })
    : scrollYProgress;

  if (typeof children === "function") {
    return (
      <div ref={ref} className={className}>
        {children({ progress })}
      </div>
    );
  }

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  const style: Record<string, MotionValue<number>> = {};
  if (y) style.y = useTransform(progress, [0, 1], y);
  if (opacity) style.opacity = useTransform(progress, [0, 1], opacity);
  if (scale) style.scale = useTransform(progress, [0, 1], scale);
  if (rotate) style.rotate = useTransform(progress, [0, 1], rotate);

  return (
    <div ref={ref} className={className}>
      <motion.div style={style}>{children}</motion.div>
    </div>
  );
}
