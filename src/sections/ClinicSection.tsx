"use client";

/**
 * ClinicSection — "Unsere Klinik" gallery band.
 * Black background, gold divider, centered heading + subtitle and
 * a horizontal scroll gallery of clinic interior images.
 */

export default function ClinicSection() {
  const DEFAULT_FALLBACK_IMAGE =
    "/placeholder-dental.svg";

  const images = [
    "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=1200&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1535916707207-35f97e715e1b?w=1200&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=1200&h=800&fit=crop&q=80",
  ];

  return (
    <section
      id="clinic"
      aria-label="Our clinic interior"
      className="bg-[var(--bg-dark)] border-y border-[var(--border-subtle)]"
    >
      <div className="section-padding-x section-padding-y mx-auto max-w-[90rem]">
        <div className="mb-8 text-center">
          <p className="font-serif text-xl md:text-2xl font-semibold text-white">
            Unsere Klinik
          </p>
          <p className="mt-2 text-xs md:text-sm text-[var(--text-muted-strong)]">
            Qualität und Vielfalt für Ihre Gesundheit
          </p>
        </div>

        <div className="no-scrollbar overflow-x-auto pb-2 snap-x snap-mandatory">
          <div className="flex min-w-max gap-4 px-2 md:px-4">
            {images.map((src) => (
              <div
                key={src}
                className="snap-start no-scrollbar relative h-[210px] w-[280px] flex-shrink-0 overflow-hidden rounded-2xl bg-[var(--bg-soft)] shadow-card ring-1 ring-[var(--border-subtle)] md:h-[270px] md:w-[420px]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt="Clinic interior"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    // Avoid infinite loops if the fallback also fails.
                    const img = e.currentTarget;
                    if (img.dataset.fallbackApplied === "true") return;
                    img.dataset.fallbackApplied = "true";
                    img.src = DEFAULT_FALLBACK_IMAGE;
                  }}
                  className="h-full w-full rounded-2xl object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

