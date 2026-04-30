"use client";

import { useEffect } from "react";
import { motion, Variants, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

export interface HeroBannerProps {
  title: string;
  tagline?: string;
  label?: string;
  backgroundImage?: string;
  overlayOpacity?: number;
}

export default function HeroBanner({
  title,
  tagline = "Providing smiles with passion.",
  label,
  backgroundImage,
}: HeroBannerProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const background = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(212, 175, 55, 0.08), transparent 80%)`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
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

  const imageVariants: Variants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 0.9,
      transition: { duration: 2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      className="relative flex min-h-[100vh] flex-col justify-center overflow-hidden bg-[var(--bg-dark)] py-20 lg:py-0"
      aria-labelledby="hero-title"
    >
      {/* Background Layer: Atmospheric spotlight */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_40%_50%,rgba(197,163,116,0.12),transparent_60%)]" 
        />
        <motion.div 
          style={{ background }}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.03),transparent_40%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[var(--content-max-width)] w-full section-padding-x">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-32"
        >
          
          {/* Left Side: Content Area */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {label && (
              <motion.div 
                variants={itemVariants}
                className="flex items-center gap-4 mb-10"
              >
                <div className="h-px w-10 bg-[var(--accent-warm)] opacity-40" />
                <p
                  className="font-display text-[length:var(--text-hero-label)] font-medium uppercase tracking-[0.5em] text-[var(--accent-warm)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {label}
                </p>
              </motion.div>
            )}
            <motion.h1
              id="hero-title"
              variants={itemVariants}
              className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-medium leading-[0.95] tracking-tight text-white italic max-w-2xl"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {title}
            </motion.h1>
            {tagline && (
              <motion.p
                variants={itemVariants}
                className="mt-12 lg:mt-16 text-lg sm:text-xl font-light tracking-widest text-white/40 max-w-md leading-relaxed"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {tagline}
              </motion.p>
            )}
            
            <motion.div 
              variants={itemVariants}
              className="mt-16 lg:mt-24 flex flex-col sm:flex-row items-center gap-8 w-full lg:w-auto"
            >
              <a
                href="#booking"
                className="btn-animated group relative w-full sm:w-auto border border-[var(--accent-warm)] bg-[var(--accent-warm)] px-14 py-6 text-[10px] font-semibold uppercase tracking-[0.4em] text-black hover:bg-transparent hover:text-[var(--accent-warm)] transition-all duration-700 text-center shadow-[0_0_50px_rgba(197,163,116,0.1)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="relative z-10">Book Appointment</span>
              </a>
              <a
                href="#services"
                className="btn-animated w-full sm:w-auto border border-white/5 px-14 py-6 text-[10px] font-semibold uppercase tracking-[0.4em] text-white/50 hover:border-[var(--accent-warm)] hover:text-[var(--accent-warm)] transition-all duration-700 text-center backdrop-blur-xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Our Expertise
              </a>
            </motion.div>
          </div>

          {/* Right Side: Architectural Visual */}
          <div className="relative hidden lg:block">
            {/* Floating Glow */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-20 bg-[var(--accent-warm)]/10 blur-[120px] rounded-full" 
            />
            
            {/* Main Image Frame */}
            <motion.div 
              variants={imageVariants}
              className="relative z-10 aspect-[4/5] w-full overflow-hidden border border-white/5 p-6 bg-white/[0.02] backdrop-blur-[40px] shadow-[0_50px_100px_rgba(0,0,0,0.5)]"
            >
              {backgroundImage && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full w-full bg-cover bg-center opacity-90"
                  style={{ backgroundImage: `url(${backgroundImage})` }}
                />
              )}
            </motion.div>
            
            {/* Decorative Architectural Elements */}
            <motion.div 
              initial={{ width: 0, height: 0 }}
              animate={{ width: 200, height: 200 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="absolute -top-16 -right-16 border-t border-r border-[var(--accent-warm)]/20 z-0" 
            />
            
            {/* Experience Badge */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              whileHover={{ y: -10 }}
              className="absolute bottom-20 -left-20 z-20 bg-white/[0.04] backdrop-blur-[60px] border border-white/10 px-12 py-10 shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
            >
              <p className="font-serif text-5xl text-[var(--accent-warm)] italic leading-none">15+</p>
              <p className="font-display text-[10px] uppercase tracking-[0.4em] text-white/30 mt-4">Years of Mastery</p>
            </motion.div>
          </div>

        </motion.div>
      </div>

      {/* Scroll Indicator - Visible on Mobile too */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer group z-20"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <p className="font-display text-[8px] uppercase tracking-[0.6em] text-white/20 group-hover:text-[var(--accent-warm)] transition-colors duration-500">Scroll</p>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-16 md:h-24 bg-gradient-to-b from-[var(--accent-warm)]/40 via-[var(--accent-warm)]/10 to-transparent" 
        />
      </motion.div>
    </section>
  );
}
