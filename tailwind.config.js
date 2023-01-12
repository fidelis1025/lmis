/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}",
    "./src/**/*"
  ],
  theme: {
    extend: {
      color: {
        colorGreen: 'hsl(104, 43%, 35%)',
      },
      backgroundImage: {
        'searchArea': "url('../images/unsplash_h5xEHzfepNk.png')",
      }
    },
  },
  plugins: [],
}
