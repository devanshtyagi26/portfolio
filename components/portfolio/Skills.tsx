import SectionLabel from "./SectionLabel";
import { Reveal } from "./visuals";
import { SKILLS } from "@/lib/data";

function Skills() {
  return (
    <section id="skills" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionLabel
          kicker="05 · Toolkit"
          title="Tools I reach for, organized by intent."
        />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border/70 md:grid-cols-2">
          {SKILLS.map((cat, i) => (
            <Reveal key={cat.group} delay={i * 0.05}>
              <div className="h-full bg-background p-8">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display mt-2 text-2xl tracking-tight">
                  {cat.group}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-foreground/90"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
