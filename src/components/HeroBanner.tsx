"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { EASE_SFLOW } from "@/lib/apple-scroll";

export interface HeroBannerProps {
  backgroundImage?: string;
}

export default function HeroBanner({ backgroundImage = "/clinic/hero-smile-bg.webp" }: HeroBannerProps) {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.0, 1.05]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="hero-editorial relative flex min-h-[100dvh] w-full flex-col justify-between overflow-hidden bg-[#080706]"
      aria-labelledby="hero-title"
    >
      {/* Background Image with Crisp Smile Focal Point & Smooth Gradual Darkening */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <motion.div
          className="absolute inset-0 bg-cover bg-[center_12%] sm:bg-[center_15%] md:bg-center transition-all duration-500"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            y: reduced ? 0 : imageY,
            scale: reduced ? 1.0 : imageScale,
          }}
        />

        {/* Multi-tier gradient overlay to show top smile clearly while fading smoothly to solid dark brown/black bottom */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: `linear-gradient(180deg, 
              rgba(10, 8, 7, 0.22) 0%, 
              rgba(10, 8, 7, 0.40) 25%, 
              rgba(10, 8, 7, 0.78) 50%, 
              rgba(8, 7, 6, 0.95) 75%, 
              rgba(8, 7, 6, 1.0) 100%)`,
          }}
        />
      </div>

      {/* Main Container - Full viewport layout matching reference mockup */}
      <motion.div
        className="relative z-10 flex min-h-[100dvh] w-full flex-col justify-between pb-8 pt-[calc(var(--header-height)+1.5rem)] md:pb-12 md:pt-[calc(var(--header-height)+2.5rem)]"
        style={reduced ? undefined : { opacity: contentOpacity }}
      >
        {/* Top Flexible Spacer */}
        <div className="flex-1 min-h-[2rem]" aria-hidden />

        {/* Center Hero Content (Logo & Serif Headline) */}
        <div className="page-container mx-auto flex w-full max-w-lg flex-col items-center justify-center text-center md:max-w-2xl lg:max-w-3xl">
          
          {/* Gold Lebanese Dental Clinic Logo Mark */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE_SFLOW }}
            className="mb-5 flex w-full justify-center sm:mb-7"
          >
            <img
              src="/clinic/ldc-gold-logo.webp"
              alt="Lebanese Dental Clinic Logo"
              className="h-auto w-[250px] max-w-[78vw] object-contain drop-shadow-[0_4px_24px_rgba(0,0,0,0.65)] sm:w-[290px] md:w-[350px] lg:w-[390px]"
            />
          </motion.div>

          {/* Headline in Luxury White Didone Serif Display Font */}
          <motion.h1
            id="hero-title"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease: EASE_SFLOW }}
            className="font-serif text-[1.85rem] font-normal leading-[1.14] tracking-[0.05em] text-center uppercase text-[#f8f6f0] sm:text-3xl md:text-4xl lg:text-[3.25rem] drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
            style={{ fontFamily: "'Bodoni Moda', Didot, var(--font-bodoni), 'Playfair Display', Georgia, serif" }}
          >
            EXPERT DENTAL CARE.
          </motion.h1>

          {/* Thin Horizontal Gold Line */}
          <motion.div
            initial={reduced ? false : { opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE_SFLOW }}
            className="mt-4 h-[1px] w-12 bg-[#c5a059]/80 sm:mt-5 sm:w-16"
          />
        </div>

        {/* Bottom Flexible Spacer */}
        <div className="flex-1 min-h-[1.5rem]" aria-hidden />

        {/* SIDE-BY-SIDE BUTTONS AT THE BOTTOM */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: EASE_SFLOW }}
          className="page-container mx-auto flex w-full max-w-sm items-center justify-center gap-3 px-4 sm:max-w-md md:max-w-lg md:gap-4"
        >
          <a
            href="#booking"
            className="flex-1 flex items-center justify-center bg-[#c5a059] py-3.5 px-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#14110b] transition-all duration-300 hover:bg-[#d4b06a] hover:shadow-[0_4px_20px_rgba(197,160,89,0.35)] active:translate-y-0 text-center"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            BOOK APPOINTMENT
          </a>
          <a
            href="#about"
            className="flex-1 flex items-center justify-center border border-[#c5a059]/80 bg-transparent py-3.5 px-2 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.16em] text-[#c5a059] transition-all duration-300 hover:border-[#c5a059] hover:bg-[#c5a059]/10 hover:text-white active:translate-y-0 text-center"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            OUR CLINIC
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
