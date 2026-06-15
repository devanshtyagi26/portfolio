import { ArrowUpRight, Mail, FileText } from "lucide-react";
import { Reveal } from "./visuals";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "tyagidevansh3@gmail.com",
    href: "mailto:tyagidevansh3@gmail.com",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "/in/tyagi-devansh",
    href: "https://linkedin.com/in/tyagi-devansh",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "@devanshtyagi26",
    href: "https://github.com/devanshtyagi26",
  },
  {
    icon: FileText,
    label: "Resume",
    value: "Download PDF",
    href: "/Devansh_Tyagi_Resume.pdf",
  },
];

function Contact() {
  return (
    <section id="contact" className="px-6 py-28 md:py-20">
      <div className="mx-auto max-w-5xl">
        {/* Heading block — left aligned, more editorial */}
        <Reveal>
          <div
            data-scroll-node
            className="font-mono text-xs uppercase tracking-[0.25em] text-accent"
          >
            07 · Contact
          </div>
        </Reveal>

        <div className="mt-5 grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
          <Reveal delay={0.05}>
            <h2 className="font-display text-balance text-5xl leading-[1.02] tracking-tight md:text-7xl">
              Let's build something
              <br />
              worth publishing.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              Open to research collaborations, AI/ML roles, and interesting
              problems. If you have something worth discussing, I'm listening.
            </p>
          </Reveal>

          {/* Primary CTA */}
          <Reveal delay={0.1}>
            <a
              href="mailto:tyagidevansh3@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        {/* Divider */}
        <Reveal delay={0.14}>
          <div className="my-14 h-px bg-border/60" />
        </Reveal>

        {/* Link cards */}
        <Reveal delay={0.18}>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {links.map((l) => {
              const Icon = l.icon;
              return (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between gap-8 rounded-2xl border border-border bg-surface/40 p-6 transition-colors hover:bg-surface/70"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-background text-foreground">
                      <Icon className="h-4 w-4" />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {l.label}
                    </div>
                    <div className="mt-1 text-sm font-medium text-foreground">
                      {l.value}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
