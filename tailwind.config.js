/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        basic: "#36D45A",
      },
      animation: {
        "float-up": "floatUp 1s ease-out",
        "fade-in": "fadeIn 1s ease-in-out",
        blink: "blink 0.7s infinite",
        typing: "typing 3s steps(40) forwards",
        wave: "wave 1.5s linear infinite",
      },
      keyframes: {
        floatUp: {
          "0%": { transform: "translateY(-50px)", opacity: 0 },
          "100%": { transform: "translateY(0px)", opacity: 1 },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        blink: {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
        typing: {
          "0%": { width: "0", opacity: "0" },
          "100%": { width: "100%", opacity: "1" },
        },
        wave: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
