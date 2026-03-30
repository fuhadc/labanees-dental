/**
 * HeroBanner — Full-width hero with background image and overlay.
 * Enhanced: typography scale (label / title / tagline), subtle overlay gradient,
 * elegant serif main heading, improved contrast (reference-inspired).
 */

export interface HeroBannerProps {
  title: string;
  tagline?: string;
  /** Optional small label above title (e.g. "Welcome to") */
  label?: string;
  backgroundImage?: string;
  /** Optional overlay opacity 0–1 (fallback if gradient not used) */
  overlayOpacity?: number;
}

export default function HeroBanner({
  title,
  tagline = "Providing smiles with passion.",
  label,
  backgroundImage,
  overlayOpacity = 0.55,
}: HeroBannerProps) {
  return (
    <section
      className="relative flex min-h-[50vh] flex-col items-center justify-center px-4 py-16 sm:py-20 md:min-h-[60vh] md:py-28"
      aria-labelledby="hero-title"
    >
      {/* Background image — no blur for sharper look; overlay for contrast */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundImage ? (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              data-hero-parallax="true"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            {/* Gradient overlay for heading contrast (reference: darkens image, keeps text legible) */}
            <div
              className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/70"
              aria-hidden
            />
          </>
        ) : (
          <div className="absolute inset-0 bg-[var(--bg-charcoal)]" />
        )}
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {label && (
          <p
            className="text-[length:var(--text-hero-label)] font-normal uppercase tracking-[0.2em] text-white/90"
            style={{ letterSpacing: "0.2em" }}
            data-animate="fade-up"
            data-animate-delay={0}
            data-animate-duration={1000}
          >
            {label}
          </p>
        )}
        <h1
          id="hero-title"
          className="mt-2 font-serif text-[length:var(--text-hero)] font-semibold leading-[1.15] tracking-[var(--tracking-heading)] text-white"
          style={{ fontFamily: "var(--font-serif)" }}
          data-animate="fade-up"
          data-animate-delay={150}
          data-animate-duration={1100}
        >
          {title}
        </h1>
        {tagline && (
          <p
            className="mt-4 text-[length:var(--text-hero-tagline)] font-light tracking-wide text-white/95"
            style={{ lineHeight: "var(--leading-relaxed)" }}
            data-animate="fade-up"
            data-animate-delay={300}
            data-animate-duration={1200}
          >
            {tagline}
          </p>
        )}
      </div>
    </section>
  );
}
