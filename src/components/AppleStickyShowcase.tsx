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
import { BoxReveal } from "@/components/BoxReveal";
import { MorphPanel, ScrollImageSequence } from "@/components/apple";
import { SCROLL_OFFSET, sequenceFrameOpacity } from "@/lib/apple-scroll";
import { getShowcaseScrollVh, useViewport } from "@/hooks/useViewport";
import { CLINIC_PHOTOS } from "@/lib/clinic-images";

const slides = [
  {
    title: "A Warm Welcome",
    body: "Step into our Muscat reception — refined interiors, calm lighting, and a team ready to greet you from the moment you arrive.",
    image: CLINIC_PHOTOS.reception.src,
    alt: CLINIC_PHOTOS.reception.alt,
  },
  {
    title: "Quiet Comfort",
    body: "Unwind in our waiting lounge — spacious seating, soft light, and a serene atmosphere designed around your peace of mind.",
    image: CLINIC_PHOTOS.waitingLounge.src,
    alt: CLINIC_PHOTOS.waitingLounge.alt,
  },
  {
    title: "The Labanees Experience",
    body: "Our flagship lobby reflects the standard we bring to every treatment — precision, artistry, and quiet luxury throughout.",
    image: CLINIC_PHOTOS.lobby.src,
    alt: CLINIC_PHOTOS.lobby.alt,
  },
];

function SlideLine({
  index,
  total,
  progress,
  className,
  children,
  shift = 24,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
  className: string;
  children: React.ReactNode;
  shift?: number;
}) {
  const opacity = useTransform(progress, (v) => sequenceFrameOpacity(v, index, total, 0.48));
  const y = useTransform(progress, (v) => {
    const o = sequenceFrameOpacity(v, index, total, 0.48);
    return (1 - o) * shift;
  });
  const scale = useTransform(progress, (v) => {
    const o = sequenceFrameOpacity(v, index, total, 0.48);
    return 0.92 + o * 0.08;
  });

  return (
    <motion.div
      className={`absolute inset-x-0 top-0 flex flex-col items-center px-[var(--showcase-pad-x)] ${className}`}
      style={{ opacity, y, scale }}
    >
      {children}
    </motion.div>
  );
}

function SlideCopy({
  progress,
  shift,
}: {
  progress: MotionValue<number>;
  shift: number;
}) {
  return (
    <div className="showcase-copy mx-auto w-full max-w-3xl text-center">
      <div className="showcase-title-slot relative">
        {slides.map((slide, i) => (
          <SlideLine
            key={`title-${slide.title}`}
            index={i}
            total={slides.length}
            progress={progress}
            shift={shift}
            className="showcase-slide-title font-serif italic text-white"
          >
            {slide.title}
          </SlideLine>
        ))}
      </div>

      <div className="showcase-body-slot relative">
        {slides.map((slide, i) => (
          <SlideLine
            key={`body-${slide.title}`}
            index={i}
            total={slides.length}
            progress={progress}
            shift={shift * 0.75}
            className="showcase-slide-body font-light text-white/50"
          >
            <p className="showcase-slide-index font-display uppercase text-[var(--accent-warm)]/75">
              0{i + 1}
            </p>
            <p className="showcase-slide-text mt-4 text-pretty sm:mt-5">{slide.body}</p>
          </SlideLine>
        ))}
      </div>

      <div className="showcase-dots mt-8 flex items-center justify-center gap-3 sm:mt-10 sm:gap-4" aria-hidden>
        {slides.map((_, i) => (
          <SlideProgressDot key={i} index={i} total={slides.length} progress={progress} />
        ))}
      </div>
    </div>
  );
}

function SlideProgressDot({
  index,
  total,
  progress,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const width = useTransform(progress, (v) => {
    const o = sequenceFrameOpacity(v, index, total, 0.45);
    return `${1 + o * 3}rem`;
  });
  const opacity = useTransform(progress, (v) => {
    const o = sequenceFrameOpacity(v, index, total, 0.45);
    return 0.25 + o * 0.75;
  });

  return (
    <motion.span
      className="block h-px max-w-[4.5rem] flex-1 origin-center bg-[var(--accent-warm)] sm:flex-none sm:max-w-none"
      style={{ width, opacity }}
    />
  );
}

function ShowcaseHeader({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.15, 0.85, 1], [1, 1, 0.45, 0]);
  const y = useTransform(progress, [0, 1], [0, -48]);

  return (
    <motion.header
      style={{ opacity, y }}
      className="showcase-header mx-auto text-center"
    >
      <p className="showcase-eyebrow font-display uppercase text-[var(--accent-warm)]">
        The Labanees Standard
      </p>
      <h2 className="showcase-header-title mt-6 font-serif font-medium italic text-white sm:mt-8">
        Crafted like a flagship experience.
      </h2>
    </motion.header>
  );
}

export default function AppleStickyShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const viewport = useViewport();

  const scrollTrackVh = getShowcaseScrollVh(
    viewport.tier,
    slides.length,
    viewport.isShort || viewport.isLandscape,
  );

  const motionShift = viewport.isMobile ? 14 : viewport.isShort ? 18 : 24;

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: SCROLL_OFFSET.sequence,
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: viewport.isTouch ? 120 : 100,
    damping: viewport.isTouch ? 32 : 28,
    mass: 0.35,
  });

  const sectionDataAttrs = {
    "data-vp": viewport.tier,
    "data-short": viewport.isShort ? "true" : "false",
    "data-landscape": viewport.isLandscape ? "true" : "false",
  };

  return (
    <section
      aria-label="Treatment showcase"
      className="showcase-standard relative bg-[var(--bg-dark)]"
      {...sectionDataAttrs}
    >
      <div className="showcase-ambient pointer-events-none absolute inset-x-0 top-0" aria-hidden />

      <div className="showcase-shell section-padding-x relative z-10 mx-auto">
        {reduced ? (
          <>
            <BoxReveal origin="bottom" className="showcase-header mx-auto text-center">
              <p className="showcase-eyebrow font-display uppercase text-[var(--accent-warm)]">
                The Labanees Standard
              </p>
              <h2 className="showcase-header-title mt-6 font-serif italic text-white sm:mt-8">
                Crafted like a flagship experience.
              </h2>
            </BoxReveal>
            <div className="showcase-reduced-grid mx-auto">
              {slides.map((slide) => (
                <MorphPanel key={slide.title} glass>
                  <div className="p-6 text-center sm:p-8">
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="showcase-reduced-img mb-6 w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <h3 className="showcase-slide-title font-serif italic">{slide.title}</h3>
                    <p className="showcase-slide-text mx-auto mt-4 text-white/50">{slide.body}</p>
                  </div>
                </MorphPanel>
              ))}
            </div>
          </>
        ) : (
          <div
            ref={scrollRef}
            className="showcase-scroll-track relative"
            style={{ height: `${scrollTrackVh}vh` }}
          >
            <ShowcaseHeader progress={progress} />

            <div className="showcase-sticky-pin">
              <div className="showcase-stage">
                <ScrollImageSequence
                  embed
                  progress={progress}
                  scrollTargetRef={scrollRef}
                  images={slides.map((s) => ({ src: s.image, alt: s.alt }))}
                  className="showcase-image-wrap w-full"
                  stickyClassName="flex justify-center"
                />

                <SlideCopy progress={progress} shift={motionShift} />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
