/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,}", "./src/index.css"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      anekBangla: ['"Anek Bangla"', "sans-serif"],
    },
    extend: {
      fontFamily: {
        bengali: ["Siyam Rupali", "sans-serif"],
      },
    },
    colors: {
      //primary: '#354A6B',
      primary: "#002A53",
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
