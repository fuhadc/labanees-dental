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
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                }
            });
            gsap.from('.about-img', {
                scale: 0.9,
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

    const features = [
        { title: "Expert Team", desc: "Experienced dental professionals committed to excellence" },
        { title: "Advanced Technology", desc: "State-of-the-art equipment for precise treatments" },
        { title: "Patient-Centered Care", desc: "Comfortable environment focused on your well-being" }
    ];

    return (
        <section id="about" ref={sectionRef} className="py-24 bg-surface relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image */}
                    <div className="about-img relative group rounded-xl overflow-hidden aspect-[4/5] md:aspect-video lg:aspect-[4/5] w-full">
                        <img
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                            alt="Lebanese Dental Clinic Team"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale hover:grayscale-0"
                        />
                        <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none"></div>
                    </div>

                    {/* Text Content */}
                    <div className="lg:pl-8">
                        <span className="about-text text-primary uppercase tracking-[0.2em] font-semibold text-xs mb-4 block">
                            About Us
                        </span>
                        <h2 className="about-text text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 text-white leading-[1.1]">
                            About <span className="text-gradient">Lebanese Dental Clinic</span>
                        </h2>
                        <p className="about-text text-textMuted text-lg mb-10 leading-relaxed font-light">
                            Lebanese Dental Clinic is a comprehensive dental center in Muscat offering advanced cosmetic dentistry and implant solutions. Our clinic combines modern technology with precision, artistry, and patient-focused care to deliver natural, confident smiles.
                        </p>

                        <div className="flex flex-col gap-6 mb-12">
                            {features.map((feature, idx) => (
                                <div key={idx} className="about-text flex items-start gap-4">
                                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                                    <div>
                                        <h4 className="text-white font-semibold text-lg">{feature.title}</h4>
                                        <p className="text-textMuted font-light mt-1">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a href="#specialties" className="about-text inline-block border-b border-primary text-primary hover:text-primaryHover pb-1 uppercase tracking-widest text-sm font-semibold transition-colors">
                            Explore Our Services
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
