import { ArrowRight, Download, MapPin } from "lucide-react";
import { profile, stats } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { AgentTerminal } from "./AgentTerminal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-36 sm:pt-44 lg:pb-32">
      {/* Backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0" />
        <div className="aurora-violet absolute -left-32 top-10 h-[32rem] w-[32rem] animate-float rounded-full" />
        <div className="aurora-blue absolute -right-24 top-40 h-[28rem] w-[28rem] animate-float-slow rounded-full" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <div className="glass mb-8 inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-xs text-muted-foreground animate-in fade-in slide-in-from-bottom-2 duration-700">
            <span className="h-2 w-2 animate-pulse-dot rounded-full bg-success" />
            {profile.availability}
          </div>

          <h1 className="text-5xl font-semibold leading-[1.02] tracking-tighter text-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-gradient">{profile.firstName}</span>
            <br />
            <span className="font-serif font-normal italic text-muted-foreground">Survase.</span>
          </h1>

          <p className="mt-6 font-mono text-sm tracking-wide text-primary-glow animate-in fade-in duration-1000 sm:text-base">
            <span className="text-muted-foreground">~/</span> {profile.role}
            <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-primary" />
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            <Button asChild variant="glow" size="xl" className="group">
              <a href="#projects">
                View Projects
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href={profile.resume} download="Abhishek_Survase_Resume.pdf">
                <Download /> Download Resume
              </a>
            </Button>
          </div>

          <p className="mt-6 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> {profile.location}
          </p>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-3xl font-semibold tracking-tight text-foreground">{s.value}</dd>
                <p className="mt-1 text-xs leading-snug text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </dl>
        </div>

        <AgentTerminal />
      </div>
    </section>
  );
}
