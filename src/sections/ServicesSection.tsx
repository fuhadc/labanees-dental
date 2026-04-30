"use client";

import ImageContentSection from "@/components/ImageContentSection";
import SectionHeader from "@/components/SectionHeader";

// Curated Unsplash images — professional dental/clinical aesthetic
const IMG = (id: string, w = 800, h = 600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80`;

const services = [
  {
    id: "dental-implants",
    heading: "Dental Implants",
    description:
      "Precision-engineered restorations that restore function and natural aesthetics with permanent results.",
    items: [],
    imageSrc: IMG("1606811971618-4486d14f3f99"),
    imageAlt: "Dental implant and restoration",
    imageFirst: true,
  },
  {
    id: "hollywood-smile",
    heading: "The Hollywood Smile",
    description:
      "A bespoke smile makeover designed to enhance your natural features with perfection and symmetry.",
    items: [],
    imageSrc: IMG("1588776814546-1ffcf47267a5"),
    imageAlt: "Hollywood smile makeover",
    imageFirst: false,
  },
  {
    id: "veneers",
    heading: "Porcelain Veneers",
    description:
      "Ultra-thin artisan porcelain shells crafted for a flawless, radiant, and natural-looking transformation.",
    items: [],
    imageSrc: IMG("1516062423079-7ca13cdc7f5a"),
    imageAlt: "Dental veneers for a natural smile",
    imageFirst: true,
  },
  {
    id: "root-canal",
    heading: "Endodontic Care",
    description:
      "Advanced, pain-free treatments focused on preserving your natural teeth with clinical precision.",
    items: [],
    imageSrc: IMG("1606811841689-23dfddce3e95"),
    imageAlt: "Root canal treatment",
    imageFirst: false,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" aria-label="Our services">
      <SectionHeader title="What We Do" withDivider align="center" />
      {services.map((service) => (
        <ImageContentSection
          key={service.id}
          id={service.id}
          heading={service.heading}
          description={service.description}
          items={service.items}
          imageSrc={service.imageSrc}
          imageAlt={service.imageAlt}
          imageFirst={service.imageFirst}
        />
      ))}
    </section>
  );
}
