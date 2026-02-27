import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { ShieldCheck, Clock, Users, Sparkles, Building2, Headset } from "lucide-react";

const reasons = [
    {
        icon: <Users className="w-6 h-6" />,
        title: "Elite Specialists",
        description: "Our clinicians are board-certified experts with international training and decades of combined experience."
    },
    {
        icon: <Building2 className="w-6 h-6" />,
        title: "Luxury Environment",
        description: "Experience dentistry in a serene, spa-like atmosphere designed to eliminate clinical anxiety completely."
    },
    {
        icon: <Sparkles className="w-6 h-6" />,
        title: "Advanced Technology",
        description: "From 3D intraoral scanners to laser dentistry, we invest in the best to provide painless, precise care."
    },
    {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: "Uncompromising Safety",
        description: "We adhere strictly to international sterilization protocols, ensuring a 100% safe environment."
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: "Respect for Your Time",
        description: "Zero-wait policy. Your appointment time is honored, and treatments are completed efficiently."
    },
    {
        icon: <Headset className="w-6 h-6" />,
        title: "Dedicated Concierge",
        description: "Personalized care coordinators to manage your appointments, follow-ups, and treatment plans."
    }
];

export function WhyChooseUs() {
    return (
        <Section id="why-us" className="bg-brand-50 relative">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="text-accent-500 font-semibold tracking-widest uppercase text-sm mb-4">The Pínnacle of Care</div>
                    <h2 className="text-3xl md:text-4xl lg:text-4xl font-sans uppercase tracking-[0.1em] text-brand-950 mb-6 text-balance font-semibold">
                        Why Choose Lebanese Dental Clinic
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-brand-100 hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-900 mb-6">
                                {reason.icon}
                            </div>
                            <h3 className="text-lg font-sans uppercase tracking-wider font-semibold text-brand-950 mb-3">{reason.title}</h3>
                            <p className="text-brand-600 font-light leading-relaxed text-balance">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
