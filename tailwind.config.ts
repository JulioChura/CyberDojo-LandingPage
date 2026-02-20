import type { Config } from 'tailwindcss'

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#ee6c2b",
        "primary-hover": "#d55b1f",
        "background-dark": "#0b0c1a",
        "background-card": "rgba(30, 32, 48, 0.4)",
        "accent-mint": "#4ade80",
        "accent-violet": "#a78bfa",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, rgba(11, 12, 26, 0.8), #0b0c1a), radial-gradient(circle at center, rgba(238, 108, 43, 0.15) 0%, rgba(11, 12, 26, 0) 70%)',
        'glass-gradient': 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(238, 108, 43, 0.2)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
    },
  },
  plugins: [],
} satisfies Config
