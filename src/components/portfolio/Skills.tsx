import { Code2, Server, Database, BrainCircuit, Wrench } from "lucide-react";
import { skillGroups, type SkillGroupId } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Reveal, handleSpotlight } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { skillIcons } from "./skillIcons";

const groupIcons: Record<SkillGroupId, typeof Code2> = {
  frontend: Code2,
  backend: Server,
  database: Database,
  ai: BrainCircuit,
  tools: Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div aria-hidden className="aurora-blue pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full opacity-60" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          index="03"
          eyebrow="Technical skills"
          title="Tools I build"
          accent="with."
          description="The languages, frameworks and technologies I use to take ideas from a blank file to a working application."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {skillGroups.map((g, gi) => {
            const GroupIcon = groupIcons[g.id];
            return (
              <Reveal
                key={g.id}
                delay={gi * 80}
                className={cn(gi < 2 ? "lg:col-span-3" : "lg:col-span-2", g.id === "tools" && "md:col-span-2 lg:col-span-2")}
              >
                <div
                  onMouseMove={handleSpotlight}
                  className="glass spotlight group h-full rounded-2xl p-6 transition-all duration-500 hover:border-primary/40 sm:p-7"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                      <GroupIcon className="h-5 w-5" />
                    </span>
                    <h3 className="font-medium text-foreground">{g.title}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2.5">
                    {g.skills.map((s) => {
                      const Icon = skillIcons[s];
                      return (
                        <li
                          key={s}
                          className="group/skill flex items-center gap-2 rounded-xl border border-border bg-background/40 px-3.5 py-2.5 text-sm text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-glow"
                        >
                          {Icon && (
                            <Icon className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover/skill:text-primary-glow" />
                          )}
                          {s}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
