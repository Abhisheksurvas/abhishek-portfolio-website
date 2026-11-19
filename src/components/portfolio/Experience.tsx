import { Briefcase, CalendarDays, ChevronRight } from "lucide-react";
import { experience } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Timeline, TimelineItem } from "./Timeline";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-28">
      <div aria-hidden className="aurora-violet pointer-events-none absolute -left-40 top-1/4 h-[26rem] w-[26rem] rounded-full opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading index="04" eyebrow="Internships & experience" title="Where I've" accent="learned." />
        <div className="max-w-4xl">
          <Timeline>
            {experience.map((x, i) => (
              <TimelineItem key={x.title} delay={i * 120}>
                <article className="glass-strong gradient-border rounded-3xl p-6 transition-all duration-500 hover:-translate-y-0.5 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 font-mono text-xs text-primary-glow">
                      <CalendarDays className="h-3.5 w-3.5" /> {x.period}
                    </span>
                    <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">
                      {x.type}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">{x.title}</h3>
                  <p className="mt-1.5 flex items-center gap-2 text-muted-foreground">
                    <Briefcase className="h-4 w-4 shrink-0 text-primary" /> {x.org}
                  </p>
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {x.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                        <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-electric" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </article>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  );
}
