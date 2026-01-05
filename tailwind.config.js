/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'volkhov': ['Volkhov', 'serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'primary': '#14183E',
        'secondary': '#5E6282',
        'accent': '#DF6951',
        'accent-light': '#FFF1DA',
        'accent-blue': '#029BC5',
        'accent-purple': '#6246E5',
        'navy': '#14183E',
        'gray': '#5E6282',
        'yellow': '#F0BB1F',
        'blue': '#006380',
        'orange': '#F15A2B',
        'purple': '#8A79DF',
        'grayish': '#5E6282',
      },
      boxShadow: {
        'card': '0px 1.85px 3.15px 0px rgba(0, 0, 0, 0), 0px 8.15px 6.52px 0px rgba(0, 0, 0, 0.01), 0px 20px 13px 0px rgba(0, 0, 0, 0.01), 0px 38.52px 25.48px 0px rgba(0, 0, 0, 0.01), 0px 64.81px 46.85px 0px rgba(0, 0, 0, 0.02), 0px 100px 80px 0px rgba(0, 0, 0, 0.02)',
      },
    },
  },
  plugins: [],
}
