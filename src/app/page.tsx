/**
 * Labanees Dental — Home
 */

import { Header, HeroBanner, Footer } from "@/components";
import AppleStickyShowcase from "@/components/AppleStickyShowcase";
import SectionDivider from "@/components/SectionDivider";
import { SectionZoom } from "@/components/apple";
import { CLINIC_PHOTOS } from "@/lib/clinic-images";
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
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-transparent text-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[10000] focus:bg-[var(--accent-warm)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">
        <HeroBanner backgroundImage={CLINIC_PHOTOS.heroBg.src} />

        <SectionDivider label="About" />
        <SectionZoom id="about">
          <WelcomeSection />
        </SectionZoom>

        <AppleStickyShowcase />

        <SectionDivider label="Our Space" />
        <SectionZoom id="gallery">
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
      </main>

      <Footer
        ctaText="Book Appointment"
        ctaHref="#booking"
        contactLine="18th November St, Muscat | +968 9670 0335 | info@labanees.com"
        copyright={`© ${new Date().getFullYear()} Labanees Dental. All rights reserved.`}
      />
    </div>
  );
}
