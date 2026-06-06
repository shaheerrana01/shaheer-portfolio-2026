/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        ink: "#050816",
        graphite: "#101624",
        ice: "#f7fbff",
        cyan: "#38d5ff",
        violet: "#8b5cf6",
        mint: "#3ee6b5",
        coral: "#ff6f91",
      },
      boxShadow: {
        glow: "0 0 40px rgba(56, 213, 255, 0.22)",
        violet: "0 0 46px rgba(139, 92, 246, 0.2)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
      },
    },
  },
  plugins: [],
};
