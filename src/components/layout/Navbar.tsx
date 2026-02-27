import { useState, useEffect } from "react";
import { Phone, Menu, X, Calendar } from "lucide-react";
import { Button } from "../ui/Button";
import { Container } from "./Container";
import { cn } from "../../lib/utils";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Why Us", href: "#why-us" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
                    : "bg-transparent py-5"
            )}
        >
            <Container>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        {/* Logo placeholder - replace with actual if provided */}
                        <div className={cn("text-2xl font-serif font-bold flex flex-col leading-none transition-colors", isScrolled ? "text-brand-950" : "text-white")}>
                            <span>Lebanese</span>
                            <span className={cn("text-sm tracking-widest font-sans uppercase", isScrolled ? "text-brand-700" : "text-white/80")}>Dental Clinic</span>
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex flex-1 justify-center">
                        <ul className="flex space-x-8">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className={cn(
                                            "text-sm font-medium transition-colors hover:text-brand-500 uppercase tracking-widest",
                                            isScrolled ? "text-brand-700 hover:text-brand-950" : "text-white/90 hover:text-white"
                                        )}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* CTAs */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="tel:+96800000000"
                            className={cn(
                                "flex items-center gap-2 text-sm font-medium hover:text-brand-500 transition-colors",
                                isScrolled ? "text-brand-800" : "text-white"
                            )}
                        >
                            <Phone size={16} />
                            <span>Call Now</span>
                        </a>
                        <Button variant="accent" className="shadow-lg shadow-accent-500/20">
                            <Calendar className="mr-2 h-4 w-4" />
                            Book Appointment
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={cn(
                            "md:hidden p-2 rounded-md",
                            isScrolled ? "text-brand-900" : "text-white"
                        )}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </Container>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-4 px-4 flex flex-col gap-4">
                    <nav>
                        <ul className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="block text-lg font-medium text-slate-800 hover:text-brand-500"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="h-px bg-slate-100 my-2" />
                    <Button variant="outline" className="w-full justify-center">
                        <Phone className="mr-2 h-4 w-4" /> Call Now
                    </Button>
                    <Button variant="accent" className="w-full justify-center">
                        <Calendar className="mr-2 h-4 w-4" /> Book Appointment
                    </Button>
                </div>
            )}
        </header>
    );
}
