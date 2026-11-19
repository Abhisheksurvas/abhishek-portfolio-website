import { Puzzle, Brain, Layers } from "lucide-react";
import { about } from "@/data/portfolio";
import { Reveal, handleSpotlight } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons = [Puzzle, Brain, Layers];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="01" eyebrow="Who I am" title="About" accent="Me." />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">{about.body}</p>
            <dl className="mt-10 grid grid-cols-3 gap-3">
              {about.stats.map((s) => (
                <div key={s.label} className="glass gradient-border rounded-2xl p-4 sm:p-5">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-xl font-semibold tracking-tight text-gradient-primary sm:text-3xl">
                    {s.value}
                  </dd>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</p>
                </div>
              ))}
            </dl>
          </Reveal>

          <div className="grid gap-4">
            {about.highlights.map((h, i) => {
              const Icon = icons[i] ?? Puzzle;
              return (
                <Reveal key={h.title} delay={i * 100}>
                  <article
                    onMouseMove={handleSpotlight}
                    className="glass spotlight group flex gap-5 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40"
                  >
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-foreground">{h.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
