"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type GlassVariant = "panel" | "liquid" | "nav" | "card";

const variants: Record<GlassVariant, string> = {
  panel: "glass-panel",
  liquid: "glass-liquid",
  nav: "glass-nav",
  card: "glass-card",
};

interface GlassProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  variant?: GlassVariant;
  className?: string;
  glow?: boolean;
}

export default function Glass({
  children,
  variant = "panel",
  className = "",
  glow = false,
  ...props
}: GlassProps) {
  return (
    <motion.div
      className={`${variants[variant]} ${glow ? "glass-glow" : ""} ${className}`.trim()}
      {...props}
    >
      {children}
    </motion.div>
  );
}
