"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

/**
 * Subtle companion cursor for fine pointers only.
 * Does not hide the system cursor (avoids dual-cursor / precision issues).
 */
export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorXSpring = useSpring(cursorX, { damping: 32, stiffness: 260 });
  const cursorYSpring = useSpring(cursorY, { damping: 32, stiffness: 260 });

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const narrow = window.matchMedia("(max-width: 1023px)").matches;
    if (coarse || reduced || narrow) return;

    setEnabled(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        !!target.closest("button, a, [role='button'], input, textarea, select");
      setIsHovering(interactive);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-8 w-8 rounded-full border border-[var(--accent-warm)]/45 lg:block"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{ scale: isHovering ? 1.35 : 1, opacity: isHovering ? 0.9 : 0.45 }}
      transition={{ duration: 0.2 }}
      aria-hidden
    />
  );
}
