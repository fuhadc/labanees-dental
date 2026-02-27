import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Gem, Activity, Smile, Stethoscope, Droplet } from "lucide-react";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";

const services = [
    {
        icon: <Sparkles className="w-8 h-8" />,
        title: "Dental Implants",
        description: "Permanent, natural-looking solutions to replace missing teeth and restore your perfect smile.",
        href: "#implants"
    },
    {
        icon: <Smile className="w-8 h-8" />,
        title: "Hollywood Smile",
        description: "A complete aesthetic transformation using ultra-thin custom veneers for a flawless appearance.",
        href: "#hollywood-smile"
    },
    {
        icon: <Gem className="w-8 h-8" />,
        title: "Porcelain Veneers",
        description: "Custom-crafted ceramic shells to instantly correct chips, gaps, and severe discoloration.",
        href: "#veneers"
    },
    {
        icon: <Droplet className="w-8 h-8" />,
        title: "Teeth Whitening",
        description: "Professional laser whitening treatments to brighten your smile up to 8 shades in a single visit.",
        href: "#whitening"
    },
    {
        icon: <Activity className="w-8 h-8" />,
        title: "Root Canal Therapy",
        description: "Painless, microscopic endodontic treatments to save infected teeth and eliminate discomfort.",
        href: "#root-canal"
    },
    {
        icon: <Stethoscope className="w-8 h-8" />,
        title: "Deep Cleaning",
        description: "Comprehensive periodontal therapy to maintain optimal gum health and prevent future issues.",
        href: "#cleaning"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const }
    }
};

export function Services() {
    return (
        <Section id="services" className="bg-white">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="text-accent-500 font-semibold tracking-widest uppercase text-sm mb-4">Our Expertise</div>
                    <h2 className="text-3xl md:text-4xl lg:text-4xl font-sans uppercase tracking-widest text-brand-950 mb-6 text-balance font-semibold">
                        Premium Dental Services
                    </h2>
                    <p className="text-brand-600 font-light text-lg leading-relaxed text-balance">
                        We offer a comprehensive suite of luxury dental treatments, utilizing cutting-edge techniques to ensure comfort, longevity, and breathtaking aesthetics.
                    </p>
                </div>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service, index) => (
                        <motion.a
                            href={service.href}
                            key={index}
                            variants={itemVariants}
                            className="group relative bg-brand-50/50 rounded-2xl p-8 hover:bg-brand-50 transition-all duration-300 border border-transparent hover:border-brand-200 overflow-hidden"
                        >
                            {/* Decorative hover gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-900 shadow-sm border border-brand-100 mb-6 group-hover:scale-110 group-hover:bg-brand-900 group-hover:text-white transition-all duration-300">
                                    {service.icon}
                                </div>

                                <h3 className="text-lg font-sans uppercase tracking-wider font-semibold text-brand-950 mb-3">
                                    {service.title}
                                </h3>

                                <p className="text-brand-600 font-light leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                <div className="flex items-center text-brand-700 font-medium text-sm group-hover:text-brand-900 uppercase tracking-widest">
                                    Learn more
                                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </Container>
        </Section>
    );
}
