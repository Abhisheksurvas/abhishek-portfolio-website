import { Github, ArrowUpRight, Terminal, Layers, BrainCircuit, FolderGit2 } from "lucide-react";
import { githubFocus, profile, projects } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Reveal, handleSpotlight } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const focusIcons = [Terminal, Layers, BrainCircuit];

export function GitHubSection() {
  const repos = projects.filter((p) => p.github);
  return (
    <section id="github" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="07" eyebrow="GitHub & coding" title="Building. Learning." accent="Improving." />

        <div className="grid gap-5 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <article className="glass-strong gradient-border relative h-full overflow-hidden rounded-3xl p-7 sm:p-9">
              <div aria-hidden className="aurora-violet absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-60" />
              <div className="relative">
                <div className="flex items-center gap-4">
                  <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                    <Github className="h-8 w-8" />
                  </span>
                  <div>
                    <p className="text-xl font-semibold text-foreground">{profile.name}</p>
                    <p className="font-mono text-sm text-primary-glow">@{profile.githubHandle}</p>
                  </div>
                </div>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  My public repositories — full-stack apps, AI experiments and coursework projects. Code, READMEs and
                  progress live here.
                </p>

                <ul className="mt-6 space-y-2">
                  {repos.map((r) => (
                    <li key={r.slug}>
                      <a
                        href={r.github}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-3 rounded-xl border border-border bg-background/40 px-4 py-2.5 text-sm transition-all hover:border-primary/40 hover:bg-accent"
                      >
                        <FolderGit2 className="h-4 w-4 shrink-0 text-primary" />
                        <span className="truncate font-mono text-foreground">{r.github.split("/").pop()}</span>
                        <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Button asChild variant="glow" size="xl">
                    <a href={profile.github} target="_blank" rel="noreferrer">
                      <Github /> View GitHub Profile
                    </a>
                  </Button>
                  <Button asChild variant="glass" size="xl">
                    <a href={`${profile.github}?tab=repositories`} target="_blank" rel="noreferrer">
                      All Repositories <ArrowUpRight />
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-4">
            {githubFocus.map((f, i) => {
              const Icon = focusIcons[i] ?? Terminal;
              return (
                <Reveal key={f.title} delay={i * 100}>
                  <div
                    onMouseMove={handleSpotlight}
                    className="glass spotlight group flex h-full items-center gap-5 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/40"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-medium text-foreground">{f.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
