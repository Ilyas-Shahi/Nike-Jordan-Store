/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Archivo', 'Lato', 'Work Sans', 'sans-serif'],
    },
  },
  plugins: [],
};
