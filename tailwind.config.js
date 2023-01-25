/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`
  ],
  theme: {
    extend: {
      colors: {
        themeBackground: 'var(--background)',
        themeText: 'var(--text)',
        primary: {
          grey: {
            default: "#626C74",
            200: "#626C74",
            100: '#696D72',
            400: '#3C4249',
            900: '#30353E',
          },
        },
        secondary: {
          'default': '#f0f0f0',
          'dark': '#707070'
        },
      }
    },
    
  },
  plugins: [],
}
