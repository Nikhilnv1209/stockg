/** @type {import('tailwindcss').Config} */
// css nesting
export default {
  mode: 'jit',
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'Mulish': ['Mulish', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('autoprefixer'),
    require('tailwindcss'),
    ]
}

