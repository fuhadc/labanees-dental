"use client";

import { BoxRevealGrid, BoxRevealItem } from "@/components/BoxReveal";
import SectionHeader from "@/components/SectionHeader";
import { CLINIC_GALLERY } from "@/lib/clinic-images";

export default function ClinicSection() {
  const DEFAULT_FALLBACK_IMAGE = "/placeholder-dental.svg";

  return (
    <section aria-label="Our clinic interior" className="bg-transparent">
      <SectionHeader
        title="The Sanctuary"
        eyebrow="Refining the patient experience"
        withDivider
      />

      <div className="page-container pb-[var(--space-section-y)]">
        <div className="no-scrollbar overflow-x-auto pb-4 snap-x snap-mandatory">
          <BoxRevealGrid className="flex min-w-max gap-6">
            {CLINIC_GALLERY.map((photo) => (
              <BoxRevealItem
                key={photo.src}
                className="relative h-[300px] w-[min(85vw,350px)] shrink-0 snap-center overflow-hidden p-0 md:h-[450px] md:w-[650px]"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
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
