import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Button } from "../ui/Button";

const benefits = [
    "Lifetime durability with proper care",
    "Prevents jawbone loss and aging appearance",
    "Functions completely like natural teeth",
    "No impact on adjacent healthy teeth",
    "Painless procedure with advanced sedation",
    "High-grade Swiss titanium fixtures"
];

export function FeaturedService() {
    return (
        <Section id="implants" className="bg-brand-950 text-white relative overflow-hidden">
            {/* Decorative background circle */}
            <div className="absolute top-1/2 -right-[20%] w-[800px] h-[800px] -translate-y-1/2 rounded-full border border-brand-800/50 hidden lg:block" />
            <div className="absolute top-1/2 -right-[15%] w-[600px] h-[600px] -translate-y-1/2 rounded-full border border-brand-700/30 hidden lg:block" />

            <Container className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col space-y-8"
                    >
                        <div className="space-y-4">
                            <div className="text-accent-500 font-semibold tracking-widest uppercase text-sm">Featured Treatment</div>
                            <h2 className="text-3xl md:text-4xl lg:text-4xl font-sans uppercase tracking-[0.15em] font-semibold text-white text-balance leading-tight">
                                Swiss-Precision Dental Implants
                            </h2>
                            <p className="text-brand-300 font-light text-lg leading-relaxed text-balance">
                                Regain your confidence and bite force with our premium implantology services. We utilize globally recognized Swiss implant systems, placed with 3D-guided surgical accuracy for perfect positioning and rapid healing.
                            </p>
                        </div>

                        <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
                            {benefits.map((benefit, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                                    <span className="text-white/90 font-light leading-snug">{benefit}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="pt-6"
                        >
                            <Button size="lg" variant="accent" className="text-brand-950 font-semibold shadow-xl shadow-accent-500/10">
                                Consult an Implantologist
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Image Block */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] lg:aspect-square rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-950">
                            <img
                                src="https://images.unsplash.com/photo-1598256989410-63cefcb483c0?q=80&w=2942&auto=format&fit=crop"
                                alt="Dental Implants"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent" />
                        </div>

                        {/* Overlay stats card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex items-center justify-between"
                        >
                            <div>
                                <div className="text-3xl font-serif text-white font-semibold">99%</div>
                                <div className="text-brand-200 text-sm mt-1">Success Rate</div>
                            </div>
                            <div className="w-px h-12 bg-white/20" />
                            <div>
                                <div className="text-3xl font-serif text-white font-semibold">3D</div>
                                <div className="text-brand-200 text-sm mt-1">Guided Placement</div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </Container>
        </Section>
    );
}
