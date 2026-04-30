"use client";

/**
 * WelcomeSection — Full-width intro block after hero
 * About Lebanese Dental Clinic with description and highlights
 */

import FeatureDescriptionBlock from "@/components/FeatureDescriptionBlock";

const welcomeItems = [
  "Women-Owned & Operated",
  "Quiet Luxury Aesthetic",
  "High-Precision Implantology",
  "Artisan Smile Design",
];

export default function WelcomeSection() {
  return (
    <FeatureDescriptionBlock
      id="about"
      heading="Redefining the Clinical Experience"
      description="Lebanese Dental Clinic (Labanees Dental) is a premium dental facility in Muscat dedicated to professional excellence and patient comfort. Our women-owned clinic specializes in advanced aesthetic dentistry and painless implant procedures, utilizing cutting-edge technology to deliver meticulous results in a serene, high-end environment."
      items={welcomeItems}
    />
  );
}
