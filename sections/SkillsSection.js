import { skillGroups } from "@/data/skills";
import Reveal from "@/components/Reveal";

export default function SkillsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="rule mb-14" />
      <Reveal>
        <h2 className="font-[family-name:var(--font-display)] text-3xl">
          What I work with
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.08}>
            <div
              className={`h-full rounded-2xl border border-[var(--border)] bg-[var(--bg-soft)] p-6 ${
                group.category === "Tools & Libraries" ? "sm:col-span-1" : ""
              }`}
            >
              <p className="text-sm text-[var(--text-muted)]">{group.category}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
