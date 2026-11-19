import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

const lines = [
  { t: "prompt", text: 'agent.run("Explain photosynthesis from my notes")' },
  { t: "dim", text: "→ embedding query · text-embedding-3" },
  { t: "dim", text: "→ retrieving top-k=5 chunks from biology_ch4.pdf" },
  { t: "ok", text: "✓ 5 sources found  (0.82 avg similarity)" },
  { t: "dim", text: "→ calling tool: summarize(context)" },
  { t: "ok", text: "✓ answer grounded · 3 citations attached" },
  { t: "out", text: "Photosynthesis converts light energy into glucose…" },
] as const;

/** Decorative "AI agent in action" window for the hero. */
export function AgentTerminal() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => (c >= lines.length + 3 ? 0 : c + 1));
    }, 900);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative animate-in fade-in zoom-in-95 duration-1000">
      <div aria-hidden className="aurora-violet absolute inset-8 rounded-full opacity-70" />
      <div className="glass-strong gradient-border relative rounded-3xl shadow-card">
        <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-chart-5/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-success/80" />
          </div>
          <span className="font-mono text-[11px] text-muted-foreground">edurag-agent.py</span>
          <Sparkles className="h-3.5 w-3.5 text-primary" />
        </div>

        <div className="min-h-[300px] space-y-2.5 p-5 font-mono text-[12.5px] leading-relaxed sm:p-6">
          {lines.slice(0, count).map((l, i) => (
            <p
              key={i}
              className={
                "animate-in fade-in slide-in-from-left-2 duration-500 " +
                (l.t === "prompt"
                  ? "text-foreground"
                  : l.t === "ok"
                    ? "text-success"
                    : l.t === "out"
                      ? "rounded-xl border border-border bg-accent/60 p-3 text-foreground"
                      : "text-muted-foreground")
              }
            >
              {l.t === "prompt" && <span className="mr-2 text-primary">❯</span>}
              {l.text}
            </p>
          ))}
          {count <= lines.length && (
            <span className="inline-block h-4 w-2 animate-blink bg-primary align-middle" />
          )}
        </div>

        <div className="flex flex-wrap gap-2 border-t border-border px-5 py-4">
          {["LLM", "RAG", "Tool calling", "Vector DB"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-[10.5px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
