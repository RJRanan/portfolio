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
        table: "768px",
      },
      zIndex: {
        100: "100",
      },
      animation: {
        ping: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};
