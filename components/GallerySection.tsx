'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Images } from 'lucide-react';

const placeholders = [
  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
];

export default function GallerySection() {
  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-charcoal" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-dental-gold"
        >
          Gallery
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto max-w-2xl text-center text-3xl font-bold md:text-4xl"
        >
          Our Work & Environment
        </motion.p>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10"
            >
              <Image
                src={src}
                alt={`Gallery ${i + 1}`}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-charcoal/40 opacity-0 transition group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white opacity-0 transition group-hover:opacity-100">
                <Images className="h-5 w-5 text-dental-gold" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
