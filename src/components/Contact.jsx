"use client";
import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.contact-info', {
                x: -40,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                }
            });
            gsap.from('.contact-map', {
                x: 40,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="contact" ref={sectionRef} className="py-24 bg-surface relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Contact Info */}
                    <div className="contact-info">
                        <span className="text-primary uppercase tracking-[0.2em] font-semibold text-xs mb-4 block">
                            Contact Us
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white leading-tight">
                            Get Your <span className="text-gradient">Smile Consultation</span> Today
                        </h2>
                        <p className="text-textMuted text-lg mb-12 font-light leading-relaxed max-w-md">
                            Take the first step towards a healthier, brighter smile. Contact us to schedule your appointment with our experts.
                        </p>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-start gap-5 group">
                                <div className="bg-background border border-white/5 p-4 rounded-full group-hover:border-primary/50 transition-colors">
                                    <MapPin className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1 text-lg">Location</h4>
                                    <p className="text-textMuted font-light">18th November Street<br />Muscat, Oman</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="bg-background border border-white/5 p-4 rounded-full group-hover:border-primary/50 transition-colors">
                                    <Phone className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1 text-lg">Phone</h4>
                                    <p className="text-textMuted font-light">+968 9670 0335</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="bg-background border border-white/5 p-4 rounded-full group-hover:border-primary/50 transition-colors">
                                    <Clock className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1 text-lg">Working Hours</h4>
                                    <p className="text-textMuted font-light">9:00 AM – 8:00 PM Daily</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="https://wa.me/96896700335" target="_blank" rel="noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-sm uppercase tracking-wider text-center flex items-center justify-center gap-2">
                                WhatsApp
                            </a>
                            <a href="#" className="bg-primary hover:bg-primaryHover text-background px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-sm uppercase tracking-wider text-center">
                                Book Online
                            </a>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="contact-map bg-background border border-white/5 rounded-3xl overflow-hidden aspect-square md:aspect-[4/3] lg:aspect-square relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14620.25208573619!2d58.375376!3d23.637012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8e01e6ca41838d%3A0xe7a5c7f8a379133!2s18th%20November%20St%2C%20Muscat%2C%20Oman!5e0!3m2!1sen!2sus!4v1710000000000"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
