/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FF724C",
        complementPrimary: "#f7503a",
        secondary: "#FDBF50",
        rentWhite: "#F4F4F8",
        rentBlue: "#2A2A4B",
        primaryOpacity: "#ff734c63",
        rentBlueOpacity: "#11101db2",
        bgModalColor: "rgb(0,0,0,0.7)",
      },
      fontFamily: {
        roboto: ["'Roboto', sans-serif"],
        poppins: ["'Poppins', sans-serif"],
      },
      backgroundImage: {
        'art-login': "url('./public/banner-login.jpg')",
        'art-cadastro': "url('./public/banner-cadastro.gif')",
        'art-buscar': "url('./public/search-banner.jpg')",
      },
      gradientColorStopPositions: {
        33: '33%',
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