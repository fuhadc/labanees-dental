"use client";

import SectionHeader from "@/components/SectionHeader";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { BEFORE_AFTER_TEETH } from "@/lib/before-after-images";
import AnimatedNumber from "@/components/AnimatedNumber";
import { BoxReveal, BoxRevealItem, BoxRevealStagger } from "@/components/BoxReveal";

const reviews = [
  {
    name: "Adam",
    text: "I had a great experience and was treated by Dr. Mariam. She was extremely professional, kind, and patient. She explained everything clearly and made me feel comfortable.",
    time: "2 months ago",
  },
  {
    name: "Angelyn Nunez",
    text: "The staff were very accommodating, professional, and kind, which made my visit a pleasant one. I highly recommend your clinic to anyone looking for quality dental care.",
    time: "3 months ago",
  },
  {
    name: "Ashraf Jarrar",
    text: "One of the best experiences I've ever had! The doctor is truly professional, her touch is very gentle, and her work is precise. I had a dental implant done and the process was smooth.",
    time: "4 months ago",
  },
  {
    name: "Jisha Mathew",
    text: "Excellent service. Very clean and professional. Dr. Sarah is very kind and explains everything well, making the patient feel at ease during the treatment.",
    time: "5 months ago",
  },
  {
    name: "Ammar Al-Balushi",
    text: "High praise for the clinic's hygiene standards and the professional expertise of the doctors. Specifically noting the high-quality results of the aesthetic treatments.",
    time: "6 months ago",
  },
];

export default function ReviewsSection() {
  return (
    <section
      id="before-after"
      aria-label="Patient Stories & Google Reviews"
      className="bg-transparent"
    >
      <SectionHeader title="Patient Stories" align="center" />

      <div className="section-padding-x section-padding-y mx-auto max-w-[90rem]">
        <div className="mb-20 grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <BoxReveal origin="left" className="px-8 py-10 md:px-12">
            <h3 className="mb-6 font-serif text-3xl italic md:text-4xl">
              Visible Transformations
            </h3>
            <p className="mb-8 font-light italic leading-relaxed text-white/60">
              Experience the precision and artistry of our cosmetic treatments. Our team of
              specialists works tirelessly to restore not just function, but the natural beauty of
              your smile.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="font-serif text-2xl text-[var(--accent-warm)]">
                  <AnimatedNumber value={500} suffix="+" />
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-white/40">
                  Smiles Restored
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl text-[var(--accent-warm)]">
                  <AnimatedNumber value={15} suffix="+" />
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-white/40">
                  Specialists
                </p>
              </div>
            </div>
          </BoxReveal>

          <BoxReveal origin="right" delay={0.08} className="relative p-4 md:p-6">
            <BeforeAfterSlider
              beforeImage={BEFORE_AFTER_TEETH.before.src}
              afterImage={BEFORE_AFTER_TEETH.after.src}
              beforeAlt={BEFORE_AFTER_TEETH.before.alt}
              afterAlt={BEFORE_AFTER_TEETH.after.alt}
            />
          </BoxReveal>
        </div>

        <BoxReveal
          origin="center"
          framed={false}
          accent={false}
          className="mb-10 text-center"
        >
          <p
            className="font-display text-[10px] uppercase tracking-[0.4em] text-[var(--accent-warm)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Verified Experiences
          </p>
          <div className="mt-4 flex items-center justify-center gap-1 text-[var(--accent-warm)]">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} aria-hidden className="text-sm">
                ★
              </span>
            ))}
            <span className="sr-only">5 out of 5 stars</span>
          </div>
        </BoxReveal>

        <BoxRevealStagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {reviews.map((review, i) => (
            <BoxRevealItem
              key={review.name}
              stagger
              className="flex flex-col justify-between px-5 py-8"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--accent-warm)]/20 bg-[var(--accent-warm)]/10 font-serif text-xs italic text-[var(--accent-warm)]">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium italic text-white">{review.name}</p>
                      <p className="mt-0.5 text-[10px] uppercase tracking-widest text-white/30">
                        {review.time}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 text-[10px] text-[var(--accent-warm)]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} aria-hidden>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className="mt-6 text-xs font-light italic leading-relaxed text-white/50">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4 text-[9px] font-medium uppercase tracking-[0.2em] text-white/20">
                <span>Google Review</span>
                <span className="text-[var(--accent-warm)]/40">Verified</span>
              </div>
            </BoxRevealItem>
          ))}
        </BoxRevealStagger>
      </div>
    </section>
  );
}
