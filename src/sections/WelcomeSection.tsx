/**
 * WelcomeSection — Full-width intro block after hero
 * About Lebanese Dental Clinic with description and highlights
 */

import FeatureDescriptionBlock from "@/components/FeatureDescriptionBlock";

const welcomeItems = [
  "5-Star Google Rated – Trusted by 75+ patients with excellent reviews",
  "Comfortable Environment – Modern clinic designed for comfort and relaxation",
  "Advanced Technology – Precise and efficient treatments",
  "Prime Location – Located on 18th November Street in Muscat",
  "Experienced Professionals – Highly skilled dental team",
  "Comprehensive Solutions – Full range of cosmetic and restorative services",
];

export default function WelcomeSection() {
  return (
    <FeatureDescriptionBlock
      id="about"
      heading="About Lebanese Dental Clinic"
      description="Lebanese Dental Clinic is a comprehensive dental center in Muscat offering advanced cosmetic dentistry and implant solutions. Our clinic combines modern technology with precision, artistry, and patient-focused care to deliver natural, confident smiles. We specialize in high-quality treatments including dental implants, Hollywood smiles, veneers, and restorative dentistry — ensuring comfort, safety, and long-lasting results."
      items={welcomeItems}
    />
  );
}
