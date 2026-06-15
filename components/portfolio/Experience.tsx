import SectionLabel from "./SectionLabel";
import { Reveal } from "./visuals";
import { EXPERIENCE } from "@/lib/data";
import { CircleSmall } from "lucide-react";

function Experience() {
  return (
    <section id="experience" className="px-6 py-28 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionLabel
          kicker="04 · Experience"
          title="Real work. Real impact."
        />
        <Reveal>
          {EXPERIENCE.map((exp, i) => (
            <div
              key={exp.company}
              className="grid gap-8 rounded-3xl border border-border bg-surface/40 p-8 md:grid-cols-[1fr_2fr] md:p-12"
            >
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {exp.duration}
                </div>
                <div
                  data-scroll-node
                  className="font-display mt-3 text-3xl tracking-tight"
                >
                  {exp.company}
                </div>
                <div
                  data-scroll-node
                  className="mt-1 text-sm text-muted-foreground"
                >
                  {exp.role}
                </div>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                {exp.description.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 text-base leading-relaxed"
                  >
                    <CircleSmall className="h-4 w-4 mt-1 shrink-0 text-muted-foreground" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default Experience;
