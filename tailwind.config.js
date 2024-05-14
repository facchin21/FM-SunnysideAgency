/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroPhone' : "url(/src/assets/mobile/image-header.jpg)"
      },
      colors: {
        'softRed' : "hsl(7, 99%, 70%)",
        'yellow' : "hsl(51, 100%, 49%)",
        'darkCyan' : "hsl(167, 40%, 24%)",
        'darkBlue' : "hsl(198, 62%, 26%)",
        'darkModerateCyan' : "hsl(168, 34%, 41%)",
        'darkGrayishCyan' : "hsl(168, 12%, 41%)",
        'veryDarkGrayishCyan' : "hsl(168, 34%, 13%)",
        'veryDarkBlackBlue' : "hsl(212, 27%, 19%)",
        'veryDarkGrayishBlue' : "hsl(213, 9%, 39%)",
        'veryDarkGrayishBlue2' : "hsl(232, 10%, 55%)",
        'veryLightGray' : "hsl(0, 0%, 98%)",
        'white' : "hsl(0, 0%, 100%)",
        'footer' : "#66AF9E",
        'textFooter': '#2A7362'
      },
      fontFamily: {
        'barlow' : ['Barlow', 'sans-serif'],
        'fraunces' : ['Fraunces', 'serif']
      },
    },
  },
  plugins: [],
}

