/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#1c0756",
        lightText: "#fbe805",
        boxBg: "linear-gradient(145deg, #041498, #1c0756)",
        designColor: "#c936b1",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #70fe5c, -10px -10px 19px #098efc",
      },
    },
  },
  plugins: [],
};
