export default function ProjectMedia({ title }) {
  const initial = title.trim().charAt(0).toUpperCase();

  return (
    <div
      className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl border border-[var(--border)]"
      style={{
        background:
          "linear-gradient(135deg, color-mix(in srgb, var(--accent) 14%, var(--bg-soft)), color-mix(in srgb, var(--accent-2) 14%, var(--bg-soft)))",
      }}
    >
      <span className="font-[family-name:var(--font-display)] text-6xl text-[var(--accent)] opacity-70">
        {initial}
      </span>
    </div>
  );
}
