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
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCursorMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isResizing) return;
    handleCursorMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isResizing) return;
    handleCursorMove(e.touches[0].clientX);
  };

  const handleStart = () => setIsResizing(true);
  const handleEnd = () => setIsResizing(false);

  const imageStyle = {
    width: "100cqw",
    maxWidth: "none" as const,
    height: "100%",
    objectFit: "cover" as const,
    objectPosition: "center 42%",
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[3/2] w-full overflow-hidden border border-white/10 select-none cursor-col-resize group sm:aspect-[16/10]"
      style={{ containerType: "inline-size" }}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={handleStart}
      onTouchStart={handleStart}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchEnd={handleEnd}
      role="img"
      aria-label={`${beforeAlt}. Drag to compare with ${afterAlt}.`}
    >
      {/* After — restored teeth */}
      <div className="absolute inset-0">
        <img
          src={afterImage}
          alt={afterAlt}
          className="h-full w-full object-cover"
          style={{ objectPosition: "center 42%" }}
          draggable={false}
          loading="lazy"
        />
        <div className="absolute bottom-4 right-4 border border-white/10 bg-black/60 px-3 py-1 text-[10px] uppercase tracking-widest text-white">
          After
        </div>
      </div>

      {/* Before — pre-treatment teeth */}
      <div
        className="absolute inset-0 z-10 overflow-hidden border-r border-[var(--accent-warm)]"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt={beforeAlt}
          className="absolute left-0 top-0 h-full"
          style={imageStyle}
          draggable={false}
          loading="lazy"
        />
        <div className="absolute bottom-4 left-4 border border-white/10 bg-black/60 px-3 py-1 text-[10px] uppercase tracking-widest text-white">
          Before
        </div>
      </div>

      <div
        className="absolute inset-y-0 z-20 w-px bg-[var(--accent-warm)]"
        style={{ left: `${sliderPosition}%` }}
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
