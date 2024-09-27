import gradient from '@material-tailwind/react/theme/components/timeline/timelineIconColors/gradient'

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
          200: '#0000FF',
          300: '#00FFFF'
        },
        backgroundImage: {
          'custom-gradient': "url('../i/elements/bg-article-theme-default.svg'), linear-gradient(90deg, #00005a, #00f 49.48%, #0ff)"
        }
      }
    },
    fontFamily:{
      newsreader: ['Newsreader','serif']
    }
    
  },
  plugins: [],
}

