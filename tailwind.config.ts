import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D97706", // Gold/Amber accent
        "background-light": "#FDFCFB",
        "background-dark": "#121212",
        terracotta: "#9C4221",
        emerald: "#065F46",
        charcoal: "#1A1A1A",
      },
      borderRadius: {
        DEFAULT: "12px",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-jakarta)", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "gallery-scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "gallery-scroll-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "gallery-scroll-up": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        "gallery-scroll-down": {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        marquee: "marquee 45s linear infinite",
        bounce: "bounce 2s ease-in-out infinite",
        "gallery-scroll-left": "gallery-scroll-left 90s linear infinite",
        "gallery-scroll-right": "gallery-scroll-right 90s linear infinite",
        "gallery-scroll-up": "gallery-scroll-up 90s linear infinite",
        "gallery-scroll-down": "gallery-scroll-down 90s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
