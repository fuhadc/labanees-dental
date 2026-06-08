"use client";

import { BoxReveal } from "@/components/BoxReveal";

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-label="Contact & Appointment"
      className="section-padding-x section-padding-y bg-transparent"
    >
      <div className="mx-auto flex max-w-[90rem] flex-col gap-8 lg:flex-row lg:items-start">
        <div className="flex flex-1 flex-col gap-8">
          <BoxReveal origin="left" className="px-8 py-12 md:px-12">
            <p className="font-display text-[10px] uppercase tracking-[0.5em] text-[var(--accent-warm)]">
              Connect With Us
            </p>
            <h2 className="mt-6 font-serif text-4xl font-medium italic leading-tight text-white md:text-5xl lg:text-6xl">
              Begin Your Journey <br /> to Excellence.
            </h2>
            <div className="mt-10 h-px w-20 bg-[var(--accent-warm)]" />
            <p className="mt-10 max-w-lg text-lg font-light italic leading-relaxed text-white/40">
              Experience dental care redefined. Reach out to our dedicated team to schedule your
              bespoke consultation in our Muscat facility.
            </p>
          </BoxReveal>

          <BoxReveal origin="left" delay={0.06} className="px-8 py-10 md:px-12">
            <dl className="grid grid-cols-1 gap-10 sm:grid-cols-2">
              <div className="flex flex-col gap-3">
                <dt className="font-display text-[9px] uppercase tracking-[0.4em] text-[var(--accent-warm)]/50">
                  Direct Line
                </dt>
                <dd className="text-xl font-light tracking-tight text-white">+968 9670 0335</dd>
              </div>
              <div className="flex flex-col gap-3">
                <dt className="font-display text-[9px] uppercase tracking-[0.4em] text-[var(--accent-warm)]/50">
                  Digital Correspondence
                </dt>
                <dd className="text-xl font-light tracking-tight text-white">info@labanees.com</dd>
              </div>
              <div className="flex flex-col gap-3 sm:col-span-2">
                <dt className="font-display text-[9px] uppercase tracking-[0.4em] text-[var(--accent-warm)]/50">
                  Muscat Facility
                </dt>
                <dd className="text-lg font-light italic leading-relaxed text-white">
                  18th November St, Al Ghubrah South
                  <br />
                  Muscat, Sultanate of Oman
                </dd>
              </div>
              <div className="flex flex-col gap-3 sm:col-span-2">
                <dt className="font-display text-[9px] uppercase tracking-[0.4em] text-[var(--accent-warm)]/50">
                  Clinical Hours
                </dt>
                <dd className="space-y-2 text-sm font-light text-white/40">
                  <p>
                    <span className="inline-block min-w-[100px] font-medium text-white">
                      Sat – Wed:
                    </span>{" "}
                    9:00 – 13:00 • 16:00 – 20:00
                  </p>
                  <p>
                    <span className="inline-block min-w-[100px] font-medium text-white">
                      Thursday:
                    </span>{" "}
                    9:00 – 14:00
                  </p>
                  <p>
                    <span className="font-medium italic text-[var(--accent-warm)]">Friday:</span>{" "}
                    Sanctuary Day • Closed
                  </p>
                </dd>
              </div>
            </dl>
          </BoxReveal>

          <BoxReveal
            origin="bottom"
            delay={0.1}
            className="relative h-[400px] overflow-hidden p-0"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14626.685235555555!2d58.393435!3d23.5855!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ff0033350335%3A0x3e91ff0033350335!2sLebanese%20Dental%20Clinic!5e0!3m2!1sen!2som!4v1714310000000!5m2!1sen!2som"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic location map"
            />
          </BoxReveal>
        </div>

        <BoxReveal
          id="booking"
          origin="right"
          delay={0.08}
          className="flex-1 px-8 py-12 md:px-12 md:py-16"
        >
          <p className="font-display text-[10px] uppercase tracking-[0.4em] text-[var(--accent-warm)]">
            Appointment Inquiry
          </p>
          <h3 className="mt-4 font-serif text-3xl font-medium italic text-white">
            Request Your Visit
          </h3>

          <form className="mt-12 space-y-8">
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="space-y-3">
                <label htmlFor="firstName" className="font-display text-[9px] uppercase tracking-[0.3em] text-white/40">
                  Given Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="w-full border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none transition-colors duration-300 placeholder:text-white/5 focus:border-[var(--accent-warm)]"
                  placeholder="Sara"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="lastName" className="font-display text-[9px] uppercase tracking-[0.3em] text-white/40">
                  Surname
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className="w-full border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none transition-colors duration-300 placeholder:text-white/5 focus:border-[var(--accent-warm)]"
                  placeholder="Al Said"
                />
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div className="space-y-3">
                <label htmlFor="phone" className="font-display text-[9px] uppercase tracking-[0.3em] text-white/40">
                  Mobile Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none transition-colors duration-300 placeholder:text-white/5 focus:border-[var(--accent-warm)]"
                  placeholder="+968"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="email" className="font-display text-[9px] uppercase tracking-[0.3em] text-white/40">
                  Digital Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none transition-colors duration-300 placeholder:text-white/5 focus:border-[var(--accent-warm)]"
                  placeholder="name@domain.com"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label htmlFor="treatment" className="font-display text-[9px] uppercase tracking-[0.3em] text-white/40">
                Area of Interest
              </label>
              <select
                id="treatment"
                name="treatment"
                className="w-full appearance-none border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none transition-colors duration-300 focus:border-[var(--accent-warm)]"
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

            <div className="space-y-3">
              <label htmlFor="message" className="font-display text-[9px] uppercase tracking-[0.3em] text-white/40">
                Additional Notes
              </label>
              <textarea
                id="message"
                name="message"
                rows={2}
                className="w-full resize-none border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none transition-colors duration-300 placeholder:text-white/5 focus:border-[var(--accent-warm)]"
                placeholder="Share any specific goals or concerns..."
              />
            </div>

            <button
              type="submit"
              className="btn-animated w-full border border-[var(--accent-warm)] bg-[var(--accent-warm)] py-6 text-[10px] font-bold uppercase tracking-[0.4em] text-black hover:bg-transparent hover:text-[var(--accent-warm)]"
            >
              Confirm Inquiry
            </button>

            <p className="text-center text-[10px] italic leading-relaxed tracking-wider text-white/20">
              By confirming, you authorize our coordination team to contact you via preferred
              digital channels.
            </p>
          </form>
        </BoxReveal>
      </div>
    </section>
  );
}
