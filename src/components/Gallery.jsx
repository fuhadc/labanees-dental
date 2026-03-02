"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551076805-e1149f164719?q=80&w=2067&auto=format&fit=crop",
];

const Gallery = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.gallery-header', {
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 85%',
                }
            });
            gsap.from('.gallery-img', {
                scale: 0.8,
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
        <section id="gallery" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center max-w-2xl mx-auto mb-20 gallery-header">
                    <span className="text-primary uppercase tracking-[0.2em] font-semibold text-xs mb-4 block">
                        Inside Naya
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white leading-tight">
                        Our <span className="text-gradient">Gallery</span>
                    </h2>
                    <p className="text-textMuted text-lg font-light leading-relaxed">
                        Take a tour of our luxurious facilities designed with your utmost comfort and privacy in mind.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                    {images.map((src, idx) => (
                        <div key={idx} className="gallery-img relative overflow-hidden rounded-xl aspect-[4/3] group cursor-pointer bg-surface border border-white/5">
                            <img
                                src={src}
                                alt={`Clinic view ${idx + 1}`}
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 filter hover:brightness-110"
                            />
                            <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white text-xs md:text-sm uppercase tracking-widest border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm">View Full</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
