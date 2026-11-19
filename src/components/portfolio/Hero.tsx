import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { DeveloperAvatar } from "./DeveloperAvatar";
import { Particles } from "./Particles";
import { ResumeButton } from "./ResumeButton";
import { SocialLinks } from "./SocialLinks";

function RotatingFocus() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % profile.focusAreas.length), 2400);
    return () => clearInterval(id);
  }, []);
  return (
    <p className="mt-6 flex flex-wrap items-baseline gap-x-2 text-lg text-muted-foreground sm:text-xl" aria-live="polite">
      <span>Focused on</span>
      <span
        key={i}
        className="text-gradient-animated animate-gradient font-semibold animate-in fade-in slide-in-from-bottom-2 duration-500"
      >
        {profile.focusAreas[i]}
      </span>
    </p>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-32 sm:pt-40 lg:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0" />
        <div className="aurora-violet absolute -left-32 top-10 h-[32rem] w-[32rem] animate-float rounded-full" />
        <div className="aurora-blue absolute -right-24 top-40 h-[28rem] w-[28rem] animate-float-slow rounded-full" />
      </div>
      <Particles />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-primary-glow animate-in fade-in slide-in-from-bottom-2 duration-700 sm:text-sm">
            {profile.greeting}
          </p>

          <h1 className="text-5xl font-semibold leading-[1.02] tracking-tighter animate-in fade-in slide-in-from-bottom-4 duration-1000 sm:text-6xl lg:text-7xl">
            <span className="text-gradient">Abhishek</span>{" "}
            <span className="text-gradient-animated animate-gradient">Survase</span>
          </h1>

          <p className="mt-5 font-mono text-sm leading-relaxed text-foreground/90 sm:text-base">
            {profile.role.split(" | ").map((r, idx, arr) => (
              <span key={r}>
                {r}
                {idx < arr.length - 1 && <span className="mx-2 text-primary">|</span>}
              </span>
            ))}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 sm:text-lg">
            {profile.intro}
          </p>

          <RotatingFocus />

          <div className="mt-9 flex flex-wrap items-center gap-3 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            <Button asChild variant="glow" size="xl" className="group">
              <a href="#projects">
                View My Projects
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <ResumeButton variant="glass" />
          </div>

          <SocialLinks className="mt-8" />
        </div>

        <DeveloperAvatar />
      </div>
    </section>
  );
}
