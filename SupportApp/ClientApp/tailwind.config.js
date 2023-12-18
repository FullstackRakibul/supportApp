/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {},
    colors: {
      //primary: '#354A6B',
      primary: "#000",
      //secondary:'#286090',
      white: "#fff",
      black: "#000",
      error: "#ff3333",
      success: "#4BB543",
      warning: "#ffcc00",
      border: "#d0d5dd",
    },
  },
  plugins: [],
};
