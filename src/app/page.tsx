/**
 * Lebanese Dental Clinic — Home page
 * Apple-style scroll motion: parallax, zoom sections, image sequences, liquid glass
 */

import { Header, HeroBanner, Footer } from "@/components";
import AppleStickyShowcase from "@/components/AppleStickyShowcase";
import SectionDivider from "@/components/SectionDivider";
import { SectionZoom } from "@/components/apple";
import { HERO_CLINIC_IMAGE, CLINIC_PHOTOS } from "@/lib/clinic-images";
import {
  WelcomeSection,
  ClinicSection,
  ServicesSection,
  ReviewsSection,
  TeamSection,
  ContactSection,
} from "@/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <Header />

      <HeroBanner
        brandLine="LABANEES"
        brandAccent="DENTAL"
        tagline="A premium dental clinic in Muscat dedicated to advanced aesthetic dentistry, painless implantology, and quiet luxury — crafted with precision in the heart of Oman."
        backgroundImage={HERO_CLINIC_IMAGE}
        insetImage={CLINIC_PHOTOS.lobby.src}
        insetAlt={CLINIC_PHOTOS.lobby.alt}
      />

      <SectionDivider label="About" />
      <SectionZoom id="about">
        <WelcomeSection />
      </SectionZoom>

      <AppleStickyShowcase />

      <SectionDivider label="Our Space" />
      <SectionZoom>
        <ClinicSection />
      </SectionZoom>

      <SectionDivider label="Treatments" />
      <SectionZoom id="services">
        <ServicesSection />
      </SectionZoom>

      <SectionDivider label="Results" />
      <SectionZoom id="before-after">
        <ReviewsSection />
      </SectionZoom>

      <SectionDivider label="Specialists" />
      <SectionZoom id="team">
        <TeamSection />
      </SectionZoom>

      <SectionZoom id="contact">
        <ContactSection />
      </SectionZoom>

      <Footer
        ctaText="Book Appointment"
        ctaHref="#booking"
        contactLine="18th November St, Muscat | +968 9670 0335 | info@labanees.com"
        copyright={`© ${new Date().getFullYear()} Labanees Dental. All rights reserved.`}
      />
    </div>
  );
}
