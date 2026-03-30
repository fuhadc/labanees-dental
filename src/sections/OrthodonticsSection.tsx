/**
 * OrthodonticsSection — Main "ORTHODONTICS" header + alternating subsections
 * Clear Aligners (image left), Traditional Braces (text left)
 */

import ImageContentSection from "@/components/ImageContentSection";
import SectionHeader from "@/components/SectionHeader";

// Curated Unsplash images for orthodontics
const IMG = (id: string, w = 800, h = 600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80`;

const orthoSubsections = [
  {
    id: "clear-aligners",
    heading: "Clear Aligners",
    description:
      "Straighten your teeth discreetly with removable, comfortable aligners. Ideal for adults and teens who want effective treatment without visible braces.",
    items: [
      "Discreet, removable treatment",
      "Comfortable and easy to clean",
      "Custom-made for your smile",
      "Predictable results with digital planning",
    ],
    imageSrc: IMG("1609840113929-b130355987e1"), // Smiling woman — discreet alignment result
    imageAlt: "Clear aligners for discreet teeth straightening",
    imageFirst: true,
  },
  {
    id: "traditional-braces",
    heading: "Traditional Braces",
    description:
      "Proven, reliable correction for a wide range of orthodontic issues. Modern brackets are smaller and more comfortable than ever.",
    items: [
      "Effective for complex cases",
      "Metal and ceramic options",
      "Precise control of tooth movement",
      "Suitable for all ages",
    ],
    imageSrc: IMG("1598256989806-d3a38b3d6732"), // Dental / ortho model
    imageAlt: "Traditional braces and orthodontic care",
    imageFirst: false,
  },
];

export default function OrthodonticsSection() {
  return (
    <section id="orthodontics" aria-label="Orthodontics">
      <SectionHeader title="Orthodontics" withDivider align="center" />
      {orthoSubsections.map((sub, index) => (
        <div
          key={sub.id}
          data-animate={index % 2 === 0 ? "fade-right" : "fade-left"}
          data-animate-delay={index * 100}
          data-animate-duration={700}
        >
          <ImageContentSection
            id={sub.id}
            heading={sub.heading}
            description={sub.description}
            items={sub.items}
            imageSrc={sub.imageSrc}
            imageAlt={sub.imageAlt}
            imageFirst={sub.imageFirst}
          />
        </div>
      ))}
    </section>
  );
}
