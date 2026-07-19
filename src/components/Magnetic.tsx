"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { spring } from "@/lib/motion";

export default function Magnetic({
  children,
  disabled = false,
}: {
  children: ReactNode;
  /** Prefer disabled for nav links — magnetic pull hurts precision */
  disabled?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const reduced = useReducedMotion();

  if (disabled || reduced) {
    return <>{children}</>;
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const { height, width, left, top } = el.getBoundingClientRect();
    const middleX = e.clientX - (left + width / 2);
    const middleY = e.clientY - (top + height / 2);
    setPosition({ x: middleX * 0.08, y: middleY * 0.08 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      style={{ position: "relative" }}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={position}
      transition={spring.magnetic}
    >
      {children}
    </motion.div>
  );
}
