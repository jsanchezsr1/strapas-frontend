import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#060816',
        panel: '#0c1124',
        line: 'rgba(255,255,255,0.08)',
      },
      boxShadow: {
        glow: '0 0 60px rgba(92, 121, 255, 0.25)',
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at 20% 20%, rgba(112, 125, 255, 0.22), transparent 30%), radial-gradient(circle at 80% 0%, rgba(0, 212, 255, 0.18), transparent 28%), radial-gradient(circle at 50% 80%, rgba(255, 0, 168, 0.12), transparent 30%)',
        grid: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        pulseSlow: 'pulseSlow 7s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
