/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        cardAppear: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px) scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
      },

      animation: {
        cardAppear: "cardAppear 0.6s ease-out",
      },
    },
  },
  plugins: [],
};
