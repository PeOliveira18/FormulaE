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
          100: '#C8C8C8',
          200: '#F5F5F5'
        },
        corTexto: {
          100: '#00005A',
          200: '#0000FF',
          300: '#00FFFF',
          400: '#0F233B',
          500: '#0F233B'
        },
        degrade: {
          'azulEscuro': '#000067',
          'azulClaro': '#00E5FF'
        }   
      }
    },
    fontFamily:{
      feSans: ['FE Sans','sans-serif'],
    },
    screens: {
      'drawer1': '420px',
      'drawer2': '335px',
      'drawer3': '245px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
    
  },
  plugins: [],
}

