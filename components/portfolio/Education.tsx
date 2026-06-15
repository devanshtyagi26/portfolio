import SectionLabel from "./SectionLabel";
import { Reveal } from "./visuals";

function Education() {
  return (
    <section id="education" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionLabel
          data-scroll-node
          kicker="06 · Education"
          title="Formally trained, self-driven beyond it."
        />

        <div className="grid gap-4 md:grid-cols-[2fr_1fr]">
          {/* Degree card */}
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-surface/40 p-8 md:p-10">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                    2022 – 2026
                  </div>
                  <h3 className="font-display mt-3 text-3xl tracking-tight">
                    Ramanujan College
                  </h3>
                  <div className="mt-0.5 text-base text-muted-foreground">
                    University of Delhi
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    B.Sc. (Hons.) Computer Science
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-background px-5 py-3 text-center">
                  <div className="font-display text-3xl tracking-tight">
                    9.27
                  </div>
                  <div className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    CGPA
                  </div>
                  <div className="mt-1.5 text-[10px] text-accent">
                    Top of class
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="my-7 h-px bg-border/60" />

              <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Core coursework
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Data Structures & Algorithms",
                  "Database Management",
                  "Linear Algebra",
                  "Multivariate Calculus",
                  "Operating Systems",
                  "Computer Networks",
                ].map((c) => (
                  <span
                    key={c}
                    className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs text-foreground/80"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* School scores */}
          <Reveal delay={0.08}>
            <div className="flex h-full flex-col gap-4">
              {[
                { label: "Class X", score: "94.4%", note: "School topper" },
                { label: "Class XII", score: "93%", note: "School topper" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-1 flex-col justify-between rounded-2xl border border-border bg-surface/40 p-7 transition-colors hover:bg-surface/70"
                >
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {item.note}
                  </div>
                  <div>
                    <div className="font-display text-4xl tracking-tight">
                      {item.score}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {item.label} · CBSE
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Education;
