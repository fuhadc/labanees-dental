"use client";

import { motion, Variants } from "framer-motion";

export default function ContactSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="contact"
      aria-label="Contact & Appointment"
      className="bg-[var(--bg-dark)] overflow-hidden"
    >
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="section-padding-x section-padding-y mx-auto flex max-w-[90rem] flex-col gap-16 lg:flex-row lg:items-start"
      >
        <div className="flex-1 space-y-10">
          <motion.div variants={itemVariants}>
            <p className="font-display text-[10px] uppercase tracking-[0.5em] text-[var(--accent-warm)]">
              Connect With Us
            </p>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white italic leading-tight">
              Begin Your Journey <br /> to Excellence.
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-10 h-px bg-[var(--accent-warm)]" 
            />
            <p className="mt-10 text-lg font-light leading-relaxed text-white/40 max-w-lg italic">
              Experience dental care redefined. Reach out to our dedicated team 
              to schedule your bespoke consultation in our Muscat facility.
            </p>
          </motion.div>

          <motion.dl variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="flex flex-col gap-3">
              <dt className="font-display text-[9px] uppercase tracking-[0.4em] text-[var(--accent-warm)]/50">Direct Line</dt>
              <dd className="text-white font-light text-xl tracking-tight">+968 9670 0335</dd>
            </div>
            <div className="flex flex-col gap-3">
              <dt className="font-display text-[9px] uppercase tracking-[0.4em] text-[var(--accent-warm)]/50">Digital Correspondence</dt>
              <dd className="text-white font-light text-xl tracking-tight">info@labanees.com</dd>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-2">
              <dt className="font-display text-[9px] uppercase tracking-[0.4em] text-[var(--accent-warm)]/50">Muscat Facility</dt>
              <dd className="text-white font-light text-lg leading-relaxed italic">
                18th November St, Al Ghubrah South<br />
                Muscat, Sultanate of Oman
              </dd>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-2">
              <dt className="font-display text-[9px] uppercase tracking-[0.4em] text-[var(--accent-warm)]/50">Clinical Hours</dt>
              <dd className="text-white/40 font-light text-sm space-y-2">
                <p><span className="text-white min-w-[100px] inline-block font-medium">Sat – Wed:</span> 9:00 – 13:00 • 16:00 – 20:00</p>
                <p><span className="text-white min-w-[100px] inline-block font-medium">Thursday:</span> 9:00 – 14:00</p>
                <p><span className="text-[var(--accent-warm)] italic font-medium">Friday:</span> Sanctuary Day • Closed</p>
              </dd>
            </div>
          </motion.dl>

          {/* Embedded Google Map */}
          <motion.div 
            variants={itemVariants}
            className="relative h-[400px] w-full overflow-hidden border border-white/5 bg-white/[0.02] grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14626.685235555555!2d58.393435!3d23.5855!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ff0033350335%3A0x3e91ff0033350335!2sLebanese%20Dental%20Clinic!5e0!3m2!1sen!2som!4v1714310000000!5m2!1sen!2som"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>

        <motion.div
          id="booking"
          variants={itemVariants}
          className="flex-1 bg-white/[0.03] backdrop-blur-[60px] border border-white/10 px-8 py-12 md:px-12 md:py-16 shadow-[0_50px_100px_rgba(0,0,0,0.4)]"
        >
          <p className="font-display text-[10px] uppercase tracking-[0.4em] text-[var(--accent-warm)]">
            Appointment Inquiry
          </p>
          <h3 className="mt-4 font-serif text-3xl font-medium text-white italic">
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
                  className="w-full border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none focus:border-[var(--accent-warm)] transition-colors duration-500 placeholder:text-white/5"
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
                  className="w-full border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none focus:border-[var(--accent-warm)] transition-colors duration-500 placeholder:text-white/5"
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
                  className="w-full border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none focus:border-[var(--accent-warm)] transition-colors duration-500 placeholder:text-white/5"
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
                  className="w-full border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none focus:border-[var(--accent-warm)] transition-colors duration-500 placeholder:text-white/5"
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
                className="w-full border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none focus:border-[var(--accent-warm)] transition-colors duration-500 appearance-none"
                defaultValue=""
              >
                <option value="" disabled className="bg-[var(--bg-dark)]">Select treatment</option>
                <option className="bg-[var(--bg-dark)]">General Dentistry</option>
                <option className="bg-[var(--bg-dark)]">Cosmetic / Veneers</option>
                <option className="bg-[var(--bg-dark)]">Invisalign / Braces</option>
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
                className="w-full border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none focus:border-[var(--accent-warm)] transition-colors duration-500 placeholder:text-white/5 resize-none"
                placeholder="Share any specific goals or concerns..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-animated group relative w-full border border-[var(--accent-warm)] bg-[var(--accent-warm)] py-6 text-[10px] font-bold uppercase tracking-[0.4em] text-black hover:bg-transparent hover:text-[var(--accent-warm)] transition-all duration-700 shadow-[0_0_50px_rgba(197,163,116,0.1)]"
            >
              Confirm Inquiry
            </motion.button>
            
            <p className="text-[10px] leading-relaxed text-white/20 text-center italic tracking-wider">
              By confirming, you authorize our coordination team to contact you via preferred digital channels.
            </p>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}

