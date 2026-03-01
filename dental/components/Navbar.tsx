'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#reviews', label: 'Reviews' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8 md:py-4">
        <Link
          href="#"
          className="text-xl font-bold tracking-tight text-white transition hover:text-dental-gold"
        >
          Lebanese Dental Clinic
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition hover:text-dental-gold"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+96896700335"
            className="btn-glow inline-flex items-center gap-2 rounded-lg bg-dental-gold px-5 py-2.5 text-sm font-semibold text-charcoal transition hover:scale-105"
          >
            <Calendar className="h-4 w-4" />
            Book Appointment
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-white/5 md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-white/90 hover:bg-white/5 hover:text-dental-gold"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+96896700335"
                onClick={() => setMobileOpen(false)}
                className="btn-glow mt-2 flex items-center justify-center gap-2 rounded-lg bg-dental-gold py-3 font-semibold text-charcoal"
              >
                <Calendar className="h-4 w-4" />
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
