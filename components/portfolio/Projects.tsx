import { ArrowUpRight, ExternalLink } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { Reveal } from "./visuals";
import { PROJECTS } from "@/lib/data";

function Projects() {
  return (
    <section id="projects" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionLabel
          kicker="02 · Selected work"
          title="Projects with a research soul and a production spine."
          lead="A small set of things I've built end-to-end — from data pipeline to deployed interface."
        />

        {/* Flagship */}
        <Reveal>
          <article className="group relative overflow-hidden rounded-3xl border border-border bg-surface/60 p-8 transition-colors hover:bg-surface md:p-12">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                  <span>Flagship</span>
                  <span className="text-muted-foreground">/ research</span>
                </div>
                <h3 className="font-display mt-3 text-5xl tracking-tight md:text-6xl">
                  CrystaLogiX
                </h3>
                <p className="mt-4 text-lg text-muted-foreground">
                  {PROJECTS[0].blurb}
                </p>
              </div>
              <div className="flex gap-2">
                <a
                  className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background hover:opacity-90"
                  href="#"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> Live demo
                </a>
                <a
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-foreground hover:bg-surface-hover"
                  href="#"
                >
                  {/* <Github className="h-3.5 w-3.5" /> GitHub */}
                </a>
              </div>
            </div>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {PROJECTS[0].points.map((p) => (
                <li
                  key={p}
                  className="rounded-xl border border-border bg-background/60 p-4 text-sm leading-relaxed text-muted-foreground"
                >
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {PROJECTS[0].stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-background px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </article>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {PROJECTS.slice(1).map((p, idx) => (
            <Reveal key={p.name} delay={idx * 0.05}>
              <article className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-surface/40 p-7 transition-colors hover:bg-surface">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-2xl tracking-tight md:text-3xl">
                      {p.name}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 translate-y-1 text-muted-foreground transition-transform group-hover:-translate-y-0 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.blurb}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {p.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex gap-2.5 text-sm text-muted-foreground"
                      >
                        <span className="mt-2 h-px w-3 flex-shrink-0 bg-border" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="#"
                      aria-label="Live demo"
                      className="rounded-full border border-border p-1.5 text-muted-foreground hover:text-foreground"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href="#"
                      aria-label="GitHub"
                      className="rounded-full border border-border p-1.5 text-muted-foreground hover:text-foreground"
                    >
                      {/* <Github className="h-3.5 w-3.5" /> */}
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects