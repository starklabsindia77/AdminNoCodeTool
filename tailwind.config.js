/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#2b4feb",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
