/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        sans: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        brand: {
          50:  "#fdf8ee",
          100: "#f9edcc",
          200: "#f2d68a",
          300: "#e9bc47",
          400: "#e2a825",
          500: "#c98a12",
          600: "#a36a0e",
          700: "#7d4e0f",
          800: "#663f12",
          900: "#553514",
        },
        dark: {
          900: "#0d0f14",
          800: "#141720",
          700: "#1c2030",
          600: "#252a3a",
          500: "#2e3448",
        }
      }
    },
  },
  plugins: [],
}