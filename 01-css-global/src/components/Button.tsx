type Variant = "solid" | "outline" | "ghost";
export function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant },
) {
  const { variant = "solid", ...rest } = props;
  return <button className={`btn ${variant}`} {...rest} />;
}
