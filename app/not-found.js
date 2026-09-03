import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-start px-6 py-32">
      <p className="text-sm text-(--text-muted)">404</p>
      <h1 className="mt-3 font-display text-4xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 text-(--text-muted)">
        The link might be broken, or the page may have moved.
      </p>
      <Button href="/" className="mt-8">
        Back to home
      </Button>
    </section>
  );
}
