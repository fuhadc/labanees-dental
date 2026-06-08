/**
 * Lebanese Dental Clinic — Home page
 * Apple-style scroll motion: parallax, zoom sections, image sequences, liquid glass
 */

import { Header, HeroBanner, Footer } from "@/components";
import AppleStickyShowcase from "@/components/AppleStickyShowcase";
import SectionDivider from "@/components/SectionDivider";
import { SectionZoom, SectionBridge } from "@/components/apple";
import {
  WelcomeSection,
  ClinicSection,
  ServicesSection,
  OrthodonticsSection,
  ReviewsSection,
  TeamSection,
  JobsSection,
  ContactSection,
} from "@/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg-dark)] text-white">
      <Header />

      <HeroBanner
        label="Welcome to Labanees"
        title="Where Precision Meets the Art of Dentistry"
        tagline="Advanced cosmetic dentistry and high-precision implantology in the heart of Muscat."
        backgroundImage="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=1600&fit=crop&q=90"
      />

      <SectionBridge label="About" />
      <SectionZoom id="about">
        <WelcomeSection />
      </SectionZoom>

      <AppleStickyShowcase />

      <SectionBridge label="Our Space" />
      <SectionZoom>
        <ClinicSection />
      </SectionZoom>

      <SectionDivider label="Treatments" />
      <SectionZoom id="services">
        <ServicesSection />
      </SectionZoom>

      <SectionBridge label="Orthodontics" />
      <SectionZoom id="orthodontics">
        <OrthodonticsSection />
      </SectionZoom>

      <SectionDivider label="Results" />
      <SectionZoom>
        <ReviewsSection />
      </SectionZoom>

      <SectionDivider label="Specialists" />
      <SectionZoom id="team">
        <TeamSection />
      </SectionZoom>

      <SectionZoom id="jobs">
        <JobsSection />
      </SectionZoom>

      <SectionBridge label="Visit Us" />
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
