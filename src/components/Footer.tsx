/**
 * Footer — Full-width dark panel, CTA and copyright.
 * Enhanced: elegant divider, modern CTA button style, generous spacing (reference).
 */

export interface FooterProps {
  /** Primary CTA text (e.g. "Book an appointment") */
  ctaText?: string;
  ctaHref?: string;
  /** Phone or contact line */
  contactLine?: string;
  /** Copyright text */
  copyright?: string;
}

export default function Footer({
  ctaText = "Book an appointment",
  ctaHref = "#booking",
  contactLine,
  copyright = `© ${new Date().getFullYear()} Lebanese Dental Clinic. All rights reserved.`,
}: FooterProps) {
  return (
    <footer className="bg-[var(--bg-dark-panel)] border-t border-[var(--border-subtle)] py-14 md:py-20">
      <div className="section-padding-x mx-auto max-w-[90rem] text-center">
        {ctaText && (
          <a
            href={ctaHref}
            className="btn-animated inline-block rounded border border-[var(--border-strong)] bg-[var(--accent-warm)] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-black hover:bg-transparent hover:text-[var(--accent-warm)]"
          >
            {ctaText}
          </a>
        )}
        {contactLine && (
          <p
            className="mt-5 text-[length:var(--text-body)] text-white/85"
            style={{ lineHeight: "var(--leading-relaxed)" }}
          >
            {contactLine}
          </p>
        )}
        <p className="mt-8 text-xs text-white/60 tracking-wide">{copyright}</p>
      </div>
    </footer>
  );
}
