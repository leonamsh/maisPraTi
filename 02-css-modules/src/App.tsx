import { useEffect, useState } from "react";
import { PRODUCTS } from "./shared/products";
import { Navbar } from "./components/Navbar";
import { ProductCard } from "./components/ProductCard";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);
  return (
    <>
      <Navbar cartCount={cart} />
      <main role="main" style={{ display: "grid", gap: 16, padding: 16 }}>
        <style>{`
          @media (max-width: 480px){ main{ grid-template-columns:1fr; } }
          @media (min-width: 481px) and (max-width: 768px){ main{ grid-template-columns: repeat(2,1fr); } }
          @media (min-width: 769px) and (max-width: 1024px){ main{ grid-template-columns: repeat(3,1fr); } }
          @media (min-width: 1025px){ main{ grid-template-columns: repeat(4,1fr); } }
        `}</style>
        {PRODUCTS.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            loading={loading}
            onAdd={() => setCart((c) => c + 1)}
          />
        ))}
      </main>
    </>
  );
}
