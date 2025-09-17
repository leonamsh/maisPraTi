type Variant = "solid" | "outline" | "ghost";
export function Button({
  variant = "solid",
  className = "",
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  const base =
    "h-9 px-4 rounded-brand inline-flex items-center justify-center gap-2 transition duration-brand ease-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed";
  const solid =
    "bg-primary text-white dark:text-[#0b1220] hover:-translate-y-0.5";
  const outline =
    "border border-border dark:border-border-dark text-inherit hover:bg-black/5 dark:hover:bg-white/10";
  const ghost = "hover:bg-black/5 dark:hover:bg-white/10";
  const v =
    variant === "solid" ? solid : variant === "outline" ? outline : ghost;
  return <button className={`${base} ${v} ${className}`} {...rest} />;
}
