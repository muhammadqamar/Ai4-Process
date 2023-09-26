/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        White: "rgba(254, 254, 254, 1)",
        primaryWhite: "rgba(255, 255, 255, 75)",
        "White-200": "rgba(228, 226, 226, 1)",
        "White-300": "rgba(196, 196, 196, 0.60)",
        "White-500": "rgba(255, 255, 255, 1)",
        "White-600": "rgba(255, 255, 255, 0.8)",
        "White-700": "rgba(217, 217, 217, 1)",
        "White-900": "rgba(255, 255, 255, 71)",
        Grey: "#919094",
        "Gray-100": "#C4C4C4",
        "Grey-400": "rgba(255, 255, 255, 0.6)",
        "Grey-500": "rgba(145, 144, 148, 1)",
        "Grey-700": "rgba(44, 45, 58, 0.6)",
        "Grey-800": "rgba(217, 217, 217, 0.10)",
        Black: "#000000",
        "Black-700": "rgba(26, 26, 26, 0.71)",
        "Black-800": "rgba(8, 9, 12, 1)",
        "Purple-500": "#1E1F28",
        "Purple-900": "rgba(8, 9, 12, 1)",
        "Grey-200": "#D9D9D9",
        "Mist-500": "rgba(69, 217, 252, 1)",
        "Mist-600": "rgba(85, 204, 204, 1)",
      },

      boxShadow: {
        "small-shadow": "-20px 67px 80px 0px rgba(27, 20, 100, 0.03)",
        "medium-shadow": "0px 0px 0px 1px rgba(0, 0, 0, 0.34)",
      },
      backgroundImage: {
        "gradient-100":
          "linear-gradient(90deg, #45D9FC 17.14%, #5846F9 94.72%)",
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
  plugins: [require("flowbite/plugin")],
};
