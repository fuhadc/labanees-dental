"use client";

import { useEffect } from "react";

const SELECTOR = "[data-animate]";

export default function ScrollObserver() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const getCandidates = () =>
      Array.from(document.querySelectorAll<HTMLElement>(SELECTOR)).filter(
        (el) => !el.classList.contains("reveal-visible"),
      );

    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

    if (!("IntersectionObserver" in window) || prefersReduced) {
      getCandidates().forEach((el) => el.classList.add("reveal-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const target = entry.target as HTMLElement;

          const delay = target.dataset.animateDelay;
          const duration = target.dataset.animateDuration;
          if (delay) target.style.setProperty("--reveal-delay", `${delay}ms`);
          if (duration) target.style.setProperty("--reveal-duration", `${duration}ms`);

          target.classList.add("reveal-visible");
          observer.unobserve(target);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" },
    );

    const observeNew = () => getCandidates().forEach((el) => observer.observe(el));
    observeNew();

    const onRefresh = () => observeNew();
    window.addEventListener("reveal:refresh", onRefresh);

    return () => {
      observer.disconnect();
      window.removeEventListener("reveal:refresh", onRefresh);
    };
  }, []);

  return null;
}
