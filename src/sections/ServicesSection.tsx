/**
 * ServicesSection — Alternating image + content blocks for each service.
 * Enhanced: section header with elegant serif + divider (reference "What We Do").
 */

import ImageContentSection from "@/components/ImageContentSection";
import SectionHeader from "@/components/SectionHeader";

// Curated Unsplash images — professional dental/clinical aesthetic
const IMG = (id: string, w = 800, h = 600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80`;

const services = [
  {
    id: "dental-implants",
    heading: "Permanent, Natural-Looking Dental Implants",
    description:
      "Restore your smile with advanced dental implant solutions. Our precision-engineered implants provide a permanent replacement for missing teeth that look, feel, and function like natural teeth.",
    items: [
      "Long-lasting solution — implants can last a lifetime",
      "Natural appearance customized to match your teeth",
      "Preserves bone health and facial structure",
      "Comfortable and stable without slipping",
    ],
    imageSrc: IMG("1598256989806-d3a38b3d6732"),
    imageAlt: "Dental implant and restoration",
    imageFirst: true,
  },
  {
    id: "teeth-whitening",
    heading: "Teeth Whitening",
    description:
      "Professional whitening treatments for a brighter, radiant smile.",
    items: [],
    imageSrc: IMG("1629909613654-28e377c37b09"),
    imageAlt: "Bright, confident smile after whitening",
    imageFirst: false,
  },
  {
    id: "hollywood-smile",
    heading: "Hollywood Smile",
    description:
      "Complete smile makeovers for a dazzling appearance.",
    items: [],
    imageSrc: IMG("1629909613654-28e377c37b09"),
    imageAlt: "Hollywood smile makeover",
    imageFirst: true,
  },
  {
    id: "root-canal",
    heading: "Root Canal Treatment",
    description:
      "Pain-free endodontic procedures to restore damaged teeth.",
    items: [],
    imageSrc: IMG("1606811841689-23dfddce3e95"),
    imageAlt: "Root canal treatment",
    imageFirst: false,
  },
  {
    id: "veneers",
    heading: "Veneers",
    description:
      "Ultra-thin porcelain shells for a flawless natural-looking smile.",
    items: [],
    imageSrc: IMG("1629909613654-28e377c37b09"),
    imageAlt: "Dental veneers for a natural smile",
    imageFirst: true,
  },
  {
    id: "cleaning-polishing",
    heading: "Cleaning & Polishing",
    description:
      "Professional dental hygiene services for optimal oral health.",
    items: [],
    imageSrc: IMG("1666887360870-fab16552365f"),
    imageAlt: "Professional dental cleaning",
    imageFirst: false,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" aria-label="Our services">
      <SectionHeader title="What We Do" withDivider align="center" />
      {services.map((service, index) => (
        <div
          key={service.id}
          data-animate={index % 2 === 0 ? "fade-right" : "fade-left"}
          data-animate-delay={index * 100}
          data-animate-duration={700}
        >
          <ImageContentSection
            id={service.id}
            heading={service.heading}
            description={service.description}
            items={service.items}
            imageSrc={service.imageSrc}
            imageAlt={service.imageAlt}
            imageFirst={service.imageFirst}
          />
        </div>
      ))}
    </section>
  );
}
