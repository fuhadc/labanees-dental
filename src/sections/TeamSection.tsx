"use client";

import SectionHeader from "@/components/SectionHeader";
import { BoxRevealGrid, BoxRevealItem } from "@/components/BoxReveal";

const team = [
  {
    name: "Dr. Sahar Albeini",
    role: "Cosmetic Dentist",
    focus: "Expert in bespoke smile design and high-precision veneers.",
    imageSrc: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop&q=80",
  },
  {
    name: "Dr. Salma Al Jahdhami",
    role: "Oral Surgeon",
    focus: "Focused on surgical implantology and complex oral procedures.",
    imageSrc: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=500",
  },
  {
    name: "Dr. May Eljaberi",
    role: "Aesthetic Specialist",
    focus: "Leading advanced skin health and aesthetic dermatology.",
    imageSrc: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop&q=80",
  },
];

export default function TeamSection() {
  return (
    <section aria-label="Our doctors" className="bg-transparent">
      <SectionHeader title="Meet the Team" align="center" />

      <div className="page-container pb-[var(--space-section-y)]">
        <BoxRevealGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((doctor) => (
            <BoxRevealItem
              key={doctor.name}
              className="box-inner-padding flex flex-col"
            >
              <div className="relative mb-6 aspect-[4/5] w-full overflow-hidden border border-white/5 bg-[var(--bg-soft)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={doctor.imageSrc}
                  alt={doctor.name}
                  className="h-full w-full object-cover grayscale transition-[filter,transform] duration-500 hover:scale-[1.03] hover:grayscale-0"
                />
              </div>
              <h3
                className="font-serif text-2xl font-medium text-white italic"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {doctor.name}
              </h3>
              <p
                className="mt-2 font-display text-[10px] uppercase tracking-[0.4em] text-[var(--accent-warm)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {doctor.role}
              </p>
              <p className="mt-6 text-sm font-light italic leading-relaxed text-white/40">
                &ldquo;{doctor.focus}&rdquo;
              </p>
            </BoxRevealItem>
          ))}
        </BoxRevealGrid>
      </div>
    </section>
  );
}
