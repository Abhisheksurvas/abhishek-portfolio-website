import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

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
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full px-3 py-2 transition-all duration-500 sm:px-4",
          scrolled ? "glass-strong shadow-card" : "border border-transparent",
        )}
      >
        <a href="#top" className="group flex items-center gap-2.5 pl-2" aria-label="Back to top">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-primary font-mono text-xs font-bold text-primary-foreground shadow-glow transition-transform duration-500 group-hover:rotate-[360deg]">
            AS
          </span>
          <span className="hidden text-sm font-medium tracking-tight text-foreground sm:block">
            {profile.name}
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm transition-colors",
                  active === l.id
                    ? "bg-accent text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild variant="glow" size="pill" className="hidden sm:inline-flex">
            <a href={profile.resume} download="Abhishek_Survase_Resume.pdf">
              <Download /> Resume
            </a>
          </Button>
          <Button
            variant="glass"
            size="icon-round"
            className="md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "glass-strong mx-auto mt-3 max-w-6xl overflow-hidden rounded-3xl transition-all duration-500 md:hidden",
          open ? "max-h-[28rem] opacity-100" : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <ul className="flex flex-col p-3">
          {navLinks.map((l, i) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg text-foreground transition-colors hover:bg-accent"
              >
                {l.label}
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              </a>
            </li>
          ))}
          <li className="p-2">
            <Button asChild variant="glow" size="xl" className="w-full">
              <a href={profile.resume} download="Abhishek_Survase_Resume.pdf">
                <Download /> Download Resume
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
