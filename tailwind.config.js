/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        fundo:{
          100: '#C8C8C8'
        },
        corTexto: {
          100: '#00005A',
          200: '#0000FF'
        }
      }
    },
    fontFamily:{
      newsreader: ['Newsreader','serif']
    }
    
  },
  plugins: [],
}

