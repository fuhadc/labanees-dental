import { motion } from "framer-motion";
import { Calendar, Phone, Star } from "lucide-react";
import { Button } from "../ui/Button";
import { Container } from "../layout/Container";
import { useEffect, useState } from "react";

// Simple custom hook for counter animation
function useCounter(end: number, duration: number = 2) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
            // easeOutExpo
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(easeProgress * end));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [end, duration]);

    return count;
}

function StatItem({ value, label, suffix = "+" }: { value: number; label: string; suffix?: string }) {
    const count = useCounter(value, 2.5);

    return (
        <div className="flex flex-col items-center md:items-start">
            <div className="text-3xl md:text-4xl font-serif font-semibold text-white flex items-center">
                {count}
                <span className="text-accent-400 ml-1">{suffix}</span>
            </div>
            <div className="text-sm font-medium text-white/80 mt-1">{label}</div>
        </div>
    );
}

export function Hero() {
    return (
        <section className="relative min-h-[100svh] flex items-center pt-24 pb-16 overflow-hidden">
            {/* Background Image & Overlays */}
            <div className="absolute inset-0 z-0 bg-brand-950">
                <div
                    className="absolute inset-0 opacity-40 mix-blend-overlay"
                    style={{
                        // Use a placeholder sophisticated background if an image is not available
                        backgroundImage: `url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2940&auto=format&fit=crop')`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}
                />
                {/* Gradients to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-950/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-brand-950/30" />
            </div>

            <Container className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col space-y-8 text-center md:text-left"
                    >
                        {/* Rating Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 self-center md:self-start"
                        >
                            <div className="flex gap-1 text-accent-400">
                                <Star size={14} fill="currentColor" />
                                <Star size={14} fill="currentColor" />
                                <Star size={14} fill="currentColor" />
                                <Star size={14} fill="currentColor" />
                                <Star size={14} fill="currentColor" />
                            </div>
                            <span className="text-sm font-medium text-white">5.0 Google Rating</span>
                        </motion.div>

                        {/* Headlines */}
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans uppercase tracking-[0.1em] text-white text-balance leading-[1.2] font-semibold">
                                Transform Your Smile with <span className="text-accent-400 block mt-2">Precision & Elegance</span>
                            </h1>
                            <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto md:mx-0 font-light leading-relaxed text-balance">
                                Advanced Dental Implants & Cosmetic Dentistry in Muscat. Experience world-class care in a serene, luxurious environment.
                            </p>
                        </div>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4"
                        >
                            <Button size="lg" variant="accent" className="text-brand-950 font-semibold shadow-xl shadow-accent-500/20 text-base">
                                <Calendar className="mr-2 h-5 w-5" />
                                Book My Appointment
                            </Button>
                            <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white hover:text-brand-950 text-base backdrop-blur-sm">
                                <Phone className="mr-2 h-5 w-5" />
                                Call Now
                            </Button>
                        </motion.div>

                        {/* Animated Counters */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="grid grid-cols-3 gap-6 sm:gap-12 pt-8 mt-4 border-t border-white/20"
                        >
                            <StatItem value={15} label="Years Experience" />
                            <StatItem value={75} label="Five-Star Reviews" />
                            <StatItem value={1000} label="Happy Patients" />
                        </motion.div>

                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
