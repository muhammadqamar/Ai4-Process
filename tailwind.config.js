/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        White: "#FFFFFF",
        Grey: "#919094",
        Black: "#000000",
        "Grey-200": "#D9D9D9",
      },

      boxShadow: {
        "small-shadow": "-20px 67px 80px 0px rgba(27, 20, 100, 0.03)",
        "medium-shadow": "0px 0px 0px 1px rgba(0, 0, 0, 0.34)",
      },

      screens: {
        xsm: "375px",
        sm: "640px",
        // @media (min-width: 640px) { ... }
        md: "768px",
        // @media (min-width: 768px) { ... }
        lg: "1024px",
        // @media (min-width: 1024px) { ... }
        xl: "	1280px",
        // @media (min-width: 1280px) { ... }
        "2xl": "1536px",
        // @media (min-width: 1536px) { ... }f
      },
    },
  },
  plugins: [],
};
