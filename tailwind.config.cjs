/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FF724C",
        secondary: "#FDBF50",
        dimWhite: "#F4F4F8",
        dimBlue: "#2A2A4B",
      },
      fontFamily: {
        roboto: ["'Roboto', sans-serif"],
      },
      backgroundImage: {
        'art-login': "url('./public/Rectangle.svg')",
        'art-cadastro': "url('./public/Rectangle.svg')",
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px"
    },
  },
  plugins: [],
};