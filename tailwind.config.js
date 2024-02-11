/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['"Rubik Moonrocks", sans-serif;'],
        sixtyfour: ['"Sixtyfour", sans-serif;']
      }
    },
  },
  plugins: [],
}

