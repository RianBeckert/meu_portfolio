/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bluee': '#3b82f6',
        'dark': '#181818',
      }
    },
  },
  plugins: [],
}

