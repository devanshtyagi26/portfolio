import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Research from "@/components/portfolio/Research";
import Experience from "@/components/portfolio/Experience";
import Skills from "@/components/portfolio/Skills";
import Education from "@/components/portfolio/Education";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

function Portfolio() {
  return (
    <main className="relative z-10 min-h-screen overflow-hidden bg-background/80 text-foreground antialiased">
      {/* Ambient backdrop */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,oklch(0.68_0.13_175/0.06),transparent_55%),radial-gradient(circle_at_85%_30%,oklch(0.68_0.13_175/0.04),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
      </div>

      <Nav />
      <Hero />
      <About />
      <Projects />
      {/* <Research /> */}
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}

export default Portfolio;
