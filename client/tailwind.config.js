/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },

      gradientColorStops: (theme) => ({
        "blue-pink": [theme("colors.blue.500"), theme("colors.pink.500")],
      }),
    },
  },
  plugins: [],
};
