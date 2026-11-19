import { Code2, Bot, Puzzle, Rocket } from "lucide-react";
import { aboutPoints, profile } from "@/data/portfolio";
import { Reveal, handleSpotlight } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons = [Code2, Bot, Puzzle, Rocket];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="01" eyebrow="About me" title="Building software that" accent="actually helps." />

        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm <span className="text-foreground">{profile.name}</span>, a computer science student
              and developer who loves the moment an idea becomes something people can click, use and
              rely on.
            </p>
            <p>
              My work sits where <span className="text-foreground">full-stack web development</span>{" "}
              meets <span className="text-foreground">applied AI</span> — React frontends, Node.js
              APIs, MongoDB data models, and LLM agents that retrieve, reason and act.
            </p>
            <p>
              I'm looking for an <span className="text-gradient-primary font-medium">internship</span>{" "}
              where I can ship real features, learn from experienced engineers, and grow into a
              developer teams can count on.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {aboutPoints.map((p, i) => {
              const Icon = icons[i] ?? Code2;
              return (
                <Reveal key={p.title} delay={i * 90}>
                  <article
                    onMouseMove={handleSpotlight}
                    className="glass spotlight group h-full rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40"
                  >
                    <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-medium text-foreground">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
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
