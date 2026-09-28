/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          50: '#faf7f2',
          100: '#f3ece2',
          200: '#e6d8c3',
          300: '#d5bea0',
          400: '#c19f7a',
          500: '#b1875c',
          600: '#996f4c',
          700: '#7b553f',
          800: '#644637',
          900: '#533c30',
          950: '#2d1e18',
        },
      },
    },
  },
  plugins: [],
};
