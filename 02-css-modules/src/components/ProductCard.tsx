import type { Product } from "../shared/products";
import { stars } from "../shared/a11y";
import { Button } from "./Button";
import { SkeletonButton, SkeletonPrice, SkeletonTitle } from "./Skeleton";
import s from "./ProductCard.module.css";

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
      className={s.card}
      tabIndex={0}
      aria-busy={!!loading}
      aria-label={product.title}
    >
      <div className={s.media} aria-hidden={!!loading}>
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
      <div className={s.grid}>
        <h3 className={s.title} aria-live="polite">
          {loading ? <SkeletonTitle /> : product.title}
        </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {product.tag ? (
            <span className={s.badge}>{product.tag}</span>
          ) : (
            <span />
          )}
          <span aria-label={`Avaliação ${product.rating} de 5`}>
            {stars(product.rating)}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <strong className={s.price}>
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
