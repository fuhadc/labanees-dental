"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const points = [
    "Long-lasting solution",
    "Natural appearance",
    "Preserves bone health",
    "Comfortable & stable"
];

const FeaturedService = () => {
    const sectionRef = useRef(null);
    const imgRef = useRef(null);
    const headlineRef = useRef(null);
    const descRef = useRef(null);
    const bulletRefs = useRef([]);
    const btnRef = useRef(null);
    const bgGradRef = useRef(null);

    bulletRefs.current = [];
    const addBulletRef = (el) => { if (el) bulletRefs.current.push(el); };

    useEffect(() => {
        const mm = gsap.matchMedia();

        // ── Desktop: Pinned scroll storytelling ──
        mm.add('(min-width: 768px)', () => {
            const ctx = gsap.context(() => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top top',
                        end: '+=120%',
                        pin: true,
                        scrub: 1.2,
                        anticipatePin: 1,
                    }
                });

                // Image scale as user scrolls
                tl.fromTo(imgRef.current,
                    { scale: 1, filter: 'blur(4px)', opacity: 0.7 },
                    { scale: 1.08, filter: 'blur(0px)', opacity: 1, ease: 'none' },
                    0
                );

                // Background gradient shift
                tl.fromTo(bgGradRef.current,
                    { opacity: 0 },
                    { opacity: 1, ease: 'none' },
                    0
                );

                // Headline fade in
                tl.fromTo(headlineRef.current,
                    { y: 40, opacity: 0 },
                    { y: 0, opacity: 1, ease: 'power3.out' },
                    0.1
                );

                // Description
                tl.fromTo(descRef.current,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, ease: 'power3.out' },
                    0.25
                );

                // Bullets stagger sequentially
                bulletRefs.current.forEach((el, i) => {
                    tl.fromTo(el,
                        { x: -30, opacity: 0 },
                        { x: 0, opacity: 1, ease: 'power3.out' },
                        0.35 + i * 0.1
                    );
                });

                // Buttons
                tl.fromTo(btnRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, ease: 'power3.out' },
                    0.75
                );
            }, sectionRef);

            return () => ctx.revert();
        });

        // ── Mobile: Simple scroll reveal (no pin) ──
        mm.add('(max-width: 767px)', () => {
            const ctx = gsap.context(() => {
                gsap.fromTo([headlineRef.current, descRef.current],
                    { y: 40, opacity: 0 },
                    {
                        y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'power4.out',
                        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true }
                    }
                );
                gsap.fromTo(bulletRefs.current,
                    { x: -20, opacity: 0 },
                    {
                        x: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
                        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true }
                    }
                );
                gsap.fromTo(imgRef.current,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
                        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true }
                    }
                );
            }, sectionRef);
            return () => ctx.revert();
        });

        return () => mm.revert();
    }, []);

    return (
        <section
            id="featured"
            ref={sectionRef}
            className="py-24 relative overflow-hidden border-t border-border"
            style={{ background: 'var(--color-surface)' }}
        >
            {/* Animated background gradient overlay */}
            <div
                ref={bgGradRef}
                className="absolute inset-0 pointer-events-none opacity-0"
                style={{
                    background: 'radial-gradient(ellipse 60% 70% at 70% 50%, rgba(197,165,90,0.09) 0%, rgba(13,27,42,0.03) 50%, transparent 80%)',
                }}
            />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="lg:pr-8 order-2 lg:order-1">
                        <span className="text-primary uppercase tracking-[0.2em] font-semibold text-xs mb-4 block">
                            Featured Treatment
                        </span>
                        <h2
                            ref={headlineRef}
                            className="text-4xl md:text-5xl lg:text-5xl font-display font-bold mb-8 text-navy leading-tight opacity-0"
                        >
                            Permanent, Natural-Looking <span className="text-gradient">Dental Implants</span>
                        </h2>
                        <p
                            ref={descRef}
                            className="text-textMuted text-lg mb-8 leading-relaxed font-light opacity-0"
                        >
                            Reclaim your confidence and oral health with our premium dental implant procedures. We utilize advanced 3D imaging and specialized techniques to ensure perfect placement, fast recovery, and a beautiful, enduring result.
                        </p>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                            {points.map((point, idx) => (
                                <li key={idx} ref={addBulletRef} className="flex items-center gap-3 opacity-0">
                                    <div className="bg-primary/20 p-1 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Check size={14} className="text-primary" />
                                    </div>
                                    <span className="text-navy font-medium">{point}</span>
                                </li>
                            ))}
                        </ul>

                        <div ref={btnRef} className="flex flex-col sm:flex-row gap-4 opacity-0">
                            <a href="#contact" className="cta-pulse bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-sm uppercase tracking-wider text-center shadow-[0_4px_14px_rgba(197,165,90,0.35)]">
                                Schedule Consultation
                            </a>
                            <a href="#contact" className="bg-transparent hover:bg-navy/5 text-navy border border-navy/20 px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-sm uppercase tracking-wider text-center hover:border-primary/40">
                                Learn More About Implants
                            </a>
                        </div>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full order-1 lg:order-2 border border-border shadow-[0_16px_50px_rgba(13,27,42,0.10)]">
                        <img
                            ref={imgRef}
                            src="https://images.unsplash.com/photo-1594824432247-f4728d11d13f?q=80&w=1943&auto=format&fit=crop"
                            alt="Dental Implants"
                            className="w-full h-full object-cover"
                            style={{ willChange: 'transform, filter', transformOrigin: 'center center' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-navy/40 to-transparent pointer-events-none" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeaturedService;
