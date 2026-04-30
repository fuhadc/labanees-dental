/**
 * Lebanese Dental Clinic — Home page
 * Layout: Hero → Welcome → Services (alternating image/text) → Orthodontics → Footer
 * Design: dark panels (#333), white text, minimal typography, clinical aesthetic
 */

import { Header, HeroBanner, Footer } from "@/components";
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

      {/* Hero — full-width with optional background image + overlay */}
      <HeroBanner
        label="Welcome to Labanees"
        title="Where Precision Meets the Art of Dentistry"
        tagline="Advanced cosmetic dentistry and high-precision implantology in the heart of Muscat."
        backgroundImage="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=1600&fit=crop&q=90"
      />

      {/* Welcome — full-width intro block */}
      <WelcomeSection />

      {/* Unsere Klinik — interior gallery */}
      <ClinicSection />

      {/* Services — alternating image-left / text-right sections */}
      <ServicesSection />

      {/* Orthodontics — section header + alternating subsections */}
      <OrthodonticsSection />

      {/* Before / After & Google-style reviews */}
      <ReviewsSection />

      {/* Team overview */}
      <TeamSection />

      {/* Jobs / careers band */}
      <JobsSection />

      {/* Contact + online appointment form */}
      <ContactSection />

      {/* Footer — CTA + copyright */}
      <Footer
        ctaText="Book Appointment"
        ctaHref="#booking"
        contactLine="18th November St, Muscat | +968 9670 0335 | info@labanees.com"
        copyright={`© ${new Date().getFullYear()} Labanees Dental. All rights reserved.`}
      />
    </div>
  );
}
