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
        title="Transform Your Smile with Precision & Elegance"
        tagline="Advanced Dental Implants & Cosmetic Dentistry in Muscat"
        backgroundImage="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1920&h=1080&fit=crop&q=85"
        overlayOpacity={0.55}
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
        ctaText="Online Appointment"
        ctaHref="#booking"
        contactLine="18th November Street, Muscat, Oman | +968 9670 0335 | 9:00 AM – 8:00 PM (Daily)"
        copyright={`© ${new Date().getFullYear()} Lebanese Dental Clinic. All rights reserved.`}
      />
    </div>
  );
}
