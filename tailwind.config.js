/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        buttonColor: "#db2777",
        buttonHoverColor: "#be185d",
      },
      textColor: {
        highlight: "#fb7185",
      },
    },
  },
  plugins: [],
};
