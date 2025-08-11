import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#006AFF",
          cyan: "#00F9FF",
        },
        dark: {
          DEFAULT: "#0B1C4D",
          lighter: "#1E2B4D",
          darker: "#091538",
        },
        light: {
          DEFAULT: "#FFFFFF",
          blue: "#F5F9FF",
          darker: "#E5E7EB",
        },
      },
      fontFamily: {
        gotham: [
          "var(--font-gotham-black)",
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
      },
      backgroundImage: {
        airportBg: "url('/images/airport.jpeg')",
      },
    },
  },
  plugins: [],
} satisfies Config
