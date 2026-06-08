"use client";

import { motion } from "framer-motion";
import {
  boxStaggerItem as itemVariants,
  viewport,
  sectionDelay,
} from "@/lib/motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  index?: number;
  className?: string;
}

export default function Reveal({
  children,
  delay = 0,
  index,
  className = "",
}: RevealProps) {
  const totalDelay = delay + (index !== undefined ? sectionDelay(index) : 0);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={itemVariants}
      transition={{ delay: totalDelay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
