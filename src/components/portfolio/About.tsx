import { Section } from "./Section";
import { profile } from "@/data/profile";
import { GraduationCap, Network, BrainCircuit, Presentation } from "lucide-react";

const icons = [GraduationCap, Network, BrainCircuit, Presentation];

export function QuickProfile() {
  return (
    <div className="border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-6xl gap-4 px-5 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {profile.quickFacts.map((fact, i) => {
          const Icon = icons[i % icons.length] ?? GraduationCap;
          return (
            <div
              key={fact.label}
              className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-border-strong"
            >
              <Icon className="h-5 w-5 text-primary" />
              <p className="mt-4 font-mono text-[0.68rem] uppercase tracking-widest text-muted-foreground">
                {fact.label}
              </p>
              <p className="mt-1 text-lg font-semibold">{fact.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{fact.detail}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function About() {
  return (
    <Section id="about" label="About" title="Engineering across the stack of a network">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          {profile.aboutParagraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <div className="rounded-xl border border-border bg-card p-6">
          <p className="mono-label">What I bring</p>
          <ul className="mt-5 space-y-4 text-sm">
            {[
              "University-level lab instruction and assessment experience",
              "Live ISP network operations on MikroTik RouterOS",
              "Applied machine learning from data prep to deployment",
              "Research writing under faculty supervision",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
