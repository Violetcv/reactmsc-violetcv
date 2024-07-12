/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-color": "#012147",
      },
      height: {
        "80vh": "80vh",
        "custom-400": "400px",
      },
      boxShadow: {
        custom: "0px 0px 20px 1px rgba(0, 0, 0, 0.1)",
        "event-glow": "0px 0px 20px 2px rgb(114, 112, 112)",
      },
      screens: {
        "850px": { max: "850px" },
        "max-900": { max: "900px" }, // Custom breakpoint for max-width 900px
        "1000px": { max: "1000px" },
        "1200px": { max: "1200px" },
        "550px": { max: "550px" },
        "450px": { max: "450px" },
      },
      margin: {
        "-18vh": "-18vh",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        logo: {
          blue1: "#1B2F4F",
          blue2: "#0476D1",
          blue3: "#56E2F4",
          darkBlue1: "#182B46",
          darkBlue2: "#213B63",
          white: "#FEFFFE",
        },
      },
    },
  },
  plugins: [],
};
