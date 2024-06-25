/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // Adding custom colors (tailwind)
    extend: {
      colors: {
        "light-b": "#202B3B",
        "dark-b": "#0B131E",
        "white-g": "#8F959E",
        "light-b-hover": "#364a66",
      },
    },
  },
  plugins: [],
};
