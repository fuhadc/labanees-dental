/**
 * ContactSection — contact details + appointment form.
 * Anchors: #contact (section) and #booking (form) used by the header.
 */

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-label="Contact & Appointment"
      className="bg-[var(--bg-dark)]"
    >
      <div className="section-padding-x section-padding-y mx-auto flex max-w-[90rem] flex-col gap-10 lg:flex-row">
        <div className="flex-1 space-y-4">
          <p className="text-[length:var(--text-hero-label)] uppercase tracking-[0.18em] text-[var(--accent-warm-soft)]">
            Contact
          </p>
          <h2 className="font-serif text-[length:var(--text-section)] font-semibold text-white">
            We look forward to meeting you.
          </h2>
          <div className="mt-3 h-px w-16 bg-[var(--accent-divider)]" aria-hidden />
          <p className="mt-4 text-[length:var(--text-body)] leading-relaxed text-[var(--text-muted-strong)]">
            Call, message or fill out the appointment form and our coordination
            team will get back to you with available time slots and initial
            information about your visit.
          </p>

          <dl className="mt-6 space-y-3 text-sm text-[var(--text-muted-strong)]">
            <div>
              <dt className="font-semibold text-white">Phone & WhatsApp</dt>
              <dd className="mt-1">
                +968 7111 4466
                <br />
                +968 2412 8668
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-white">Email</dt>
              <dd className="mt-1">info@naya-mc.com</dd>
            </div>
            <div>
              <dt className="font-semibold text-white">Address</dt>
              <dd className="mt-1">
                18th November Street
                <br />
                Muscat, Sultanate of Oman
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-white">Opening hours</dt>
              <dd className="mt-1">
                Sunday – Thursday: 9:00 – 20:00
                <br />
                Saturday: 16:00 – 20:00
                <br />
                Friday: Closed
              </dd>
            </div>
          </dl>
        </div>

        <div
          id="booking"
          className="flex-1 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-dark-panel)] px-5 py-6 shadow-card sm:px-6 sm:py-7"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-warm-soft)]">
            Online Appointment
          </p>
          <h3 className="mt-2 text-sm font-semibold text-white">
            Request your visit
          </h3>

          <form className="mt-5 space-y-3 text-xs">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label
                  htmlFor="firstName"
                  className="text-[11px] font-medium text-white"
                >
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  className="h-9 w-full rounded-md border border-[var(--border-subtle)] bg-[var(--bg-soft)] px-3 text-xs text-white outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--accent-warm)]"
                  placeholder="Sara"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="lastName"
                  className="text-[11px] font-medium text-white"
                >
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  className="h-9 w-full rounded-md border border-[var(--border-subtle)] bg-[var(--bg-soft)] px-3 text-xs text-white outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--accent-warm)]"
                  placeholder="Al Said"
                />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label
                  htmlFor="phone"
                  className="text-[11px] font-medium text-white"
                >
                  Mobile number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="h-9 w-full rounded-md border border-[var(--border-subtle)] bg-[var(--bg-soft)] px-3 text-xs text-white outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--accent-warm)]"
                  placeholder="+968…"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-[11px] font-medium text-white"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="h-9 w-full rounded-md border border-[var(--border-subtle)] bg-[var(--bg-soft)] px-3 text-xs text-white outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--accent-warm)]"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="treatment"
                className="text-[11px] font-medium text-white"
              >
                Treatment of interest
              </label>
              <select
                id="treatment"
                name="treatment"
                className="h-9 w-full rounded-md border border-[var(--border-subtle)] bg-[var(--bg-soft)] px-3 text-xs text-white outline-none focus:border-[var(--accent-warm)]"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a treatment
                </option>
                <option>General Dentistry</option>
                <option>Cosmetic / Veneers</option>
                <option>Invisalign / Braces</option>
                <option>Implants / Surgery</option>
                <option>Dermatology / Skin</option>
                <option>Laser Treatments</option>
                <option>Not sure yet</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="text-[11px] font-medium text-white"
              >
                Message (optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="w-full rounded-md border border-[var(--border-subtle)] bg-[var(--bg-soft)] px-3 py-2 text-xs text-white outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--accent-warm)]"
                placeholder="Tell us briefly about your goals or concerns..."
              />
            </div>

            <button
              type="submit"
              className="btn-animated mt-2 inline-flex w-full items-center justify-center rounded-md border border-[var(--border-strong)] bg-[var(--accent-warm)] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-black hover:bg-transparent hover:text-[var(--accent-warm)]"
            >
              Send request
            </button>
            <p className="pt-1 text-[10px] leading-relaxed text-[var(--text-muted)]">
              By submitting this form you agree to be contacted by our patient
              coordination team via phone, WhatsApp or email.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

