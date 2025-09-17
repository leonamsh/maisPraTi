import { useTheme } from "../shared/useTheme";
export function Navbar({ cartCount = 0 }: { cartCount?: number }) {
  const { theme, toggle } = useTheme();
  return (
    <header className="navbar" role="banner">
      <a href="/" aria-label="Página inicial" style={{ fontWeight: 700 }}>
        Loja
      </a>
      <nav
        aria-label="Ações"
        style={{ display: "flex", gap: 12, alignItems: "center" }}
      >
        <button
          className="btn outline"
          onClick={toggle}
          aria-pressed={theme === "dark"}
          aria-label="Alternar tema claro/escuro"
        >
          {theme === "dark" ? "🌙" : "☀️"} Tema
        </button>
        <span aria-live="polite" aria-atomic="true">
          <span
            className="badge"
            aria-label={`Itens no carrinho: ${cartCount}`}
          >
            🛒 {cartCount}
          </span>
        </span>
      </nav>
    </header>
  );
}
