"use client";

import { useEffect } from "react";

/** Prevents stuck horizontal scroll after touch interactions (e.g. before/after slider). */
export default function ResponsiveFix() {
  useEffect(() => {
    const resetHorizontalScroll = () => {
      document.documentElement.scrollLeft = 0;
      document.body.scrollLeft = 0;
    };

    resetHorizontalScroll();
    window.addEventListener("orientationchange", resetHorizontalScroll);
    window.addEventListener("resize", resetHorizontalScroll);

    return () => {
      window.removeEventListener("orientationchange", resetHorizontalScroll);
      window.removeEventListener("resize", resetHorizontalScroll);
    };
  }, []);

  return null;
}
