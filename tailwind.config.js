/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        chalk: "#f5f5f5",
        mist: "#a1a1a1",
        hush: "#6b6b6b",
        whisper: "#3d3d3d",
      },
      fontFamily: {
        display: ['"Instrument Sans"', "ui-sans-serif", "sans-serif"],
        brand: ['"Space Grotesk"', "ui-sans-serif", "sans-serif"],
      },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fade: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        rise: "rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        fade: "fade 1.1s ease both",
      },
    },
  },
  plugins: [],
};
