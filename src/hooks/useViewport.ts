"use client";

import { useEffect, useState } from "react";

export type ViewportTier = "mobile" | "tablet" | "desktop";

export interface ViewportState {
  tier: ViewportTier;
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  /** Short viewport (landscape phone, small laptop) */
  isShort: boolean;
  isLandscape: boolean;
  /** Coarse pointer — touch devices */
  isTouch: boolean;
}

function getTier(width: number): ViewportTier {
  if (width < 640) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
}

export function getShowcaseScrollVh(
  tier: ViewportTier,
  slideCount: number,
  isShort: boolean,
): number {
  const perSlide = { mobile: 36, tablet: 46, desktop: 55 }[tier];
  const lead = { mobile: 28, tablet: 38, desktop: 50 }[tier];
  const scale = isShort ? 0.82 : 1;
  return Math.round((perSlide * slideCount + lead) * scale);
}

const defaultState: ViewportState = {
  tier: "desktop",
  width: 1280,
  height: 800,
  isMobile: false,
  isTablet: false,
  isDesktop: true,
  isShort: false,
  isLandscape: false,
  isTouch: false,
};

export function useViewport(): ViewportState {
  const [state, setState] = useState<ViewportState>(defaultState);

  useEffect(() => {
    const touchMq = window.matchMedia("(hover: none), (pointer: coarse)");

    const update = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const tier = getTier(width);
      setState({
        tier,
        width,
        height,
        isMobile: tier === "mobile",
        isTablet: tier === "tablet",
        isDesktop: tier === "desktop",
        isShort: height < 720,
        isLandscape: width > height && height < 520,
        isTouch: touchMq.matches,
      });
    };

    update();
    window.addEventListener("resize", update, { passive: true });
    window.addEventListener("orientationchange", update, { passive: true });
    touchMq.addEventListener("change", update);

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
      touchMq.removeEventListener("change", update);
    };
  }, []);

  return state;
}
