import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import { Reveal, NeuralVisual } from "./visuals";
import { ACHIEVEMENTS, TagVariant } from "@/lib/data";
import image from "../../public/profile.jpg";

function Hero() {
  const tagStyles: Record<TagVariant, string> = {
    info: "border-blue-200  bg-blue-50   text-blue-800  dark:border-blue-800  dark:bg-blue-950  dark:text-blue-200",
    warning:
      "border-amber-200 bg-amber-50  text-amber-800 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-200",
    success:
      "border-green-200 bg-green-50  text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200",
  };
  return (
    <section id="top" className="relative px-6 pb-24 pt-33 md:pt-25 lg:pb-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <Reveal>
            <div
              data-scroll-node
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Available for AI/ML & Research Roles · 2026
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
              Final-year CS student specializing in AI/ML — transforming complex
              data into practical solutions through machine learning, full-stack
              engineering, and computational research.
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
                href="/Devansh_Tyagi_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover"
              >
                <Download className="h-4 w-4" /> Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-3 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact me <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal
          delay={0.15}
          className="flex justify-center items-center relative scale-150"
        >
          <img
            src={image.src}
            alt="Profile picture of Devansh Tyagi"
            className="rounded-full border-accent/50 border-4 object-cover w-36 h-36 lg:w-55 lg:h-55 absolute z-1000"
          />
          <NeuralVisual />
        </Reveal>
      </div>

      {/* Achievement Highlights */}
      <div className="mx-auto mt-20 max-w-6xl grid grid-cols-2 gap-3 md:grid-cols-4">
        {ACHIEVEMENTS.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-surface/40 p-5 transition-colors hover:bg-surface/70"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-background">
                <Icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">
                  {item.title}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {item.subtitle}
                </p>
              </div>
              {item.tag && (
                <span
                  className={`shrink-0 w-fit rounded border px-2 py-0.5 text-[10px] tracking-[0.08em] ${tagStyles[item.tagVariant]}`}
                >
                  {item.tag}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Hero;
