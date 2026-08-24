import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#000000",
        card: "#0d0d0d",
        card2: "#111214",
        border: "#262626",
        muted: "#8a8a8a",
        muted2: "#5f5f5f",
        gridline: "#1a1a1a",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
        display: ["var(--font-spacegrotesk)", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
      },
      keyframes: {
        swing: {
          "0%, 100%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(4deg)" },
        },
        bounce2: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.6" },
          "50%": { transform: "translateY(6px)", opacity: "1" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        swing: "swing 4.5s ease-in-out infinite",
        bounce2: "bounce2 1.8s ease-in-out infinite",
        fadeInUp: "fadeInUp 0.7s ease forwards",
      },
      backgroundImage: {
        grid: "linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
  },
  plugins: [],
};
export default config;
