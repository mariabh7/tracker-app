/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        interTight: ["Inter Tight", "sans-serif"],
      },
      colors: {
        baseBlack: '#080325',
        lightBlue: '#0A65CC',
        violetMain: '#4F46E5',
        sweetOrange: '#F93939',
        cherryMn: '#ED1865',
        whisteriaMn: '#6B19F1',
        neutralGrey1: '#F8FAFC',
        lightGrey: '#E3E8EF',
        violetSn: '#191A38',
        violet200: '#F7F8FD',
        neutralBlack: '#344055',
        coolGrey: '#79808A',
      }
    },
  },
  plugins: [],
}
