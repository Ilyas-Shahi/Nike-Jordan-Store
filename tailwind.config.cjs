/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '2sm': '732px',
        '2md': '896px',
        '2lg': '1152px',
      },

      keyframes: {
        heightEntrance: {
          '0%': { transform: 'translateY(-25px)' },
          '100%': { height: 'translateY(0px)' },
        },
      },
      animation: {
        heightEntrance: 'heightEntrance 0.3s ease-in-out',
      },
    },
    fontFamily: {
      sans: ['Archivo', 'Lato', 'Work Sans', 'sans-serif'],
    },
  },
  plugins: [],
};
