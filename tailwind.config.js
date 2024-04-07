/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'bricolage': ['Bricolage Grotesque', 'sans-serif'],
      },
      fontWeight:{ //font-weight
      hairline: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      'extra-bold': '800',
      black: '900',
      },
      colors: {
        //'brand-blue': '#007bff',
        //'light-blue': '#85d7ff',
      },
      
      // Puedes extender otras propiedades aquí
    },
  },
  plugins: [],
}

