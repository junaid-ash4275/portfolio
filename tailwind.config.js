/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(79 70 229)',
        secondary: 'var(--secondary)',
      },
    },
  },
  plugins: [],
}
