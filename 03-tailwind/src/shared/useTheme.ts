import { useEffect, useState } from "react";
const KEY = "theme";
export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const s = localStorage.getItem(KEY);
    if (s === "light" || s === "dark") return s;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });
  useEffect(() => {
    localStorage.setItem(KEY, theme);
    const el = document.documentElement;
    theme === "dark" ? el.classList.add("dark") : el.classList.remove("dark");
  }, [theme]);
  return {
    theme,
    toggle: () => setTheme((t) => (t === "light" ? "dark" : "light")),
  };
}
