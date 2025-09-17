// Button.tsx
import styled, { css } from "styled-components";

type Variant = "solid" | "outline" | "ghost";

export const Button = styled.button<{ $variant?: Variant }>`
  height: 36px;
  padding: 0 16px;
  border-radius: ${(p) => p.theme.radius};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition:
    background ${(p) => p.theme.dur} ${(p) => p.theme.ease},
    color ${(p) => p.theme.dur} ${(p) => p.theme.ease},
    transform ${(p) => p.theme.dur} ${(p) => p.theme.ease},
    opacity ${(p) => p.theme.dur} ${(p) => p.theme.ease};
  border: 1px solid transparent;
  &:focus-visible {
    outline: 2px solid ${(p) => p.theme.primary};
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${(p) =>
    p.$variant === "solid" &&
    css`
      background: ${p.theme.primary};
      color: ${p.theme.primaryContrast};
      &:hover {
        transform: translateY(-1px);
      }
    `}
  ${(p) =>
    p.$variant === "outline" &&
    css`
      background: transparent;
      border-color: ${p.theme.border};
      color: ${p.theme.fg};
      &:hover {
        background: rgba(0, 0, 0, 0.04);
      }
    `}
  ${(p) =>
    p.$variant === "ghost" &&
    css`
      background: transparent;
      color: ${p.theme.fg};
      &:hover {
        background: rgba(0, 0, 0, 0.04);
      }
    `}
`;
