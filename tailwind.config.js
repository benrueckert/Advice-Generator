/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        lightCyan: 'hsl(193, 38%, 86%)',
        neonGreen: 'hsl(150, 100%, 66%)',
        grayishBlue: 'hsl(217, 19%, 38%)',
        darkBlue: 'hsl(218, 23%, 16%)',
        darkGrayishBlue: 'hsl(217, 19%, 24%)',
      },
      fontFamily: {
        manrope: ["Manrope"],
      }
    },
  },
  plugins: [],
}
