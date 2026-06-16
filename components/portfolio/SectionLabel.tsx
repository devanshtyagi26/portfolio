import { Reveal } from "./visuals";

function SectionLabel({
  kicker,
  title,
  lead,
  fullWidth = false,
}: {
  kicker: string;
  title: string;
  lead?: string;
  fullWidth?: boolean;
}) {
  return (
    <div className={`mb-10 sm:mb-14 ${fullWidth ? "w-full" : "max-w-3xl"}`}>
      <Reveal>
        <div className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          {kicker}
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display mt-4 text-balance text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.1}>
          <p className="mt-4 sm:mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export default SectionLabel;
