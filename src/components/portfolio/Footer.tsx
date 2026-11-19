import { Code2 } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-primary opacity-60" />
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_auto]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <Code2 className="h-5 w-5" />
              </span>
              <p className="text-2xl font-semibold tracking-tight text-foreground">{profile.name}</p>
            </div>
            <p className="mt-3 font-mono text-sm text-muted-foreground">{profile.shortRole}</p>
            <a href={`mailto:${profile.email}`} className="mt-4 inline-block text-sm text-primary-glow underline-offset-4 hover:underline">
              {profile.email}
            </a>
          </div>
          <nav aria-label="Footer">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Quick links</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="text-muted-foreground transition-colors hover:text-foreground">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Connect</p>
            <SocialLinks />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Designed & Built with passion, code, and AI.</p>
        </div>
      </div>
    </footer>
  );
}
