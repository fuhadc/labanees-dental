"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

export default function JobsSection() {
  return (
    <section id="jobs" aria-label="Careers" className="bg-[var(--bg-dark)]">
      <SectionHeader title="Jobs & Careers" align="center" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="section-padding-x section-padding-y mx-auto max-w-3xl text-center"
      >
        <p 
          className="text-lg font-light leading-relaxed text-white/40 italic"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          We are constantly seeking visionary dental professionals and clinical coordinators 
          who share our dedication to absolute precision and patient-centered excellence.
        </p>
        <div className="mt-12 space-y-4">
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-medium">
            Direct Inquiry
          </p>
          <motion.p 
            whileHover={{ scale: 1.05 }}
            className="font-display text-base uppercase tracking-[0.3em] text-[var(--accent-warm)] cursor-pointer"
            style={{ fontFamily: "var(--font-display)" }}
          >
            careers@labanees.com
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

