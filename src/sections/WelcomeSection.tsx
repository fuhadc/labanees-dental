"use client";

/**
 * WelcomeSection — Full-width intro block after hero
 * About Lebanese Dental Clinic with description and highlights
 */

import FeatureDescriptionBlock from "@/components/FeatureDescriptionBlock";

export default function WelcomeSection() {
  return (
    <FeatureDescriptionBlock
      id="about-us"
      tagline="ABOUT US"
      heading="Welcome to Lebanese Dental Clinic."
      subheading="Your trusted destination for advanced, personalized dental care in Muscat."
      description="We believe dentistry is more than treating teeth it is about creating healthy, confident smiles with care, precision and attention to every detail."
    />
  );
}
