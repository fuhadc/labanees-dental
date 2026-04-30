"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollRadial() {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <motion.div
      style={{ opacity }}
      className="fixed bottom-8 left-8 z-[1000] hidden lg:block"
    >
      <svg width="60" height="60" viewBox="0 0 100 100" className="-rotate-90">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-white/5"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="var(--accent-warm)"
          strokeWidth="2"
          style={{ pathLength }}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span 
          style={{ 
            opacity: useTransform(scrollYProgress, (v) => v > 0.95 ? 1 : 0.4) 
          }}
          className="text-[10px] font-display font-bold text-[var(--accent-warm)] uppercase tracking-tighter"
        >
          {Math.round(scrollYProgress.get() * 100)}%
        </motion.span>
      </div>
    </motion.div>
  );
}
