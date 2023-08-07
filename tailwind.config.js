/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#423f71",
        header: "#292841",
        body: "#1c1b29"
      }
    },
  },
  plugins: [
    // require('tailwindcss/line-clamp')
  ],
}