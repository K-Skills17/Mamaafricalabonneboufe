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
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        marquee: "marquee 45s linear infinite",
        bounce: "bounce 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
