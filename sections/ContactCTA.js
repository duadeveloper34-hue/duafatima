import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

export default function ContactCTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="rule mb-14" />
      <Reveal>
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-lg font-[family-name:var(--font-display)] text-4xl leading-tight">
            Have a project in mind? Let&apos;s talk about it.
          </h2>
          <Button href="/contact">Let&apos;s Work Together</Button>
        </div>
      </Reveal>
    </section>
  );
}
