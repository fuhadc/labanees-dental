"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FeaturedService = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.featured-text', {
                x: -40,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                }
            });
            gsap.from('.featured-img', {
                x: 40,
                opacity: 0,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const points = [
        "Long-lasting solution",
        "Natural appearance",
        "Preserves bone health",
        "Comfortable & stable"
    ];

    return (
        <section id="featured" ref={sectionRef} className="py-24 bg-surface relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="lg:pr-8 order-2 lg:order-1">
                        <span className="featured-text text-primary uppercase tracking-[0.2em] font-semibold text-xs mb-4 block">
                            Featured Treatment
                        </span>
                        <h2 className="featured-text text-4xl md:text-5xl lg:text-5xl font-display font-bold mb-8 text-white leading-tight">
                            Permanent, Natural-Looking <span className="text-gradient">Dental Implants</span>
                        </h2>
                        <p className="featured-text text-textMuted text-lg mb-8 leading-relaxed font-light">
                            Reclaim your confidence and oral health with our premium dental implant procedures. We utilize advanced 3D imaging and specialized techniques to ensure perfect placement, fast recovery, and a beautiful, enduring result.
                        </p>

                        <ul className="featured-text grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                            {points.map((point, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <div className="bg-primary/20 p-1 rounded-full flex items-center justify-center">
                                        <Check size={14} className="text-primary" />
                                    </div>
                                    <span className="text-textMain font-medium">{point}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="featured-text flex flex-col sm:flex-row gap-4">
                            <a href="#contact" className="bg-primary hover:bg-primaryHover text-background px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-sm uppercase tracking-wider text-center">
                                Schedule Consultation
                            </a>
                            <a href="#contact" className="bg-transparent hover:bg-white/5 text-white border border-white/20 px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-sm uppercase tracking-wider text-center">
                                Learn More About Implants
                            </a>
                        </div>
                    </div>

                    <div className="featured-img relative rounded-xl overflow-hidden aspect-[4/3] w-full order-1 lg:order-2 border border-white/10">
                        <img
                            src="https://images.unsplash.com/photo-1594824432247-f4728d11d13f?q=80&w=1943&auto=format&fit=crop"
                            alt="Dental Implants"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-background/80 to-transparent pointer-events-none"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeaturedService;
