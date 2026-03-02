"use client";
import React, { useEffect, useRef } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const contactItems = [
    {
        icon: MapPin,
        label: "Location",
        value: <>18th November Street<br />Muscat, Oman</>,
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+968 9670 0335",
    },
    {
        icon: Clock,
        label: "Working Hours",
        value: "9:00 AM – 8:00 PM Daily",
    },
];

const Contact = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.contact-info', {
                x: -40, opacity: 0, duration: 1, ease: 'power3.out',
                scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
            });
            gsap.from('.contact-map', {
                x: 40, opacity: 0, duration: 1, ease: 'power3.out',
                scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="contact" ref={sectionRef} className="py-28 bg-surface relative overflow-hidden">
            {/* Gold accent bar */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Contact Info */}
                    <div className="contact-info">
                        <span className="text-primary uppercase tracking-[0.25em] font-semibold text-xs mb-4 block">
                            Contact Us
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-navy leading-tight">
                            Get Your <span className="text-gradient">Smile Consultation</span> Today
                        </h2>
                        <p className="text-textMuted text-lg mb-12 font-light leading-relaxed max-w-md">
                            Take the first step towards a healthier, brighter smile. Contact us to schedule your appointment with our specialists.
                        </p>

                        <div className="space-y-7 mb-12">
                            {contactItems.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div key={idx} className="flex items-start gap-5 group">
                                        <div className="flex-shrink-0 w-12 h-12 bg-white border border-border rounded-full flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300 shadow-sm">
                                            <Icon className="text-primary" size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-navy font-display font-semibold text-lg mb-0.5">{item.label}</h4>
                                            <p className="text-textMuted font-light text-sm leading-relaxed">{item.value}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://wa.me/96896700335"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-[#25D366] hover:bg-[#1fbd5e] text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-sm uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(37,211,102,0.3)]"
                            >
                                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.940 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                </svg>
                                WhatsApp Us
                            </a>
                            <a
                                href="tel:+96896700335"
                                className="cta-pulse bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-sm uppercase tracking-wider text-center shadow-[0_4px_14px_rgba(197,165,90,0.35)]"
                            >
                                Call Now
                            </a>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="contact-map bg-white border border-border rounded-3xl overflow-hidden aspect-square md:aspect-[4/3] lg:aspect-square relative shadow-[0_12px_40px_rgba(13,27,42,0.1)]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14620.25208573619!2d58.375376!3d23.637012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8e01e6ca41838d%3A0xe7a5c7f8a379133!2s18th%20November%20St%2C%20Muscat%2C%20Oman!5e0!3m2!1sen!2sus!4v1710000000000"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        {/* Overlay badge */}
                        <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-md border border-border">
                            <div className="text-xs font-bold text-navy uppercase tracking-widest">Lebanese Dental Clinic</div>
                            <div className="text-[11px] text-textMuted mt-0.5">18th November St, Muscat</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
