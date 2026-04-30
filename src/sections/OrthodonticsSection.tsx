"use client";

import ImageContentSection from "@/components/ImageContentSection";
import SectionHeader from "@/components/SectionHeader";

// Curated Unsplash images for orthodontics
const IMG = (id: string, w = 800, h = 600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80`;

const orthoSubsections = [
  {
    id: "clear-aligners",
    heading: "Invisalign® & Clear Alignment",
    description:
      "Modern, discreet solutions for correcting alignment with absolute comfort and clinical efficiency.",
    items: [],
    imageSrc: IMG("1629909613654-28e377c37b09"),
    imageAlt: "Clear aligners for discreet teeth straightening",
    imageFirst: true,
  },
  {
    id: "traditional-braces",
    heading: "Clinical Orthodontics",
    description:
      "Proven orthodontic techniques refined for modern comfort and precise structural correction.",
    items: [],
    imageSrc: IMG("1588776814546-1ffcf47267a5"),
    imageAlt: "Traditional braces and orthodontic care",
    imageFirst: false,
  },
];

export default function OrthodonticsSection() {
  return (
    <section id="orthodontics" aria-label="Orthodontics">
      <SectionHeader title="Orthodontics" withDivider align="center" />
      {orthoSubsections.map((sub) => (
        <ImageContentSection
          key={sub.id}
          id={sub.id}
          heading={sub.heading}
          description={sub.description}
          items={sub.items}
          imageSrc={sub.imageSrc}
          imageAlt={sub.imageAlt}
          imageFirst={sub.imageFirst}
        />
      ))}
    </section>
  );
}
