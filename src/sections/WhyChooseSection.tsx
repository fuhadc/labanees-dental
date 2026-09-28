"use client";

import { BoxReveal, BoxRevealItem, BoxRevealStagger } from "@/components/BoxReveal";

const reasons = [
  "Experienced dental professionals",
  "Personalized treatment planning",
  "Modern technology and advanced techniques",
  "Focus on natural, long-lasting results",
  "A comfortable and caring dental experience",
];

export default function WhyChooseSection() {
  return (
    <section aria-label="Why Choose Lebanese Dental Clinic" className="bg-transparent py-12 md:py-16">
      <div className="page-container">
        <div className="relative overflow-hidden border border-white/10 bg-[var(--bg-dark-panel)] p-8 sm:p-10 md:p-14 lg:p-16">
          {/* Subtle gold glow behind content */}
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-[300px] w-[500px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12),transparent_70%)]"
            aria-hidden
          />

          {/* Gold Corner Accents */}
          <span className="pointer-events-none absolute left-0 top-0 h-12 w-px bg-gradient-to-b from-[var(--accent-warm)] to-transparent" aria-hidden />
          <span className="pointer-events-none absolute left-0 top-0 h-px w-12 bg-gradient-to-r from-[var(--accent-warm)] to-transparent" aria-hidden />
          <span className="pointer-events-none absolute right-0 bottom-0 h-12 w-px bg-gradient-to-t from-[var(--accent-warm)] to-transparent" aria-hidden />
          <span className="pointer-events-none absolute right-0 bottom-0 h-px w-12 bg-gradient-to-l from-[var(--accent-warm)] to-transparent" aria-hidden />

          <BoxReveal origin="bottom" className="text-center">
            <p
              className="font-display text-[10px] uppercase tracking-[0.45em] text-[var(--accent-warm)] font-semibold md:text-[11px]"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              The Lebanese Dental Distinction
            </p>
            <h2
              className="mt-4 font-serif text-[clamp(1.85rem,2.5vw+1.2rem,3.5rem)] font-medium italic leading-[1.15] text-white"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Why Choose Lebanese Dental Clinic?
            </h2>
            <div className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-[var(--accent-warm)] to-transparent" />
          </BoxReveal>

          {/* List of 5 Reasons */}
          <BoxRevealStagger className="mt-10 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 md:mt-12">
            {reasons.map((reason, idx) => (
              <BoxRevealItem
                key={idx}
                stagger
                className="group flex items-start gap-4 border border-white/5 bg-white/[0.02] p-5 transition-all duration-300 hover:border-[var(--accent-warm)]/40 hover:bg-white/[0.04]"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--accent-warm)]/60 bg-[var(--accent-warm)]/10 text-[var(--accent-warm)] transition-transform duration-300 group-hover:scale-110">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p
                  className="text-sm md:text-base font-light leading-snug text-white/85 transition-colors duration-300 group-hover:text-white"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {reason}
                </p>
              </BoxRevealItem>
            ))}
          </BoxRevealStagger>

          {/* Closing Statements */}
          <BoxReveal origin="bottom" delay={0.15} className="mt-12 text-center border-t border-white/8 pt-8 md:mt-16 md:pt-10">
            <p
              className="font-serif text-[clamp(1.1rem,1vw+0.9rem,1.5rem)] font-light italic leading-relaxed text-[var(--accent-warm)]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Because every smile is different — your treatment should be too.
            </p>
            <p
              className="mt-4 font-sans text-xs md:text-sm font-medium uppercase tracking-[0.25em] text-white/70"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Lebanese Dental Clinic — Precision in dentistry. Confidence in your smile.
            </p>
          </BoxReveal>
        </div>
      </div>
    </section>
  );
}
