'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Phone, Star } from 'lucide-react';

const quickLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#reviews', label: 'Reviews' },
];

const services = [
  'Dental Implants',
  'Hollywood Smile',
  'Veneers',
  'Cosmetic Dentistry',
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-charcoal py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand + rating */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h3 className="text-xl font-bold text-white">
              Lebanese Dental Clinic
            </h3>
            <div className="mt-3 flex items-center gap-1 text-dental-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
              <span className="ml-2 text-sm font-medium text-white/80">
                5.0 Google Rating
              </span>
            </div>
            <p className="mt-4 text-sm text-white/60">
              Advanced dental implants & cosmetic dentistry in Muscat. Your
              smile, our priority.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 transition hover:text-dental-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Our Services
            </h4>
            <ul className="mt-4 space-y-2">
              {services.map((name) => (
                <li key={name}>
                  <span className="text-white/70">{name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Contact Us block */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 border-t border-white/10 pt-12"
        >
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">
            Contact Us
          </h4>
          <div className="mt-4 flex flex-wrap gap-6 text-sm text-white/70">
            <a
              href="https://maps.google.com/?q=18th+November+Street+Muscat+Oman"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-dental-gold"
            >
              <MapPin className="h-4 w-4" />
              18th November Street, Muscat, Oman
            </a>
            <a
              href="tel:+96896700335"
              className="inline-flex items-center gap-2 transition hover:text-dental-gold"
            >
              <Phone className="h-4 w-4" />
              +968 9670 0335
            </a>
          </div>
        </motion.div>

        <p className="mt-8 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Lebanese Dental Clinic. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
