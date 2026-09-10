import { Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import { referenceContact } from "@/data/research";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border py-20 lg:py-28">
      <div className="grid-backdrop absolute inset-0" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="mono-label">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Let&apos;s talk teaching, networks, or research
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            I&apos;m open to lecturer and teaching assistant positions, network engineering roles, and
            research collaboration. The fastest route is email.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_1fr]">
          <div className="glass-panel glow-ring rounded-xl p-7">
            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-border-strong"
              >
                <Mail className="h-5 w-5 text-primary" />
                <span>
                  <span className="block font-mono text-[0.68rem] uppercase tracking-widest text-muted-foreground">
                    Email
                  </span>
                  <span className="text-sm group-hover:text-primary">{profile.email}</span>
                </span>
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-border-strong"
              >
                <Phone className="h-5 w-5 text-primary" />
                <span>
                  <span className="block font-mono text-[0.68rem] uppercase tracking-widest text-muted-foreground">
                    Phone
                  </span>
                  <span className="text-sm group-hover:text-primary">{profile.phone}</span>
                </span>
              </a>
              <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span>
                  <span className="block font-mono text-[0.68rem] uppercase tracking-widest text-muted-foreground">
                    Location
                  </span>
                  <span className="text-sm">{profile.location}</span>
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={profile.cvUrl}
                download={profile.cvFileName}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border-strong px-4 py-2.5 text-sm font-semibold text-primary"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-semibold text-foreground"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-7">
            <p className="mono-label">Academic reference</p>
            <h3 className="mt-4 text-lg font-semibold leading-snug">{referenceContact.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{referenceContact.role}</p>
            <p className="mt-1 text-sm text-muted-foreground">{referenceContact.affiliation}</p>
            <div className="mt-5 space-y-2 text-sm">
              <a
                href={`mailto:${referenceContact.email}`}
                className="block text-primary hover:underline"
              >
                {referenceContact.email}
              </a>
              <a href={`tel:${referenceContact.phone}`} className="block text-muted-foreground hover:text-primary">
                {referenceContact.phone}
              </a>
              <a
                href={referenceContact.website}
                target="_blank"
                rel="noreferrer"
                className="block text-muted-foreground hover:text-primary"
              >
                Faculty profile
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} {profile.fullName} · Information &amp; Communication Engineer
          </p>
          <a href="#top" className="font-mono text-xs uppercase tracking-widest text-primary hover:underline">
            Back to top
          </a>
        </footer>
      </div>
    </section>
  );
}
