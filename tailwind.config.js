/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      animation: {
        "float-up": "floatUp 1s ease-out",
        "fade-in": "fadeIn 1s ease-in-out",
        blink: "blink 0.7s infinite",
        typing: "typing 3s steps(40) forwards",
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
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
