"use client";

import { useState, useRef } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
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

  return (
    <div
      ref={containerRef}
      className="relative aspect-video w-full overflow-hidden border border-white/10 select-none cursor-col-resize group"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={handleStart}
      onTouchStart={handleStart}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchEnd={handleEnd}
    >
      <div className="absolute inset-0">
        <img
          src={afterImage}
          alt="After"
          className="h-full w-full object-cover"
          draggable={false}
        />
        <div className="absolute bottom-4 right-4 bg-black/60 px-3 py-1 text-[10px] uppercase tracking-widest text-white border border-white/10">
          After
        </div>
      </div>

      <div
        className="absolute inset-0 z-10 overflow-hidden border-r border-[var(--accent-warm)]"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt="Before"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: `${100 / (sliderPosition / 100)}%`, maxWidth: "none" }}
          draggable={false}
        />
        <div className="absolute bottom-4 left-4 bg-black/60 px-3 py-1 text-[10px] uppercase tracking-widest text-white border border-white/10">
          Before
        </div>
      </div>

      <div
        className="absolute inset-y-0 z-20 w-px bg-[var(--accent-warm)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-11 w-11 rounded-full border border-[var(--accent-warm)] bg-black/80 flex items-center justify-center text-[var(--accent-warm)]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 8 4 4-4 4M6 8l-4 4 4 4" />
          </svg>
        </div>
      </div>
    </div>
  );
}
