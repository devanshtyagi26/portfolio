import SectionLabel from "./SectionLabel";
import { Reveal } from "./visuals";

function Experience() {
  return (
    <section id="experience" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionLabel
          kicker="04 · Experience"
          title="Where the engineering muscle was built."
        />
        <Reveal>
          <div className="grid gap-8 rounded-3xl border border-border bg-surface/40 p-8 md:grid-cols-[1fr_2fr] md:p-12">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Feb 2025 — Apr 2025
              </div>
              <div className="font-display mt-3 text-3xl tracking-tight">
                LOUDER
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                Full Stack Developer
              </div>
            </div>
            <ul className="space-y-4 text-muted-foreground">
              {[
                "Rebuilt legacy ticketing systems end-to-end using the MERN stack.",
                "Reduced page load times significantly through targeted frontend optimization.",
                "Improved frontend rendering performance by restructuring component hierarchies and data fetching.",
                "Improved database efficiency through schema redesign and strategic indexing.",
              ].map((p) => (
                <li key={p} className="flex gap-3 text-base leading-relaxed">
                  <span className="mt-2.5 h-px w-4 flex-shrink-0 bg-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Experience;
