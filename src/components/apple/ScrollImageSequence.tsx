"use client";

import { createContext, useContext, useRef, type RefObject } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  SCROLL_OFFSET,
  sequenceFrameOpacity,
  sequenceFrameScale,
} from "@/lib/apple-scroll";

function SequenceFrame({
  src,
  alt,
  index,
  total,
  progress,
}: {
  src: string;
  alt: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, (v) =>
    sequenceFrameOpacity(v, index, total),
  );
  const scale = useTransform(progress, (v) => sequenceFrameScale(v, index, total));

  return (
    <motion.img
      src={src}
      alt={alt}
      className="absolute inset-0 h-full w-full object-cover"
      style={{ opacity, scale }}
      draggable={false}
    />
  );
}

const SequenceProgressContext = createContext<MotionValue<number> | null>(null);

export function useSequenceScrollProgress() {
  return useContext(SequenceProgressContext);
}

export interface ScrollImageSequenceProps {
  images: { src: string; alt: string }[];
  /** Scroll scrub height — taller = slower sequence */
  scrollHeight?: string;
  className?: string;
  stickyClassName?: string;
  children?: React.ReactNode;
  /** Share scroll progress with a parent section ref */
  scrollTargetRef?: RefObject<HTMLElement | null>;
  /** Parent-driven progress (skips internal useScroll) */
  progress?: MotionValue<number>;
  /** Render only the visual (parent owns scroll height) */
  embed?: boolean;
}

/**
 * Apple product-page style scroll-scrubbed image sequence
 * (e.g. iPhone / MacBook launch pages)
 */
function SequenceVisual({
  images,
  progress,
  className,
  stickyClassName,
  children,
  embed,
}: {
  images: { src: string; alt: string }[];
  progress: MotionValue<number>;
  className: string;
  stickyClassName: string;
  children?: React.ReactNode;
  embed?: boolean;
}) {
  const containerScale = useTransform(progress, [0, 0.5, 1], [0.94, 1, 0.98]);
  const glowOpacity = useTransform(progress, [0, 0.5, 1], [0.1, 0.35, 0.12]);

  const visual = (
    <div
      className={`${embed ? "relative w-full" : "sticky top-0 flex h-screen items-center justify-center overflow-hidden"} ${stickyClassName}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[var(--accent-warm)]/20 blur-[120px]"
        style={{ opacity: glowOpacity }}
      />
      <motion.div
        className={`glass-liquid relative overflow-hidden ${
          embed
            ? "w-full"
            : "aspect-[4/5] w-[min(92vw,520px)] md:aspect-square md:w-[min(72vw,640px)]"
        }`}
        style={{ scale: containerScale }}
      >
        {images.map((img, i) => (
          <SequenceFrame
            key={img.src}
            src={img.src}
            alt={img.alt}
            index={i}
            total={images.length}
            progress={progress}
          />
        ))}
        <div
          className={`absolute inset-0 bg-gradient-to-t ${
            embed
              ? "from-[var(--bg-dark)]/15 via-transparent to-transparent"
              : "from-[var(--bg-dark)]/50 via-transparent to-[var(--accent-warm)]/5"
          }`}
        />
        {children}
      </motion.div>
    </div>
  );

  if (embed) {
    return <div className={className}>{visual}</div>;
  }

  return visual;
}

export default function ScrollImageSequence({
  images,
  scrollHeight = "280vh",
  className = "",
  stickyClassName = "",
  children,
  scrollTargetRef,
  progress: externalProgress,
  embed = false,
}: ScrollImageSequenceProps) {
  const internalRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: scrollTargetRef ?? internalRef,
    offset: SCROLL_OFFSET.sequence,
  });
  const springProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    mass: 0.45,
  });
  const progress = externalProgress ?? springProgress;

  if (reduced || images.length === 0) {
    return (
      <div className={className}>
        {images[0] && (
          <img src={images[0].src} alt={images[0].alt} className="w-full object-cover" />
        )}
        {children}
      </div>
    );
  }

  const content = (
    <SequenceProgressContext.Provider value={progress}>
      <SequenceVisual
        images={images}
        progress={progress}
        className={className}
        stickyClassName={stickyClassName}
        embed={embed}
      >
        {children}
      </SequenceVisual>
    </SequenceProgressContext.Provider>
  );

  if (embed) return content;

  return (
    <div ref={internalRef} className={`relative ${className}`} style={{ height: scrollHeight }}>
      {content}
    </div>
  );
}
