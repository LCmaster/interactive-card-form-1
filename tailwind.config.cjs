/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGrayishViolet: "#dedddf",
        darkGrayishViolet: "#8e8593",
        veryDarkViolet: "#21092f",
      },
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      backgroundImage: {
        "card-back": "url('/src/assets/bg-card-back.png')",
        "card-front": "url('/src/assets/bg-card-front.png')",
        mobile: "url('/src/assets/bg-main-mobile.png')",
        desktop: "url('/src/assets/bg-main-desktop.png')",
      },
    },
  },
  plugins: [],
};
