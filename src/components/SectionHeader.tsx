/**
 * SectionHeader — Full-width dark panel with elegant serif heading.
 * Enhanced: thin divider, generous spacing, reference-inspired typography.
 */

export interface SectionHeaderProps {
  title: string;
  /** Optional thin divider line below title */
  withDivider?: boolean;
  /** Center (default) or left */
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeader({
  title,
  withDivider = true,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`bg-[var(--bg-dark-panel)] border-y border-[var(--border-subtle)] content-padding ${align === "center" ? "text-center" : "text-left"} ${className}`}
      data-animate="fade-up"
      data-animate-duration={700}
    >
      <h2
        className="font-serif text-[length:var(--text-section)] font-semibold tracking-[var(--tracking-heading)] text-white"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {title}
      </h2>
      {withDivider && (
        <div
          className={`mt-4 h-px w-16 bg-[var(--accent-divider)] ${align === "center" ? "mx-auto" : ""}`}
          aria-hidden
        />
      )}
    </div>
  );
}
