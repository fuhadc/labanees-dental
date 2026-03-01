'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2568&auto=format&fit=crop';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Dental clinic"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-charcoal/70"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/75 to-charcoal"
          aria-hidden
        />
      </div>

      {/* Glassmorphism overlay bar at bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal to-transparent" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Transform Your Smile with{' '}
          <span className="text-dental-gold">Precision & Elegance</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 max-w-2xl text-lg text-white/80 sm:text-xl md:text-2xl"
        >
          Advanced Dental Implants & Cosmetic Dentistry in Muscat
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10"
        >
          <a
            href="tel:+96896700335"
            className="btn-glow inline-flex items-center gap-3 rounded-xl bg-dental-gold px-8 py-4 text-lg font-bold text-charcoal transition hover:scale-105 hover:shadow-glow-gold"
          >
            <Phone className="h-6 w-6" />
            Call Now: +968 9670 0335
          </a>
        </motion.div>
      </div>
    </section>
  );
}
