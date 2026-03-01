'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function LocationContact() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-charcoal" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-dental-gold"
        >
          Visit Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto max-w-2xl text-center text-3xl font-bold md:text-4xl"
        >
          Location & Opening Hours
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card mx-auto mt-16 max-w-2xl rounded-2xl p-8 md:p-10"
        >
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-dental-gold/10">
                <MapPin className="h-6 w-6 text-dental-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Address</h3>
                <p className="mt-1 text-white/80">
                  18th November Street, Muscat, Oman
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-dental-gold/10">
                <Clock className="h-6 w-6 text-dental-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Opening Hours</h3>
                <p className="mt-1 text-white/80">
                  9:00 AM – 8:00 PM Daily
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-dental-gold/10">
                <Phone className="h-6 w-6 text-dental-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Contact</h3>
                <a
                  href="tel:+96896700335"
                  className="mt-1 block text-dental-gold hover:underline"
                >
                  +968 9670 0335
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
