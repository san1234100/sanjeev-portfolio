/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        darkBlue:"#0C2D57",
        yellow:"#FBA834"
      }
    },
  },
  plugins: [],
}

