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
        "dark-green": "#627254",
        "dark-red": "#890000",
      },
      screens: {
        mobile: "375px",
      },
    },
  },
  plugins: [],
};
