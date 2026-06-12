import { ArrowUpRight } from "lucide-react";
import { NAV } from "@/lib/data";
import { ModeToggle } from "../Toggle";

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border border-border/70 bg-background/60 px-5 py-2.5 backdrop-blur-xl">
        <a
          href="#top"
          className="flex items-center gap-2 text-sm font-medium tracking-tight"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          <span>Devansh Tyagi</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-surface-hover"
          >
            Get in touch
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
export default Nav;
