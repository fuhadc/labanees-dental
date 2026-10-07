"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CLINIC_PHOTOS } from "@/lib/clinic-images";

const reasons = [
  {
    number: "01",
    title: "EXPERIENCED PROFESSIONALS",
    description: "Experienced dental professionals delivering precise, thoughtful care.",
    image: CLINIC_PHOTOS.mainLobby.src,
    alt: CLINIC_PHOTOS.mainLobby.alt,
    tag: "CLINICAL TEAM",
  },
  {
    number: "02",
    title: "PERSONALIZED CARE",
    description: "Treatment planning tailored to each patient's individual needs.",
    image: CLINIC_PHOTOS.reception.src,
    alt: CLINIC_PHOTOS.reception.alt,
    tag: "PATIENT CONSULTATION",
  },
  {
    number: "03",
    title: "ADVANCED TECHNOLOGY",
    description: "Modern technology and advanced dental techniques.",
    image: CLINIC_PHOTOS.imagingSuite.src,
    alt: CLINIC_PHOTOS.imagingSuite.alt,
    tag: "IMAGING SUITE",
  },
  {
    number: "04",
    title: "NATURAL RESULTS",
    description: "A focus on balanced, natural-looking and long-lasting results.",
    image: CLINIC_PHOTOS.waitingLounge.src,
    alt: CLINIC_PHOTOS.waitingLounge.alt,
    tag: "AESTHETIC DENTISTRY",
  },
  {
    number: "05",
    title: "PATIENT COMFORT",
    description: "A calm, comfortable and caring dental experience.",
    image: CLINIC_PHOTOS.lobby.src,
    alt: CLINIC_PHOTOS.lobby.alt,
    tag: "PRIVATE LOUNGE",
  },
  {
    number: "06",
    title: "TRUSTED PRECISION",
    description: "Precision in dentistry with a strong focus on quality and patient confidence.",
    image: CLINIC_PHOTOS.exterior.src,
    alt: CLINIC_PHOTOS.exterior.alt,
    tag: "MUSCAT FACILITY",
  },
] as const;

export default function WhyChooseSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const reduced = useReducedMotion();

  const activeReason = reasons[activeIdx];

  return (
    <section
      aria-label="Why Choose Lebanese Dental Clinic"
      className="relative overflow-hidden bg-[#06080b] py-16 sm:py-20 md:py-28"
    >
      {/* Soft atmospheric background glow */}
      <div
        className="pointer-events-none absolute -top-40 right-1/4 h-[550px] w-[650px] bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.06),transparent_70%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-1/3 h-[450px] w-[550px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.025),transparent_70%)]"
        aria-hidden
      />

      <div className="page-container relative z-10">
        {/* Asymmetric Editorial Desktop Composition */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 xl:gap-20">
          
          {/* Left Side: Oversized Headline + Cinematic Image Frame */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p
                className="font-display text-[10px] uppercase tracking-[0.45em] text-[#c5a059] font-semibold md:text-[11px]"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                WHY CHOOSE
              </p>
              <h2
                className="mt-3 font-serif text-[clamp(2.4rem,4.5vw,4.8rem)] font-normal italic leading-[1.04] text-[#f8f6f0] text-balance"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                WHY CHOOSE
                <br />
                LEBANESE
                <br />
                DENTAL CLINIC
              </h2>
              <p
                className="mt-4 max-w-md font-serif text-sm font-light italic leading-relaxed text-[#c5a059]/90 sm:text-base md:text-lg"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                “Because every smile is different — your treatment should be too.”
              </p>
            </motion.div>

            {/* Center Visual: Cinematic Responsive Image Frame */}
            <motion.div
              initial={reduced ? false : { opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[#080b10] shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10] lg:aspect-[4/3]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeReason.image}
                    src={activeReason.image}
                    alt={activeReason.alt}
                    initial={reduced ? false : { opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1.01 }}
                    exit={reduced ? undefined : { opacity: 0, scale: 0.99 }}
                    transition={{ duration: reduced ? 0 : 0.65, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full w-full object-cover"
                    draggable={false}
                  />
                </AnimatePresence>

                {/* Dark Vignette Overlay */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                  aria-hidden
                />

                {/* Floating Location Badge */}
                <div className="absolute left-5 bottom-5 flex items-center gap-2.5 rounded-full border border-white/15 bg-black/60 px-3.5 py-1.5 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c5a059]" />
                  <span className="font-display text-[9px] uppercase tracking-[0.25em] text-white/90 sm:text-[10px]">
                    LEBANESE DENTAL CLINIC — MUSCAT
                  </span>
                </div>

                {/* Top-Right Active Feature Tag */}
                <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/40 px-3 py-1 backdrop-blur-md">
                  <span className="font-display text-[9px] font-semibold uppercase tracking-[0.22em] text-[#c5a059]">
                    {activeReason.tag}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: The 6 Vertical Interactive Editorial Items */}
          <div className="flex flex-col gap-1 lg:pt-4" role="tablist" aria-label="Why Choose Us Features">
            {reasons.map((item, idx) => {
              const isActive = idx === activeIdx;
              return (
                <div
                  key={item.number}
                  role="tab"
                  tabIndex={0}
                  aria-selected={isActive}
                  aria-expanded={isActive}
                  aria-controls={`reason-panel-${idx}`}
                  id={`reason-tab-${idx}`}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => setActiveIdx(idx)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveIdx(idx);
                    }
                  }}
                  className={`group relative cursor-pointer py-4 px-3 sm:py-5 transition-all duration-400 border-b border-white/8 ${
                    isActive ? "bg-white/[0.025] translate-x-1" : "hover:bg-white/[0.01]"
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

                  <div className="flex items-start gap-4 sm:gap-6">
                    {/* Index Number */}
                    <span
                      className={`font-display text-sm tracking-[0.25em] transition-colors duration-300 font-semibold sm:text-base ${
                        isActive ? "text-[#c5a059]" : "text-white/30 group-hover:text-white/60"
                      }`}
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {item.number}
                    </span>

                    {/* Content Block */}
                    <div className="flex-1">
                      <h3
                        className={`font-sans text-xs font-semibold uppercase tracking-[0.22em] transition-colors duration-300 sm:text-sm ${
                          isActive ? "text-white" : "text-white/60 group-hover:text-white/90"
                        }`}
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        {item.title}
                      </h3>

                      {/* Smooth Collapsible / Fading Description */}
                      <div
                        id={`reason-panel-${idx}`}
                        role="region"
                        aria-labelledby={`reason-tab-${idx}`}
                        className={`overflow-hidden transition-all duration-400 ${
                          isActive ? "max-h-24 opacity-100 mt-2" : "max-h-0 opacity-0 md:max-h-20 md:opacity-40 md:mt-1.5 md:group-hover:opacity-75"
                        }`}
                      >
                        <p
                          className="font-sans text-xs font-light leading-relaxed text-white/80 sm:text-sm"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          {item.description}
                        </p>
                      </div>
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
            className="font-serif text-[clamp(1.2rem,1.8vw+0.8rem,1.85rem)] font-light italic leading-relaxed text-[#f8f6f0]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            “Because every smile is different —
            <br className="hidden sm:inline" /> your treatment should be too.”
          </p>

          <div className="mx-auto mt-5 h-px w-14 bg-[#c5a059]/80" />

          <div className="mt-5 font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-white/70 sm:text-[11px]">
            LEBANESE DENTAL CLINIC
            <p className="mt-1 text-[9px] tracking-[0.25em] text-white/40 font-normal sm:text-[10px]">
              Precision in dentistry. Confidence in your smile.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
