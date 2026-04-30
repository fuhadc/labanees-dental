"use client";

import { motion, Variants } from "framer-motion";

export default function ClinicSection() {
  const DEFAULT_FALLBACK_IMAGE = "/placeholder-dental.svg";

  const images = [
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=1200&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&h=800&fit=crop&q=80",
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="clinic"
      aria-label="Our clinic interior"
      className="bg-[var(--bg-dark)] border-y border-white/5"
    >
      <div className="section-padding-x section-padding-y mx-auto max-w-[90rem]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p 
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white italic"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            The Sanctuary
          </p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 h-px bg-[var(--accent-warm)] mx-auto" 
          />
          <p 
            className="mt-6 font-display text-[10px] uppercase tracking-[0.4em] text-[var(--accent-warm)]/60"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Refining the patient experience
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="no-scrollbar overflow-x-auto pb-8 snap-x snap-mandatory"
        >
          <div className="flex min-w-max gap-8 px-4">
            {images.map((src, i) => (
              <motion.div
                key={src}
                variants={itemVariants}
                className="snap-start relative h-[300px] w-[350px] flex-shrink-0 overflow-hidden bg-white/[0.02] border border-white/5 md:h-[450px] md:w-[650px] group"
              >
                <motion.img
                  src={src}
                  alt="Clinic interior"
                  loading="lazy"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (img.dataset.fallbackApplied === "true") return;
                    img.dataset.fallbackApplied = "true";
                    img.src = DEFAULT_FALLBACK_IMAGE;
                  }}
                  className="h-full w-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)]/60 via-transparent to-transparent opacity-80 group-hover:opacity-20 transition-opacity duration-1000 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

