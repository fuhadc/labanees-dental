"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function BackgroundEffects() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const moveX1 = useTransform(springX, (v) => v * 1.5);
  const moveY1 = useTransform(springY, (v) => v * 1.5);
  
  const moveX2 = useTransform(springX, (v) => v * -1.2);
  const moveY2 = useTransform(springY, (v) => v * -0.8);
  
  const moveX3 = useTransform(springX, (v) => v * 0.8);
  const moveY3 = useTransform(springY, (v) => v * 1.2);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX - window.innerWidth / 2) / 20);
      mouseY.set((e.clientY - window.innerHeight / 2) / 20);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Mesh Gradients */}
      <motion.div
        style={{ x: moveX1, y: moveY1 }}
        className="absolute -top-[20%] -left-[10%] w-[80%] h-[80%] rounded-full bg-[var(--accent-warm)]/10 blur-[140px]"
      />
      <motion.div
        style={{ x: moveX2, y: moveY2 }}
        className="absolute top-[40%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-900/5 blur-[140px]"
      />
      <motion.div
        style={{ x: moveX3, y: moveY3 }}
        className="absolute -bottom-[10%] left-[20%] w-[60%] h-[60%] rounded-full bg-purple-900/5 blur-[140px]"
      />

      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }}
      />
    </div>
  );
}
