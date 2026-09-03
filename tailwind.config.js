/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FBFBFA",
        alabaster: "#F4F3EF",
        navy: "#060B1E",
        midnight: "#0A1128",
        ink: "#050505",
        slate: "#525E75",
        gold: "#C9A24B",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        mono: ['"Space Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
