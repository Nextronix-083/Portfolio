import { Section } from "./Section";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <Section
      id="experience"
      label="Experience"
      title="Teaching labs and running networks"
      intro="Academic instruction and live ISP operations, side by side."
    >
      <ol className="relative space-y-10 border-l border-border pl-6 sm:pl-10">
        {experience.map((job) => (
          <li key={job.organization} className="relative">
            <span className="absolute -left-[1.72rem] top-1.5 flex h-3.5 w-3.5 items-center justify-center sm:-left-[2.72rem]">
              <span className="h-3.5 w-3.5 rounded-full border border-border-strong bg-background" />
              <span className="absolute h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-border-strong">
              <p className="font-mono text-xs tracking-widest text-primary">{job.period}</p>
              <h3 className="mt-2 text-xl font-semibold">{job.role}</h3>
              <p className="text-sm text-muted-foreground">
                {job.organization} · {job.location}
              </p>
              <ul className="mt-5 space-y-3 text-sm">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-border bg-secondary px-2.5 py-1 font-mono text-[0.68rem] text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
