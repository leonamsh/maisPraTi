import { ThemeProvider, createGlobalStyle } from "styled-components";
import styled from "styled-components"; // <— garante o styled aqui
import { base, dark, light } from "./theme";
import { useTheme } from "./shared/useTheme";
import { Navbar } from "./components/Navbar";
import { PRODUCTS } from "./shared/products";
import { ProductCard } from "./components/ProductCard";
import { useEffect, useState } from "react";

const Global = createGlobalStyle`
  *{ box-sizing:border-box }
  html, body, #root { height:100% }
  body{
    margin:0; background:${(p) => p.theme.bg}; color:${(p) => p.theme.fg};
    font:14px/1.4 system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,"Noto Sans",sans-serif;
  }
`;

const Grid = styled.main`
  display: grid;
  gap: 16px;
  padding: 16px;
  grid-template-columns: 1fr;
  @media (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default function App() {
  const { theme } = useTheme();
  const current =
    theme === "dark" ? { ...dark, ...base } : { ...light, ...base };
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);
  return (
    <ThemeProvider theme={current}>
      <Global />
      <Navbar cartCount={cart} />
      <Grid role="main">
        {" "}
        {PRODUCTS.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            loading={loading}
            onAdd={() => setCart((c) => c + 1)}
          />
        ))}
      </Grid>
    </ThemeProvider>
  );
}
