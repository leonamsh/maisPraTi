import s from "./Button.module.css";
type Variant = "solid" | "outline" | "ghost";
export function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant },
) {
  const { variant = "solid", className = "", ...rest } = props;
  return <button className={`${s.btn} ${s[variant]} ${className}`} {...rest} />;
}
