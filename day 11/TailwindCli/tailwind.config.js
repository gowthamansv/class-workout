/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: "#5ba36f",
        secondary: "#5d7f99",
        background: "#735b8f"
      },
      fontFamily:{
        Handjet:["Handjet", "sans-serif"]
      }
    },
  },
  plugins: [],
}

