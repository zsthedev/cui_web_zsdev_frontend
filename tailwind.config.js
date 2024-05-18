/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#005CE6",
        black: "#1B1B1B",
        white: "#fff",
        text: "#929292",
        light: "#D8D8D8ٖ",
      },

      fontFamily: {
        bebas: "Bebas Neue",
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
