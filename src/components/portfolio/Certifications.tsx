import { Award, ArrowUpRight, Trophy, Target, GitPullRequest } from "lucide-react";
import { achievements, certifications } from "@/data/portfolio";
import { Reveal, handleSpotlight } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const achievementIcons = [Trophy, Target, GitPullRequest];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="04"
          eyebrow="Certifications & achievements"
          title="Always"
          accent="learning."
        />

        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Certifications
            </h3>
            <ul className="space-y-3">
              {certifications.map((c, i) => (
                <Reveal as="li" key={c.title} delay={i * 70}>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    onMouseMove={handleSpotlight}
                    className="glass spotlight group flex items-center gap-5 rounded-2xl p-5 transition-all duration-300 hover:border-primary/40"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                      <Award className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-medium text-foreground">{c.title}</span>
                      <span className="mt-0.5 block text-sm text-muted-foreground">{c.issuer}</span>
                    </span>
                    <span className="hidden font-mono text-xs text-muted-foreground sm:block">{c.year}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Achievements
            </h3>
            <ol className="relative space-y-3 border-l border-border pl-6">
              {achievements.map((a, i) => {
                const Icon = achievementIcons[i] ?? Trophy;
                return (
                  <Reveal as="li" key={a.title} delay={i * 90} className="relative">
                    <span className="absolute -left-[33px] top-6 h-4 w-4 rounded-full border-2 border-background bg-gradient-primary shadow-glow" />
                    <div className="glass rounded-2xl p-5">
                      <div className="flex items-center gap-2.5">
                        <Icon className="h-4 w-4 text-primary-glow" />
                        <h4 className="font-medium text-foreground">{a.title}</h4>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
                    </div>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
