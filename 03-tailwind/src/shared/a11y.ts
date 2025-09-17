/**
 * Converte um rating (0–5) em uma string de estrelas ★☆.
 * Exemplo: 4.2 -> "★★★★☆"
 */
export function stars(rating: number): string {
  const n = Math.round(Math.max(0, Math.min(5, rating)));
  return "★".repeat(n) + "☆".repeat(5 - n);
}
