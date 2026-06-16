"use client";

import SectionLabel from "./SectionLabel";
import { Reveal } from "./visuals";
import { SKILLS, SkillItem } from "@/lib/data";

function SkillPill({ item }: { item: SkillItem }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-1.5 text-xs sm:text-sm text-foreground">
      {item.logo ? (
        <img
          src={item.logo}
          alt={`${item.name} logo`}
          className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] rounded-sm object-contain shrink-0"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
      ) : (
        <span className="flex h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] shrink-0 items-center justify-center rounded-sm bg-border text-[10px] font-medium text-muted-foreground">
          {item.name[0]}
        </span>
      )}
      {item.name}
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="px-4 sm:px-6 py-15 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionLabel kicker="05 · Toolkit" title="My core stack." />
        <div data-scroll-node className="grid gap-3 sm:grid-cols-2">
          {SKILLS.map((cat, i) => (
            <Reveal key={cat.group} delay={i * 0.07}>
              <div className="h-full rounded-2xl border border-border bg-surface/40 p-5 sm:p-6 md:p-8 transition-colors hover:bg-surface/70">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display mt-2 text-xl sm:text-2xl tracking-tight">
                  {cat.group}
                </h3>
                <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                  {cat.items.map((item) => (
                    <SkillPill key={item.name} item={item} />
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
