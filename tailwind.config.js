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
      'white': '#ffffff',
      'home': '#dce4db',
      'home-dark': '#b5c3af',
      'food': '#e4ddce',
      'food-dark': '#c2b497',
      'presents': '#bfd2e2',
      'presents-dark': '#a2bfd6',
      'fashion': '#dcb4c2',
      'fashion-dark': '#d3a7b6',

    },
  },
  plugins: [],
}

// home
