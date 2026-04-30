"use client";

import { motion } from "framer-motion";

export interface SectionHeaderProps {
  title: string;
  withDivider?: boolean;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeader({
  title,
  withDivider = true,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.21, 0.45, 0.32, 0.9] }}
      className={`bg-[var(--bg-dark-panel)] border-y border-white/5 content-padding ${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      <motion.h2
        className="font-serif text-[length:var(--text-section)] font-medium tracking-tight text-white italic"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {title}
      </motion.h2>
      {withDivider && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className={`mt-6 h-px w-32 bg-gradient-to-r from-transparent via-[var(--accent-warm)] to-transparent ${align === "center" ? "mx-auto" : ""}`}
          aria-hidden
        />
      )}
    </motion.div>
  );
}
