/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#DF6951",
        purple: "#6246E5",
        yellow: "#F1A501",
        grayish: "#5E6282",
        navy: "#14183E",
        primary: "#14183E",
        secondary: "#5E6282",
        accent: "#DF6951",
        "accent-light": "#FFF1DA",
        "accent-blue": "#029BC5",
        "accent-purple": "#6246E5",
      },
      fontFamily: {
        poppins: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        volkhov: ["Volkhov", "serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        card: "0 20px 40px rgba(0,0,0,0.08),0px 1.85px 3.15px 0px rgba(0, 0, 0, 0), 0px 8.15px 6.52px 0px rgba(0, 0, 0, 0.01), 0px 20px 13px 0px rgba(0, 0, 0, 0.01), 0px 38.52px 25.48px 0px rgba(0, 0, 0, 0.01), 0px 64.81px 46.85px 0px rgba(0, 0, 0, 0.02), 0px 100px 80px 0px rgba(0, 0, 0, 0.02)",
        soft: "0 10px 20px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};
