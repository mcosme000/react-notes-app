/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white': '#fff',
      'black': '#000',
      'home': {
        light: '#dce4db',
        medium: '#cad6c9',
        dark: '#b5c3af'

      },
      'food': {
        light: '#e4ddce',
        medium: '#ddcfb1',
        dark: '#c2b497'
      },
      'presents': {
        light: '#ccdcea',
        medium: '#b8cbdb',
        dark: '#a2bfd6'
      },
      'fashion': {
        light: '#eac9d4',
        medium: '#e5b7c6',
        dark: '#d3a7b6'
      },
      'gray': '#dddddd',
      'overlay': '#dddddd',
      'red': {
        default: '#a9331e',
        hover: '#932916',
      },
      'green': {
        default: '#5aa86b',
        hover: '#4c995d',
      }
    },
  },
  plugins: [],
}

// home
