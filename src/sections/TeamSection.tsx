/**
 * TeamSection — doctor cards with roles and focus areas.
 * Matches golden-black aesthetic and provides an anchor for the "Team" nav item.
 */

import SectionHeader from "@/components/SectionHeader";

const team = [
  {
    name: "Dr. Wael Faisal",
    role: "Specialist Orthodontist",
    focus: "Braces, Invisalign® & functional orthodontics for adults and children.",
  },
  {
    name: "Dr. Sahar Albeini",
    role: "Aesthetic & Restorative Dentist",
    focus: "Smile design, veneers, Hollywood smiles and minimally invasive restorations.",
  },
  {
    name: "Dr. Salma Al Jahdhami",
    role: "Oral & Maxillofacial Surgeon",
    focus: "Dental implants, wisdom teeth surgery and complex oral surgery.",
  },
  {
    name: "Dr. May Eljaberi",
    role: "Dermatology & Aesthetic Medicine",
    focus: "Skin health, anti-ageing, laser and cosmetic dermatology treatments.",
  },
];

export default function TeamSection() {
  return (
    <section id="team" aria-label="Our doctors" className="bg-[var(--bg-dark)]">
      <SectionHeader title="Meet the Team" align="center" />

      <div className="section-padding-x section-padding-y mx-auto max-w-[90rem]">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {team.map((doctor) => (
            <article
              key={doctor.name}
              className="card-hover flex flex-col rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-dark-panel)] px-5 py-5 shadow-card"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent-warm)] text-xs font-semibold text-black">
                  {doctor.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {doctor.name}
                  </h3>
                  <p className="text-xs text-[var(--accent-warm)]">
                    {doctor.role}
                  </p>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-[var(--text-muted-strong)]">
                {doctor.focus}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

