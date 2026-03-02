"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Specialties', href: '#specialties' },
        { name: 'Implants', href: '#featured' },
        { name: 'Smile Gallery', href: '#before-after' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-white/97 backdrop-blur-md shadow-[0_2px_20px_rgba(13,27,42,0.08)] py-3 border-b border-border'
                    : 'bg-white/80 backdrop-blur-sm py-5'
                }`}
        >
            <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
                {/* Logo */}
                <a href="#home" className="flex flex-col group">
                    <span
                        className="font-display font-bold text-primary leading-none tracking-wide group-hover:text-primary-hover transition-colors"
                        style={{ fontSize: '1.5rem', letterSpacing: '0.05em' }}
                    >
                        LEBANESE
                    </span>
                    <span className="font-sans font-light tracking-[0.25em] text-[9px] uppercase mt-0.5 text-textMuted leading-none">
                        Dental Clinic · Muscat
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex gap-7">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-[11px] font-semibold text-navy hover:text-primary transition-colors uppercase tracking-widest relative group/link"
                            >
                                {link.name}
                                <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-primary group-hover/link:w-full transition-all duration-300" />
                            </a>
                        ))}
                    </div>
                    <a
                        href="#contact"
                        className="cta-pulse bg-primary hover:bg-primary-hover text-white font-bold text-[11px] px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-[0_4px_14px_rgba(197,165,90,0.4)]"
                    >
                        <Phone size={13} />
                        <span className="uppercase tracking-widest">Book Now</span>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden text-navy hover:text-primary transition-colors"
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white absolute top-full left-0 w-full border-t border-border shadow-lg overflow-hidden"
                    >
                        <div className="flex flex-col py-6 px-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-sm font-semibold tracking-widest text-navy hover:text-primary transition-colors border-b border-border pb-3 uppercase"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="bg-primary text-white font-bold text-sm px-6 py-3 rounded-full text-center uppercase tracking-widest mt-2 hover:bg-primary-hover transition-colors shadow-[0_4px_14px_rgba(197,165,90,0.35)]"
                            >
                                Book Appointment
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
