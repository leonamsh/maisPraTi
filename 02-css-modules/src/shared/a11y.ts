/**
 * Converte um rating 0..5 em 5 estrelas com preenchimento.
 * Ex.: 4.2 -> "★★★★★" (arredonda) ou "★★★★☆" se preferir não arredondar.
 * Aqui uso arredondamento para manter simples.
 */
export function stars(rating: number): string {
  const n = Math.round(Math.max(0, Math.min(5, rating)));
  return "★".repeat(n) + "☆".repeat(5 - n);
}
