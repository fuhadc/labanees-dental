"use client";
import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cases = [
    {
        label: "Dental Implants",
        before: "https://images.unsplash.com/photo-1598256630090-0a2b3f12c3d2?q=80&w=900&auto=format&fit=crop",
        after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=900&auto=format&fit=crop",
        desc: "Full arch implant restoration — natural result achieved in 2 visits.",
    },
    {
        label: "Hollywood Smile",
        before: "https://images.unsplash.com/photo-1588776814546-1ffbb6b955e7?q=80&w=900&auto=format&fit=crop",
        after: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=900&auto=format&fit=crop",
        desc: "18 porcelain veneers — from uneven teeth to a magazine-cover smile.",
    },
    {
        label: "Teeth Whitening + Veneers",
        before: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=900&auto=format&fit=crop",
        after: "https://images.unsplash.com/photo-1609207925193-0339a96de7f2?q=80&w=900&auto=format&fit=crop",
        desc: "Combination whitening and 6 composite veneers — stunning same-day transformation.",
    },
];

// ── Individual slider card ──────────────────────────────────────────────────
const BASlider = ({ before, after, label, desc }) => {
    const containerRef = useRef(null);
    const handleRef = useRef(null);
    const afterRef = useRef(null);
    const [pos, setPos] = useState(50); // 0–100 %
    const dragging = useRef(false);

    const updatePos = useCallback((clientX) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
        const pct = (x / rect.width) * 100;
        setPos(pct);
    }, []);

    // Mouse
    const onMouseDown = (e) => { e.preventDefault(); dragging.current = true; };
    useEffect(() => {
        const onMove = (e) => { if (dragging.current) updatePos(e.clientX); };
        const onUp = () => { dragging.current = false; };
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onUp);
        return () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp); };
    }, [updatePos]);

    // Touch
    const onTouchMove = (e) => updatePos(e.touches[0].clientX);

    return (
        <div className="ba-card group rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(13,27,42,0.1)] border border-border hover:shadow-[0_16px_50px_rgba(13,27,42,0.14)] transition-shadow duration-400">
            {/* Slider area */}
            <div
                ref={containerRef}
                className="ba-slider relative h-72 md:h-80 select-none"
                onMouseDown={onMouseDown}
                onTouchMove={onTouchMove}
                onTouchStart={(e) => updatePos(e.touches[0].clientX)}
            >
                {/* Before (full width underneath) */}
                <img
                    src={before}
                    alt="Before treatment"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    draggable={false}
                />
                {/* Before label */}
                <span className="absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-widest bg-navy/70 text-white px-2.5 py-1 rounded-full backdrop-blur-sm">
                    Before
                </span>

                {/* After (clipped to right of handle) */}
                <div
                    ref={afterRef}
                    className="absolute inset-0 overflow-hidden pointer-events-none"
                    style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
                >
                    <img
                        src={after}
                        alt="After treatment"
                        className="absolute inset-0 w-full h-full object-cover"
                        draggable={false}
                    />
                    <span className="absolute top-3 right-3 z-10 text-[10px] font-bold uppercase tracking-widest bg-primary/90 text-white px-2.5 py-1 rounded-full">
                        After
                    </span>
                </div>

                {/* Handle */}
                <div
                    ref={handleRef}
                    className="ba-handle"
                    style={{ left: `${pos}%` }}
                    onMouseDown={onMouseDown}
                    onTouchStart={(e) => { dragging.current = true; updatePos(e.touches[0].clientX); }}
                />
            </div>

            {/* Caption */}
            <div className="bg-white px-5 py-4 border-t border-border">
                <h4 className="font-display font-semibold text-navy text-lg">{label}</h4>
                <p className="text-textMuted text-xs font-light mt-1 leading-relaxed">{desc}</p>
            </div>
        </div>
    );
};

// ── Section ─────────────────────────────────────────────────────────────────
const BeforeAfter = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.ba-header', { y: 45, opacity: 0 }, {
                y: 0, opacity: 1, duration: 0.9, ease: 'power4.out',
                scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true },
            });
            gsap.fromTo('.ba-card', { y: 60, opacity: 0 }, {
                y: 0, opacity: 1, duration: 0.85, stagger: 0.15, ease: 'power4.out',
                scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="before-after" ref={sectionRef} className="py-28 bg-surface relative overflow-hidden">
            {/* Decorative gold dot cluster */}
            <div className="absolute right-10 top-12 opacity-[0.07] pointer-events-none" aria-hidden>
                {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="inline-block w-1 h-1 rounded-full bg-primary m-1.5" />
                ))}
            </div>

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center max-w-2xl mx-auto mb-20 ba-header opacity-0">
                    <span className="text-primary uppercase tracking-[0.25em] font-semibold text-xs mb-4 block">
                        Real Results
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-navy leading-tight">
                        Smile <span className="text-gradient">Transformations</span>
                    </h2>
                    <p className="text-textMuted text-lg font-light leading-relaxed">
                        Drag the slider to see the remarkable difference our treatments make. Real patients. Real results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {cases.map((c, i) => (
                        <BASlider key={i} before={c.before} after={c.after} label={c.label} desc={c.desc} />
                    ))}
                </div>

                {/* CTA bar */}
                <div className="text-center mt-16">
                    <p className="text-textMuted text-sm mb-5 font-light">Ready to start your own transformation?</p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 cta-pulse bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded-full font-semibold text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-[0_6px_20px_rgba(197,165,90,0.38)]"
                    >
                        Schedule Your Consultation
                    </a>
                </div>
            </div>
        </section>
    );
};

export default BeforeAfter;
