import { useTheme } from "../shared/useTheme";
import s from "./Navbar.module.css";
export function Navbar({ cartCount = 0 }: { cartCount?: number }) {
  const { theme, toggle } = useTheme();
  return (
    <header className={s.root} role="banner">
      <a href="/" aria-label="Página inicial" style={{ fontWeight: 700 }}>
        🛍 Loja
      </a>
      <nav className={s.actions} aria-label="Ações">
        <button
          className={s.btn}
          onClick={toggle}
          aria-pressed={theme === "dark"}
          aria-label="Alternar tema"
        >
          {theme === "dark" ? "🌙" : "☀️"} Tema
        </button>
        <span aria-live="polite" aria-atomic="true">
          <span className={s.badge}>🛒 {cartCount}</span>
        </span>
      </nav>
    </header>
  );
}
