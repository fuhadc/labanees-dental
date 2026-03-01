'use client';

import { motion } from 'framer-motion';
import { Star, Users, Award } from 'lucide-react';

const stats = [
  {
    value: '75+',
    label: '5-Star Reviews',
    icon: Star,
  },
  {
    value: '1000+',
    label: 'Happy Patients',
    icon: Users,
  },
  {
    value: '15+',
    label: 'Years of Excellence',
    icon: Award,
  },
];

export default function StatsBar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="relative z-20 -mt-16 px-4 md:-mt-20"
    >
      <div className="mx-auto max-w-5xl">
        <div className="glass flex flex-col items-stretch justify-center gap-6 rounded-2xl border border-white/10 p-6 shadow-glass sm:flex-row sm:divide-x sm:divide-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex flex-1 flex-col items-center gap-2 text-center sm:px-8"
            >
              <stat.icon className="h-8 w-8 text-dental-gold" />
              <span className="text-3xl font-bold text-white md:text-4xl">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-white/70">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
