"use client";

import { useState, type FormEvent } from "react";
import SectionHeader from "@/components/SectionHeader";
import { BoxReveal } from "@/components/BoxReveal";

const panelPad = "box-inner-padding flex h-full min-h-0 flex-col";
const fieldClass =
  "w-full border-b border-white/15 bg-transparent py-2.5 text-sm text-white outline-none transition-colors duration-300 placeholder:text-white/35 focus:border-[var(--accent-warm)] focus-visible:border-[var(--accent-warm)]";
const labelClass =
  "font-display text-[10px] uppercase tracking-[0.28em] text-white/55";

const WHATSAPP = "96896700335";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const firstName = String(data.get("firstName") || "").trim();
    const lastName = String(data.get("lastName") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const treatment = String(data.get("treatment") || "").trim();
    const message = String(data.get("message") || "").trim();

    const text = [
      `Appointment inquiry from ${firstName} ${lastName}`.trim(),
      phone && `Phone: ${phone}`,
      email && `Email: ${email}`,
      treatment && `Interest: ${treatment}`,
      message && `Notes: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setStatus("sent");
  };

  return (
    <section aria-label="Contact and appointment" className="bg-transparent">
      <SectionHeader title="Visit Us" align="center" />

      <div className="page-container pb-[var(--space-section-y)]">
        <div className="grid grid-cols-1 items-stretch gap-5 md:gap-6 lg:grid-cols-2 lg:grid-rows-[auto_auto_auto]">
          <BoxReveal origin="left" className={`${panelPad} lg:col-start-1 lg:row-start-1`}>
            <p className="font-display text-[10px] uppercase tracking-[0.45em] text-[var(--accent-warm)]">
              Connect With Us
            </p>
            <h2 className="mt-5 font-serif text-[clamp(1.85rem,2vw+1.2rem,3.25rem)] font-medium italic leading-[1.15] text-white">
              Begin Your Journey
              <br />
              to Excellence.
            </h2>
            <div className="mt-6 h-px w-16 bg-[var(--accent-warm)]" />
            <p className="mt-6 max-w-lg text-base font-light leading-relaxed text-white/65 md:text-lg">
              Experience dental care redefined. Reach out to our dedicated team to schedule your
              consultation in our Muscat facility.
            </p>
          </BoxReveal>

          <BoxReveal
            id="booking"
            origin="right"
            delay={0.06}
            className={`${panelPad} lg:col-start-2 lg:row-span-2 lg:row-start-1`}
          >
            <p className="font-display text-[10px] uppercase tracking-[0.4em] text-[var(--accent-warm)]">
              Appointment Inquiry
            </p>
            <h3 className="mt-3 font-serif text-2xl font-medium italic text-white md:text-3xl">
              Request Your Visit
            </h3>

            <form className="mt-8 flex flex-1 flex-col gap-7" onSubmit={onSubmit} noValidate={false}>
              <div className="grid gap-7 sm:grid-cols-2">
                <div className="space-y-2.5">
                  <label htmlFor="firstName" className={labelClass}>
                    First name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    autoComplete="given-name"
                    className={fieldClass}
                    placeholder="Sara"
                  />
                </div>
                <div className="space-y-2.5">
                  <label htmlFor="lastName" className={labelClass}>
                    Last name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    autoComplete="family-name"
                    className={fieldClass}
                    placeholder="Al Said"
                  />
                </div>
              </div>

              <div className="grid gap-7 sm:grid-cols-2">
                <div className="space-y-2.5">
                  <label htmlFor="phone" className={labelClass}>
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className={fieldClass}
                    placeholder="+968"
                  />
                </div>
                <div className="space-y-2.5">
                  <label htmlFor="email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className={fieldClass}
                    placeholder="name@domain.com"
                  />
                </div>
              </div>

              <div className="space-y-2.5">
                <label htmlFor="treatment" className={labelClass}>
                  Treatment of interest
                </label>
                <select
                  id="treatment"
                  name="treatment"
                  className={`${fieldClass} appearance-none`}
                  defaultValue=""
                >
                  <option value="" disabled className="bg-[var(--bg-dark)]">
                    Select treatment
                  </option>
                  <option className="bg-[var(--bg-dark)]">General Dentistry</option>
                  <option className="bg-[var(--bg-dark)]">Cosmetic / Veneers</option>
                  <option className="bg-[var(--bg-dark)]">Implants / Surgery</option>
                  <option className="bg-[var(--bg-dark)]">Dermatology / Skin</option>
                  <option className="bg-[var(--bg-dark)]">Laser Treatments</option>
                  <option className="bg-[var(--bg-dark)]">Not sure yet</option>
                </select>
              </div>

              <div className="space-y-2.5">
                <label htmlFor="message" className={labelClass}>
                  Additional notes
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={2}
                  className={`${fieldClass} resize-none`}
                  placeholder="Share any specific goals or concerns..."
                />
              </div>

              <div className="mt-auto space-y-4 pt-2">
                <button
                  type="submit"
                  className="w-full border border-[var(--accent-warm)] bg-[var(--accent-warm)] py-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-black transition-colors hover:bg-[var(--accent-warm-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  Book Appointment
                </button>
                <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-white/50">
                  <a href="tel:+96896700335" className="hover:text-[var(--accent-warm)]">
                    Call clinic
                  </a>
                  <span aria-hidden>·</span>
                  <a
                    href={`https://wa.me/${WHATSAPP}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--accent-warm)]"
                  >
                    WhatsApp
                  </a>
                </div>
                {status === "sent" && (
                  <p className="text-center text-xs text-[var(--accent-warm)]" role="status">
                    Opening WhatsApp with your inquiry…
                  </p>
                )}
                <p className="text-center text-[10px] leading-relaxed tracking-wide text-white/35">
                  We’ll confirm your preferred time via phone or WhatsApp.
                </p>
              </div>
            </form>
          </BoxReveal>

          <BoxReveal origin="left" delay={0.04} className={`${panelPad} lg:col-start-1 lg:row-start-2`}>
            <dl className="grid flex-1 grid-cols-1 content-start gap-8 sm:grid-cols-2">
              <div className="flex flex-col gap-2.5">
                <dt className="font-display text-[9px] uppercase tracking-[0.4em] text-[var(--accent-warm)]/60">
                  Direct Line
                </dt>
                <dd>
                  <a
                    href="tel:+96896700335"
                    className="text-lg font-light tracking-tight text-white transition-colors hover:text-[var(--accent-warm)] md:text-xl"
                  >
                    +968 9670 0335
                  </a>
                </dd>
              </div>
              <div className="flex flex-col gap-2.5">
                <dt className="font-display text-[9px] uppercase tracking-[0.4em] text-[var(--accent-warm)]/60">
                  Email
                </dt>
                <dd>
                  <a
                    href="mailto:info@labanees.com"
                    className="text-lg font-light tracking-tight text-white transition-colors hover:text-[var(--accent-warm)] md:text-xl"
                  >
                    info@labanees.com
                  </a>
                </dd>
              </div>
              <div className="flex flex-col gap-2.5 sm:col-span-2">
                <dt className="font-display text-[9px] uppercase tracking-[0.4em] text-[var(--accent-warm)]/60">
                  Muscat Facility
                </dt>
                <dd>
                  <a
                    href="https://maps.google.com/?q=Lebanese+Dental+Clinic+Muscat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-light leading-relaxed text-white/90 transition-colors hover:text-[var(--accent-warm)] md:text-lg"
                  >
                    18th November St, Al Ghubrah South
                    <br />
                    Muscat, Sultanate of Oman
                  </a>
                </dd>
              </div>
              <div className="flex flex-col gap-2.5 sm:col-span-2">
                <dt className="font-display text-[9px] uppercase tracking-[0.4em] text-[var(--accent-warm)]/60">
                  Clinical Hours
                </dt>
                <dd className="space-y-1.5 text-sm font-light text-white/55">
                  <p>
                    <span className="inline-block min-w-[100px] font-medium text-white">Sat – Wed:</span>{" "}
                    9:00 – 13:00 • 16:00 – 20:00
                  </p>
                  <p>
                    <span className="inline-block min-w-[100px] font-medium text-white">Thursday:</span>{" "}
                    9:00 – 14:00
                  </p>
                  <p>
                    <span className="font-medium text-[var(--accent-warm)]">Friday:</span> Closed
                  </p>
                </dd>
              </div>
            </dl>
          </BoxReveal>

          <BoxReveal
            origin="bottom"
            delay={0.08}
            className="relative aspect-[16/9] min-h-[240px] overflow-hidden p-0 sm:aspect-[21/9] sm:min-h-[280px] lg:col-span-2 lg:col-start-1 lg:row-start-3 lg:min-h-[320px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8!2d58.3941595!3d23.5982289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ff500e62d40f%3A0x63a51fcb6a361947!2sLebanese%20Dental%20Clinic!5e0!3m2!1sen!2som!4v1714310000000!5m2!1sen!2som"
              className="absolute inset-0 h-full w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Labanees Dental clinic location map"
            />
          </BoxReveal>
        </div>
      </div>
    </section>
  );
}
