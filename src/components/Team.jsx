"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const doctors = [
    {
        name: "Dr. Wael F. Saif",
        title: "Orthodontics Specialist",
        credentials: "BDS, MSc (Orthodontics)",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop"
    },
    {
        name: "Dr. Sarah Ahmed",
        title: "Consultant Dermatologist",
        credentials: "MD, FAAD",
        image: "https://images.unsplash.com/photo-1594824432247-f4728d11d13f?q=80&w=1943&auto=format&fit=crop"
    },
    {
        name: "Dr. Khalid Rahman",
        title: "Aesthetic Dentist",
        credentials: "DDS, Member AACD",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
    }
];

const Team = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.team-header', {
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 85%',
                }
            });
            gsap.from('.team-card', {
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
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
        <section id="team" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center max-w-2xl mx-auto mb-20 team-header">
                    <span className="text-primary uppercase tracking-[0.2em] font-semibold text-xs mb-4 block">
                        Our Experts
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white leading-tight">
                        Meet The <span className="text-gradient">Team</span>
                    </h2>
                    <p className="text-textMuted text-lg font-light leading-relaxed">
                        Providing distinguished medical care through our team of highly qualified specialists dedicated to your wellbeing.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {doctors.map((doc, idx) => (
                        <div key={idx} className="team-card group cursor-pointer">
                            <div className="relative overflow-hidden rounded-xl aspect-[3/4] mb-6 border border-white/10 bg-surface">
                                <img
                                    src={doc.image}
                                    alt={doc.name}
                                    className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
                            </div>
                            <div className="text-center px-4">
                                <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                    {doc.name}
                                </h3>
                                <p className="text-primary uppercase tracking-[0.2em] text-xs font-semibold mb-2">
                                    {doc.title}
                                </p>
                                <p className="text-textMuted text-sm font-light">
                                    {doc.credentials}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
