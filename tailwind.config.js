/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'darkCyan': '#118078',
      'darkDesatBlue': '#365066',
      'darkModBlue': '#517899',
      'grayBlue': '#a3bdd0',
      'lightGrayBlue': '#f1f5f8',
      'lightGrayBlue2': '#d7e2eb',
      'lightMagenta': '#FF3BE2',
      'lightRed': '#FF7F61',
      'mainBlack': '#020c27',
      'strongBlue': '#0670cc',
      'strongCyan': '#05b3a7',
      'strongRed': '#cc0f06',
      'strongYellow': '#b3940e',
      'veryDarkCyan': '#08403c',
      'veryPaleCyan': '#f8ffff',
      'vividCyan': '#20FFF1',
      'vividYellow': '#FFD108',
      'white': '#fff'
    },
    fontFamily: {
      'overpass': ['Overpass Mono', 'monospace'],
      'cinzel': ['Cinzel Decorative', 'sans-serif'],
      'libre': ['Libre Franklin', 'sans-serif'],
    },
    extend: {
      transitionProperty: {
        'topEase0.5': 'top ease 0.5s',
      },
    },
  },
  plugins: [],
};

