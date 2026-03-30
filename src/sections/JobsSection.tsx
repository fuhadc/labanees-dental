/**
 * JobsSection — simple recruitment band with description and CTA.
 * Provides an anchor for the "Jobs" nav item.
 */

import SectionHeader from "@/components/SectionHeader";

export default function JobsSection() {
  return (
    <section id="jobs" aria-label="Careers" className="bg-[var(--bg-dark)]">
      <SectionHeader title="Jobs & Careers" align="center" />

      <div className="section-padding-x section-padding-y mx-auto max-w-[60rem] text-center">
        <p className="text-sm leading-relaxed text-[var(--text-muted-strong)]">
          We are always interested in meeting talented dentists, specialists,
          dental assistants and front-desk coordinators who share our passion
          for precise, patient-centred care. If you would like to join Lebanese
          Dental Clinic, please send your CV and a short introduction to{" "}
          <span className="text-[var(--accent-warm)]">careers@labaneesclinic.com</span>.
        </p>
        <p className="mt-4 text-xs text-[var(--text-muted)]">
          All applications are treated confidentially. We will get in touch if
          your profile matches a suitable position.
        </p>
      </div>
    </section>
  );
}

