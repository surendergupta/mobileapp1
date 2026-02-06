/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,tsx}", "./components/**/*.{js,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        xl: "14px",
        "2xl": "18px",
      },
    },
  },
  presets: [require("nativewind/preset")],
};
