/**
 * FeatureDescriptionBlock — About/Welcome full-width text block.
 * Enhanced: elegant serif heading, divider, generous spacing, subtle background (reference).
 */

export interface FeatureDescriptionBlockProps {
  heading: string;
  description: string;
  items?: string[];
  /** Optional id for anchor */
  id?: string;
  className?: string;
}

export default function FeatureDescriptionBlock({
  heading,
  description,
  items = [],
  id,
  className = "",
}: FeatureDescriptionBlockProps) {
  return (
    <section
      id={id}
      className={`bg-[var(--bg-dark-panel)] content-padding ${className}`}
      aria-labelledby={id ? `block-heading-${id}` : undefined}
      data-animate="fade-up"
      data-animate-duration={700}
    >
      <h2
        id={id ? `block-heading-${id}` : undefined}
        className="font-serif text-[length:var(--text-section)] font-semibold tracking-[var(--tracking-heading)] text-white"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {heading}
      </h2>
      <div className="mt-3 h-px w-16 bg-[var(--accent-divider)]" aria-hidden />
      <p
        className="mt-6 max-w-3xl text-[length:var(--text-body)] font-light text-white/95"
        style={{ lineHeight: "var(--leading-relaxed)" }}
      >
        {description}
      </p>
      {items.length > 0 && (
        <ul className="mt-8 space-y-3">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[length:var(--text-body)] font-light text-white/90"
              style={{ lineHeight: "var(--leading-relaxed)" }}
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-divider)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
