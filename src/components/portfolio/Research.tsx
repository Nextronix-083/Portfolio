import { FileText, Users } from "lucide-react";
import { Section } from "./Section";
import { research } from "@/data/research";

export function Research() {
  return (
    <Section
      id="research"
      label="Research"
      title="Predictive analytics for cardiovascular risk"
      intro="Applying classification models to clinical data, inside a real-time monitoring framework."
    >
      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <article className="rounded-xl border border-border bg-card p-7">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-primary/10 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-widest text-primary">
              <FileText className="h-3.5 w-3.5" />
              {research.status}
            </span>
          </div>
          <h3 className="mt-5 text-xl font-semibold leading-snug">{research.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{research.abstract}</p>

          <p className="mono-label mt-7">My contributions</p>
          <ul className="mt-4 space-y-3 text-sm">
            {research.contributions.map((c) => (
              <li key={c} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="text-muted-foreground">{c}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-2">
            {research.keywords.map((k) => (
              <span
                key={k}
                className="rounded border border-border bg-secondary px-2.5 py-1 font-mono text-[0.68rem] text-secondary-foreground"
              >
                {k}
              </span>
            ))}
          </div>
        </article>

        <aside className="space-y-4">
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="mono-label">Supervisor</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{research.supervisor}</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="mono-label">Authors</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {research.authors.map((a) => (
                <li key={a} className="flex items-center gap-2">
                  <Users className="h-3.5 w-3.5 text-primary" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="mono-label">Target venue</p>
            <p className="mt-3 text-sm text-muted-foreground">{research.venue}</p>
          </div>
        </aside>
      </div>
    </Section>
  );
}
