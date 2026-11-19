import { Award, ArrowUpRight, BadgeCheck } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Reveal, handleSpotlight } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="06" eyebrow="Certifications & achievements" title="Always" accent="learning." />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 80}>
              <article
                onMouseMove={handleSpotlight}
                className="glass spotlight gradient-border group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
              >
                {/* certificate-style corner ribbon + seal */}
                <div aria-hidden className="absolute -right-8 -top-8 h-24 w-24 rounded-full border border-primary/30" />
                <div aria-hidden className="absolute -right-4 -top-4 h-16 w-16 rounded-full border border-electric/20" />

                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow transition-transform duration-500 group-hover:rotate-6">
                  <Award className="h-6 w-6" />
                </span>

                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Certificate</p>
                <h3 className="mt-1.5 text-lg font-semibold leading-snug text-foreground">{c.title}</h3>

                <div className="mt-auto pt-6">
                  <div className="border-t border-dashed border-border pt-4">
                    <p className="flex items-center gap-1.5 text-sm text-foreground">
                      <BadgeCheck className="h-4 w-4 shrink-0 text-electric" /> {c.issuer}
                    </p>
                    {c.year && <p className="mt-1 pl-5.5 font-mono text-xs text-muted-foreground">{c.year}</p>}
                  </div>
                  {c.url && (
                    <Button asChild variant="glass" size="pill" className="mt-4">
                      <a href={c.url} target="_blank" rel="noreferrer">
                        View Certificate <ArrowUpRight />
                      </a>
                    </Button>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
