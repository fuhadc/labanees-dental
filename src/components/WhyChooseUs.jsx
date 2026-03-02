"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, ShieldCheck, Award, HeartHandshake, MapPin, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
    { icon: Star, title: "5-Star Google Rated" },
    { icon: ShieldCheck, title: "Advanced Technology" },
    { icon: Award, title: "Experienced Professionals" },
    { icon: HeartHandshake, title: "Comfortable Environment" },
    { icon: MapPin, title: "Prime Location" },
    { icon: Layers, title: "Comprehensive Solutions" },
];

const stats = [
    { target: 15, suffix: "+", label: "Years of Excellence" },
    { target: 75, suffix: "+", label: "5-Star Reviews" },
    { target: 1000, suffix: "+", label: "Happy Patients" },
];

// Animated counter
const StatItem = ({ target, suffix, label }) => {
    const numRef = useRef(null);

    useEffect(() => {
        const el = numRef.current;
        if (!el) return;
        const obj = { val: 0 };
        const ctx = gsap.context(() => {
            gsap.to(obj, {
                val: target, duration: 2.5, ease: 'power2.out',
                scrollTrigger: { trigger: el, start: 'top 85%', once: true },
                onUpdate: () => { el.textContent = `${Math.round(obj.val)}${suffix}`; },
            });
            gsap.fromTo(el.closest('.stat-wrap'),
                { opacity: 0, y: 25 },
                { opacity: 1, y: 0, duration: 0.9, ease: 'power4.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } }
            );
        });
        return () => ctx.revert();
    }, [target, suffix]);

    return (
        <div className="stat-wrap text-center py-6 opacity-0">
            <h4 ref={numRef} className="text-5xl md:text-6xl font-display font-bold text-primary mb-2">
                0{suffix}
            </h4>
            <p className="text-textMuted uppercase tracking-widest text-xs font-semibold">{label}</p>
        </div>
    );
};

const WhyChooseUs = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.why-header', { y: 40, opacity: 0 }, {
                y: 0, opacity: 1, duration: 0.9, ease: 'power4.out',
                scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true },
            });
            gsap.fromTo('.why-card', { scale: 0.9, opacity: 0 }, {
                scale: 1, opacity: 1, duration: 0.7, stagger: 0.09, ease: 'power4.out',
                scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="why-us" ref={sectionRef} className="py-28 bg-background relative overflow-hidden">
            {/* Subtle radial bg */}
            <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 70% 40% at 50% 100%, rgba(197,165,90,0.05) 0%, transparent 70%)' }} />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-20 why-header opacity-0">
                    <span className="text-primary uppercase tracking-[0.25em] font-semibold text-xs mb-4 block">
                        Our Edge
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-navy leading-tight">
                        Why Choose <span className="text-gradient">Lebanese Dental Clinic</span>
                    </h2>
                    <p className="text-textMuted text-lg font-light leading-relaxed">
                        We combine Lebanon's renowned dental artistry with cutting-edge technology to deliver exceptional results every time.
                    </p>
                </div>

                {/* Feature cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
                    {features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={idx}
                                className="why-card opacity-0 bg-white border border-border rounded-2xl p-6 flex items-center gap-4 hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(13,27,42,0.07)] transition-all duration-300 group cursor-default"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/8 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/40 transition-all duration-300">
                                    <Icon size={22} className="text-primary" />
                                </div>
                                <h3 className="text-navy font-display font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                                    {feature.title}
                                </h3>
                            </div>
                        );
                    })}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border border-border rounded-2xl bg-surface overflow-hidden">
                    {stats.map((stat, idx) => (
                        <StatItem key={idx} target={stat.target} suffix={stat.suffix} label={stat.label} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
