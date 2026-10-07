"use client";

import ImageContentSection from "@/components/ImageContentSection";
import SectionHeader from "@/components/SectionHeader";

const services = [
  {
    id: "dental-implants",
    heading: "Dental Implants",
    description:
      "Restoring missing teeth with carefully planned, natural-looking solutions.",
    items: [],
    imageSrc: "/clinic/service-dental-implants.webp",
    imageAlt: "Precision titanium dental implant restoration",
    imageFirst: true,
  },
  {
    id: "cosmetic-dentistry",
    heading: "Cosmetic Dentistry",
    description:
      "Enhancing your smile while keeping it natural and harmonious.",
    items: [],
    imageSrc: "/clinic/service-cosmetic-dentistry.webp",
    imageAlt: "Radiant natural white smile makeover",
    imageFirst: false,
  },
  {
    id: "restorative-dentistry",
    heading: "Restorative Dentistry",
    description:
      "Restoring damaged or weakened teeth for long-term function and aesthetics.",
    items: [],
    imageSrc: "/clinic/service-restorative-dentistry.webp",
    imageAlt: "High precision porcelain crown and veneer crafting",
    imageFirst: true,
  },
  {
    id: "general-dentistry",
    heading: "General Dentistry",
    description:
      "Comprehensive care to maintain your oral health and prevent future problems.",
    items: [],
    imageSrc: "/clinic/service-general-dentistry.webp",
    imageAlt: "Modern 3D digital scanner and general dentistry operating suite",
    imageFirst: false,
  },
];

export default function ServicesSection() {
  return (
    <section aria-label="Our services" className="space-y-4 md:space-y-6">
      <SectionHeader title="Our Dental Services Include" eyebrow="What We Do" withDivider align="center" />
      {services.map((service, index) => (
        <ImageContentSection
          key={service.id}
          sectionIndex={index}
          {...service}
        />
      ))}
    </section>
  );
}
