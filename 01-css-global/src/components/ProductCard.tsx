import type { Product } from "../shared/products";
import { Button } from "./Button";
import { SkeletonButton, SkeletonPrice, SkeletonTitle } from "./Skeleton";
import { stars } from "../shared/a11y";

export function ProductCard({
  product,
  loading,
  onAdd,
  btnVariant = "solid",
}: {
  product: Product;
  loading?: boolean;
  onAdd?: () => void;
  btnVariant?: "solid" | "outline" | "ghost";
}) {
  return (
    <article
      className="card"
      tabIndex={0}
      aria-busy={!!loading}
      aria-label={product.title}
    >
      <div className="media" aria-hidden={!!loading}>
        {loading ? null : (
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            width={512}
            height={512}
          />
        )}
      </div>
      <div style={{ padding: 16, display: "grid", gap: 8 }}>
        <h3 className="title" aria-live="polite">
          {loading ? <SkeletonTitle /> : product.title}
        </h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {product.tag ? (
            <span className="badge">{product.tag}</span>
          ) : (
            <span />
          )}
          <span
            className="rating"
            aria-label={`Avaliação ${product.rating} de 5`}
          >
            {stars(product.rating)}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <strong className="price">
            {loading ? (
              <SkeletonPrice />
            ) : (
              product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })
            )}
          </strong>
          {loading ? (
            <SkeletonButton />
          ) : (
            <Button
              variant={btnVariant}
              onClick={onAdd}
              aria-label={`Adicionar ${product.title} ao carrinho`}
            >
              Adicionar
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
