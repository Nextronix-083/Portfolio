import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { NetworkTopology } from "./NetworkTopology";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-backdrop absolute inset-0" />
      <div className="absolute inset-0">
        <NetworkTopology />
      </div>
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-32 lg:grid-cols-[1.35fr_1fr] lg:px-8 lg:pb-28 lg:pt-40">
        <div>
          <p className="mono-label">Information &amp; Communication Engineer</p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
            {profile.name}
            <span className="mt-3 block text-gradient-accent">
              Networks, data, and teaching.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="glow-ring inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </a>
            <a
              href={profile.cvUrl}
              download={profile.cvFileName}
              className="inline-flex items-center gap-2 rounded-md border border-border-strong px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              {profile.location}
            </span>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="glass-panel glow-ring rounded-xl p-6">
            <div className="flex items-center gap-4">
              <img
                src={profile.photoUrl}
                alt={`Portrait of ${profile.name}`}
                className="h-16 w-16 rounded-lg border border-border-strong object-cover"
                loading="lazy"
              />
              <div>
                <p className="text-sm font-semibold">{profile.fullName}</p>
                <p className="font-mono text-xs text-muted-foreground">BSc in ICE · DIU</p>
              </div>
            </div>
            <div className="mt-6 space-y-3 font-mono text-xs">
              <Row k="status" v="Open to lecturer &amp; network roles" />
              <Row k="cgpa" v="3.77 / 4.00" />
              <Row k="cert" v="MTCNA (MikroTik)" />
              <Row k="stack" v="RouterOS · Python · Flutter" />
            </div>
          </div>
          <a
            href="#about"
            className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowDown className="h-3.5 w-3.5" />
            Scroll
          </a>
        </div>
      </div>
    </section>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-border pb-2 last:border-none">
      <span className="text-muted-foreground">{k}</span>
      <span className="text-right text-foreground">{v}</span>
    </div>
  );
}
