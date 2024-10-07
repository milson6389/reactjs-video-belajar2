const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      brightness: {
        25: ".25",
      },
    },
    colors: {
      primary: "#3cce4c",
      accent: "#e8fce0",
      secondary: "#f64820",
      warning: "#febd3b",
      red: "#ff0000",
      cream: "#fffcf2",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      stone: colors.stone,
      sky: colors.sky,
      neutral: colors.neutral,
      gray: colors.gray,
      slate: colors.slate,
    },
  },
  plugins: [],
};
