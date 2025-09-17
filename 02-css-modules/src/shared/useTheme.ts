import { useEffect, useState } from "react";

const KEY = "theme"; // "light" | "dark"

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === "light" || saved === "dark") return saved;
    } catch {}
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    try {
      localStorage.setItem(KEY, theme);
    } catch {}
    // Nesta versão (CSS Modules) usamos data-theme no <html>
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggle = () => setTheme(t => (t === "light" ? "dark" : "light"));

  return { theme, toggle };
}
