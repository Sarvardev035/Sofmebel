import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        greenDeep: '#1A3327',
        greenMid: '#254D38',
        greenLight: '#3A6B50',
        beigeLight: '#F7F4EE',
        beigeMid: '#EDE8DE',
        beigeDark: '#D9D3C5',
        cream: '#FAF8F4',
        goldAccent: '#C6A253',
        goldLight: '#E0C47E',
        charcoal: '#1C1C1E',
        muted: '#6B7070'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif']
      },
      boxShadow: {
        soft: '0 4px 24px rgba(31, 61, 43, 0.10)',
        card: '0 2px 16px rgba(0,0,0,0.07)',
        strong: '0 24px 64px rgba(26,51,39,0.18)',
        gold: '0 4px 24px rgba(198,162,83,0.25)'
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem'
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    }
  },
  plugins: []
};

export default config;
