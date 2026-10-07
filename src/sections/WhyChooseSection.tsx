"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CLINIC_PHOTOS } from "@/lib/clinic-images";

const featureItems = [
  {
    number: "01",
    title: "EXPERIENCED PROFESSIONALS",
    description: "Expertise guided by precision, clinical excellence, and attention to detail.",
    image: CLINIC_PHOTOS.mainLobby.src,
    alt: CLINIC_PHOTOS.mainLobby.alt,
    label: "CLINICAL FACILITY",
  },
  {
    number: "02",
    title: "PERSONALISED TREATMENT",
    description: "Every treatment plan begins with a deep understanding of your individual goals.",
    image: CLINIC_PHOTOS.reception.src,
    alt: CLINIC_PHOTOS.reception.alt,
    label: "PATIENT RECEPTION",
  },
  {
    number: "03",
    title: "ADVANCED DENTISTRY",
    description: "Cutting-edge techniques in a serene, carefully considered environment.",
    image: CLINIC_PHOTOS.imagingSuite.src,
    alt: CLINIC_PHOTOS.imagingSuite.alt,
    label: "IMAGING SUITE",
  },
  {
    number: "04",
    title: "NATURAL RESULTS",
    description: "Restorations designed to look refined, balanced, and naturally harmonious.",
    image: CLINIC_PHOTOS.waitingLounge.src,
    alt: CLINIC_PHOTOS.waitingLounge.alt,
    label: "PRIVATE LOUNGE",
  },
];

export default function WhyChooseSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const reduced = useReducedMotion();

  const activeFeature = featureItems[activeIdx];

  return (
    <section
      aria-label="Why Lebanese Dental Clinic"
      className="relative overflow-hidden bg-[#05070a] py-16 sm:py-20 md:py-28"
    >
      {/* Soft atmospheric background glow */}
      <div
        className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[600px] bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.06),transparent_70%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-1/3 h-[400px] w-[500px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_70%)]"
        aria-hidden
      />

      <div className="page-container relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-left md:mx-0 md:max-w-4xl">
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-[10px] uppercase tracking-[0.45em] text-[#c5a059] font-semibold md:text-[11px]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            WHY LEBANESE DENTAL CLINIC
          </motion.p>
          
          <motion.h2
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 font-serif text-[clamp(2.1rem,4vw+1rem,4.5rem)] font-normal italic leading-[1.08] text-[#f8f6f0] text-balance"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Where precision meets
            <br className="hidden sm:inline" /> personalised care.
          </motion.h2>
        </div>

        {/* Asymmetric Editorial Grid (Image Left / Features Right) */}
        <div className="mt-12 grid grid-cols-1 items-center gap-10 md:mt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 xl:gap-20">
          
          {/* Left: Dominant Photography Display Frame */}
          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative order-2 overflow-hidden rounded-[24px] border border-white/10 bg-[#080b10] shadow-[0_20px_50px_rgba(0,0,0,0.6)] lg:order-1"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/11] lg:aspect-[4/3]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeFeature.image}
                  src={activeFeature.image}
                  alt={activeFeature.alt}
                  initial={reduced ? false : { opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1.01 }}
                  exit={reduced ? undefined : { opacity: 0, scale: 0.99 }}
                  transition={{ duration: reduced ? 0 : 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full w-full object-cover"
                  draggable={false}
                />
              </AnimatePresence>

              {/* Dark vignette overlay for depth */}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                aria-hidden
              />

              {/* Floating Luxury Location Badge */}
              <div className="absolute left-6 bottom-6 flex items-center gap-3 rounded-full border border-white/15 bg-black/60 px-4 py-2 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c5a059]" />
                <span className="font-display text-[9px] uppercase tracking-[0.28em] text-white/90 sm:text-[10px]">
                  LEBANESE DENTAL CLINIC — MUSCAT
                </span>
              </div>

              {/* Top Right Active Label */}
              <div className="absolute right-6 top-6 rounded-full border border-white/10 bg-black/40 px-3.5 py-1 backdrop-blur-md">
                <span className="font-display text-[9px] font-semibold uppercase tracking-[0.25em] text-[#c5a059]">
                  {activeFeature.label}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Editorial Interactive Horizontal Feature Lines */}
          <div className="order-1 flex flex-col gap-2 lg:order-2">
            {featureItems.map((item, idx) => {
              const isActive = idx === activeIdx;
              return (
                <div
                  key={item.number}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => setActiveIdx(idx)}
                  className={`group relative cursor-pointer py-5 px-3 transition-all duration-500 border-b border-white/8 ${
                    isActive ? "bg-white/[0.02]" : "hover:bg-white/[0.01]"
                  }`}
                >
                  {/* Gold active line indicator */}
                  <motion.div
                    className="absolute left-0 bottom-0 h-[2px] w-full bg-[#c5a059]"
                    initial={false}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformOrigin: "left center" }}
                  />

                  <div className="flex items-start gap-5 sm:gap-6">
                    {/* Index Number */}
                    <span
                      className={`font-display text-sm tracking-[0.25em] transition-colors duration-400 font-semibold sm:text-base ${
                        isActive ? "text-[#c5a059]" : "text-white/30 group-hover:text-white/60"
                      }`}
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {item.number}
                    </span>

                    {/* Content Block */}
                    <div className="flex-1">
                      <h3
                        className={`font-sans text-xs font-semibold uppercase tracking-[0.22em] transition-colors duration-400 sm:text-sm ${
                          isActive ? "text-white" : "text-white/60 group-hover:text-white/90"
                        }`}
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`mt-2 font-sans text-xs font-light leading-relaxed transition-all duration-400 sm:text-sm ${
                          isActive ? "text-white/85" : "text-white/40 group-hover:text-white/65"
                        }`}
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Minimal Editorial Bottom Statement */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 text-center md:mt-24"
        >
          <p
            className="font-serif text-[clamp(1.25rem,1.8vw+0.8rem,1.85rem)] font-light italic leading-relaxed text-[#f8f6f0]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Every smile is different. Your care should be too.
          </p>
          
          <div className="mx-auto mt-4 h-px w-12 bg-[#c5a059]/70" />
          
          <p
            className="mt-4 font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-white/50 sm:text-[11px]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            PRECISION IN DENTISTRY. CONFIDENCE IN YOUR SMILE.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
