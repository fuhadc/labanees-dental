"use client";

import { motion, Variants } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

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
    text: "One of the best experiences I’ve ever had! The doctor is truly professional, her touch is very gentle, and her work is precise. I had a dental implant done and the process was smooth.",
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
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="before-after"
      aria-label="Patient Stories & Google Reviews"
      className="bg-[var(--bg-dark)]"
    >
      <SectionHeader title="Patient Stories" align="center" />

      <div className="section-padding-x section-padding-y mx-auto max-w-[90rem]">
        {/* New Before/After Slider Section */}
        <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-3xl md:text-4xl mb-6 italic">Visible Transformations</h3>
            <p className="text-white/60 leading-relaxed mb-8 font-light italic">
              Experience the precision and artistry of our cosmetic treatments. Our team of specialists works tirelessly to restore not just function, but the natural beauty of your smile.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-[var(--accent-warm)] text-2xl font-serif">500+</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Smiles Restored</p>
              </div>
              <div>
                <p className="text-[var(--accent-warm)] text-2xl font-serif">15+</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Specialists</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <BeforeAfterSlider 
              beforeImage="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop" 
              afterImage="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop"
            />
            <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-[var(--bg-dark-panel)] border border-[var(--accent-warm)]/20 p-4 flex items-center justify-center text-center hidden md:flex backdrop-blur-xl">
              <p className="text-[8px] uppercase tracking-[0.3em] leading-tight font-display">Precision Artistry</p>
            </div>
          </motion.div>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center font-display text-[10px] uppercase tracking-[0.4em] text-[var(--accent-warm)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Verified Experiences
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 flex items-center justify-center gap-1 text-[var(--accent-warm)]"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} aria-hidden className="text-sm">★</span>
          ))}
          <span className="sr-only">5 out of 5 stars</span>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {reviews.map((review) => (
            <motion.article
              key={review.name}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="flex flex-col justify-between border border-white/5 bg-white/[0.02] px-6 py-8 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-[var(--accent-warm)]/20"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-warm)]/10 text-[var(--accent-warm)] text-xs font-serif italic border border-[var(--accent-warm)]/20">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white italic">
                        {review.name}
                      </p>
                      <p className="text-[10px] text-white/30 uppercase tracking-widest mt-0.5">
                        {review.time}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 text-[var(--accent-warm)] text-[10px]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} aria-hidden>★</span>
                    ))}
                  </div>
                </div>
                <p className="mt-6 text-xs leading-relaxed text-white/50 font-light italic">
                  "{review.text}"
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between text-[9px] text-white/20 uppercase tracking-[0.2em] font-medium border-t border-white/5 pt-4">
                <span>Google Review</span>
                <span className="text-[var(--accent-warm)]/40">Verified</span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
