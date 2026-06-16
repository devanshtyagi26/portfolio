import SectionLabel from "./SectionLabel";
import { Reveal } from "./visuals";
import { EXPERIENCE } from "@/lib/data";
import { CircleSmall } from "lucide-react";

function Experience() {
  return (
    <section id="experience" className="px-4 sm:px-6 py-15 md:py-28">
      <div className="mx-auto max-w-6xl space-y-4 sm:space-y-6">
        <SectionLabel
          kicker="04 · Experience"
          title="Real work. Real impact."
        />
        {EXPERIENCE.map((exp) => (
          <Reveal key={exp.company}>
            <div className="grid gap-6 rounded-2xl sm:rounded-3xl border border-border bg-surface/40 p-6 sm:p-8 md:grid-cols-[1fr_2fr] md:gap-8 md:p-12">
              {/* Left: meta */}
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {exp.duration}
                </div>
                <div
                  data-scroll-node
                  className="font-display mt-3 text-2xl sm:text-3xl tracking-tight"
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

              {/* Right: bullets */}
              <ul className="space-y-3 sm:space-y-4 text-muted-foreground">
                {exp.description.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2.5 sm:gap-3 text-sm sm:text-base leading-relaxed"
                  >
                    <CircleSmall className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Experience;
