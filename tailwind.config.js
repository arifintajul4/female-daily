const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: "10rem",
      center: true,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: {
        light: "#e0e0e0",
        "super-light": "#9b9b9b",
        DEFAULT: "#d0d0d0",
        dark: "#4a4a4a",
      },
      red: "#db284e",
    },
    extend: {
      backgroundImage: {
        "woman-image": "url('../assets/images/bg-image.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
