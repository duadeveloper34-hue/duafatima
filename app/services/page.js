import ServicesSection from "@/sections/ServicesSection";
import ContactCTA from "@/sections/ContactCTA";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Services",
  description:
    "Frontend development services — React.js, Next.js, responsive UI, and API integration.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-4 pt-16 sm:pt-24">
        <Reveal>
          <p className="text-sm text-[var(--text-muted)]">Services</p>
          <h1 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-4xl leading-tight sm:text-5xl">
            Frontend work, done properly.
          </h1>
        </Reveal>
      </section>

      <ServicesSection />
      <ContactCTA />
    </>
  );
}
