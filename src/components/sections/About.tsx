import { motion } from "framer-motion";
import { Award, Microscope, HeartHandshake, CheckCircle2 } from "lucide-react";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";

const features = [
    {
        icon: <Award className="w-6 h-6 text-accent-500" />,
        title: "Expert Team",
        description: "Our internationally trained specialists bring decades of combined experience in advanced cosmetic and restorative dentistry."
    },
    {
        icon: <Microscope className="w-6 h-6 text-accent-500" />,
        title: "Advanced Technology",
        description: "Equipped with state-of-the-art 3D imaging, laser dentistry, and digital impression systems for painless, precise treatments."
    },
    {
        icon: <HeartHandshake className="w-6 h-6 text-accent-500" />,
        title: "Patient-Centered Care",
        description: "Every treatment plan is bespoke, designed around your unique facial aesthetics, clinical needs, and personal goals."
    }
];

export function About() {
    return (
        <Section id="about" className="bg-brand-50 overflow-hidden relative">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-100/50 -skew-x-12 translate-x-32 hidden lg:block" />

            <Container>
                <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">

                    {/* Image Block */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2936&auto=format&fit=crop"
                                alt="Lebanese Dental Clinic Team"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl shadow-brand-900/10 border border-brand-100 max-w-xs hidden md:block"
                        >
                            <div className="flex gap-4 items-center">
                                <div className="bg-brand-50 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                    <CheckCircle2 className="w-6 h-6 text-accent-500" />
                                </div>
                                <div>
                                    <div className="font-bold text-brand-950 text-lg">Premium Quality</div>
                                    <div className="text-sm text-brand-600 mt-1">Certified Swiss Implants & Materials</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Content Block */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col space-y-8"
                    >
                        <div className="space-y-4">
                            <div className="text-accent-500 font-semibold tracking-widest uppercase text-sm">Our Philosophy</div>
                            <h2 className="text-3xl md:text-4xl lg:text-4xl font-sans uppercase tracking-widest text-brand-950 text-balance leading-tight font-semibold">
                                About Lebanese Dental Clinic
                            </h2>
                            <p className="text-brand-600 text-lg leading-relaxed text-balance pt-2 font-light">
                                Founded on the principles of immaculate precision and unwavering empathy, we are Muscat's premier destination for refined dental care. We believe that a beautiful smile is the ultimate expression of confidence and vitality.
                            </p>
                        </div>

                        <div className="space-y-6 pt-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
                                    className="flex gap-5 items-start"
                                >
                                    <div className="mt-1 bg-white p-3 rounded-xl shadow-sm border border-brand-100 flex-shrink-0">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-sans uppercase tracking-wider font-semibold text-brand-950 mb-2">{feature.title}</h3>
                                        <p className="text-brand-600 font-light leading-relaxed text-balance">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </Container>
        </Section>
    );
}
