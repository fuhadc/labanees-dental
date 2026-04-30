"use client";

import { motion, Variants } from "framer-motion";

export interface FeatureDescriptionBlockProps {
  heading: string;
  description: string;
  items?: string[];
  id?: string;
  className?: string;
}

export default function FeatureDescriptionBlock({
  heading,
  description,
  items = [],
  id,
  className = "",
}: FeatureDescriptionBlockProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className={`bg-[var(--bg-dark)] py-24 md:py-40 section-padding-x ${className}`}
      aria-labelledby={id ? `block-heading-${id}` : undefined}
    >
      <div className="max-w-[var(--content-max-width)] mx-auto flex flex-col items-center text-center">
        <motion.h2
          id={id ? `block-heading-${id}` : undefined}
          variants={itemVariants}
          className="font-serif text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-white italic"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {heading}
        </motion.h2>
        
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 120 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mt-10 h-px bg-gradient-to-r from-transparent via-[var(--accent-warm)] to-transparent" 
        />

        <motion.p
          variants={itemVariants}
          className="mt-12 max-w-3xl text-lg md:text-xl font-light text-white/40 leading-relaxed tracking-wide italic"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {description}
        </motion.p>

        {items.length > 0 && (
          <ul className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-5xl">
            {items.map((item, i) => (
              <motion.li
                key={i}
                variants={itemVariants}
                className="flex flex-col items-center gap-6 text-sm font-light text-white/30 group"
              >
                <div className="relative">
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 + (i * 0.1) }}
                    className="h-px w-10 bg-[var(--accent-warm)] opacity-50 group-hover:w-16 transition-all duration-500 origin-center" 
                  />
                </div>
                <span className="tracking-[0.3em] uppercase text-[10px] group-hover:text-[var(--accent-warm)] transition-colors duration-500">{item}</span>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </motion.section>
  );
}
