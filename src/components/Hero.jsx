"use client";
import React, { useEffect, useRef } from 'react';
import { ChevronDown, Star, Phone, CalendarCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMagneticHover } from '@/lib/animations/useMagneticHover';

gsap.registerPlugin(ScrollTrigger);

const WORDS = ["Revitalize", "Your", "Smile"];
const WORDS2 = ["with", "Confidence"];

const Hero = () => {
    const sectionRef = useRef(null);
    const bgImgRef = useRef(null);
    const contentRef = useRef(null);
    const tiltContainerRef = useRef(null);
    const whatsappRef = useRef(null);

    useMagneticHover(whatsappRef, { strength: 0.45 });

    // 3D tilt on mouse move
    useEffect(() => {
        const section = sectionRef.current;
        const content = tiltContainerRef.current;
        if (!section || !content) return;
        const mm = gsap.matchMedia();
        mm.add('(min-width: 768px)', () => {
            const handleMouseMove = (e) => {
                const { innerWidth: w, innerHeight: h } = window;
                const rx = ((e.clientY / h) - 0.5) * -8;
                const ry = ((e.clientX / w) - 0.5) * 8;
                gsap.to(content, { rotateX: rx, rotateY: ry, duration: 1.2, ease: 'power2.out', overwrite: true });
            };
            const handleMouseLeave = () => {
                gsap.to(content, { rotateX: 0, rotateY: 0, duration: 1.2, ease: 'elastic.out(1, 0.5)' });
            };
            section.addEventListener('mousemove', handleMouseMove);
            section.addEventListener('mouseleave', handleMouseLeave);
            return () => {
                section.removeEventListener('mousemove', handleMouseMove);
                section.removeEventListener('mouseleave', handleMouseLeave);
            };
        });
        return () => mm.revert();
    }, []);

    // Cinematic entry
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

            // Parallax on scroll
            const mm = gsap.matchMedia();
            mm.add('(min-width: 768px)', () => {
                gsap.to(bgImgRef.current, {
                    yPercent: 20, ease: 'none',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: true },
                });
            });

            // Badge
            tl.fromTo('.hero-badge', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.3);
            // Line 1 words
            tl.fromTo('.hero-word-1', { opacity: 0, y: 70, rotateX: -15 }, { opacity: 1, y: 0, rotateX: 0, duration: 0.9, stagger: 0.1 }, 0.55);
            // Line 2 words
            tl.fromTo('.hero-word-2', { opacity: 0, y: 70, rotateX: -15 }, { opacity: 1, y: 0, rotateX: 0, duration: 0.9, stagger: 0.1 }, 0.85);
            // Divider
            tl.fromTo('.hero-divider', { scaleX: 0 }, { scaleX: 1, duration: 0.7, ease: 'power2.out' }, 1.2);
            // Para
            tl.fromTo('.hero-para', { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.8 }, 1.35);
            // Buttons
            tl.fromTo('.hero-btn', { opacity: 0, y: 18, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.12 }, 1.6);
            // Stats bar
            tl.fromTo('.hero-stat', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }, 1.9);
            // Scroll indicator
            gsap.fromTo('.scroll-indicator', { opacity: 0 }, { opacity: 1, duration: 1, delay: 2.6 });

        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="home"
            ref={sectionRef}
            className="relative min-h-screen w-full flex items-center overflow-hidden"
            style={{ perspective: '1000px' }}
        >
            {/* ── Background Image (right side, full bleed) ─────────────────── */}
            <div className="absolute inset-0 z-0">
                <img
                    ref={bgImgRef}
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
                    alt="Smiling patient at Lebanese Dental Clinic"
                    className="w-full h-[115%] object-cover object-[70%_20%] -mt-[7%]"
                    style={{ willChange: 'transform' }}
                />
                {/* Gradient overlays — heavy left, lighter right */}
                <div className="absolute inset-0"
                    style={{ background: 'linear-gradient(105deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.88) 42%, rgba(255,255,255,0.35) 68%, rgba(255,255,255,0.05) 100%)' }}
                />
                <div className="absolute inset-0"
                    style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, transparent 30%, rgba(255,255,255,0.2) 100%)' }}
                />
            </div>

            {/* ── Gold ambient glow (left) ─────────────────────────────────── */}
            <div
                className="absolute z-1 pointer-events-none"
                style={{
                    top: '40%', left: '-5%',
                    width: '500px', height: '500px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(197,165,90,0.12) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                }}
            />

            {/* ── Content ──────────────────────────────────────────────────── */}
            <div
                ref={contentRef}
                className="relative z-10 w-full px-6 pt-32 pb-20 max-w-7xl mx-auto"
                style={{ willChange: 'transform' }}
            >
                <div
                    ref={tiltContainerRef}
                    className="max-w-2xl"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* Badge */}
                    <div className="hero-badge flex mb-8 opacity-0">
                        <span className="inline-flex items-center gap-2 bg-white/80 border border-primary/30 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                            <Star className="text-primary w-3.5 h-3.5 fill-primary" />
                            <span className="text-navy text-[11px] font-semibold tracking-[0.18em] uppercase">
                                Premier Dental Care · Muscat
                            </span>
                        </span>
                    </div>

                    {/* Headline */}
                    <h1
                        className="text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-0 text-navy leading-[1.0]"
                        style={{ perspective: '600px', transformStyle: 'preserve-3d' }}
                    >
                        <span className="block overflow-hidden pb-1">
                            {WORDS.map((w, i) => (
                                <span
                                    key={i}
                                    className="hero-word-1 inline-block mr-[0.22em] opacity-0"
                                    style={{ transformStyle: 'preserve-3d' }}
                                >
                                    {w}
                                </span>
                            ))}
                        </span>
                        <span className="block overflow-hidden pb-2">
                            {WORDS2.map((w, i) => (
                                <span
                                    key={i}
                                    className={`hero-word-2 inline-block mr-[0.22em] opacity-0 ${i === 1 ? 'text-gradient' : 'text-navy'}`}
                                    style={{ transformStyle: 'preserve-3d' }}
                                >
                                    {w}
                                </span>
                            ))}
                        </span>
                    </h1>

                    {/* Gold divider */}
                    <div className="hero-divider w-24 h-0.5 bg-primary mt-6 mb-6 origin-left" />

                    {/* Sub-heading */}
                    <p className="hero-para text-base md:text-lg text-textMuted max-w-xl mb-10 leading-relaxed font-light opacity-0">
                        Advanced cosmetic dentistry & precision implants by Lebanon-trained specialists. Beautiful, natural smiles — crafted in Muscat.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 items-start mb-14">
                        <a
                            href="#contact"
                            className="hero-btn opacity-0 cta-pulse inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-sm uppercase tracking-widest shadow-[0_6px_20px_rgba(197,165,90,0.4)]"
                        >
                            <CalendarCheck size={16} />
                            Book Appointment
                        </a>
                        <a
                            href="tel:+96896700335"
                            className="hero-btn opacity-0 inline-flex items-center gap-2 bg-white/70 hover:bg-white text-navy border border-navy/20 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-sm uppercase tracking-widest backdrop-blur-sm hover:border-primary/40"
                        >
                            <Phone size={15} />
                            Call Us
                        </a>
                    </div>

                    {/* Mini stats bar */}
                    <div className="flex items-center gap-8 flex-wrap">
                        {[
                            { num: '15+', label: 'Years Experience' },
                            { num: '1,000+', label: 'Happy Patients' },
                            { num: '5★', label: 'Google Rated' },
                        ].map((s, i) => (
                            <div key={i} className="hero-stat opacity-0 flex items-center gap-3">
                                {i > 0 && <div className="w-px h-6 bg-navy/15 hidden sm:block" />}
                                <div>
                                    <div className="text-xl font-display font-bold text-primary leading-none">{s.num}</div>
                                    <div className="text-[11px] text-textMuted uppercase tracking-wider mt-0.5">{s.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center opacity-0">
                <span className="text-[10px] uppercase tracking-[0.3em] text-textMuted mb-3">Scroll</span>
                <div className="animate-bounce">
                    <ChevronDown className="text-primary/60" size={20} />
                </div>
            </div>

            {/* Floating WhatsApp Button (Magnetic) */}
            <a
                ref={whatsappRef}
                href="https://wa.me/96896700335"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-colors duration-300"
                style={{
                    background: 'linear-gradient(135deg, #25D366, #128C7E)',
                    boxShadow: '0 4px 30px rgba(37,211,102,0.35)',
                    willChange: 'transform',
                }}
                aria-label="Chat on WhatsApp"
            >
                <span className="wp-pulse-ring" />
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.940 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.12 1.529 5.848L.057 23.514a.5.5 0 0 0 .61.61l5.756-1.507A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.67-.526-5.18-1.436l-.37-.22-3.837 1.005 1.022-3.733-.24-.384A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
            </a>
        </section>
    );
};

export default Hero;
