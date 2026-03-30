"use client";

/**
 * ScrollObserver
 * ---------------
 * Lightweight IntersectionObserver that toggles the `reveal-visible` class
 * on any element with a `data-animate` attribute.
 *
 * Usage in JSX:
 *   <div data-animate="fade-up" data-animate-delay={100} data-animate-duration={700}>...</div>
 *
 * Variants supported (via data-animate):
 *   - fade-up
 *   - fade-left
 *   - fade-right
 *   - zoom-in
 *
 * Durations & delays:
 *   - delay provided in milliseconds (stagger: 0, 100, 200, 300, ...)
 *   - duration defaults to 700ms, or can be overridden via `data-animate-duration`
 *
 * Respects `prefers-reduced-motion` by revealing content without animation.
 */

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
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Fallback: if IntersectionObserver is missing or user prefers reduced motion,
    // reveal everything instantly without animation.
    if (!("IntersectionObserver" in window) || prefersReduced) {
      getCandidates().forEach((el) => {
        el.classList.add("reveal-visible");
        el.style.removeProperty("--reveal-delay");
        el.style.removeProperty("--reveal-duration");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;

          const delay = target.dataset.animateDelay;
          const duration = target.dataset.animateDuration;

          if (delay) {
            target.style.setProperty("--reveal-delay", `${delay}ms`);
          }
          if (duration) {
            target.style.setProperty("--reveal-duration", `${duration}ms`);
          }

          target.classList.add("reveal-visible");
          observer.unobserve(target);
        });
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    const observeNew = () => {
      getCandidates().forEach((el) => observer.observe(el));
    };

    observeNew();

    // Allow components (e.g. mobile menus) to request observing new elements.
    const onRefresh = () => observeNew();
    window.addEventListener("reveal:refresh", onRefresh);

    // Subtle parallax for hero background image (desktop only)
    const hero = document.querySelector<HTMLElement>("[data-hero-parallax]");
    let rafId: number | null = null;

    if (hero && window.innerWidth >= 768) {
      const maxOffset = 40; // px

      const handleScroll = () => {
        if (rafId !== null) return;
        rafId = window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || window.pageYOffset || 0;
          const offset = Math.max(
            -maxOffset,
            Math.min(maxOffset, scrollY * 0.15),
          );
          hero.style.transform = `translate3d(0, ${offset}px, 0) scale(1.05)`;
          rafId = null;
        });
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      // Apply initial position
      handleScroll();

      return () => {
        observer.disconnect();
        window.removeEventListener("reveal:refresh", onRefresh);
        window.removeEventListener("scroll", handleScroll);
        if (rafId !== null) {
          window.cancelAnimationFrame(rafId);
        }
      };
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("reveal:refresh", onRefresh);
    };
  }, []);

  return null;
}

