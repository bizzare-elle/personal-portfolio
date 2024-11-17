/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      bg: "#343131",
      primary: "#FF9BD2",
      accent: "#C75B7A",
      text: "#F8F4EC",
    },
    fontFamily: {
      title: "Sour Gummy",
    },
    extend: {},
  },
  plugins: [],
};
