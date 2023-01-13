/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}",
    "./src/**/*"
  ],
  theme: {
    extend: {
      color: {
        'colorGreen': 'hsla(104, 43%, 35%, 0.85)',
      },
    },
  },
  plugins: [],
}
