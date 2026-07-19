"use client";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { BEFORE_AFTER_TEETH } from "@/lib/before-after-images";
import AnimatedNumber from "@/components/AnimatedNumber";
import { BoxReveal } from "@/components/BoxReveal";

export default function ReviewsBeforeAfter() {
  return (
    <div className="mb-16 grid min-w-0 grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
      <BoxReveal origin="left" className="box-inner-padding min-w-0">
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

      <BoxReveal origin="right" delay={0.08} className="box-inner-padding min-w-0 overflow-hidden">
        <BeforeAfterSlider
          beforeImage={BEFORE_AFTER_TEETH.before.src}
          afterImage={BEFORE_AFTER_TEETH.after.src}
          beforeAlt={BEFORE_AFTER_TEETH.before.alt}
          afterAlt={BEFORE_AFTER_TEETH.after.alt}
        />
      </BoxReveal>
    </div>
  );
}
