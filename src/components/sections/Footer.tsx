import { MapPin, Phone, Mail, Clock, Instagram, Facebook, ArrowRight } from "lucide-react";
import { Container } from "../layout/Container";

export function Footer() {
    return (
        <footer id="contact" className="bg-brand-950 text-brand-100 relative pt-20 pb-10">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Brand Col */}
                    <div className="flex flex-col space-y-6">
                        <div className="text-2xl font-serif font-bold text-white flex flex-col leading-none">
                            <span className="text-white">Lebanese</span>
                            <span className="text-sm tracking-widest text-brand-400 font-sans uppercase">Dental Clinic</span>
                        </div>
                        <p className="text-brand-400 leading-relaxed font-light text-balance text-sm">
                            Transforming smiles with precision, elegance, and world-class expertise in the heart of Muscat.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-brand-900 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-brand-900 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-colors">
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Contact Col */}
                    <div>
                        <h4 className="text-white font-sans uppercase tracking-widest text-sm font-semibold mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-sm font-light text-brand-200">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-accent-400 shrink-0" />
                                <span>18th November Street, <br />Al Azaiba, Muscat, Oman</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-accent-400 shrink-0" />
                                <a href="tel:+96800000000" className="hover:text-white transition-colors">+968 0000 0000</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-accent-400 shrink-0" />
                                <a href="mailto:info@lebanesedental.om" className="hover:text-white transition-colors">info@lebanesedental.om</a>
                            </li>
                        </ul>
                    </div>

                    {/* Hours Col */}
                    <div>
                        <h4 className="text-white font-sans uppercase tracking-widest text-sm font-semibold mb-6">Opening Hours</h4>
                        <ul className="space-y-4 text-sm font-light text-brand-200">
                            <li className="flex justify-between items-center border-b border-brand-800/50 pb-2">
                                <span>Saturday - Thursday</span>
                                <span className="text-white font-medium">9:00 AM - 9:00 PM</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-brand-800/50 pb-2">
                                <span>Friday</span>
                                <span className="text-accent-400 font-medium">Closed</span>
                            </li>
                        </ul>
                        <div className="mt-6 flex items-start gap-2 text-sm text-brand-300">
                            <Clock className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                            <span>Emergency cases are accommodated with priority.</span>
                        </div>
                    </div>

                    {/* Newsletter / Map placeholder */}
                    <div>
                        <h4 className="text-white font-sans uppercase tracking-widest text-sm font-semibold mb-6">Location</h4>
                        <div className="w-full h-32 bg-brand-900 rounded-xl overflow-hidden relative group">
                            {/* Fake Map Background */}
                            <div
                                className="absolute inset-0 opacity-50 group-hover:opacity-70 transition-opacity"
                                style={{
                                    backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2948&auto=format&fit=crop')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-brand-950/40 opacity-0 group-hover:opacity-100 transition-opacity">
                                <a href="#" className="flex items-center gap-2 text-white font-medium text-sm backdrop-blur-sm bg-brand-500/80 px-4 py-2 rounded-full">
                                    Get Directions <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="pt-8 border-t border-brand-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light tracking-wide text-brand-400">
                    <div>&copy; {new Date().getFullYear()} Lebanese Dental Clinic. All Rights Reserved.</div>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </Container>

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/96800000000"
                target="_blank"
                rel="noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
            >
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </a>
        </footer>
    );
}
