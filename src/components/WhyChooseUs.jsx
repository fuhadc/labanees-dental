"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, ShieldCheck, Award, HeartHandshake, MapPin, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
    { icon: <Star />, title: "5-Star Google Rated" },
    { icon: <ShieldCheck />, title: "Advanced Technology" },
    { icon: <Award />, title: "Experienced Professionals" },
    { icon: <HeartHandshake />, title: "Comfortable Environment" },
    { icon: <MapPin />, title: "Prime Location" },
    { icon: <Layers />, title: "Comprehensive Solutions" }
];

const stats = [
    { value: "15+", label: "Years of Excellence" },
    { value: "75+", label: "5-Star Reviews" },
    { value: "1000+", label: "Happy Patients" }
];

const WhyChooseUs = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.why-header', {
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 85%',
                }
            });
            gsap.from('.why-card', {
                scale: 0.9,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'back.out(1.2)',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                }
            });
            gsap.from('.stat-item', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.stats-container',
                    start: 'top 90%',
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="why-us" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center max-w-2xl mx-auto mb-20 why-header">
                    <span className="text-primary uppercase tracking-[0.2em] font-semibold text-xs mb-4 block">
                        Our Edge
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white leading-tight">
                        Why Choose <span className="text-gradient">Lebanese Dental Clinic</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                    {features.map((feature, idx) => (
                        <div key={idx} className="why-card bg-surface border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center hover:border-primary/30 transition-colors">
                            <div className="text-primary mb-4 p-4 bg-background rounded-full border border-white/5">
                                {React.cloneElement(feature.icon, { size: 32 })}
                            </div>
                            <h3 className="text-xl font-display font-semibold text-white">{feature.title}</h3>
                        </div>
                    ))}
                </div>

                <div className="stats-container grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-b border-white/10 py-12">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="stat-item text-center">
                            <h4 className="text-5xl md:text-6xl font-display font-bold text-primary mb-2">{stat.value}</h4>
                            <p className="text-textMuted uppercase tracking-widest text-sm font-semibold">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
