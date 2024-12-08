/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050914",
        secondary: "#5B0A4B",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        git: "#bf0603",
        orange: "#ff5400",
        darkblue: "#01497c",
        lightblue: "#0466c8",
        yellow: "#eeba0b",
        postman: "#ff7b00",
        turqoise: "#028090",
        gray: "#5e6472",
      },
      safelist: [
        "hover:text-git",
        "hover:text-orange",
        "hover:text-darkblue",
        "hover:text-lightblue",
        "hover:text-yellow",
        "hover:text-postman",
        "hover:text-turqoise",
        "hover:text-gray",
      ],
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
