/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "color-primary": "#377DFF",
        "color-secondary": "#38CB89",
        "color-yellow": "#FFAB00",
        "color-red": "#FF5630",
        "color-white": "#FFFFFF",
        "color-gray": "#4E5D78",
        "color-gray-80": "rgba(78, 93, 120, 0.8)",
        "color-gray-60": "rgba(78, 93, 120, 0.6)",
        "color-gray-40": "rgba(78, 93, 120, 0.4)",
        "color-gray-20": "rgba(78, 93, 120, 0.2)",
        "color-black": "#000000",
        "color-dark-primary": "#191C21",
        "color-dark-secondary": "#212833",
        "color-text": "#262626",
      },
    },
  },
  plugins: [],
};
