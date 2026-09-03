import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

export default function AboutPreview() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="rule mb-14" />
      <Reveal>
        <div className="grid gap-8 sm:grid-cols-[0.4fr_0.6fr] sm:gap-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl">
            About
          </h2>
          <div>
            <p className="max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]">
              I focus on the frontend — turning designs into interfaces that
              are responsive, accessible, and built to last. I care about
              clean component structure as much as I care about how a page
              looks and feels.
            </p>
            <Button href="/about" variant="secondary" className="mt-8">
              More about me
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
