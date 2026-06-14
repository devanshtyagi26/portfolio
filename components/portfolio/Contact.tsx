import { ArrowUpRight, Mail, FileText } from "lucide-react";
import { Reveal } from "./visuals";
import { FaGithub } from "react-icons/fa";

function Contact() {
  const links = [
    {
      icon: Mail,
      label: "Email",
      value: "devansh.tyagi@example.com",
      href: "mailto:devansh.tyagi@example.com",
    },
    {
      // icon: Linkedin,
      label: "LinkedIn",
      value: "/in/devansh-tyagi",
      href: "https://linkedin.com",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "@devansh-tyagi",
      href: "https://github.com",
    },
    {
      icon: FileText,
      label: "Resume",
      value: "Download PDF",
      href: "/resume.pdf",
    },
  ];
  return (
    <section id="contact" className="px-6 py-28 md:py-40">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <div
            data-scroll-node
            className="font-mono text-xs uppercase tracking-[0.25em] text-accent"
          >
            07 · Contact
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display mt-5 text-balance text-5xl leading-[1.05] tracking-tight md:text-7xl">
            Let's build something
            <br />
            worth publishing.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p
            data-scroll-node
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            I'm always excited to discuss machine learning, research
            collaborations, innovative ideas, and opportunities to build
            meaningful technology.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mx-auto mt-12 grid max-w-3xl gap-px overflow-hidden rounded-2xl border border-border bg-border/70 sm:grid-cols-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="group flex items-center justify-between gap-4 bg-background p-5 text-left transition-colors hover:bg-surface"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground">
                    {/* <l.icon className="h-4 w-4" /> */}
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {l.label}
                    </div>
                    <div className="mt-0.5 text-sm font-medium text-foreground">
                      {l.value}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
