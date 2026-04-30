"use client";

import { motion, Variants } from "framer-motion";

export interface ImageContentSectionProps {
  heading: string;
  description: string;
  items: string[];
  imageSrc: string;
  imageFallbackSrc?: string;
  imageAlt: string;
  imageFirst?: boolean;
  id?: string;
}

const DEFAULT_FALLBACK_IMAGE = "/placeholder-dental.svg";

export default function ImageContentSection({
  heading,
  description,
  items,
  imageSrc,
  imageFallbackSrc,
  imageAlt,
  imageFirst = true,
  id,
}: ImageContentSectionProps) {
  const fallback = imageFallbackSrc ?? DEFAULT_FALLBACK_IMAGE;

  const contentVariants: Variants = {
    hidden: { opacity: 0, x: imageFirst ? 50 : -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] }
    },
  };

  const contentBlock = (
    <motion.div
      variants={contentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="flex min-h-[300px] flex-col justify-center bg-[var(--bg-dark-panel)] px-8 py-16 md:min-h-[550px] md:px-24 md:py-24"
    >
      <motion.h3
        className="font-serif text-3xl font-medium tracking-tight text-white italic md:text-5xl"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {heading}
      </motion.h3>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-6 h-px bg-[var(--accent-warm)]" 
      />
      <p
        className="mt-10 text-base md:text-lg font-light text-white/50 leading-relaxed max-w-md"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        {description}
      </p>
      {items.length > 0 && (
        <ul className="mt-10 space-y-4">
          {items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + (i * 0.1) }}
              className="flex items-start gap-4 text-sm font-light text-white/40"
            >
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-warm)] opacity-50" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      )}
    </motion.div>
  );

  const imageBlock = (
    <motion.div 
      variants={imageVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="group relative min-h-[300px] w-full overflow-hidden bg-[var(--bg-charcoal)] md:min-h-[550px]"
    >
      <motion.img
        src={imageSrc}
        alt={imageAlt}
        loading="lazy"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        onError={(e) => {
          const img = e.currentTarget;
          if (img.dataset.fallbackApplied === "true") return;
          img.dataset.fallbackApplied = "true";
          img.src = fallback;
        }}
        className="h-full w-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)]/40 via-transparent to-transparent pointer-events-none" />
    </motion.div>
  );

  return (
    <section
      id={id}
      className="grid grid-cols-1 md:grid-cols-2 overflow-hidden border-b border-white/5"
    >
      {imageFirst ? (
        <>
          <div className="order-1 md:order-1">{imageBlock}</div>
          <div className="order-2 md:order-2">{contentBlock}</div>
        </>
      ) : (
        <>
          <div className="order-2 md:order-1">{contentBlock}</div>
          <div className="order-1 md:order-2">{imageBlock}</div>
        </>
      )}
    </section>
  );
}
