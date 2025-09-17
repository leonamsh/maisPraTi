import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { ProductCard } from "./components/ProductCard";
import { PRODUCTS } from "./shared/products";

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
      <main
        role="main"
        className="grid gap-4 p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
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
