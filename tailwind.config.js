/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'spirit-white': '#ffffff',
        'spirit-light': '#F9F5FF',
        'spirit-text': '#2D224C',
        'spirit-dark': '#1E1B2E',
        'spirit-blue': '#7A89F4',
        'spirit-purple': '#B664EC',
        'spirit-cream': '#FFF0D9',
        'spirit-pink': '#FF9DE2',
        'spirit-teal': '#56D8C5',
        'spirit-orange': '#FFA573',
        'spirit-lavender': '#D6C5F0',
        'spirit-gold': '#FFD95A',
        'spirit-indigo': '#5D5FEF',
        'spirit-magenta': '#E45A97',
        'spirit-violet': '#9754CB',
        'spirit-aqua': '#42CAFD',
        'spirit-mint': '#83EFC8',
        'spirit-ruby': '#FF4E6E',
        'spirit-emerald': '#4ADEB5',
        'spirit-amber': '#FFB84D',
        'spirit-sapphire': '#5E8BFF',
        'spirit-amethyst': '#AC5CE9',
        'spirit-topaz': '#FFD479',
        'spirit-jade': '#50D2A0',
        'spirit-moonstone': '#73B8FF',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'hindi': ['Poppins', 'sans-serif'],
        'display': ['Satisfy', 'cursive'],
      },
      boxShadow: {
        'spirit': '0 4px 20px -2px rgba(113, 65, 177, 0.2)',
        'spirit-hover': '0 8px 25px -5px rgba(113, 65, 177, 0.3)',
        'card': '0 10px 30px -5px rgba(177, 120, 240, 0.3)',
        'glow': '0 0 15px rgba(182, 100, 236, 0.6)',
        'inner-glow': 'inset 0 0 15px rgba(182, 100, 236, 0.5)',
        'rainbow': '0 0 15px rgba(255, 255, 255, 0.5), 0 0 30px rgba(182, 100, 236, 0.5), 0 0 45px rgba(122, 137, 244, 0.3)',
        'crystal': '0 8px 32px rgba(255, 255, 255, 0.15), 0 0 8px rgba(255, 255, 255, 0.3)'
      },
      animation: {
        'card-flip': 'cardFlip 0.4s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'spin-slow': 'spin 15s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'bounce-slow': 'bounce 5s infinite',
        'expand': 'expand 3s ease-in-out infinite',
        'radiate': 'radiate 3s ease-in-out infinite',
        'spiral': 'spiral 10s linear infinite',
        'sparkle': 'sparkle 2s linear infinite',
        'color-shift': 'colorShift 8s linear infinite',
        'levitate': 'levitate 4s ease-in-out infinite',
        'breathe': 'breathe 4s ease-in-out infinite',
      },
      keyframes: {
        cardFlip: {
          '0%': { opacity: 0, transform: 'scale(0.9) rotateY(-10deg)' },
          '100%': { opacity: 1, transform: 'scale(1) rotateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(182, 100, 236, 0.4)' },
          '50%': { boxShadow: '0 0 25px rgba(182, 100, 236, 0.8)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        expand: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        radiate: {
          '0%': { boxShadow: '0 0 0 0 rgba(182, 100, 236, 0.4)' },
          '70%': { boxShadow: '0 0 0 20px rgba(182, 100, 236, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(182, 100, 236, 0)' },
        },
        spiral: {
          '0%': { transform: 'rotate(0) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(0.8)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        sparkle: {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 1 },
        },
        colorShift: {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(360deg)' },
        },
        levitate: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-15px) scale(1.03)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: 0.8 },
          '50%': { transform: 'scale(1.1)', opacity: 1 },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'shimmer': 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 25%, rgba(255,255,255,0.2) 75%, rgba(255,255,255,0) 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

