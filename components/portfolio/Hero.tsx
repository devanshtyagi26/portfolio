import { ArrowUpRight, Download } from "lucide-react";
import { Reveal, NeuralVisual } from "./visuals";
import { ACHIEVEMENTS } from "@/lib/data";

function Hero() {
  return (
    <section id="top" className="relative px-6 pb-24 pt-36 md:pt-44 lg:pb-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Available for AI/ML & research roles · 2026
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display mt-7 text-balance text-6xl leading-[0.95] tracking-tight md:text-7xl lg:text-[7.5rem]">
              Devansh
              <br />
              Tyagi<span className="text-accent">.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="font-display mt-6 max-w-xl text-balance text-2xl italic text-muted-foreground md:text-3xl">
              Building intelligent systems at the intersection of machine
              learning, research, and real-world impact.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Final-year Computer Science student specializing in AI/ML,
              passionate about transforming complex data into practical
              solutions through machine learning, full-stack engineering, and
              computational research.
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                View projects <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="/resume.pdf"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover"
              >
                <Download className="h-4 w-4" /> Download resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-3 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact me →
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="flex justify-center lg:justify-end">
          <NeuralVisual />
        </Reveal>
      </div>

      {/* Achievement Highlights */}
      <Reveal delay={0.35}>
        <div className="mx-auto mt-20 max-w-6xl flex flex-col gap-3">
          {ACHIEVEMENTS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-center gap-4 rounded-2xl border border-border bg-surface/40 px-6 py-4 transition-colors hover:bg-surface/70"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {item.subtitle}
                  </p>
                </div>
                {item.tag && (
                  <span className="shrink-0 rounded border border-accent bg-accent/20 px-2 py-0.5 text-[10px] tracking-[0.08em] text-accent">
                    {item.tag}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}

export default Hero;
