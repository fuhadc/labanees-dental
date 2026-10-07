"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CLINIC_PHOTOS } from "@/lib/clinic-images";

const reasons = [
  {
    title: "EXPERIENCED DENTAL PROFESSIONALS",
    description:
      "Experienced dental professionals delivering precise, thoughtful and attentive care.",
  },
  {
    title: "PERSONALIZED TREATMENT PLANNING",
    description:
      "Every treatment plan is tailored around your individual needs, goals and expectations.",
  },
  {
    title: "MODERN TECHNOLOGY & ADVANCED TECHNIQUES",
    description:
      "Contemporary technology and refined techniques support precise and effective dental care.",
  },
  {
    title: "NATURAL, LONG-LASTING RESULTS",
    description:
      "A thoughtful approach focused on balanced, natural-looking and lasting results.",
  },
  {
    title: "COMFORTABLE & CARING EXPERIENCE",
    description:
      "A calm, welcoming environment designed around your comfort throughout your visit.",
  },
  {
    title: "PRECISION IN DENTISTRY",
    description:
      "A commitment to detail, quality and clinical precision at every stage of your care.",
  },
] as const;

export default function WhyChooseSection() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-label="Why Choose Lebanese Dental Clinic"
      className="relative overflow-hidden bg-[#050505] py-16 sm:py-24 md:py-32"
    >
      {/* Soft atmospheric background glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 h-[500px] -translate-y-1/2 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(197,160,89,0.05),transparent_70%)]"
        aria-hidden
      />

      <div className="page-container relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <header className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-[10px] uppercase tracking-[0.45em] text-[#c5a059] font-semibold min-[380px]:text-[11px]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            WHY CHOOSE US
          </motion.p>

          <motion.h2
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-3 font-serif text-[clamp(2.2rem,4.2vw,4.5rem)] font-normal italic leading-[1.08] text-[#f8f6f0] text-balance"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Exceptional care,
            <br />
            thoughtfully delivered.
          </motion.h2>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 sm:mt-5 font-sans text-sm sm:text-base md:text-lg font-light leading-relaxed text-white/70 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            At Lebanese Dental Clinic, every detail is considered — from diagnosis and treatment planning to your comfort and final result.
          </motion.p>
        </header>

        {/* Editorial Reasons List */}
        <div className="mx-auto mt-12 max-w-4xl sm:mt-16 md:mt-20">
          <div className="border-t border-[#c5a059]/15">
            {reasons.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={reduced ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: reduced ? 0 : idx * 0.08 }}
                className="group relative cursor-pointer block py-7 sm:py-9 md:py-11 border-b border-[#c5a059]/15 transition-transform duration-500 ease-out hover:-translate-y-1"
              >
                {/* Animated Gold Divider Highlight Line on Hover */}
                {!reduced && (
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[#c5a059] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                  />
                )}

                <div className="flex flex-col text-left">
                  <h3
                    className="font-sans text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.2em] sm:tracking-[0.22em] text-white/80 transition-all duration-500 group-hover:text-[#f8f6f0] group-hover:tracking-[0.25em]"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="mt-2.5 sm:mt-3 font-sans text-xs sm:text-sm md:text-base font-light leading-relaxed text-white/60 transition-colors duration-500 group-hover:text-white/90"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
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
            className="font-serif text-[clamp(1.25rem,2.2vw,1.95rem)] font-light italic leading-relaxed text-[#f8f6f0]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            “Because every smile is different —
            <br className="hidden sm:inline" /> your treatment should be too.”
          </p>

          <div className="mx-auto mt-6 h-px w-16 bg-[#c5a059]/80" />

          <div className="mt-5 font-sans text-[10px] min-[380px]:text-[11px] font-semibold uppercase tracking-[0.3em] text-white/80">
            LEBANESE DENTAL CLINIC
            <p className="mt-1.5 text-[9px] min-[380px]:text-[10px] tracking-[0.25em] text-white/45 font-normal">
              PRECISION IN DENTISTRY. CONFIDENCE IN YOUR SMILE.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
