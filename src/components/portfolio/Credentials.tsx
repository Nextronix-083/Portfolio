import { Award, ExternalLink, HeartHandshake } from "lucide-react";
import { Section } from "./Section";
import { certifications } from "@/data/certifications";
import { education } from "@/data/education";
import { volunteering } from "@/data/volunteering";

export function Certifications() {
  return (
    <Section
      label="Certifications"
      title="Verified credentials"
      intro="Vendor and professional training behind the day-to-day work."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {certifications.map((cert) => (
          <div key={cert.name} className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-start justify-between gap-4">
              <Award className="h-5 w-5 shrink-0 text-primary" />
              <span className="font-mono text-xs text-muted-foreground">{cert.date}</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold leading-snug">{cert.name}</h3>
            <p className="text-sm text-primary/80">{cert.issuer}</p>
            <ul className="mt-4 space-y-3 text-sm">
              {cert.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                View credential
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section
      id="education"
      label="Education"
      title="Academic record"
      intro="Consistent results from junior school through to an engineering degree."
    >
      <ol className="relative space-y-6 border-l border-border pl-6 sm:pl-10">
        {education.map((e) => (
          <li key={`${e.institution}-${e.period}`} className="relative">
            <span className="absolute -left-[1.72rem] top-2 h-3 w-3 rounded-full border border-border-strong bg-background sm:-left-[2.72rem]">
              <span className="absolute inset-[3px] rounded-full bg-primary" />
            </span>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold">{e.credential}</h3>
                <span className="font-mono text-xs tracking-widest text-primary">{e.result}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{e.institution}</p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                {e.period}
                {e.detail ? ` · ${e.detail}` : ""}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Volunteering() {
  return (
    <Section
      label="Volunteering"
      title="Community & peer learning"
      intro="Supporting junior students outside the classroom."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {volunteering.map((v) => (
          <div key={v.organization} className="rounded-xl border border-border bg-card p-6">
            <HeartHandshake className="h-5 w-5 text-primary" />
            <h3 className="mt-4 text-lg font-semibold leading-snug">{v.organization}</h3>
            <p className="text-sm text-primary/80">{v.role}</p>
            <p className="mt-1 font-mono text-xs text-muted-foreground">{v.period}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{v.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
