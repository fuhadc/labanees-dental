"use client";

import { useEffect, useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { spring, transition } from "@/lib/motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Treatments", href: "#services" },
  { label: "Results", href: "#before-after" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#about");
  const mobileMenuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActiveHref(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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

  const linkClass = (href: string) =>
    `link-underline whitespace-nowrap font-sans text-xs md:text-[13px] font-medium uppercase tracking-[0.14em] transition-colors duration-300 py-2.5 px-1 focus-visible:outline-none focus-visible:text-[var(--accent-warm)] ${
      activeHref === href
        ? "text-white after:scale-x-100"
        : "text-white/75 hover:text-white"
    }`;

  return (
    <header
      data-scrolled={scrolled ? "true" : "false"}
      className={`fixed inset-x-0 top-0 z-50 w-full border-b transition-[padding,background,box-shadow,border-color] duration-500 ${
        scrolled
          ? "glass-nav border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
          : "border-transparent"
      }`}
      style={{
        transitionTimingFunction: "var(--ease-sflow)",
        paddingTop: "env(safe-area-inset-top, 0px)",
      }}
    >
      <div
        className={`page-container flex items-center justify-between gap-4 transition-[padding] duration-300 ${
          scrolled ? "py-4 md:py-5" : "py-5 md:py-7"
        }`}
      >
        <div className="flex w-full items-center justify-between gap-4">
          <a
            href="#top"
            className="flex shrink-0 flex-col gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-warm)]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            aria-label="Labanees Dental home"
            onClick={() => setIsMenuOpen(false)}
          >
            <span
              className="font-serif text-2xl md:text-3xl font-normal tracking-tight text-[var(--accent-warm)] leading-none"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Labanees
            </span>
            <span
              className="font-sans text-[9px] md:text-[10px] font-medium tracking-[0.2em] text-[var(--accent-warm)]/85 uppercase"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Aesthetic dental expert
            </span>
          </a>

          <nav
            className="hidden items-center gap-4 lg:gap-6 xl:gap-8 md:flex"
            aria-label="Main navigation"
          >
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={linkClass(href)}
                style={{ fontFamily: "var(--font-sans)" }}
                aria-current={activeHref === href ? "true" : undefined}
              >
                {label}
              </a>
            ))}
            <a
              href="#booking"
              className="rounded-sm border border-[var(--accent-warm)] bg-[var(--accent-warm)] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-black transition-colors duration-300 hover:bg-[var(--accent-warm-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Book Appointment
            </a>
            <div className="ml-2 hidden items-center gap-4 border-l border-[var(--accent-warm)]/30 pl-6 xl:flex">
              <a
                href="https://www.instagram.com/lebanese_dental_clinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent-warm)]/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/Lebanese-Dental-Clinic-Oman-102553921535492/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent-warm)]/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.324v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
            </div>
          </nav>

          <button
            type="button"
            className="flex flex-col gap-2 rounded p-2 transition-colors duration-200 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-warm)]/50 md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls={mobileMenuId}
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
              transition={spring.nav}
              className="h-0.5 w-6 origin-center bg-white/90"
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={spring.nav}
              className="h-0.5 w-6 origin-center bg-white/90"
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
              transition={spring.nav}
              className="h-0.5 w-6 origin-center bg-white/90"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id={mobileMenuId}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition.medium}
            className="fixed inset-0 z-[1000] h-screen w-full overflow-y-auto bg-[var(--bg-dark)] md:hidden"
          >
            <div className="page-container relative flex min-h-full flex-col py-14">
              <div className="mb-14 flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <span className="font-serif text-xl italic text-white/50">Labanees</span>
                  <span className="font-sans text-[9px] font-medium uppercase tracking-[0.2em] text-[var(--accent-warm)]/70">
                    Aesthetic dental expert
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-warm)]/50"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              <nav className="flex flex-col gap-5" aria-label="Mobile navigation">
                {navLinks.map(({ label, href }, idx) => (
                  <motion.a
                    key={label}
                    href={href}
                    initial={{ x: -16, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -16, opacity: 0 }}
                    transition={{ ...transition.medium, delay: 0.06 + idx * 0.04 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex items-center gap-5 focus-visible:outline-none"
                  >
                    <span className="font-serif text-3xl italic text-white/85 transition-colors group-hover:text-[var(--accent-warm)] sm:text-4xl">
                      {label}
                    </span>
                    <span className="h-px flex-1 origin-left bg-[var(--accent-warm)]/15" />
                  </motion.a>
                ))}
              </nav>

              <div className="mt-10">
                <a
                  href="#booking"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex w-full items-center justify-center bg-[var(--accent-warm)] py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-black"
                >
                  Book Appointment
                </a>
              </div>

              <div className="mt-auto border-t border-white/5 pt-10">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="mb-3 text-[9px] uppercase tracking-[0.3em] text-white/35">Contact</p>
                    <a href="tel:+96896700335" className="block text-xs text-white/70 hover:text-white">
                      +968 9670 0335
                    </a>
                    <a
                      href="mailto:info@labanees.com"
                      className="mt-1 block text-xs text-white/70 hover:text-white"
                    >
                      info@labanees.com
                    </a>
                  </div>
                  <div>
                    <p className="mb-3 text-[9px] uppercase tracking-[0.3em] text-white/35">Visit Us</p>
                    <a
                      href="https://maps.google.com/?q=Lebanese+Dental+Clinic+Muscat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-white/70 text-balance hover:text-white"
                    >
                      18th November St, Muscat, Oman
                    </a>
                  </div>
                </div>
                <div className="mt-8 flex gap-5">
                  <a
                    href="https://www.instagram.com/lebanese_dental_clinic/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[var(--accent-warm)]"
                    aria-label="Instagram"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/Lebanese-Dental-Clinic-Oman-102553921535492/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[var(--accent-warm)]"
                    aria-label="Facebook"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.324v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
