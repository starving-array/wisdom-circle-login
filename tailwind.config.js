/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        brightRed: "hsl(12,88%,59%)",
        signblue: "hsla(224, 79%, 52%, 1)",
        yellowfellow:"hsla(45, 88%, 56%, 1)"
      },
    },
  },
  plugins: [],
};
