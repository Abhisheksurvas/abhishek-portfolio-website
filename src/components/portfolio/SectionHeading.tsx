import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  eyebrow,
  title,
  accent,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  accent: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
        <span className="text-primary">{index}</span>
        <span className="h-px w-8 bg-border" />
        {eyebrow}
      </p>
      <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        {title} <span className="font-serif font-normal italic text-gradient-primary">{accent}</span>
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
