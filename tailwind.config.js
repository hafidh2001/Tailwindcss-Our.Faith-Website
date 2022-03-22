module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        heading: ["Playfair Display", "sans-serif"],
        content: ["Montserrat", "serif"],
      },
      colors: {
        "white-second": "rgba(255, 255, 255, 0.849)",
        "white-third": "rgba(255, 255, 255, 0.726)",
      },
      backgroundColor: {
        "btn-cta": "rgba(0, 0, 255, 1)",
        "btn-cta-h": "rgba(0, 0, 155, 1)",
        "btn-second": "rgba(221, 221, 221, 1)",
        "btn-second-h": "rgba(182, 182, 182, 1)",
      },
      backgroundImage: {
        header: "linear-gradient(to bottom right, #343e97, #1100ff)",
        "header-dark": "linear-gradient(to bottom right, #161616, #191919)",
        section: "linear-gradient(to bottom right, #1100ff, #2b52fd)",
        "section-dark": "linear-gradient(to bottom right, #0f121e, #141414)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
