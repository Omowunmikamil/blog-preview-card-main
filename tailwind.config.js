/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        yellow: "hsl(47, 88%, 63%)",
        white: "hsl(0, 0%, 100%)",
        gray500: "hsl(0, 0%, 42%)",
        gray950: "hsl(0, 0%, 7%)",
      },
      fontSize: {
        123: "16px",
      },
      fontFamily: {
        sans: ["Figtree", "san-serif"],
      },
      height: {
        247: "28rem",
      },
      width: {
        567: "32rem",
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "100%",
      },
    },
  },
  plugins: [],
};
