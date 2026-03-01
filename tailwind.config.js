/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#0a0a0a',
          dark: '#0a0a0a',
          light: '#141414',
        },
        'dental-gold': '#FFD700',
        'dental-gold/10': 'rgba(255, 215, 0, 0.1)',
        'dental-gold/20': 'rgba(255, 215, 0, 0.2)',
        'dental-gold/30': 'rgba(255, 215, 0, 0.3)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-overlay': 'linear-gradient(to bottom, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.85) 100%)',
      },
      boxShadow: {
        'glow-gold': '0 0 30px rgba(255, 215, 0, 0.4)',
        'glow-gold-sm': '0 0 15px rgba(255, 215, 0, 0.3)',
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
