import { Section } from "./Section";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <Section
      id="skills"
      label="Skills"
      title="Technical toolkit"
      intro="Grouped by domain — networking operations, data science, instruction, and tooling."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-border-strong"
          >
            <h3 className="text-lg font-semibold">{group.category}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{group.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
