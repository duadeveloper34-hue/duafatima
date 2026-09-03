import { projects } from "@/data/projects";
import ProjectRow from "@/components/ProjectRow";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Projects",
  description:
    "A showcase of frontend projects built with React.js and Next.js by Dua Fatima.",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
      <Reveal>
        <p className="text-sm text-[var(--text-muted)]">Projects</p>
        <h1 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-4xl leading-tight sm:text-5xl">
          A closer look at what I&apos;ve built.
        </h1>
      </Reveal>

      <div className="mt-8 divide-y divide-[var(--border)]">
        {projects.map((project, i) => (
          <ProjectRow key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
