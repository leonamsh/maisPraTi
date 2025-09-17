/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    screens: { xs: "0px", sm: "481px", md: "769px", lg: "1025px" },
    extend: {
      colors: {
        bg: { DEFAULT: "#ffffff", dark: "#0b1220" },
        fg: { DEFAULT: "#111827", dark: "#e5e7eb" },
        muted: { DEFAULT: "#6b7280", dark: "#9ca3af" },
        primary: { DEFAULT: "#2563eb", dark: "#60a5fa" },
        border: { DEFAULT: "#e5e7eb", dark: "#1f2937" },
        card: { DEFAULT: "#ffffff", dark: "#111827" },
      },
      borderRadius: { brand: "12px" },
      boxShadow: {
        elev: "0 6px 16px rgba(0,0,0,.08)",
        elevDark: "0 6px 16px rgba(0,0,0,.5)",
      },
      transitionDuration: { brand: "200ms" },
      transitionTimingFunction: { brand: "cubic-bezier(.2,.8,.2,1)" },
    },
  },
  plugins: [],
};
