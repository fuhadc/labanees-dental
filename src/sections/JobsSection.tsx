"use client";

import SectionHeader from "@/components/SectionHeader";
import { BoxReveal } from "@/components/BoxReveal";

export default function JobsSection() {
  return (
    <section aria-label="Careers" className="bg-transparent">
      <SectionHeader title="Jobs & Careers" align="center" />

      <div className="page-container max-w-3xl pb-[var(--space-section-y)]">
        <BoxReveal origin="bottom" className="box-inner-padding text-center">
          <p className="text-lg font-light italic leading-relaxed text-white/40">
            We are constantly seeking visionary dental professionals and clinical coordinators who
            share our dedication to absolute precision and patient-centered excellence.
          </p>
          <div className="mt-12 space-y-4">
            <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/20">
              Direct Inquiry
            </p>
            <p
              className="cursor-pointer font-display text-base uppercase tracking-[0.3em] text-[var(--accent-warm)] transition-opacity hover:opacity-80"
              style={{ fontFamily: "var(--font-display)" }}
            >
              careers@labanees.com
            </p>
          </div>
        </BoxReveal>
      </div>
    </section>
  );
}
