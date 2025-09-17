import styled from "styled-components";
import { useTheme } from "../shared/useTheme";

const Root = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 16px;
  background: ${(p) => p.theme.bg};
  border-bottom: 1px solid ${(p) => p.theme.border};
`;
const Actions = styled.nav`
  display: flex;
  gap: 12px;
  align-items: center;
`;
const Badge = styled.span`
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 999px;
  border: 1px solid ${(p) => p.theme.border};
  color: ${(p) => p.theme.muted};
`;

export function Navbar({ cartCount = 0 }: { cartCount?: number }) {
  const { theme, toggle } = useTheme();
  return (
    <Root role="banner">
      <a href="/" aria-label="Página inicial" style={{ fontWeight: 700 }}>
        🛍 Loja
      </a>
      <Actions aria-label="Ações">
        <button
          onClick={toggle}
          aria-pressed={theme === "dark"}
          aria-label="Alternar tema"
          style={{
            height: 36,
            padding: "0 16px",
            borderRadius: "12px",
            border: `1px solid`,
            borderColor: `${"#"}${""}`,
            borderInlineColor: "transparent",
          }}
        >
          {theme === "dark" ? "🌙" : "☀️"} Tema
        </button>
        <span aria-live="polite" aria-atomic="true">
          <Badge>🛒 {cartCount}</Badge>
        </span>
      </Actions>
    </Root>
  );
}
