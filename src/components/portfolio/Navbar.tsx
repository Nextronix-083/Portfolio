import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { navSections } from "@/data/focus";
import { profile } from "@/data/profile";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.05, 0.3, 0.6] },
    );
    navSections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-panel border-b" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 lg:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-md border border-border-strong bg-surface font-mono text-xs font-semibold text-primary">
            NH
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">
            {profile.name}
            <span className="ml-2 font-mono text-[0.68rem] font-normal tracking-widest text-muted-foreground">
              ICE
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navSections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`rounded-md px-3 py-2 text-sm transition-colors ${
                active === s.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {s.label}
            </a>
          ))}
          <a
            href={profile.cvUrl}
            download={profile.cvFileName}
            className="ml-2 inline-flex items-center gap-2 rounded-md border border-border-strong bg-primary/10 px-3.5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
          >
            <Download className="h-3.5 w-3.5" />
            CV
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {open && (
        <div className="glass-panel border-t px-5 pb-5 pt-2 md:hidden">
          <div className="flex flex-col">
            {navSections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm text-muted-foreground last:border-none hover:text-foreground"
              >
                {s.label}
              </a>
            ))}
            <a
              href={profile.cvUrl}
              download={profile.cvFileName}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
