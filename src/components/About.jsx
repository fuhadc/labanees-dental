"use client";
import React, { useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.about-text', {
                y: 40, opacity: 0, duration: 1, stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
            });
            gsap.from('.about-img', {
                scale: 0.94, opacity: 0, duration: 1.3,
                ease: 'power3.out',
                scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const features = [
        { title: "Expert Team", desc: "Lebanon-trained dental professionals committed to world-class excellence" },
        { title: "Advanced Technology", desc: "State-of-the-art equipment for precision diagnostics and treatment" },
        { title: "Patient-Centered Care", desc: "A warm, comfortable environment focused entirely on your well-being" },
    ];

    return (
        <section id="about" ref={sectionRef} className="py-28 bg-surface relative overflow-hidden">
            {/* Subtle decorative line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image */}
                    <div className="about-img relative group rounded-2xl overflow-hidden aspect-[4/5] md:aspect-video lg:aspect-[4/5] w-full shadow-[0_20px_60px_rgba(13,27,42,0.12)]">
                        <img
                            src="https://images.unsplash.com/photo-1609207925193-0339a96de7f2?q=80&w=2070&auto=format&fit=crop"
                            alt="Lebanese Dental Clinic – Modern Treatment Room"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-104"
                        />
                        {/* Gold corner accent */}
                        <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-primary/60 pointer-events-none rounded-tl-sm" />
                        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-primary/60 pointer-events-none rounded-br-sm" />

                        {/* Floating credential badge */}
                        <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-5 py-3 rounded-xl shadow-lg border border-border">
                            <div className="text-2xl font-display font-bold text-primary leading-none">15+</div>
                            <div className="text-[11px] text-textMuted uppercase tracking-widest mt-0.5">Years of Excellence</div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="lg:pl-6">
                        <span className="about-text text-primary uppercase tracking-[0.2em] font-semibold text-xs mb-4 block">
                            About Us
                        </span>
                        <h2 className="about-text text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 text-navy leading-[1.05]">
                            About <span className="text-gradient">Lebanese Dental Clinic</span>
                        </h2>
                        <p className="about-text text-textMuted text-lg mb-10 leading-relaxed font-light">
                            Lebanese Dental Clinic is a premier dental centre in Muscat combining advanced cosmetic dentistry with Lebanon's renowned precision and artistry. We deliver natural, confident smiles using the latest technology and a deeply personal approach.
                        </p>

                        <div className="flex flex-col gap-6 mb-12">
                            {features.map((feature, idx) => (
                                <div key={idx} className="about-text flex items-start gap-4 group">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center mt-0.5 group-hover:bg-primary/20 transition-colors">
                                        <CheckCircle2 className="text-primary" size={17} />
                                    </div>
                                    <div>
                                        <h4 className="text-navy font-display font-semibold text-lg">{feature.title}</h4>
                                        <p className="text-textMuted font-light mt-1 text-sm leading-relaxed">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a
                            href="#specialties"
                            className="about-text inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-widest hover:text-primary-hover transition-colors group"
                        >
                            <span className="border-b border-primary group-hover:border-primary-hover transition-colors pb-0.5">Explore Our Services</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
