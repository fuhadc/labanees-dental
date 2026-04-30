"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#", icon: "H" },
  { label: "Treatments", href: "#services", icon: "T" },
  { label: "Book", href: "#booking", icon: "B", primary: true },
  { label: "Gallery", href: "#before-after", icon: "G" },
  { label: "Contact", href: "#contact", icon: "C" },
];

export default function MobileNav() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-1/2 z-[100] w-[90%] -translate-x-1/2 md:hidden"
        >
          <div className="flex items-center justify-between gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative flex flex-col items-center justify-center transition-all duration-300 ${
                  item.primary
                    ? "h-14 w-14 rounded-full bg-[var(--accent-warm)] text-black shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                    : "flex-1 text-white/40 hover:text-[var(--accent-warm)]"
                }`}
              >
                {item.primary ? (
                  <span className="text-[10px] font-bold uppercase tracking-widest">Book</span>
                ) : (
                  <>
                    <span className="text-[10px] font-medium uppercase tracking-[0.2em]">{item.label.charAt(0)}</span>
                    <span className="mt-1 text-[7px] uppercase tracking-widest opacity-60">{item.label}</span>
                  </>
                )}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
