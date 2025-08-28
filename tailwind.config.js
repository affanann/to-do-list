/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#F5C527",
          dark: "#0B0C10",
          gray: "#1F2430",
          muted: "#2A2F3A",
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(245,197,39,0.15)",
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
