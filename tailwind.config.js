/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*.{html,php}',
    './assets/templates/*.{html,php}',
    './assets/js/*.{html,js}',
  ],
  theme: {
    fontFamily: {
      'roboto': "Roboto"
    },
    extend: {
      colors:{
        'azul1': '#172755',
        'azul2' : '#8794BA',
        'base' : '#F8F9FF',
        'card' : '#0F1F4B'
      },
      maxWidth:{
        'screen-2xl':'1600px',
        'screen-xl':'1180px',
      }
    },
    fontSize: {
      sm: '14px',
      sl: '16px',
      base1: '18px',
      treinta: '30px',
      xm: '40px',
      xl: '50px',
      60: '60px',
    },
  },
  plugins: [],
}