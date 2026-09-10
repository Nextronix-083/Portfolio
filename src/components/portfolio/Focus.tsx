import { Section } from "./Section";
import { focusTracks } from "@/data/focus";

export function Focus() {
  return (
    <Section
      label="Career focus"
      title="Where I'm heading next"
      intro="Four tracks I'm actively building toward."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {focusTracks.map((track, i) => (
          <div
            key={track.title}
            className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-border-strong"
          >
            <span className="font-mono text-xs tracking-widest text-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-lg font-semibold leading-snug">{track.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{track.summary}</p>
            <ul className="mt-5 space-y-2.5 border-t border-border pt-5 text-sm">
              {track.points.map((p) => (
                <li key={p} className="flex gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-muted-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
