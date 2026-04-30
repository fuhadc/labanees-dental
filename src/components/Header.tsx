"use client";

import { useEffect, useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Before / After", href: "#before-after" },
  { label: "Treatments", href: "#services" },
  { label: "Orthodontics", href: "#orthodontics" },
  { label: "Team", href: "#team" },
  { label: "Jobs", href: "#jobs" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuId = useId();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--bg-dark)]/80 backdrop-blur-xl border-b border-white/5">
      <div className="section-padding-x flex items-center justify-between gap-6 py-8">
        <div className="mx-auto flex max-w-[var(--content-max-width)] w-full items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-3 group"
            aria-label="Lebanese Dental Clinic Home"
            onClick={() => setIsMenuOpen(false)}
          >
            <span
              className="font-serif text-2xl md:text-3xl font-medium tracking-tighter text-white italic transition-all duration-700 group-hover:tracking-widest"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Labanees <span className="text-[var(--accent-warm)] transition-colors duration-700 group-hover:text-white">Dental</span>
            </span>
          </a>
          <nav
            className="hidden items-center gap-12 md:flex"
            aria-label="Main navigation"
          >
            {navLinks.map(({ label, href }) => (
              <Magnetic key={label}>
                <a
                  href={href}
                  className="font-display text-[10px] font-medium uppercase tracking-[0.3em] text-white/40 transition-all duration-500 hover:text-[var(--accent-warm)] hover:tracking-[0.4em] py-2 px-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {label}
                </a>
              </Magnetic>
            ))}
            <Magnetic>
              <a
                href="#booking"
                className="group relative overflow-hidden border border-[var(--accent-warm)]/30 px-10 py-3.5 text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--accent-warm)] transition-all duration-500 hover:bg-[var(--accent-warm)] hover:text-black shadow-[0_0_30px_rgba(197,163,116,0.05)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Appointment
              </a>
            </Magnetic>
            <div className="flex items-center gap-5 ml-4 border-l border-white/10 pl-8">
              <a 
                href="https://www.instagram.com/lebanese_dental_clinic/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/20 hover:text-[var(--accent-warm)] transition-colors duration-500"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a 
                href="https://www.facebook.com/Lebanese-Dental-Clinic-Oman-102553921535492/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/20 hover:text-[var(--accent-warm)] transition-colors duration-500"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.324v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </a>
            </div>
          </nav>
          
          <button
            type="button"
            className="flex flex-col gap-2 md:hidden rounded p-2 transition-colors duration-200 hover:bg-white/5 focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
              className="h-0.5 w-6 bg-white/90 origin-center"
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="h-0.5 w-6 bg-white/90"
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
              className="h-0.5 w-6 bg-white/90 origin-center"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id={mobileMenuId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] h-screen w-full bg-[var(--bg-dark)] md:hidden"
          >
            {/* Animated Background Decor */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                  opacity: [0.05, 0.1, 0.05]
                }}
                transition={{ duration: 20, repeat: Infinity }}
                className="absolute -top-1/4 -right-1/4 w-[150%] aspect-square border border-[var(--accent-warm)]/10 rounded-full" 
              />
            </div>

            <div className="relative flex flex-col h-full section-padding-x py-24">
              <div className="flex items-center justify-between mb-20">
                <span className="font-serif text-xl italic text-white/40">Labanees</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 text-white/60"
                >
                  ✕
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {navLinks.map(({ label, href }, idx) => (
                  <motion.a
                    key={label}
                    href={href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ delay: 0.1 + (idx * 0.05), duration: 0.5 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex items-center gap-6"
                  >
                    <span className="font-serif text-4xl text-white/80 group-hover:text-[var(--accent-warm)] italic transition-colors">
                      {label}
                    </span>
                    <motion.div 
                      className="h-[1px] flex-1 bg-[var(--accent-warm)]/10 origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.a>
                ))}
              </nav>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
                className="mt-auto pt-12 border-t border-white/5"
              >
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.3em] text-white/20 mb-4">Contact</p>
                    <p className="text-xs text-white/60">+968 9670 0335</p>
                    <p className="text-xs text-white/60">info@labanees.com</p>
                  </div>
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.3em] text-white/20 mb-4">Visit Us</p>
                    <p className="text-xs text-white/60 text-balance">18th November St, Muscat, Oman</p>
                  </div>
                </div>
                <div className="mt-12 flex gap-6">
                   {/* Social links placeholder */}
                   <div className="w-8 h-8 rounded-full border border-white/10" />
                   <div className="w-8 h-8 rounded-full border border-white/10" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
