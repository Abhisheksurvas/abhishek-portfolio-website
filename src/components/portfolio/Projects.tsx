import { ArrowUpRight, Github, Check } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal, handleSpotlight } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function ProjectCard({ p, index }: { p: Project; index: number }) {
  return (
    <article
      onMouseMove={handleSpotlight}
      className={cn(
        "glass spotlight gradient-border group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card sm:p-8",
      )}
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-primary-glow">{p.tag}</span>
        <span className="font-mono text-5xl font-light leading-none text-border transition-colors duration-500 group-hover:text-primary/40">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-[1.7rem]">
        {p.title}
      </h3>
      <p className="mt-3 leading-relaxed text-muted-foreground">{p.description}</p>

      <ul className="mt-5 space-y-2">
        {p.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2.5 text-sm text-muted-foreground">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
            {h}
          </li>
        ))}
      </ul>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
        {p.tech.map((t) => (
          <li
            key={t}
            className="rounded-full border border-border bg-background/40 px-3 py-1 font-mono text-[11px] text-foreground"
          >
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-3 pt-8">
        <Button asChild variant="glass" size="pill">
          <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.title} on GitHub`}>
            <Github /> GitHub
          </a>
        </Button>
        <Button asChild variant="glow" size="pill" className="group/btn">
          <a href={p.demo} target="_blank" rel="noreferrer" aria-label={`${p.title} live demo`}>
            Live Demo
            <ArrowUpRight className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
          </a>
        </Button>
      </div>
    </article>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div aria-hidden className="aurora-violet pointer-events-none absolute -left-40 top-1/4 h-[30rem] w-[30rem] rounded-full opacity-50" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          index="03"
          eyebrow="Featured projects"
          title="Things I've"
          accent="built."
          description="A mix of AI systems and full-stack applications — each one designed around a real user and a real problem."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <ProjectCard p={p} index={i} />
            </Reveal>
          ))}
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <ProjectCard p={p} index={i + featured.length} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
