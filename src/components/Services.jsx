"use client";
import React, { useEffect, useRef } from 'react';
import { Sparkles, Smile, Droplets, Activity, Zap, ShieldPlus } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const servicesList = [
    {
        title: "Dental Implants",
        description: "Permanent, natural-looking tooth replacements that restore full function and aesthetics.",
        icon: <ShieldPlus size={40} className="text-primary mb-6" />
    },
    {
        title: "Hollywood Smile",
        description: "A complete aesthetic makeover for a flawless, bright, and perfectly aligned smile.",
        icon: <Sparkles size={40} className="text-primary mb-6" />
    },
    {
        title: "Veneers",
        description: "Custom-crafted porcelain shells that dramatically improve the look of your teeth.",
        icon: <Smile size={40} className="text-primary mb-6" />
    },
    {
        title: "Teeth Whitening",
        description: "Professional brightening treatments to safely eliminate stains and discoloration.",
        icon: <Zap size={40} className="text-primary mb-6" />
    },
    {
        title: "Root Canal Treatment",
        description: "Expert endodontic care to save damaged teeth and eliminate pain effectively.",
        icon: <Activity size={40} className="text-primary mb-6" />
    },
    {
        title: "Cleaning & Polishing",
        description: "Routine preventive care to maintain optimal oral hygiene and plaque removal.",
        icon: <Droplets size={40} className="text-primary mb-6" />
    }
];

const Services = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.service-header', {
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 85%',
                }
            });
            gsap.from('.service-card', {
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="specialties" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center max-w-2xl mx-auto mb-20 service-header">
                    <span className="text-primary uppercase tracking-[0.2em] font-semibold text-xs mb-4 block">
                        Comprehensive Care
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white leading-tight">
                        Our Dental <span className="text-gradient">Specialties</span>
                    </h2>
                    <p className="text-textMuted text-lg font-light leading-relaxed">
                        Discover a wide range of premium dental treatments tailored to your unique needs, performed by world-class specialists.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesList.map((service, idx) => (
                        <div key={idx} className="service-card bg-surface border border-white/5 rounded-2xl p-8 hover:border-primary/50 transition-colors duration-500 group">
                            <div className="group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 origin-bottom-left">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-textMuted text-base font-light leading-relaxed">
                                {service.description}
                            </p>
                            <div className="mt-8 pt-6 border-t border-white/5 group-hover:border-primary/20 transition-colors">
                                <a href="#contact" className="uppercase tracking-[0.2em] text-xs font-semibold text-white group-hover:text-primary flex items-center gap-2 transition-colors">
                                    Learn More <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity group-hover:translate-x-1 duration-300">→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
