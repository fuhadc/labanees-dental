"use client";

import { motion, Variants } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import CardTilt from "@/components/CardTilt";

const team = [
  {
    name: "Dr. Wael Faisal",
    role: "Orthodontist",
    focus: "Specializing in advanced Invisalign® and functional orthodontics.",
    imageSrc: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&q=80",
  },
  {
    name: "Dr. Sahar Albeini",
    role: "Cosmetic Dentist",
    focus: "Expert in bespoke smile design and high-precision veneers.",
    imageSrc: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop&q=80",
  },
  {
    name: "Dr. Salma Al Jahdhami",
    role: "Oral Surgeon",
    focus: "Focused on surgical implantology and complex oral procedures.",
    imageSrc: "https://images.unsplash.com/photo-1537367636733-c242943e652c?auto=format&fit=crop&q=80&w=400&h=500",
  },
  {
    name: "Dr. May Eljaberi",
    role: "Aesthetic Specialist",
    focus: "Leading advanced skin health and aesthetic dermatology.",
    imageSrc: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop&q=80",
  },
];

export default function TeamSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="team" aria-label="Our doctors" className="bg-[var(--bg-dark)]">
      <SectionHeader title="Meet the Team" align="center" />

      <div className="section-padding-x section-padding-y mx-auto max-w-[90rem]">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex md:grid gap-8 overflow-x-auto pb-12 snap-x md:grid-cols-2 lg:grid-cols-4 no-scrollbar"
        >
          {team.map((doctor) => (
            <CardTilt key={doctor.name} className="flex flex-col flex-shrink-0 w-[85vw] md:w-auto snap-center">
              <motion.article
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="flex flex-col h-full border border-white/5 bg-[var(--bg-dark-panel)] px-8 py-10 shadow-2xl transition-all duration-500 hover:border-[var(--accent-warm)]/30 group"
              >
                <div className="mb-8 flex flex-col gap-6">
                  <div className="relative aspect-[4/5] w-full overflow-hidden border border-white/5 bg-[var(--bg-soft)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={doctor.imageSrc}
                      alt={doctor.name}
                      className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)] via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-700" />
                  </div>
                  <div>
                    <h3 
                      className="font-serif text-2xl font-medium text-white italic"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {doctor.name}
                    </h3>
                    <p 
                      className="mt-2 font-display text-[10px] uppercase tracking-[0.4em] text-[var(--accent-warm)]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {doctor.role}
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-white/40 font-light italic">
                  "{doctor.focus}"
                </p>
              </motion.article>
            </CardTilt>
          ))}
        </motion.div>
        
        {/* Mobile Swipe Indicator */}
        <div className="flex justify-center gap-3 md:hidden mt-8">
          {team.map((_, i) => (
            <div key={i} className="h-1 w-8 bg-white/5 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ scaleX: 0 }}
                 whileInView={{ scaleX: 1 }}
                 viewport={{ amount: 1 }}
                 className="h-full bg-[var(--accent-warm)]/40 origin-left" 
               />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

