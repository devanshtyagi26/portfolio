"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import SectionLabel from "./SectionLabel";
import { Reveal } from "./visuals";
import { PROJECTS } from "@/lib/data";
import { FaGithub } from "react-icons/fa";

const INITIAL_VISIBLE = 4; // flagship + 3 grid cards

function Projects() {
  const [expanded, setExpanded] = useState(false);

  const gridProjects = PROJECTS.slice(1);
  const visibleGrid = expanded ? gridProjects : gridProjects.slice(0, 3);
  const hiddenCount = gridProjects.length - 3;

  return (
    <section id="projects" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionLabel
          data-scroll-node
          kicker="02 · Selected work"
          title="Projects with a research soul and a production spine."
          lead="A small set of things I've built end-to-end — from data pipeline to deployed interface."
        />

        {/* Flagship */}
        <Reveal>
          <article className="group relative overflow-hidden rounded-3xl border border-border bg-surface/60 p-8 transition-colors hover:bg-surface md:p-12">
            {/* top shimmer line */}
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
                  href={PROJECTS[0].demo ?? "#"}
                  className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-opacity hover:opacity-80"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live demo
                </a>
                <a
                  href={PROJECTS[0].repo ?? "#"}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-surface"
                >
                  <FaGithub className="h-3.5 w-3.5" />
                  GitHub
                </a>
              </div>
            </div>

            <ul data-scroll-node className="mt-10 grid gap-4 md:grid-cols-3">
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

        {/* Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleGrid.map((p, idx) => (
            <Reveal key={p.name} delay={idx * 0.05}>
              <article className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-surface/40 p-7 transition-colors hover:bg-surface">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-2xl tracking-tight">
                      {p.name}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 shrink-0 translate-y-1 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
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
                        <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
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
                    {p.demo && (
                      <a
                        href={p.demo}
                        aria-label={`Live demo of ${p.name}`}
                        className="rounded-full border border-border p-1.5 text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {p.repo && (
                      <a
                        href={p.repo}
                        aria-label={`GitHub repository for ${p.name}`}
                        className="rounded-full border border-border p-1.5 text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <FaGithub className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* View more */}
        {hiddenCount > 0 && (
          <Reveal delay={0.2}>
            <div className="mt-10 flex justify-center">
              <button
                onClick={() => setExpanded((prev) => !prev)}
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    expanded ? "rotate-180" : ""
                  }`}
                />
                {expanded
                  ? "Show less"
                  : `View ${hiddenCount} more project${hiddenCount !== 1 ? "s" : ""}`}
              </button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

export default Projects;
