import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-fira-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-fira-code)", "ui-monospace", "SFMono-Regular"],
      },
      boxShadow: {
        glass: "0 10px 35px rgba(0,0,0,0.35)",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(0,-8px,0) scale(1.01)" },
        },
        sheen: {
          "0%": { transform: "translateX(-60%) rotate(12deg)" },
          "100%": { transform: "translateX(160%) rotate(12deg)" },
        }
      },
      animation: {
        floaty: "floaty 10s ease-in-out infinite",
        sheen: "sheen 1.2s ease-out 1",
      }
    },
  },
  plugins: [],
} satisfies Config;
