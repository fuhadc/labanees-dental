import type { Transition } from "framer-motion";

/** Slow start & end, fast middle — Apple keynote curve */
export const EASE_SFLOW = [0.77, 0, 0.175, 1] as const;

/** Smooth deceleration */
export const EASE_APPLE = [0.16, 1, 0.3, 1] as const;

export const APPLE_TRANSITION: Transition = {
  duration: 0.9,
  ease: EASE_SFLOW,
};

export const SCROLL_OFFSET = {
  sequence: ["start start", "end end"] as ["start start", "end end"],
  sectionEnter: ["start end", "center center"] as ["start end", "center center"],
  sectionPass: ["start end", "end start"] as ["start end", "end start"],
  bridge: ["start end", "end center"] as ["start end", "end center"],
  parallax: ["start end", "end start"] as ["start end", "end start"],
};

/** Crossfade weight for scroll-driven image sequence */
export function sequenceFrameOpacity(
  progress: number,
  index: number,
  total: number,
  softness = 0.55,
): number {
  if (total <= 1) return 1;
  const segment = 1 / total;
  const center = (index + 0.5) * segment;
  const half = segment * softness;
  const dist = Math.abs(progress - center);
  if (dist >= half) return 0;
  return 1 - dist / half;
}

/** Scale morph per frame (zoom between sequence steps) */
export function sequenceFrameScale(
  progress: number,
  index: number,
  total: number,
): number {
  const opacity = sequenceFrameOpacity(progress, index, total, 0.5);
  return 0.92 + opacity * 0.1;
}
