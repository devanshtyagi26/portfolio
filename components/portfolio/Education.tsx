import SectionLabel from "./SectionLabel";
import { Reveal } from "./visuals";

function Education() {
  return (
    <section id="education" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionLabel
          data-scroll-node
          kicker="06 · Education"
          title="Academic foundations."
        />
        <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
          <Reveal>
            <div className="rounded-2xl border border-border bg-surface/50 p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    Expected August 2026
                  </div>
                  <h3 className="font-display mt-2 text-3xl tracking-tight">
                    Ramanujan College, University of Delhi
                  </h3>
                  <div className="mt-1 text-muted-foreground">
                    Bachelor of Science (Hons.) Computer Science
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-background px-4 py-2 text-right">
                  <div className="font-display text-2xl">9.27</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    CGPA
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div
                  data-scroll-node
                  className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
                >
                  Core coursework
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "Data Structures",
                    "Algorithms",
                    "DBMS",
                    "Linear Algebra",
                    "Multivariate Calculus",
                  ].map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-border bg-background px-3 py-1 text-sm text-foreground/90"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid h-full gap-4">
              <div className="rounded-2xl border border-border bg-surface/40 p-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  School Topper
                </div>
                <div className="font-display mt-2 text-3xl tracking-tight">
                  94.4%
                </div>
                <div className="text-sm text-muted-foreground">Class X</div>
              </div>
              <div className="rounded-2xl border border-border bg-surface/40 p-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  School Topper
                </div>
                <div className="font-display mt-2 text-3xl tracking-tight">
                  93%
                </div>
                <div className="text-sm text-muted-foreground">Class XII</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
export default Education;
