export const light = {
  bg: "#ffffff",
  fg: "#111827",
  muted: "#6b7280",
  primary: "#2563eb",
  primaryContrast: "#ffffff",
  border: "#e5e7eb",
  card: "#ffffff",
  shadow: "rgba(0,0,0,.08)",
};
export const dark = {
  bg: "#0b1220",
  fg: "#e5e7eb",
  muted: "#9ca3af",
  primary: "#60a5fa",
  primaryContrast: "#0b1220",
  border: "#1f2937",
  card: "#111827",
  shadow: "rgba(0,0,0,.5)",
};
export const base = {
  radius: "12px",
  dur: "200ms",
  ease: "cubic-bezier(.2,.8,.2,1)",
  bp: { one: 480, two: 768, three: 1024 },
};
export type Theme = typeof light & typeof base;
