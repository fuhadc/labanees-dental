"use client";

import { BoxReveal, BoxRevealGrid, BoxRevealItem } from "@/components/BoxReveal";

export default function ClinicSection() {
  const DEFAULT_FALLBACK_IMAGE = "/placeholder-dental.svg";

  const images = [
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=1200&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&h=800&fit=crop&q=80",
  ];

  return (
    <section id="clinic" aria-label="Our clinic interior" className="bg-[var(--bg-dark)]">
      <div className="section-padding-x section-padding-y mx-auto max-w-[90rem]">
        <BoxReveal
          origin="bottom"
          className="mb-12 px-8 py-14 text-center md:px-12"
        >
          <p
            className="font-serif text-4xl font-medium text-white italic md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            The Sanctuary
          </p>
          <div className="mx-auto mt-6 h-px w-[60px] bg-[var(--accent-warm)]" />
          <p
            className="mt-6 font-display text-[10px] uppercase tracking-[0.4em] text-[var(--accent-warm)]/60"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Refining the patient experience
          </p>
        </BoxReveal>

        <div className="no-scrollbar overflow-x-auto pb-4 snap-x snap-mandatory">
          <BoxRevealGrid className="flex min-w-max gap-6 px-2">
            {images.map((src) => (
              <BoxRevealItem
                key={src}
                className="relative h-[300px] w-[min(85vw,350px)] shrink-0 snap-center overflow-hidden p-0 md:h-[450px] md:w-[650px]"
              >
                <img
                  src={src}
                  alt="Clinic interior"
                  loading="lazy"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (img.dataset.fallbackApplied === "true") return;
                    img.dataset.fallbackApplied = "true";
                    img.src = DEFAULT_FALLBACK_IMAGE;
                  }}
                  className="h-full w-full object-cover grayscale transition-[filter] duration-500 hover:grayscale-0"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)]/60 via-transparent to-transparent" />
              </BoxRevealItem>
            ))}
          </BoxRevealGrid>
        </div>
      </div>
    </section>
  );
}
