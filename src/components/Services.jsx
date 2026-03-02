"use client";
import React, { useEffect, useRef } from 'react';
import { Sparkles, Smile, Droplets, Activity, Zap, ShieldPlus, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const servicesList = [
    {
        title: "Dental Implants",
        description: "Permanent, natural-looking tooth replacements that restore full function and aesthetics with titanium precision.",
        icon: ShieldPlus,
        img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Hollywood Smile",
        description: "A complete aesthetic makeover for a flawless, bright, and perfectly aligned smile that lights up the room.",
        icon: Sparkles,
        img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Porcelain Veneers",
        description: "Custom-crafted ultra-thin porcelain shells that dramatically improve the look of your teeth — instantly.",
        icon: Smile,
        img: "https://images.unsplash.com/photo-1588776814546-1ffbb6b955e7?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Teeth Whitening",
        description: "Professional brightening treatments to safely eliminate stains and discoloration for a radiant, confident smile.",
        icon: Zap,
        img: "https://images.unsplash.com/photo-1609207925193-0339a96de7f2?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Root Canal Treatment",
        description: "Expert endodontic care designed to save your natural tooth, eliminate pain, and restore comfort.",
        icon: Activity,
        img: "https://images.unsplash.com/photo-1598256630090-0a2b3f12c3d2?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Cleaning & Prevention",
        description: "Comprehensive hygiene appointments combining deep cleaning, polishing, and personalised preventive advice.",
        icon: Droplets,
        img: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=800&auto=format&fit=crop",
    },
];

const Services = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.service-header', { y: 50, opacity: 0 }, {
                y: 0, opacity: 1, duration: 0.9, ease: 'power4.out',
                scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true },
            });
            gsap.fromTo('.service-card-wrap', { y: 60, opacity: 0 }, {
                y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power4.out',
                scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="specialties" ref={sectionRef} className="py-28 bg-background relative overflow-hidden">
            {/* Subtle top border accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-primary/40" />

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center max-w-2xl mx-auto mb-20 service-header opacity-0">
                    <span className="text-primary uppercase tracking-[0.25em] font-semibold text-xs mb-4 block">
                        Comprehensive Care
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-navy leading-tight">
                        Our Dental <span className="text-gradient">Specialties</span>
                    </h2>
                    <p className="text-textMuted text-lg font-light leading-relaxed">
                        Premium dental treatments tailored to your unique needs, performed by world-class Lebanon-trained specialists.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesList.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={idx}
                                className="service-card-wrap opacity-0 group bg-white border border-border rounded-2xl overflow-hidden hover:shadow-[0_12px_40px_rgba(13,27,42,0.1)] hover:border-primary/40 transition-all duration-400 cursor-pointer"
                            >
                                {/* Image */}
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={service.img}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                                    />
                                    <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/15 transition-colors duration-400" />
                                    <div className="absolute bottom-3 left-4">
                                        <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                                            <Icon size={18} className="text-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-display font-bold text-navy mb-3 group-hover:text-primary transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-textMuted text-sm font-light leading-relaxed mb-5">
                                        {service.description}
                                    </p>
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary uppercase tracking-widest group-hover:gap-2.5 transition-all duration-300"
                                    >
                                        Learn More <ArrowRight size={13} />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
