import {
  FileText,
  HeartPulse,
  MessageSquareWarning,
  CalendarRange,
  ShieldCheck,
  Library,
  type LucideIcon,
} from "lucide-react";
import type { ProjectVisual } from "@/data/portfolio";

const iconFor: Record<ProjectVisual, LucideIcon> = {
  rag: FileText,
  health: HeartPulse,
  complaint: MessageSquareWarning,
  event: CalendarRange,
  auth: ShieldCheck,
  library: Library,
};

function Mock({ visual }: { visual: ProjectVisual }) {
  switch (visual) {
    case "rag":
      return (
        <div className="space-y-2">
          <div className="ml-auto w-3/4 rounded-xl rounded-br-sm bg-accent px-3 py-2 font-mono text-[10px] text-foreground">
            Explain normalization from my DBMS notes
          </div>
          <div className="w-5/6 rounded-xl rounded-bl-sm border border-primary/30 bg-background/60 px-3 py-2">
            <div className="h-1.5 w-full rounded bg-primary/50" />
            <div className="mt-1.5 h-1.5 w-4/5 rounded bg-muted-foreground/30" />
            <p className="mt-2 font-mono text-[9px] text-electric">source · unit3.pdf p.12</p>
          </div>
        </div>
      );
    case "health":
      return (
        <svg viewBox="0 0 200 50" className="h-14 w-full" aria-hidden>
          <polyline
            points="0,30 40,30 55,30 65,8 78,46 90,22 100,30 140,30 150,18 160,30 200,30"
            fill="none"
            stroke="var(--primary-glow)"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "complaint":
      return (
        <div className="space-y-1.5">
          {[
            ["#1024", "Resolved", "text-success border-success/40"],
            ["#1025", "In progress", "text-electric border-electric/40"],
            ["#1026", "Open", "text-primary border-primary/40"],
          ].map(([id, s, c]) => (
            <div key={id} className="flex items-center justify-between rounded-lg bg-background/60 px-3 py-1.5">
              <span className="font-mono text-[10px] text-muted-foreground">{id}</span>
              <span className={`rounded-full border px-2 py-px font-mono text-[9px] ${c}`}>{s}</span>
            </div>
          ))}
        </div>
      );
    case "event":
      return (
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 21 }, (_, i) => (
            <span
              key={i}
              className={`aspect-square rounded-md ${[4, 10, 16].includes(i) ? "bg-gradient-primary shadow-glow" : "bg-background/60"}`}
            />
          ))}
        </div>
      );
    case "auth":
      return (
        <div className="flex justify-center gap-1.5">
          {["4", "8", "2", "9", "•", "•"].map((d, i) => (
            <span
              key={i}
              className={`grid h-9 w-7 place-items-center rounded-lg border font-mono text-sm ${i < 4 ? "border-primary/50 text-foreground" : "border-border text-muted-foreground"}`}
            >
              {d}
            </span>
          ))}
        </div>
      );
    case "library":
      return (
        <div className="flex items-end justify-center gap-1">
          {[44, 56, 38, 60, 48, 52, 40].map((h, i) => (
            <span
              key={i}
              className={`w-4 rounded-t-sm ${i % 3 === 0 ? "bg-primary/70" : i % 3 === 1 ? "bg-electric/60" : "bg-accent"}`}
              style={{ height: h }}
            />
          ))}
        </div>
      );
  }
}

/** Illustrated thumbnail for a project card — no screenshots needed. */
export function ProjectThumb({ visual, label }: { visual: ProjectVisual; label: string }) {
  const Icon = iconFor[visual];
  return (
    <div
      role="img"
      aria-label={`${label} illustration`}
      className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-background/50"
    >
      <div aria-hidden className="bg-grid absolute inset-0" />
      <div aria-hidden className="aurora-violet absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-70 transition-transform duration-700 group-hover:scale-125" />
      <div aria-hidden className="aurora-blue absolute -bottom-12 -left-8 h-36 w-36 rounded-full opacity-60" />
      <div className="relative flex h-full flex-col justify-between p-4">
        <span className="glass grid h-10 w-10 place-items-center rounded-xl text-primary-glow transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
          <Icon className="h-5 w-5" />
        </span>
        <div className="glass rounded-xl p-3 transition-transform duration-500 group-hover:-translate-y-1">
          <Mock visual={visual} />
        </div>
      </div>
    </div>
  );
}
