"use client";

import { useEffect, useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { spring, transition } from "@/lib/motion";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Smile Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#top");
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
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.1, 0.25, 0.5] }
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
    `link-underline whitespace-nowrap font-sans text-xs md:text-[13px] font-medium uppercase tracking-[0.16em] transition-colors duration-300 py-2 px-1 focus-visible:outline-none focus-visible:text-[var(--accent-warm)] ${
      activeHref === href
        ? "text-white after:scale-x-100"
        : "text-white/75 hover:text-white"
    }`;

  return (
    <header
      data-scrolled={scrolled ? "true" : "false"}
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-[#080706]/85 backdrop-blur-md border-b border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent"
      }`}
      style={{
        transitionTimingFunction: "var(--ease-sflow)",
        paddingTop: "env(safe-area-inset-top, 0px)",
      }}
    >
      <div
        className={`page-container transition-all duration-300 ${
          scrolled ? "py-3.5 md:py-4" : "py-5 md:py-6"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Mobile hamburger button on the left */}
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-sm p-2 transition-colors duration-200 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-warm)]/50 md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls={mobileMenuId}
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={spring.nav}
              className="h-0.5 w-6 origin-center bg-white/90"
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={spring.nav}
              className="h-0.5 w-6 origin-center bg-white/90"
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={spring.nav}
              className="h-0.5 w-6 origin-center bg-white/90"
            />
          </button>

          {/* Logo - Centered on Mobile, Left-aligned on Desktop */}
          <a
            href="#top"
            className="flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-warm)]/50 md:justify-start"
            aria-label="Lebanese Dental Clinic home"
            onClick={() => setIsMenuOpen(false)}
          >
            {/* Desktop Full Logo */}
            <img
              src="/clinic/ldc-gold-logo.webp"
              alt="Lebanese Dental Clinic Logo"
              className="hidden h-9 md:h-10 lg:h-11 w-auto object-contain transition-transform duration-300 hover:opacity-90 md:block"
            />
            {/* Mobile Centered Logo Text / Icon */}
            <span
              className="block font-sans text-xs md:hidden font-light uppercase tracking-[0.3em] text-[var(--accent-warm)]"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              LABANEES
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-6 lg:gap-8 xl:gap-10 md:flex"
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
              className="rounded-none border border-[var(--accent-warm)] bg-[var(--accent-warm)] px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0c0a07] transition-all duration-300 hover:bg-[var(--accent-warm-hover)] hover:shadow-[0_2px_16px_rgba(197,160,89,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Book Appointment
            </a>
          </nav>

          {/* Symmetrical placeholder for mobile centering */}
          <div className="h-10 w-10 md:hidden" aria-hidden="true" />
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id={mobileMenuId}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={transition.medium}
            className="fixed inset-0 z-[1000] flex h-screen w-full flex-col overflow-y-auto bg-[#080706]/98 backdrop-blur-xl md:hidden"
          >
            <div className="page-container flex min-h-full flex-col py-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <img
                  src="/clinic/ldc-gold-logo.webp"
                  alt="Lebanese Dental Clinic Logo"
                  className="h-8 w-auto object-contain"
                />
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-white/40 hover:text-white"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              <nav className="my-8 flex flex-col gap-5" aria-label="Mobile navigation">
                {navLinks.map(({ label, href }, idx) => (
                  <motion.a
                    key={label}
                    href={href}
                    initial={{ x: -16, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -16, opacity: 0 }}
                    transition={{ ...transition.medium, delay: 0.05 + idx * 0.04 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex items-center justify-between border-b border-white/5 pb-3 focus-visible:outline-none"
                  >
                    <span className="font-serif text-2xl font-normal text-white/90 transition-colors group-hover:text-[var(--accent-warm)]">
                      {label}
                    </span>
                    <span className="text-[var(--accent-warm)] opacity-0 transition-opacity group-hover:opacity-100">
                      →
                    </span>
                  </motion.a>
                ))}
              </nav>

              <div className="mb-8">
                <a
                  href="#booking"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex w-full items-center justify-center bg-[var(--accent-warm)] py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#0c0a07] transition-all hover:bg-[var(--accent-warm-hover)]"
                >
                  Book Appointment
                </a>
              </div>

              <div className="mt-auto border-t border-white/10 pt-6">
                <div className="grid grid-cols-2 gap-6 text-xs text-white/70">
                  <div>
                    <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-[var(--accent-warm)]">
                      Contact
                    </p>
                    <a href="tel:+96896700335" className="block hover:text-white">
                      +968 9670 0335
                    </a>
                    <a href="mailto:info@labanees.com" className="mt-1 block hover:text-white">
                      info@labanees.com
                    </a>
                  </div>
                  <div>
                    <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-[var(--accent-warm)]">
                      Location
                    </p>
                    <p className="text-white/70">18th November St, Muscat, Oman</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
