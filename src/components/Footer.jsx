"use client";
import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-background border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    <div className="col-span-1 lg:col-span-1">
                        <a href="#home" className="text-2xl font-display font-bold text-white flex flex-col mb-6">
                            <span className="text-primary leading-none tracking-wide">LEBANESE</span>
                            <span className="font-light tracking-[0.2em] text-[10px] uppercase mt-1 text-textMuted leading-none">Dental Clinic</span>
                        </a>
                        <p className="text-textMuted text-sm leading-relaxed mb-6 font-light">
                            Transforming smiles in Muscat with advanced cosmetic dentistry, precision implants, and exceptional patient care.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-textMuted hover:text-primary hover:border-primary transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-textMuted hover:text-primary hover:border-primary transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-textMuted hover:text-primary hover:border-primary transition-colors">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-display font-semibold mb-6 text-lg">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'About', 'Specialties', 'Why Us', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-textMuted hover:text-primary text-sm transition-colors block w-fit">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-display font-semibold mb-6 text-lg">Our Services</h4>
                        <ul className="space-y-3">
                            {['Dental Implants', 'Hollywood Smile', 'Veneers', 'Teeth Whitening', 'Root Canal'].map((item) => (
                                <li key={item}>
                                    <a href="#specialties" className="text-textMuted hover:text-primary text-sm transition-colors block w-fit">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-display font-semibold mb-6 text-lg">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-textMuted text-sm font-light">18th November Street<br />Muscat, Oman</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-primary flex-shrink-0" />
                                <span className="text-textMuted text-sm font-light">+968 9670 0335</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock size={18} className="text-primary flex-shrink-0" />
                                <span className="text-textMuted text-sm font-light">9:00 AM – 8:00 PM Daily</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-textMuted text-xs font-light">
                        &copy; {new Date().getFullYear()} Lebanese Dental Clinic. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
