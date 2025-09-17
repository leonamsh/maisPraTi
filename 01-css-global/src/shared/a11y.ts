export function stars(r: number) {
  const n = Math.round(r);
  return "★".repeat(n) + "☆".repeat(5 - n);
}
