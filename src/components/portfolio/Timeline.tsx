import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/** Vertical timeline with glowing dots; children are the cards. */
export function Timeline({ children }: { children: ReactNode }) {
  return (
    <ol className="relative space-y-6 border-l border-border pl-8 sm:pl-10">
      <span aria-hidden className="absolute -left-px top-0 h-full w-px bg-gradient-primary opacity-60" />
      {children}
    </ol>
  );
}

export function TimelineItem({ children, delay = 0, active }: { children: ReactNode; delay?: number; active?: boolean | undefined }) {
  return (
    <Reveal as="li" delay={delay} className="relative">
      <span
        aria-hidden
        className={`absolute -left-[41px] top-7 h-4 w-4 rounded-full border-2 border-background bg-gradient-primary shadow-glow sm:-left-[49px] ${active ? "animate-pulse-dot" : ""}`}
      />
      {children}
    </Reveal>
  );
}
