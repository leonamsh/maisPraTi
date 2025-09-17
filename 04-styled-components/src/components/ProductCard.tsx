import styled from "styled-components";
import type { Product } from "../shared/products";
import { Button } from "./Button";
import { stars } from "../shared/a11y";

const Card = styled.article`
  background: ${(p) => p.theme.card};
  border: 1px solid ${(p) => p.theme.border};
  border-radius: ${(p) => p.theme.radius};
  overflow: hidden;
  transition:
    transform ${(p) => p.theme.dur} ${(p) => p.theme.ease},
    box-shadow ${(p) => p.theme.dur} ${(p) => p.theme.ease};
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px ${(p) => p.theme.shadow};
  }
  &:focus-within {
    outline: 2px solid ${(p) => p.theme.primary};
    outline-offset: 2px;
  }
`;

const Media = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid ${(p) => p.theme.border};
  border-top-left-radius: ${(p) => p.theme.radius};
  border-top-right-radius: ${(p) => p.theme.radius};
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.06),
    rgba(0, 0, 0, 0.04),
    rgba(0, 0, 0, 0.06)
  );

  &::before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const Title = styled.h3`
  font-weight: 600;
  line-height: 1.2;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: calc(1.2em * 2 + 2px);
`;
const Badge = styled.span`
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 999px;
  border: 1px solid ${(p) => p.theme.border};
  color: ${(p) => p.theme.muted};
`;

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
    <Card tabIndex={0} aria-busy={!!loading} aria-label={product.title}>
      <Media>
        <img
          src={product.image}
          alt={product.title}
          width={1024}
          height={1024}
          loading="lazy"
          decoding="async"
        />
      </Media>

      <div style={{ padding: 16, display: "grid", gap: 8 }}>
        <Title aria-live="polite">
          {loading ? (
            <div
              style={{
                height: "2.6em",
                borderRadius: 6,
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,.15), rgba(255,255,255,0))",
                animation: "sk 1.2s linear infinite",
              }}
            />
          ) : (
            product.title
          )}
        </Title>
        <style>{`@keyframes sk { from{ background-position:-200% 0 } to{ background-position:200% 0 } }`}</style>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {product.tag ? <Badge>{product.tag}</Badge> : <span />}
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
          <strong>
            {loading ? (
              <span
                style={{
                  display: "inline-block",
                  width: 80,
                  height: 16,
                  borderRadius: 4,
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,.15), rgba(255,255,255,0))",
                  animation: "sk 1.2s linear infinite",
                }}
              />
            ) : (
              product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })
            )}
          </strong>
          {loading ? (
            <span
              style={{
                display: "inline-block",
                width: 110,
                height: 36,
                borderRadius: 8,
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,.15), rgba(255,255,255,0))",
                animation: "sk 1.2s linear infinite",
              }}
            />
          ) : (
            <Button
              $variant="solid"
              onClick={onAdd}
              aria-label={`Adicionar ${product.title} ao carrinho`}
            >
              Adicionar
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
