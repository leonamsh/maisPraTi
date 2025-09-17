import { useTheme } from "../shared/useTheme";
export function Navbar({ cartCount = 0 }: { cartCount?: number }) {
  const { theme, toggle } = useTheme();
  return (
    <header
      role="banner"
      className="sticky top-0 z-10 flex items-center justify-between gap-3 bg-bg dark:bg-bg-dark border-b border-border dark:border-border-dark px-4 py-3"
    >
      <a href="/" aria-label="Página inicial" className="font-bold">
        🛍 Loja
      </a>
      <nav aria-label="Ações" className="flex items-center gap-3">
        <button
          className="h-9 px-4 rounded-brand border border-border dark:border-border-dark hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          onClick={toggle}
          aria-pressed={theme === "dark"}
          aria-label="Alternar tema"
        >
          {theme === "dark" ? "🌙" : "☀️"} Tema
        </button>
        <span aria-live="polite" aria-atomic="true">
          <span className="text-muted dark:text-muted-dark border border-border dark:border-border-dark rounded-full text-[12px] px-2 py-[2px]">
            🛒 {cartCount}
          </span>
        </span>
      </nav>
    </header>
  );
}
