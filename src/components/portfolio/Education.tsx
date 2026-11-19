import { GraduationCap, CalendarDays } from "lucide-react";
import { education } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Timeline, TimelineItem } from "./Timeline";

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="02" eyebrow="Education" title="Academic" accent="journey." />
        <div className="max-w-3xl">
          <Timeline>
            {education.map((e, i) => (
              <TimelineItem key={e.degree} delay={i * 100} active={e.current}>
                <article className="glass group rounded-2xl p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/40 sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 font-mono text-xs text-primary-glow">
                      <CalendarDays className="h-3.5 w-3.5" /> {e.period}
                    </span>
                    {e.current && (
                      <span className="rounded-full border border-success/40 px-2.5 py-0.5 font-mono text-[11px] text-success">
                        Pursuing
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 flex items-start gap-2.5 text-lg font-semibold text-foreground sm:text-xl">
                    <GraduationCap className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    {e.degree}
                  </h3>
                  <p className="mt-1.5 pl-7 text-muted-foreground">{e.school}</p>
                </article>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  );
}
