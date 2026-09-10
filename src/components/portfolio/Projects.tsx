import { useEffect, useState } from "react";
import { ArrowUpRight, Github, X } from "lucide-react";
import { Section } from "./Section";
import { projects, type Project } from "@/data/projects";

export function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = projects.find((p) => p.id === openId) ?? null;

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active]);

  return (
    <Section
      id="projects"
      label="Projects"
      title="Systems built end to end"
      intro="Select a project for the full breakdown of scope, stack, and outcomes."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setOpenId(p.id)}
            className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 text-left transition-all hover:-translate-y-1 hover:border-border-strong"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="font-mono text-xs tracking-widest text-primary">{p.year}</p>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold leading-snug">{p.title}</h3>
            <p className="mt-1 text-sm text-primary/80">{p.subtitle}</p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.slice(0, 4).map((s) => (
                <span
                  key={s}
                  className="rounded border border-border bg-secondary px-2 py-0.5 font-mono text-[0.66rem] text-secondary-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>

      {active && <ProjectModal project={active} onClose={() => setOpenId(null)} />}
    </Section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-[60] flex items-end justify-center overflow-y-auto bg-background/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        className="glow-ring relative w-full max-w-2xl rounded-t-2xl border border-border-strong bg-popover p-6 sm:rounded-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        <p className="font-mono text-xs tracking-widest text-primary">
          {project.year} · {project.role}
        </p>
        <h3 className="mt-3 pr-10 text-2xl font-semibold">{project.title}</h3>
        <p className="mt-1 text-sm text-primary/80">{project.subtitle}</p>

        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{project.overview}</p>

        <div className="mt-6">
          <p className="mono-label">Highlights</p>
          <ul className="mt-4 space-y-3 text-sm">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="text-muted-foreground">{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <p className="mono-label">Stack</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded border border-border bg-secondary px-2.5 py-1 font-mono text-[0.68rem] text-secondary-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {(project.liveUrl || project.repoUrl) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                <ArrowUpRight className="h-4 w-4" />
                View live app
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border-strong px-4 py-2.5 text-sm font-semibold text-primary"
              >
                <Github className="h-4 w-4" />
                Source code
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
