import { ModeToggle } from "../Toggle";
import { MobileNav } from "./nav/mobile-nav";
import { DesktopNav } from "./nav/desktop-nav";

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

        <div className="flex items-center gap-4 mr-2 lg:gap-6 lg:mr-6">
          <ModeToggle />
          <DesktopNav />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Nav;
