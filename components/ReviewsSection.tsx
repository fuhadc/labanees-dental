'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-charcoal-light" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-dental-gold"
        >
          Testimonials
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto max-w-2xl text-center text-3xl font-bold md:text-4xl"
        >
          What Our Patients Say
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card mx-auto mt-16 max-w-2xl rounded-2xl p-8 text-center"
        >
          <MessageCircle className="mx-auto h-12 w-12 text-dental-gold" />
          <p className="mt-6 text-lg text-white/80">
            &ldquo;Professional care and stunning results. My smile has never
            looked better. Highly recommend Lebanese Dental Clinic.&rdquo;
          </p>
          <p className="mt-4 font-semibold text-dental-gold">— Happy Patient</p>
          <div className="mt-6 flex justify-center gap-1 text-dental-gold">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="h-5 w-5 fill-current"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
