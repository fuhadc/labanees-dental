"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  boxRevealVariants,
  boxStaggerContainer,
  boxStaggerItem,
  viewport,
  type BoxOrigin,
} from "@/lib/motion";

interface BoxRevealProps {
  children: React.ReactNode;
  origin?: BoxOrigin;
  delay?: number;
  framed?: boolean;
  accent?: boolean;
  immediate?: boolean;
  as?: "div" | "section";
  className?: string;
  id?: string;
}

function useForceVisible(
  ref: React.RefObject<HTMLElement | null>,
  opts: { reduced: boolean | null; immediate?: boolean },
) {
  const [forced, setForced] = useState(!!opts.reduced || !!opts.immediate);

  useEffect(() => {
    if (opts.reduced || opts.immediate) {
      setForced(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setForced(true);
      },
      { threshold: 0.02, rootMargin: "160px" },
    );
    obs.observe(el);

    // Safety: never leave content stuck invisible
    const timeout = window.setTimeout(() => setForced(true), 1800);

    return () => {
      obs.disconnect();
      window.clearTimeout(timeout);
    };
  }, [opts.reduced, opts.immediate, ref]);

  return forced;
}

export function BoxReveal({
  children,
  origin = "bottom",
  delay = 0,
  framed = true,
  accent = true,
  immediate = false,
  as = "div",
  className = "",
  id,
}: BoxRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, viewport);
  const reduced = useReducedMotion();
  const forced = useForceVisible(ref, { reduced, immediate });

  const show = !!reduced || immediate || inView || forced;
  const classes = `box-reveal ${framed ? "box-frame" : ""} ${show ? "is-revealed" : ""} ${className}`.trim();
  const variants = boxRevealVariants(origin, delay);

  const motionProps = show
    ? { initial: false as const, animate: "visible" as const }
    : { initial: "hidden" as const, whileInView: "visible" as const, viewport };

  const inner = (
    <>
      {accent && framed && <span className="box-corner" aria-hidden />}
      {children}
    </>
  );

  if (as === "section") {
    return (
      <motion.section
        id={id}
        ref={ref as React.RefObject<HTMLElement>}
        {...motionProps}
        variants={variants}
        className={classes}
      >
        {inner}
      </motion.section>
    );
  }

  return (
    <motion.div id={id} ref={ref} {...motionProps} variants={variants} className={classes}>
      {inner}
    </motion.div>
  );
}

export function BoxRevealGrid({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

export function BoxRevealItem({
  children,
  className = "",
  origin = "bottom",
  delay = 0,
  stagger = false,
}: {
  children: React.ReactNode;
  className?: string;
  origin?: BoxOrigin;
  delay?: number;
  stagger?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const inView = useInView(ref, viewport);
  const forced = useForceVisible(ref, { reduced });
  const variants = boxRevealVariants(origin, delay);
  const show = !!reduced || inView || forced;
  const classes = `box-reveal box-frame ${show ? "is-revealed" : ""} ${className}`.trim();

  if (stagger) {
    return (
      <motion.article
        ref={ref}
        variants={boxStaggerItem}
        className={classes}
        {...(show ? { initial: false, animate: "visible" as const } : {})}
      >
        <span className="box-corner" aria-hidden />
        {children}
      </motion.article>
    );
  }

  return (
    <motion.article
      ref={ref}
      initial={show ? false : "hidden"}
      animate={show ? "visible" : undefined}
      whileInView={show ? undefined : "visible"}
      viewport={viewport}
      variants={variants}
      className={classes}
    >
      <span className="box-corner" aria-hidden />
      {children}
    </motion.article>
  );
}

export function BoxRevealStagger({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const inView = useInView(ref, viewport);
  const forced = useForceVisible(ref, { reduced });
  const show = !!reduced || inView || forced;

  return (
    <motion.div
      ref={ref}
      initial={show ? false : "hidden"}
      animate={show ? "visible" : undefined}
      whileInView={show ? undefined : "visible"}
      viewport={viewport}
      variants={boxStaggerContainer}
      className={`${className} ${show ? "is-revealed" : ""}`.trim()}
    >
      {children}
    </motion.div>
  );
}

export default BoxReveal;
