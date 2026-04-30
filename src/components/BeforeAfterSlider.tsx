"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

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
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
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

  useEffect(() => {
    // Initial animation hint
    const timer = setTimeout(() => {
      setSliderPosition(40);
      setTimeout(() => setSliderPosition(60), 1000);
      setTimeout(() => setSliderPosition(50), 2000);
    }, 1000);

    window.addEventListener("mouseup", handleEnd);
    window.addEventListener("touchend", handleEnd);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchend", handleEnd);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-video w-full overflow-hidden border border-white/10 select-none cursor-col-resize group"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={handleStart}
      onTouchStart={handleStart}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <img
          src={afterImage}
          alt="After"
          className="h-full w-full object-cover"
          draggable={false}
        />
        <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-widest text-white border border-white/10">
          After
        </div>
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 z-10 overflow-hidden border-r border-[var(--accent-warm)] shadow-[10px_0_30px_rgba(0,0,0,0.5)]"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt="Before"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: `${100 / (sliderPosition / 100)}%`, maxWidth: "none" }}
          draggable={false}
        />
        <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-widest text-white border border-white/10">
          Before
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute inset-y-0 z-20 w-px bg-[var(--accent-warm)] shadow-[0_0_20px_var(--accent-warm)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
          <div className="h-12 w-12 rounded-full border border-[var(--accent-warm)] bg-black/80 backdrop-blur-xl flex items-center justify-center text-[var(--accent-warm)] shadow-2xl transition-transform group-hover:scale-110">
            <svg
              width="24"
              height="24"
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
          <motion.p 
            initial={{ opacity: 0.6 }}
            animate={{ opacity: isResizing ? 0 : 0.6 }}
            className="text-[8px] uppercase tracking-[0.4em] text-white whitespace-nowrap bg-black/40 px-3 py-1 backdrop-blur-sm pointer-events-none"
          >
            Slide to see
          </motion.p>
        </div>
      </div>
    </div>
  );
}
