/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        "image-shadow": "#581c87 7px 10px 17px 2px"
      },
      animation: {
        "blurred-fade-in": "blurred-fade-in 0.9s ease-in-out both",
        "fade-in-up": "fade-in-up 0.6s ease-in-out both",
        bouncing: "bouncing 1s ease-in-out both",
        "fade-in-down": "fade-in-down 0.6s ease-in-out both",
        "pulse-fade-in": "pulse-fade-in 0.6s ease-out both"
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "blurred-fade-in": {
          "0%": { filter: "blur(5px)", opacity: "0" },
          "100%": { filter: "blur(0)", opacity: "1" }
        },
        bouncing: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" }
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "pulse-fade-in": {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "50%": { transform: "scale(1.05)", opacity: "0.5" },
          "100%": { transform: "scale(1)", opacity: "1" }
        }
      }
    }
  },
  variants: {
    extend: {
      boxShadow: ["hover"]
    }
  },
  plugins: []
}
