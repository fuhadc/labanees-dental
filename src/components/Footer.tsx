"use client";

import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

export interface FooterProps {
  ctaText?: string;
  ctaHref?: string;
  contactLine?: string;
  copyright?: string;
}

export default function Footer({
  ctaText = "Book an appointment",
  ctaHref = "#booking",
  contactLine,
  copyright = `© ${new Date().getFullYear()} Labanees Dental. All rights reserved.`,
}: FooterProps) {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative bg-[var(--bg-dark)] border-t border-white/5 py-32 md:py-48 overflow-hidden"
    >
      {/* Background Statement */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
        <span className="font-serif text-[20vw] italic whitespace-nowrap leading-none tracking-tighter">
          Crafting Perfection
        </span>
      </div>

      <div className="relative z-10 section-padding-x mx-auto max-w-[var(--content-max-width)] text-center flex flex-col items-center">
        {ctaText && (
          <Magnetic>
            <motion.a
              href={ctaHref}
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group relative inline-block overflow-hidden border border-[var(--accent-warm)] bg-[var(--accent-warm)] px-16 py-6 text-[10px] font-bold uppercase tracking-[0.4em] text-black hover:bg-transparent hover:text-[var(--accent-warm)] transition-all duration-700 shadow-[0_0_60px_rgba(197,163,116,0.15)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {ctaText}
            </motion.a>
          </Magnetic>
        )}
        
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 120 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-auto" 
        />

        {contactLine && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 text-sm font-light text-white/30 tracking-widest italic"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {contactLine}
          </motion.p>
        )}

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-16 flex items-center justify-center gap-8"
        >
          <a 
            href="https://www.instagram.com/lebanese_dental_clinic/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/20 hover:text-[var(--accent-warm)] transition-all duration-500 hover:scale-110"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a 
            href="https://www.facebook.com/Lebanese-Dental-Clinic-Oman-102553921535492/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/20 hover:text-[var(--accent-warm)] transition-all duration-500 hover:scale-110"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.324v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
          </a>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-12 text-[9px] uppercase tracking-[0.5em] text-white/10"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {copyright}
        </motion.p>
      </div>
    </motion.footer>
  );
}
