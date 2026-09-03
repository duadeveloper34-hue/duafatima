import Link from "next/link";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";

const variants = {
  primary: "bg-[var(--accent)] text-white hover:opacity-90",
  secondary:
    "border border-[var(--border)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
};

export default function Button({
  href,
  variant = "primary",
  className = "",
  children,
  type,
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type || "button"} className={classes} {...props}>
      {children}
    </button>
  );
}
