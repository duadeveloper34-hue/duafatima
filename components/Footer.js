import Link from "next/link";
import { socialLinks } from "@/data/social";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-[family-name:var(--font-display)] text-2xl">
              Let&apos;s build something worth shipping.
            </p>
            <Link
              href="/contact"
              className="mt-2 inline-block text-sm text-[var(--accent)] underline underline-offset-4"
            >
              Start a conversation
            </Link>
          </div>

          <ul className="flex gap-6 text-sm text-[var(--text-muted)]">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[var(--text)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="rule mt-10" />

        <p className="mt-6 text-xs text-[var(--text-muted)]">
          © {year} Dua Fatima. Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
