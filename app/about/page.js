import ExperienceSection from "@/sections/ExperienceSection";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About",
  description:
    "Frontend developer focused on React.js and Next.js — how Dua Fatima approaches building interfaces.",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-16 sm:pt-24">
        <Reveal>
          <p className="text-sm text-[var(--text-muted)]">About</p>
          <h1 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-4xl leading-tight sm:text-5xl">
            I build the part of the product people actually touch.
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 max-w-2xl space-y-5 text-lg leading-relaxed text-[var(--text-muted)]">
            <p>
              I&apos;m a frontend developer who specializes in React.js and
              Next.js. My focus is on turning designs and ideas into
              interfaces that are responsive, accessible, and genuinely
              pleasant to use — not just functional.
            </p>
            <p>
              I care about component-based architecture: building UI in
              pieces that are reusable, easy to reason about, and easy to
              hand off or extend later. That means clean state handling,
              sensible file structure, and code that doesn&apos;t need a
              tour to understand.
            </p>
            <p>
              I&apos;m especially interested in the details — how a page
              responds across screen sizes, how a form behaves when
              something goes wrong, how a small animation can make an
              interface feel more responsive without getting in the way.
            </p>
            <p>
              I work primarily with HTML5, CSS3, JavaScript, React.js,
              Next.js, and Tailwind CSS, along with tools like React Hook
              Form, Axios, Framer Motion, and React Hot Toast to round out
              real-world interfaces.
            </p>
          </div>
        </Reveal>
      </section>

      <ExperienceSection />
    </>
  );
}
