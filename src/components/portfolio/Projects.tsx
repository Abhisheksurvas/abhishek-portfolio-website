import { useState } from "react";
import { ArrowUpRight, Github, Info, Clock } from "lucide-react";
import { filterProjects, projectFilters, projects, type Project, type ProjectFilter } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { handleSpotlight } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ProjectThumb } from "./ProjectThumb";

function ProjectCard({ p }: { p: Project }) {
  return (
    <article
      onMouseMove={handleSpotlight}
      className="glass spotlight gradient-border group flex h-full flex-col rounded-3xl p-4 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card sm:p-5"
    >
      <ProjectThumb visual={p.visual} label={p.title} />

      <div className="flex flex-1 flex-col px-1 pt-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{p.category}</span>
          <span className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-medium text-primary-glow">{p.highlight}</span>
        </div>

        <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">{p.title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

        {p.note && (
          <p className="mt-3 flex items-start gap-2 rounded-xl border border-chart-5/30 bg-chart-5/10 px-3 py-2 text-xs text-foreground">
            <Info className="mt-px h-3.5 w-3.5 shrink-0 text-chart-5" />
            {p.note}
          </p>
        )}

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
          {p.tech.map((t) => (
            <li key={t} className="rounded-full border border-border bg-background/40 px-2.5 py-1 font-mono text-[10.5px] text-foreground">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-6">
          {p.github && (
            <Button asChild variant="glass" size="pill">
              <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.title} on GitHub`}>
                <Github /> GitHub
              </a>
            </Button>
          )}
          {p.demo ? (
            <Button asChild variant="glow" size="pill" className="group/btn">
              <a href={p.demo} target="_blank" rel="noreferrer" aria-label={`${p.title} live demo`}>
                Live Demo
                <ArrowUpRight className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
              </a>
            </Button>
          ) : (
            <span className="inline-flex h-9 items-center gap-1.5 rounded-full border border-dashed border-border px-4 text-sm text-muted-foreground">
              <Clock className="h-3.5 w-3.5" /> Live demo coming soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("All Projects");
  const visible = filterProjects(projects, filter);

  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div aria-hidden className="aurora-violet pointer-events-none absolute -right-40 top-1/4 h-[30rem] w-[30rem] rounded-full opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          index="05"
          eyebrow="Featured projects"
          title="Things I've"
          accent="built."
          description="AI systems and full-stack applications — each one built to solve a practical problem."
        />

        <div role="group" aria-label="Filter projects" className="mb-10 flex flex-wrap gap-2">
          {projectFilters.map((f) => {
            const count = filterProjects(projects, f).length;
            const on = f === filter;
            return (
              <button
                key={f}
                type="button"
                aria-pressed={on}
                onClick={() => setFilter(f)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-all duration-300",
                  on
                    ? "bg-gradient-primary text-primary-foreground shadow-glow"
                    : "glass text-muted-foreground hover:border-primary/40 hover:text-foreground",
                )}
              >
                {f}
                <span className={cn("font-mono text-[11px]", on ? "text-primary-foreground/80" : "text-muted-foreground")}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          {visible.map((p) => (
            <div key={`${filter}-${p.slug}`} className="animate-in fade-in zoom-in-95 duration-500">
              <ProjectCard p={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
