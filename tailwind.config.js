/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0AB9D8",
        dark: "#262626"
      },
      fontFamily: {
        "dmono": ["DM Mono"]
      }
    },
  },
  plugins: [],
}

