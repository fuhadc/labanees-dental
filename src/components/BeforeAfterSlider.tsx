"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Before treatment",
  afterAlt = "After treatment",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isResizing, setIsResizing] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateWidth = () => setContainerWidth(el.clientWidth);

    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(el);
    window.addEventListener("orientationchange", updateWidth);

    return () => {
      observer.disconnect();
      window.removeEventListener("orientationchange", updateWidth);
    };
  }, []);

  const handleCursorMove = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  }, []);

  const handleStart = useCallback(
    (clientX: number) => {
      setIsResizing(true);
      handleCursorMove(clientX);
    },
    [handleCursorMove],
  );

  const handleEnd = useCallback(() => {
    setIsResizing(false);
    document.documentElement.scrollLeft = 0;
    document.body.scrollLeft = 0;
  }, []);

  useEffect(() => {
    if (!isResizing) return;

    const onMouseMove = (e: MouseEvent) => handleCursorMove(e.clientX);
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      handleCursorMove(e.touches[0].clientX);
    };
    const onEnd = () => handleEnd();

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onEnd);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onEnd);
    window.addEventListener("touchcancel", onEnd);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onEnd);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onEnd);
      window.removeEventListener("touchcancel", onEnd);
    };
  }, [isResizing, handleCursorMove, handleEnd]);

  const beforeImageWidth = containerWidth > 0 ? containerWidth : undefined;

  return (
    <div
      ref={containerRef}
      className="before-after-slider relative aspect-[3/2] w-full max-w-full overflow-hidden border border-white/10 select-none cursor-col-resize touch-none"
      onMouseDown={(e) => {
        e.preventDefault();
        handleStart(e.clientX);
      }}
      onTouchStart={(e) => {
        handleStart(e.touches[0].clientX);
      }}
      role="img"
      aria-label={`${beforeAlt}. Drag to compare with ${afterAlt}.`}
    >
      {/* After */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={afterImage}
          alt={afterAlt}
          className="h-full w-full max-w-full object-cover"
          style={{ objectPosition: "center 42%" }}
          draggable={false}
          loading="lazy"
        />
        <div className="absolute bottom-4 right-4 border border-white/10 bg-black/60 px-3 py-1 text-[10px] uppercase tracking-widest text-white">
          After
        </div>
      </div>

      {/* Before — clipped to slider position */}
      <div
        className="absolute inset-y-0 left-0 z-10 overflow-hidden border-r border-[var(--accent-warm)]"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt={beforeAlt}
          className="absolute left-0 top-0 h-full max-w-none object-cover"
          style={{
            width: beforeImageWidth,
            objectPosition: "center 42%",
          }}
          draggable={false}
          loading="lazy"
        />
        <div className="absolute bottom-4 left-4 border border-white/10 bg-black/60 px-3 py-1 text-[10px] uppercase tracking-widest text-white">
          Before
        </div>
      </div>

      {/* Handle */}
      <div
        className="pointer-events-none absolute inset-y-0 z-20 w-px bg-[var(--accent-warm)]"
        style={{ left: `${sliderPosition}%` }}
        aria-hidden
      >
        <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--accent-warm)] bg-black/80 text-[var(--accent-warm)]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="m18 8 4 4-4 4M6 8l-4 4 4 4" />
          </svg>
        </div>
      </div>
    </div>
  );
}
