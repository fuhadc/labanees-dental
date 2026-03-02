"use client";
import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#0D1B2A' }} className="pt-20 pb-10">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="col-span-1 lg:col-span-1">
                        <a href="#home" className="flex flex-col mb-6 group">
                            <span
                                className="font-display font-bold text-primary leading-none tracking-wide group-hover:text-primary-hover transition-colors"
                                style={{ fontSize: '1.5rem', letterSpacing: '0.05em' }}
                            >
                                LEBANESE
                            </span>
                            <span className="font-sans font-light tracking-[0.25em] text-[9px] uppercase mt-0.5 text-white/40 leading-none">
                                Dental Clinic · Muscat
                            </span>
                        </a>
                        <p className="text-white/50 text-sm leading-relaxed mb-7 font-light">
                            Transforming smiles in Muscat with advanced cosmetic dentistry, precision implants, and exceptional patient care.
                        </p>
                        <div className="flex items-center gap-3">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/50 transition-all duration-300"
                                >
                                    <Icon size={15} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-display font-semibold mb-6 text-base tracking-wide">Quick Links</h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', href: '#home' },
                                { name: 'About', href: '#about' },
                                { name: 'Specialties', href: '#specialties' },
                                { name: 'Smile Gallery', href: '#before-after' },
                                { name: 'Contact', href: '#contact' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-white/50 hover:text-primary text-sm transition-colors block w-fit"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-display font-semibold mb-6 text-base tracking-wide">Our Services</h4>
                        <ul className="space-y-3">
                            {['Dental Implants', 'Hollywood Smile', 'Porcelain Veneers', 'Teeth Whitening', 'Root Canal'].map((item) => (
                                <li key={item}>
                                    <a href="#specialties" className="text-white/50 hover:text-primary text-sm transition-colors block w-fit">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-display font-semibold mb-6 text-base tracking-wide">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-white/50 text-sm font-light leading-relaxed">18th November Street<br />Muscat, Oman</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={16} className="text-primary flex-shrink-0" />
                                <a href="tel:+96896700335" className="text-white/50 hover:text-primary text-sm font-light transition-colors">+968 9670 0335</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock size={16} className="text-primary flex-shrink-0" />
                                <span className="text-white/50 text-sm font-light">9:00 AM – 8:00 PM Daily</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-3">
                    <p className="text-white/30 text-xs font-light">
                        &copy; {new Date().getFullYear()} Lebanese Dental Clinic. All rights reserved.
                    </p>
                    <p className="text-white/20 text-xs font-light">
                        Crafted with care · Muscat, Oman
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
