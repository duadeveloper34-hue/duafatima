import { journey } from "@/data/experience";
import Reveal from "@/components/Reveal";

export default function Timeline() {
  return (
    <ol className="relative border-l border-[var(--border)] pl-8">
      {journey.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.08}>
          <li className="pb-10 last:pb-0">
            <div
              className="absolute -ml-[calc(2rem+4.5px)] mt-1.5 h-2.5 w-2.5 rounded-full bg-[var(--accent)]"
              aria-hidden="true"
            />
            <p className="text-sm text-[var(--text-muted)]">{item.period}</p>
            <h3 className="mt-1 font-[family-name:var(--font-display)] text-xl">
              {item.title}
            </h3>
            <p className="mt-2 max-w-lg text-[var(--text-muted)]">
              {item.description}
            </p>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
