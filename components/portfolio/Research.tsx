import SectionLabel from "./SectionLabel";
import { Reveal } from "./visuals";
import { RESEARCH_PIPELINE } from "@/lib/data";

function Research() {
  return (
    <section id="research" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionLabel
          kicker="03 · Research & Innovation"
          title="From a question about crystals to a manuscript under review."
        />
        <Reveal>
          <div className="rounded-3xl border border-border bg-surface/50 p-8 md:p-12">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="max-w-2xl">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  First-author manuscript · under review
                </div>
                <h3 className="font-display mt-3 text-3xl leading-tight tracking-tight md:text-4xl">
                  Hybrid Machine Learning Framework for Predicting Electronic
                  Bandgaps in Inorganic Crystals
                </h3>
                <p className="mt-4 text-muted-foreground">
                  A reproducible pipeline that combines composition-aware
                  features with a stacked ensemble to predict electronic
                  bandgaps across hundreds of thousands of crystals — and serves
                  predictions through a production API.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Materials Informatics",
                  "Scientific ML",
                  "Computational Discovery",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <ol className="relative mt-12 grid gap-6 md:grid-cols-6">
              {RESEARCH_PIPELINE.map((p, i) => (
                <li
                  key={p.step}
                  className="relative rounded-xl border border-border bg-background/60 p-5"
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                    Step {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-2 text-sm font-medium text-foreground">
                    {p.step}
                  </div>
                  <div className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {p.text}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Research;
