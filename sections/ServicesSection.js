import { services } from "@/data/services";
import Reveal from "@/components/Reveal";

export default function ServicesSection({ limit }) {
  const list = limit ? services.slice(0, limit) : services;

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="rule mb-14" />
      <Reveal>
        <h2 className="font-[family-name:var(--font-display)] text-3xl">
          How I can help
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {list.map((service, i) => (
          <Reveal key={service.title} delay={(i % 2) * 0.08}>
            <div className="border-t border-[var(--border)] pt-5">
              <h3 className="font-[family-name:var(--font-display)] text-xl">
                {service.title}
              </h3>
              <p className="mt-2 text-[var(--text-muted)]">{service.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
