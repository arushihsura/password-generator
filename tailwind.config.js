/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lilac: {
          300: '#FFD4E0',
          500: '#FFD9E4',
          700: '#FFB1C7',
          900: '#FF1F5E',
        },
      },
    },
  },
  plugins: [],
}
