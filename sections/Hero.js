import Image from "next/image";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import profilePhoto from "@/public/images/dua-fatima.jpg";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
      <div className="grid items-center gap-14 sm:grid-cols-[1.1fr_0.9fr] sm:gap-10">
        <Reveal>
          <p className="text-sm text-[var(--text-muted)]">Frontend Developer</p>

          <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl leading-[1.05] tracking-tight sm:text-6xl">
            Dua Fatima builds interfaces people actually enjoy using.
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--text-muted)]">
            I specialize in React.js and Next.js — turning designs into fast,
            responsive, well-structured interfaces with clean code and
            thoughtful motion.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/projects">View My Work</Button>
            <Button href="/contact" variant="secondary">
              Let&apos;s Work Together
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative mx-auto max-w-xs sm:max-w-none">
            <div
              className="absolute -bottom-4 -right-4 aspect-[4/5] w-full rounded-[1.75rem] border border-[var(--accent)]/40"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] bg-[var(--bg-soft)]">
              <Image
                src={profilePhoto}
                alt="Portrait of Dua Fatima, Frontend Developer"
                fill
                priority
                sizes="(min-width: 640px) 360px, 80vw"
                className="object-cover"
                style={{ objectPosition: "50% 22%" }}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
