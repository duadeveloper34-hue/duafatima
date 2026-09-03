"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="flex h-9 w-9 flex-col items-center justify-center gap-[5px]"
      >
        <span className="h-[1.5px] w-5 bg-[var(--text)]" />
        <span className="h-[1.5px] w-5 bg-[var(--text)]" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-[var(--bg)]">
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-[family-name:var(--font-display)] text-lg">
              Dua Fatima
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-9 w-9 items-center justify-center text-2xl leading-none"
            >
              ×
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-6 pt-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-[var(--border)] py-4 font-[family-name:var(--font-display)] text-3xl"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
