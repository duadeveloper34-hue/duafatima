import { projects } from "@/data/projects";
import ProjectRow from "@/components/ProjectRow";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

export default function ProjectsSection() {
  const featured = projects.find((p) => p.featured) || projects[0];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="rule mb-14" />
      <Reveal>
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl">
            Selected work
          </h2>
          <Button href="/projects" variant="secondary">
            All projects
          </Button>
        </div>
      </Reveal>

      <ProjectRow project={featured} index={0} />
    </section>
  );
}
