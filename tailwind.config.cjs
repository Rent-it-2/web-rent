/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FF724C",
        secondary: "#FDBF50",
        rentWhite: "#F4F4F8",
        rentBlue: "#2A2A4B",
        primaryOpacity: "#ff734c63",
      },
      fontFamily: {
        roboto: ["'Roboto', sans-serif"],
      },
      backgroundImage: {
        'art-login': "url('./public/Rectangle.svg')",
        'art-cadastro': "url('./public/Rectangle.svg')",
        'art-buscar': "url('./public/search-banner.jpg)",
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