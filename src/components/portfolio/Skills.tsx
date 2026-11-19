import { allSkills, skillGroups } from "@/data/portfolio";
import { Reveal, handleSpotlight } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { skillIcons } from "./skillIcons";

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div aria-hidden className="aurora-blue pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full opacity-60" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          index="02"
          eyebrow="Technical skills"
          title="My everyday"
          accent="toolkit."
          description="The languages, frameworks and AI techniques I use to take projects from a blank file to a working product."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 80}>
              <div
                onMouseMove={handleSpotlight}
                className="glass spotlight h-full rounded-2xl p-6 sm:p-7"
              >
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {g.title}
                  </h3>
                  <span className="font-mono text-xs text-primary">
                    {String(g.skills.length).padStart(2, "0")}
                  </span>
                </div>
                <ul className="flex flex-wrap gap-3">
                  {g.skills.map((s) => {
                    const Icon = skillIcons[s];
                    return (
                      <li
                        key={s}
                        className="group flex items-center gap-2.5 rounded-xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-glow"
                      >
                        {Icon && (
                          <Icon className="h-4.5 w-4.5 text-muted-foreground transition-colors group-hover:text-primary-glow" />
                        )}
                        {s}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div
        aria-hidden
        className="relative mt-20 overflow-hidden border-y border-border py-6 [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]"
      >
        <div className="flex w-max animate-marquee gap-12">
          {[...allSkills, ...allSkills, ...allSkills, ...allSkills].map((s, i) => (
            <span
              key={i}
              className="flex items-center gap-12 font-serif text-3xl italic text-muted-foreground sm:text-4xl"
            >
              {s}
              <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
