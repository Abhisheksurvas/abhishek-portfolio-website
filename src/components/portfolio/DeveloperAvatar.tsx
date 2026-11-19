import { Sparkles } from "lucide-react";
import { profile } from "@/data/portfolio";

const symbols = [
  { text: "</>", cls: "left-0 top-10 sm:-left-4" },
  { text: "{ }", cls: "right-2 top-0 sm:-right-2" },
  { text: "=>", cls: "-right-2 bottom-24 sm:-right-6" },
  { text: "AI", cls: "left-2 bottom-20 sm:-left-6" },
  { text: "( )", cls: "left-1/2 -top-6 -translate-x-1/2" },
];

/** Abstract developer avatar — no photograph. */
export function DeveloperAvatar() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[26rem] animate-in fade-in zoom-in-95 duration-1000">
      <div aria-hidden className="aurora-violet absolute inset-0 rounded-full" />

      {/* Rotating gradient ring */}
      <div className="absolute inset-[8%] rounded-full p-[2px]">
        <div aria-hidden className="ring-conic absolute inset-0 animate-spin-slow rounded-full opacity-80 blur-[1px]" />
        <div className="glass-strong relative grid h-full w-full place-items-center overflow-hidden rounded-full">
          <div aria-hidden className="bg-grid absolute inset-0 opacity-60" />
          <svg viewBox="0 0 200 200" className="relative h-[78%] w-[78%]" role="img" aria-label="Abstract developer avatar">
            <defs>
              <linearGradient id="av-g" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--primary)" />
                <stop offset="100%" stopColor="var(--electric)" />
              </linearGradient>
              <linearGradient id="av-s" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.55" />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* shoulders */}
            <path d="M40 190c4-38 30-58 60-58s56 20 60 58" fill="url(#av-s)" stroke="url(#av-g)" strokeWidth="2" />
            {/* head */}
            <circle cx="100" cy="78" r="34" fill="none" stroke="url(#av-g)" strokeWidth="2.5" />
            <circle cx="100" cy="78" r="26" fill="url(#av-s)" />
            {/* visor / glasses */}
            <rect x="78" y="70" width="44" height="12" rx="6" fill="url(#av-g)" opacity="0.9" />
            {/* laptop */}
            <rect x="62" y="150" width="76" height="40" rx="6" fill="var(--background)" stroke="url(#av-g)" strokeWidth="2" />
            <text x="100" y="176" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="16" fill="url(#av-g)">
              {"</>"}
            </text>
          </svg>
        </div>
      </div>

      {symbols.map((s, i) => (
        <span
          key={s.text}
          aria-hidden
          className={`glass absolute animate-float rounded-xl px-3 py-1.5 font-mono text-sm text-primary-glow shadow-glow ${s.cls}`}
          style={{ animationDelay: `${i * -1.7}s`, animationDuration: `${8 + i}s` }}
        >
          {s.text}
        </span>
      ))}

      <div className="glass-strong absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium text-foreground shadow-card sm:bottom-4 sm:text-sm">
        <span className="h-2 w-2 animate-pulse-dot rounded-full bg-success" />
        {profile.availability}
        <Sparkles className="h-3.5 w-3.5 text-primary" />
      </div>
    </div>
  );
}
