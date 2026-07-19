import type { Transition, Variants, ViewportOptions } from "framer-motion";

import { EASE_SFLOW, EASE_APPLE as EASE_APPLE_SCROLL } from "./apple-scroll";

/** Apple-style easing — slow start/end, fast middle */
export const EASE_SFLOW_MOTION = EASE_SFLOW;
export const EASE_APPLE = EASE_APPLE_SCROLL;
export const EASE_SMOOTH = [0.25, 0.1, 0.25, 1] as const;
export const EASE_OUT = [0.33, 1, 0.68, 1] as const;

export const transition = {
  apple: { duration: 0.85, ease: EASE_APPLE } satisfies Transition,
  smooth: { duration: 0.55, ease: EASE_SMOOTH } satisfies Transition,
  medium: { duration: 0.45, ease: EASE_OUT } satisfies Transition,
  slow: { duration: 0.65, ease: EASE_SMOOTH } satisfies Transition,
  divider: { duration: 0.5, ease: EASE_APPLE } satisfies Transition,
  fast: { duration: 0.35, ease: EASE_OUT } satisfies Transition,
  box: { duration: 0.8, ease: EASE_SFLOW } satisfies Transition,
  morph: { duration: 0.95, ease: EASE_SFLOW } satisfies Transition,
} as const;

export const spring = {
  soft: { type: "spring", stiffness: 200, damping: 26, mass: 0.4 },
  magnetic: { type: "spring", stiffness: 120, damping: 28, mass: 0.3 },
  cursor: { type: "spring", stiffness: 200, damping: 30, mass: 0.35 },
  nav: { type: "spring", stiffness: 280, damping: 30, mass: 0.5 },
  tilt: { type: "spring", stiffness: 220, damping: 26, mass: 0.35 },
} as const;

/** Generous viewport — expand root so near-edge content still reveals */
export const viewport: ViewportOptions = {
  once: true,
  amount: 0.02,
  margin: "140px 0px 140px 0px",
};

export type BoxOrigin = "bottom" | "top" | "left" | "right" | "center";

/** Transform-only reveals (reliable; no clip-path stuck states) */
export function boxRevealVariants(
  origin: BoxOrigin = "bottom",
  delay = 0,
): Variants {
  const t = { ...transition.box, delay };

  const presets: Record<BoxOrigin, Variants> = {
    bottom: {
      hidden: { opacity: 0, y: 56, scale: 0.94 },
      visible: { opacity: 1, y: 0, scale: 1, transition: t },
    },
    top: {
      hidden: { opacity: 0, y: -40, scale: 0.94 },
      visible: { opacity: 1, y: 0, scale: 1, transition: t },
    },
    left: {
      hidden: { opacity: 0, x: -24, scale: 0.96 },
      visible: { opacity: 1, x: 0, scale: 1, transition: t },
    },
    right: {
      hidden: { opacity: 0, x: 24, scale: 0.96 },
      visible: { opacity: 1, x: 0, scale: 1, transition: t },
    },
    center: {
      hidden: { opacity: 0, scale: 0.88 },
      visible: { opacity: 1, scale: 1, transition: t },
    },
  };

  return presets[origin];
}

export const boxStaggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

export const boxStaggerItem: Variants = boxRevealVariants("bottom");

export const containerVariants: Variants = boxStaggerContainer;
export const itemVariants: Variants = boxStaggerItem;

export function sectionDelay(index: number, base = 0.08) {
  return index * base;
}
