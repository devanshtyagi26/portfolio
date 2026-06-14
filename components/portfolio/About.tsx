import SectionLabel from "./SectionLabel";
import { Reveal } from "./visuals";
import { TIMELINE } from "@/lib/data";

function About() {
  return (
    <section id="about" className="px-6 py-28 md:py-2">
      <div className="mx-auto max-w-6xl flex gap-16">
        <div>
          <SectionLabel
            kicker="01 · About"
            title="Building ML systems that turn messy data into decisions that hold up."
            // fullWidth
          />
          <div className="grid gap-16">
            <Reveal>
              <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  A curiosity-driven engineer becoming a researcher. The
                  questions I cared about stopped being about features and
                  started being about why models behave the way they do.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1}>
          <ol
            data-scroll-node
            className="relative space-y-7 border-l border-border pl-7 w-max"
          >
            {TIMELINE.map((t) => (
              <li key={t.title} className="relative">
                <span className="absolute -left-[33px] top-1.5 flex h-2.5 w-2.5 items-center justify-center rounded-full border border-accent bg-background">
                  <span className="h-1 w-1 rounded-full bg-accent" />
                </span>
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {t.year}
                </div>
                <div className="mt-1 text-base font-medium text-foreground">
                  {t.title}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {t.detail}
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
