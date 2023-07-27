/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1597E4',
        'error': '#D86161',
        'dark': '#212121',
        'placeholder': '#7A7A7A',
        'white': '#FAFAFA',
        'card': '#FFFFFF'
      },
    },
  },
  plugins: [],
}

