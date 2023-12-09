/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FFDF0A",
        secondary: "#FF9201",
        blackprime: "#2B2B2B",
        blackprime2: "#565656",
        blackprime3: "#333333",
        whiteprime: "#FFF",
        
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1200px",
      lg: "1700px",
      
    },
  },
  plugins: [],
};