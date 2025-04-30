/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        mara : '#c0c2a3',
        maraB : '#969b7a',
        maron : '#4d3b35',
        maintso : '#137855',
        manga_marevaka : '#1e4752',
       
      }
    },
  },
  plugins: [],
}