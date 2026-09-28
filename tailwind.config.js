/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Base palette
        base: {
          DEFAULT: '#111012',
          card: '#1C1A1E',
          dark: '#1A1816',
          placeholder: '#2B2A28',
          stroke: '#2C2A2F',
        },
        // Brand accents
        brand: {
          orange: '#E63B19',
          cta: '#E8330C',
        },
        // Studio neutrals
        studio: {
          white: '#F9F8F6',
          muted: '#8D8B91',
          dim: '#8A8884',
        },
        // Direct tokens from PROJECT.md
        'bg-base': '#111012',
        'bg-card-dark': '#1A1816',
        'bg-card-mid': '#1C1A1E',
        'bg-placeholder': '#2B2A28',
        'accent-orange': '#E63B19',
        'accent-cta': '#E8330C',
        'text-primary': '#F9F8F6',
        'text-white': '#FFFFFF',
        'text-muted': '#8D8B91',
        'text-dim': '#8A8884',
        'stroke-primary': '#2C2A2F',
        'stroke-card': '#2B2A28',
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', 'sans-serif'],
        archivo: ['"Archivo Black"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Instrument Sans"', 'sans-serif'],
        mono: ['"Geist Mono"', 'monospace'],
      },
      animation: {
        ticker: 'ticker 25s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
