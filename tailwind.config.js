/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        arvo: ["Arvo", "sans-serif"],
        poppins: ["Poppins", " sans-serif"],
      },
      colors: {
        "dark-gray": "#1D1D1D",
        "dark-red": "#890000",
      },
    },
  },
  plugins: [],
};
