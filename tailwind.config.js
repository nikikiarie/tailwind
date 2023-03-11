/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        greenText:'#0DB760'
      },
      fontFamily:{
        titleFont:['Montserrat','sans-serif']
      },animation:{
        nick:'nick 5s ease-in infinite'
      },keyframes:{
        nick:{
          '0%':{
            transform:'scale(1)'
          },
          '50%':{
            transform:'scale(1.15)'
          },
          '100%':{
            transform:'scale(1)'
          },
        }
      }
    },
  },
  plugins: [],
}
