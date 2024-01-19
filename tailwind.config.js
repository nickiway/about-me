/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },

      colors: {
        primary: "#353941",
        secondary: "#26282B",
        darkBlue: "#5F85DB",
        lightBlue: "#90B8F8",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
