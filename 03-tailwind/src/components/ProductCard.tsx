import type { Product } from "../shared/products";
import { stars } from "../shared/a11y";
import { Button } from "./Button";
import { SkeletonButton, SkeletonPrice, SkeletonTitle } from "./Skeleton";

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
      tabIndex={0}
      aria-busy={!!loading}
      aria-label={product.title}
      className="bg-card dark:bg-card-dark border border-border dark:border-border-dark rounded-brand overflow-hidden transition duration-brand ease-brand hover:-translate-y-0.5 hover:shadow-elev dark:hover:shadow-elevDark focus-within:outline focus-within:outline-2 focus-within:outline-primary"
    >
      <div className="aspect-square bg-gradient-to-r from-black/5 via-black/3 to-black/5 dark:from-white/5 dark:via-white/10 dark:to-white/5">
        {loading ? null : (
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            width={512}
            height={512}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="grid gap-2 p-4">
        <h3
          className="font-semibold leading-tight line-clamp-2 min-h-[2.6em]"
          aria-live="polite"
        >
          {loading ? <SkeletonTitle /> : product.title}
        </h3>
        <div className="flex items-center justify-between">
          {product.tag ? (
            <span className="text-muted dark:text-muted-dark border border-border dark:border-border-dark rounded-full text-[12px] px-2 py-[2px]">
              {product.tag}
            </span>
          ) : (
            <span />
          )}
          <span aria-label={`Avaliação ${product.rating} de 5`}>
            {stars(product.rating)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <strong>
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
