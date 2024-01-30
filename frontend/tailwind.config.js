/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/preline/preline.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('preline/plugin'),
  ],
}