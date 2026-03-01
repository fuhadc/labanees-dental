'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Stethoscope, Smile, Gem, ArrowRight } from 'lucide-react';

const features = [
  {
    title: 'Dental Implants',
    description:
      'Restore your smile with permanent, natural-looking implants. Expert care for single or full-mouth restoration.',
    icon: Stethoscope,
    href: '#services',
  },
  {
    title: 'Hollywood Smile',
    description:
      'Complete smile makeovers with advanced cosmetic techniques. Achieve the radiant smile you deserve.',
    icon: Smile,
    href: '#services',
  },
  {
    title: 'Veneers',
    description:
      'Thin, custom shells that cover the front of teeth. Transform shape, color, and alignment with precision.',
    icon: Gem,
    href: '#services',
  },
];

export default function FeatureGrid() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal-light to-charcoal" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-dental-gold"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto max-w-2xl text-center text-3xl font-bold md:text-4xl"
        >
          Premium Dental Care for Your Best Smile
        </motion.p>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card group rounded-2xl p-8 transition hover:border-dental-gold/30 hover:shadow-glow-gold-sm"
            >
              <div className="mb-6 inline-flex rounded-xl bg-dental-gold/10 p-4 text-dental-gold transition group-hover:bg-dental-gold/20">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              <p className="mt-3 text-white/70">{feature.description}</p>
              <Link
                href={feature.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-dental-gold transition hover:gap-3"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
