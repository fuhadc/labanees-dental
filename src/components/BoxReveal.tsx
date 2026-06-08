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
  const inView = useInView(ref, { once: true, amount: 0.06, margin: "0px 0px -40px 0px" });
  const reduced = useReducedMotion();
  const [forced, setForced] = useState(!!reduced);

  useEffect(() => {
    if (reduced || immediate) {
      setForced(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setForced(true);
      },
      { threshold: 0.04, rootMargin: "100px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduced, immediate]);

  const show = reduced || immediate || inView || forced;
  const classes = `box-reveal ${framed ? "box-frame" : ""} ${show ? "is-revealed" : ""} ${className}`.trim();
  const variants = boxRevealVariants(origin, delay);

  const motionProps = show
    ? { initial: false, animate: "visible" as const }
    : immediate
      ? { initial: "hidden" as const, animate: "visible" as const }
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

interface BoxRevealGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BoxRevealGrid({ children, className = "" }: BoxRevealGridProps) {
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
  /** Use inside BoxRevealStagger — inherits parent animation */
  stagger?: boolean;
}) {
  const reduced = useReducedMotion();
  const variants = boxRevealVariants(origin, delay);
  const classes = `box-reveal box-frame ${className}`.trim();

  if (stagger) {
    return (
      <motion.article variants={boxStaggerItem} className={classes}>
        <span className="box-corner" aria-hidden />
        {children}
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={reduced ? false : "hidden"}
      whileInView={reduced ? undefined : "visible"}
      viewport={{ once: true, amount: 0.06, margin: "0px 60px 0px 60px" }}
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
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : "hidden"}
      whileInView={reduced ? undefined : "visible"}
      viewport={viewport}
      variants={boxStaggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default BoxReveal;
