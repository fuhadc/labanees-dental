"use client";

import SectionHeader from "@/components/SectionHeader";
import { BoxRevealGrid, BoxRevealItem } from "@/components/BoxReveal";

const team = [
  {
    name: "Dr. Rasha Hadi",
    role: "Implantology Specialist & Cosmetic Dentist",
    focus: "MSc. Implantology | German • BDS, MFDS RCSPG Glasgow",
    imageSrc: "/clinic/dr-rasha-hadi.webp",
  },
  {
    name: "Dr. Mariam Amer",
    role: "General Dentist",
    focus: "Focused on comprehensive oral healthcare, preventive treatments, and gentle patient-centered dentistry.",
    imageSrc: "/clinic/dr-mariam-amer.webp",
  },
];

export default function TeamSection() {
  return (
    <section aria-label="Our doctors" className="bg-transparent">
      <SectionHeader title="Meet the Team" align="center" />

      <div className="page-container pb-[var(--space-section-y)]">
        <BoxRevealGrid className="mx-auto grid max-w-3xl gap-8 sm:grid-cols-2 justify-center">
          {team.map((doctor) => (
            <BoxRevealItem
              key={doctor.name}
              className="box-inner-padding flex flex-col"
            >
              <div className="relative mb-6 aspect-[4/5] w-full overflow-hidden border border-white/5 bg-[var(--bg-soft)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={doctor.imageSrc}
                  alt={`Portrait of ${doctor.name}`}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3
                className="font-serif text-2xl font-medium italic text-white"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {doctor.name}
              </h3>
              <p
                className="mt-2 font-display text-[10px] uppercase tracking-[0.35em] text-[var(--accent-warm)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {doctor.role}
              </p>
              <p className="mt-5 text-sm font-light leading-relaxed text-white/55">
                {doctor.focus}
              </p>
            </BoxRevealItem>
          ))}
        </BoxRevealGrid>
      </div>
    </section>
  );
}

