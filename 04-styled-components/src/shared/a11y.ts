export const stars = (r: number) =>
  "★".repeat(Math.round(r)) + "☆".repeat(5 - Math.round(r));
