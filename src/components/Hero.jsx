"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Star } from 'lucide-react';

const Hero = () => {
    return (
        <section
            id="home"
            className="relative h-screen w-full flex items-center justify-center overflow-hidden"
        >
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop"
                    alt="Dental Clinic Interior"
                    className="w-full h-full object-cover object-center scale-105"
                />
                <div className="absolute inset-0 bg-background/80"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                >
                    <div className="flex justify-center mb-6 block">
                        <span className="inline-flex items-center gap-2 bg-surface/80 border border-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                            <Star className="text-primary w-4 h-4 fill-primary" />
                            <span className="text-textMain text-xs font-semibold tracking-wider uppercase">15+ Years of Excellence</span>
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 text-white leading-tight">
                        Transform Your Smile with <br />
                        <span className="text-gradient">Precision & Elegance</span>
                    </h1>
                    <p className="text-base md:text-lg text-textMuted max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        Advanced dental implants & cosmetic dentistry in Muscat. Experience world-class care combining modern technology with artistry for confident smiles.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="#contact" className="bg-primary hover:bg-primaryHover text-background px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-sm uppercase tracking-wider w-full sm:w-auto">
                            Book Your Consultation
                        </a>
                        <a href="tel:+96896700335" className="bg-transparent hover:bg-white/5 text-white border border-white/20 px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-sm uppercase tracking-wider w-full sm:w-auto backdrop-blur-sm">
                            Call Now
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] text-textMuted mb-3">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <ChevronDown className="text-primary/70" size={20} />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
