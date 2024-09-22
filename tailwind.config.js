/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'white': "#F4F4F4"
      },
      dropShadow: {
        'xsm': 'filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.01));',
      }
    },
  },
  plugins: [],
}
