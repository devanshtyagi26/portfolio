import SectionLabel from "./SectionLabel";
import { Reveal } from "./visuals";
import { TIMELINE } from "@/lib/data";

function About() {
  return (
    <section id="about" className="px-6 py-28 md:py-2">
      <div className="mx-auto max-w-6xl">
        <SectionLabel
          kicker="01 · About"
          title="A curiosity-driven engineer becoming a researcher."
        />
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                I started in software development — shipping interfaces,
                debugging APIs, and learning how systems hold together under
                load. Somewhere along the way, the questions I cared about
                stopped being about features and started being about{" "}
                <span className="text-foreground">why</span> a model behaves the
                way it does.
              </p>
              <p>
                Today, my work sits at the intersection of{" "}
                <span className="text-foreground">
                  applied machine learning
                </span>{" "}
                and
                <span className="text-foreground"> materials informatics</span>:
                predicting properties of inorganic crystals, building
                reproducible data pipelines, and pushing models from notebooks
                into deployed services people can use.
              </p>
              <p>
                I care about the unglamorous parts — clean datasets, honest
                baselines, rigorous evaluation — and the parts that feel like
                discovery: a hybrid ensemble that finally generalizes, a feature
                that explains a residual, a paper that makes a small piece of
                the world more legible.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ol className="relative space-y-7 border-l border-border pl-7">
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
      </div>
    </section>
  );
}

export default About;
