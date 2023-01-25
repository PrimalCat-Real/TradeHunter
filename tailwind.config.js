/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    fontFamily: {
      'inter': ["'Inter'", 'sans-serif'],
    },
    extend: {
      colors: {
        // themeBackground: 'var(--background)',
        // themeText: 'var(--text)',
        // themeTextGrey: 'var(--text-grey)',
        // themeTextLightGrey: 'var(--text-light-grey)',
        light: {
          text: "#17191E",
          default: "#F8F8F8",
          primalGrey: "#B6B5B7",
          secondaryGrey: "#65656C",
        },
        dark: {
          default: "#17191E",
          text: "#F8F8F8",
          primalGrey: "#65656C",
          secondaryGrey: "#B6B5B7",
        },
      }
    },
    
  },
  plugins: [],
}
