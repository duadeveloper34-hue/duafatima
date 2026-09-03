import ProjectMedia from "@/components/ProjectMedia";
import Reveal from "@/components/Reveal";

export default function ProjectRow({ project, index }) {
  const reversed = index % 2 === 1;

  return (
    <Reveal className="py-10">
      <div
        className={`grid items-center gap-8 sm:grid-cols-2 sm:gap-14 ${
          reversed ? "sm:[direction:rtl]" : ""
        }`}
      >
        <div className={reversed ? "sm:[direction:ltr]" : ""}>
          <ProjectMedia title={project.title} />
        </div>

        <div className={reversed ? "sm:[direction:ltr]" : ""}>
          <h3 className="font-[family-name:var(--font-display)] text-2xl">
            {project.title}
          </h3>
          <p className="mt-3 max-w-md text-[var(--text-muted)]">
            {project.description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--text-muted)]"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex gap-6 text-sm">
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--accent)] underline underline-offset-4"
              >
                Live Demo
              </a>
            )}
            {project.githubUrl && project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--accent)] underline underline-offset-4"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
