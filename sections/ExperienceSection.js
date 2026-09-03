import Timeline from "@/components/Timeline";
import Reveal from "@/components/Reveal";

export default function ExperienceSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="rule mb-14" />
      <Reveal>
        <h2 className="font-[family-name:var(--font-display)] text-3xl">
          My journey
        </h2>
      </Reveal>
      <div className="mt-10">
        <Timeline />
      </div>
    </section>
  );
}
