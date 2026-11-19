// Deterministic positions so server and client render the same markup.
const dots = Array.from({ length: 26 }, (_, i) => {
  const seed = (i * 9301 + 49297) % 233280;
  return {
    left: (seed / 233280) * 100,
    top: ((i * 37) % 100) + ((seed % 7) - 3),
    size: 2 + (i % 3),
    delay: (i % 9) * 0.9,
    duration: 9 + (i % 6) * 2,
  };
});

/** Lightweight CSS-only floating particles. */
export function Particles({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {dots.map((d, i) => (
        <span
          key={i}
          className={`absolute animate-drift rounded-full ${i % 2 ? "bg-primary" : "bg-electric"}`}
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
