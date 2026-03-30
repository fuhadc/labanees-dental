"use client";

import { useEffect, useId, useState } from "react";

/**
 * Header — Top bar + main navigation.
 * Enhanced: soft border, refined spacing, smooth hover transitions (reference).
 */
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
    // Prevent background scroll when menu is open (mobile UX polish).
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    // Observe any reveal elements that became visible due to the menu opening.
    window.dispatchEvent(new Event("reveal:refresh"));
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--bg-dark-panel)] border-b border-[var(--border-subtle)] relative">
      {/* Top bar — contact strip */}
      <div className="relative z-50 border-b border-[var(--border-subtle)] px-4 py-2.5 md:px-8">
        <div className="mx-auto flex max-w-[90rem] items-center justify-end gap-4 text-[length:var(--text-nav)] uppercase tracking-[0.12em] text-[var(--accent-warm-soft)]">
          <a href="#contact" className="transition-colors duration-200 hover:text-white">
            Contact
          </a>
          <span className="text-white/30" aria-hidden>|</span>
          <a
            href="#booking"
            className="font-semibold text-[var(--accent-warm)] transition-colors duration-200 hover:text-white"
          >
            Online Appointment
          </a>
        </div>
      </div>
      {/* Main nav */}
      <div className="relative z-50 section-padding-x flex items-center justify-between gap-6 py-4">
        <div className="mx-auto flex max-w-[90rem] w-full items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-3"
            aria-label="Lebanese Dental Clinic Home"
            onClick={() => setIsMenuOpen(false)}
          >
            <span
              className="max-w-[70vw] truncate font-serif text-base font-semibold tracking-[0.08em] text-[var(--accent-warm)] sm:max-w-none sm:text-lg"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Lebanese Dental Clinic
            </span>
          </a>
          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Main navigation"
          >
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-[length:var(--text-nav)] font-medium uppercase tracking-wider text-white/85 transition-colors duration-200 hover:text-[var(--accent-warm)]"
              >
                {label}
              </a>
            ))}
            <a
              href="#booking"
              className="btn-animated inline-block rounded border border-[var(--border-strong)] bg-[var(--accent-warm)] px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-black hover:bg-transparent hover:text-[var(--accent-warm)]"
            >
              Online Appointment
            </a>
          </nav>
          {/* Mobile menu trigger */}
          <button
            type="button"
            className="flex flex-col gap-1.5 md:hidden rounded p-2 transition-colors duration-200 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-warm-soft)]"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls={mobileMenuId}
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            <span
              className={`h-0.5 w-6 bg-white/90 transition-transform duration-300 motion-reduce:transition-none ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white/90 transition-opacity duration-200 motion-reduce:transition-none ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white/90 transition-transform duration-300 motion-reduce:transition-none ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile backdrop */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 z-40 md:hidden bg-black/70 transition-opacity duration-300 motion-reduce:transition-none ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile menu panel */}
      <div
        id={mobileMenuId}
        className={`md:hidden border-t border-white/10 bg-[var(--bg-dark-panel)] absolute left-0 right-0 top-full z-50 origin-top transition-all duration-300 motion-reduce:transition-none ${
          isMenuOpen
            ? "opacity-100 translate-y-0 scale-y-100 pointer-events-auto"
            : "opacity-0 -translate-y-2 scale-y-95 pointer-events-none"
        }`}
      >
        <nav aria-label="Mobile navigation" className="section-padding-x py-4">
          <div className="mx-auto max-w-[90rem]">
            <div className="flex flex-col gap-3">
              {navLinks.map(({ label, href }, idx) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium uppercase tracking-wider text-white/90 transition-colors duration-200 hover:text-[var(--accent-warm)]"
                  data-animate="fade-up"
                  data-animate-delay={idx * 100}
                  data-animate-duration={600}
                >
                  {label}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setIsMenuOpen(false)}
                className="btn-animated mt-2 inline-block w-full rounded border border-[var(--border-strong)] bg-[var(--accent-warm)] px-5 py-3 text-center text-xs font-semibold uppercase tracking-widest text-black hover:bg-transparent hover:text-[var(--accent-warm)]"
                data-animate="fade-up"
                data-animate-delay={navLinks.length * 100}
                data-animate-duration={700}
              >
                Online Appointment
              </a>
              <div
                className="mt-4 text-xs leading-relaxed text-white/70"
                data-animate="fade-up"
                data-animate-delay={(navLinks.length + 1) * 100}
                data-animate-duration={700}
              >
                18th November Street, Muscat • 9:00 AM – 8:00 PM
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
