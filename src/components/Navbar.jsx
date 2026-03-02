"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Specialties', href: '#specialties' },
        { name: 'Implants', href: '#featured' },
        { name: 'Why Us', href: '#why-us' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg py-4 border-b border-white/5' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
                {/* Logo */}
                <a href="#home" className="text-2xl font-display font-bold text-white flex flex-col group">
                    <span className="text-primary group-hover:text-primary-hover transition-colors leading-none tracking-wide">LEBANESE</span>
                    <span className="font-light tracking-[0.2em] text-[10px] uppercase mt-1 text-textMuted leading-none">Dental Clinic</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-xs font-semibold text-textMain hover:text-primary transition-colors uppercase tracking-widest"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <a href="#contact" className="bg-primary hover:bg-primaryHover text-background font-bold text-sm px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2">
                        <Phone size={14} />
                        <span className="uppercase tracking-widest">Book Now</span>
                    </a>
                </div>

                {/* Mobile Nav Toggle */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white hover:text-primary transition-colors">
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden bg-surface/95 backdrop-blur-lg absolute top-full left-0 w-full border-t border-white/5"
                >
                    <div className="flex flex-col py-6 px-6 gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-sm font-semibold tracking-widest text-textMain hover:text-primary transition-colors border-b border-white/5 pb-3 uppercase"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-primary text-background font-bold text-sm px-6 py-3 rounded-full text-center uppercase tracking-widest mt-2 hover:bg-primaryHover transition-colors">
                            Book Appointment
                        </a>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
