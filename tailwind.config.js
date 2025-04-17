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
        // Thistledown color palette
        'thistledown-1': '#A9ABA8',
        'thistledown-2': '#CBCCC7',
        'thistledown-3': '#E0E0D5',
        'thistledown-4': '#D0CABA',
        'thistledown-5': '#B8AB90',
        // Root colors for theming
        'spirit-white': '#E0E0D5',
        'spirit-light': '#E0E0D5',
        'spirit-text': '#B8AB90',
        'spirit-dark': '#A9ABA8',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'hindi': ['Poppins', 'sans-serif'],
        'display': ['Satisfy', 'cursive'],
      },
      boxShadow: {
        'spirit': '0 4px 20px -2px rgba(184, 171, 144, 0.2)',
        'spirit-hover': '0 8px 25px -5px rgba(184, 171, 144, 0.3)',
        'card': '0 10px 30px -5px rgba(184, 171, 144, 0.3)',
        'glow': '0 0 15px rgba(184, 171, 144, 0.6)',
        'inner-glow': 'inset 0 0 15px rgba(184, 171, 144, 0.5)',
        'rainbow': '0 0 15px rgba(224, 224, 213, 0.5), 0 0 30px rgba(184, 171, 144, 0.5), 0 0 45px rgba(203, 204, 199, 0.3)',
        'crystal': '0 8px 32px rgba(224, 224, 213, 0.15), 0 0 8px rgba(224, 224, 213, 0.3)'
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
          '0%, 100%': { boxShadow: '0 0 10px rgba(184, 171, 144, 0.4)' },
          '50%': { boxShadow: '0 0 25px rgba(184, 171, 144, 0.8)' },
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
          '0%': { boxShadow: '0 0 0 0 rgba(184, 171, 144, 0.4)' },
          '70%': { boxShadow: '0 0 0 20px rgba(184, 171, 144, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(184, 171, 144, 0)' },
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
        'shimmer': 'linear-gradient(90deg, rgba(224,224,213,0) 0%, rgba(224,224,213,0.2) 25%, rgba(224,224,213,0.2) 75%, rgba(224,224,213,0) 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

