import { useEffect, useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ResumeButton } from "./ResumeButton";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full px-3 py-2 transition-all duration-500",
          scrolled ? "glass-strong shadow-card" : "border border-transparent",
        )}
      >
        <a href="#home" className="group flex shrink-0 items-center gap-2.5 pl-1" aria-label="Home">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow transition-transform duration-500 group-hover:rotate-12">
            <Code2 className="h-4.5 w-4.5" />
          </span>
          <span className="text-sm font-semibold tracking-tight text-foreground">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "true" : undefined}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm transition-colors",
                  active === l.id
                    ? "bg-accent text-foreground shadow-glow"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ResumeButton size="pill" label="Resume" className="hidden sm:inline-flex" />
          <Button
            variant="glass"
            size="icon-round"
            className="lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "glass-strong mx-auto mt-3 max-w-6xl overflow-hidden rounded-3xl transition-all duration-500 lg:hidden",
          open ? "max-h-[36rem] opacity-100" : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <ul className="flex flex-col p-3">
          {navLinks.map((l, i) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center justify-between rounded-2xl px-4 py-3 text-base transition-colors hover:bg-accent",
                  active === l.id ? "bg-accent text-foreground" : "text-foreground",
                )}
              >
                {l.label}
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              </a>
            </li>
          ))}
          <li className="flex items-center justify-between px-4 py-2 border-t border-border/40 mt-1 pt-3">
            <span className="text-sm font-medium text-foreground">Switch theme</span>
            <ThemeToggle showLabel />
          </li>
          <li className="p-2">
            <ResumeButton className="w-full" />
          </li>
        </ul>
      </div>
    </header>
  );
}
