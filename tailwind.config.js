/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      adelia: ["ADELIA", "cursive"],
    },
    extend: {
      backgroundImage:{
        'whyYoga':"url('./src/assets/why-img.jpg')"
      }
    },
  },
  plugins: [],
}