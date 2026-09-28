"use client";

import ImageContentSection from "@/components/ImageContentSection";
import SectionHeader from "@/components/SectionHeader";

const IMG = (id: string, w = 800, h = 600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80`;

const services = [
  {
    id: "dental-implants",
    heading: "Dental Implants",
    description:
      "Restoring missing teeth with carefully planned, natural-looking solutions.",
    items: [],
    imageSrc: IMG("1606811971618-4486d14f3f99"),
    imageAlt: "Dental Implants restoration",
    imageFirst: true,
  },
  {
    id: "cosmetic-dentistry",
    heading: "Cosmetic Dentistry",
    description:
      "Enhancing your smile while keeping it natural and harmonious.",
    items: [],
    imageSrc: IMG("1588776814546-1ffcf47267a5"),
    imageAlt: "Cosmetic Dentistry smile makeover",
    imageFirst: false,
  },
  {
    id: "restorative-dentistry",
    heading: "Restorative Dentistry",
    description:
      "Restoring damaged or weakened teeth for long-term function and aesthetics.",
    items: [],
    imageSrc: IMG("1516062423079-7ca13cdc7f5a"),
    imageAlt: "Restorative Dentistry treatment",
    imageFirst: true,
  },
  {
    id: "general-dentistry",
    heading: "General Dentistry",
    description:
      "Comprehensive care to maintain your oral health and prevent future problems.",
    items: [],
    imageSrc: IMG("1606811841689-23dfddce3e95"),
    imageAlt: "General Dentistry preventive care",
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
