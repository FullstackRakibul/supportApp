/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    colors:{
      //primary: '#354A6B',
      primary: '#286090',
      //secondary:'#286090',
      white:'#fff',
      black:'#000',
      error:'#ff3333',
      success: '#4BB543',
      warning:'#ffcc00',
    },
  },
  plugins: [],
}

