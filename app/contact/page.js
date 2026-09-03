import ContactForm from "@/components/ContactForm";
import { socialLinks } from "@/data/social";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Dua Fatima about frontend development work.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-16 sm:pt-24">
      <div className="grid gap-14 sm:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="text-sm text-[var(--text-muted)]">Contact</p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl leading-tight">
            Let&apos;s work together.
          </h1>
          <p className="mt-5 max-w-sm text-[var(--text-muted)]">
            Tell me a bit about your project and I&apos;ll get back to you
            directly — usually within a day or two.
          </p>

          <ul className="mt-10 space-y-2 text-sm">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-muted)] underline underline-offset-4 hover:text-[var(--text)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
