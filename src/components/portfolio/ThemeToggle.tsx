import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className, showLabel = false }: ThemeToggleProps) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  const applyTheme = (newTheme: "dark" | "light") => {
    if (typeof document === "undefined") return;
    if (newTheme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      document.documentElement.setAttribute("data-theme", "light");
      document.documentElement.style.colorScheme = "light";
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      document.documentElement.style.colorScheme = "dark";
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const isLight = stored === "light" || document.documentElement.classList.contains("light");
    const currentTheme = isLight ? "light" : "dark";
    setTheme(currentTheme);
    applyTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      onClick={toggleTheme}
      title={isDark ? "Switch to Light mode" : "Switch to Dark mode"}
      aria-label={isDark ? "Switch to Light mode" : "Switch to Dark mode"}
      className={cn(
        "group relative inline-flex h-9 items-center rounded-full border border-border/60 bg-card/60 p-1 backdrop-blur-md transition-all duration-300 hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 cursor-pointer select-none",
        showLabel ? "px-2.5 gap-2" : "w-[68px]",
        className,
      )}
    >
      {/* Sliding pill indicator */}
      {!showLabel && (
        <span
          className={cn(
            "absolute h-7 w-7 rounded-full transition-all duration-300 shadow-sm",
            isDark
              ? "left-[34px] bg-primary text-primary-foreground shadow-glow"
              : "left-[4px] bg-amber-400 text-slate-950 shadow-md",
          )}
        />
      )}

      {/* Sun Icon (Light) */}
      <span
        className={cn(
          "relative z-10 grid h-7 w-7 place-items-center rounded-full transition-colors duration-200",
          !isDark
            ? showLabel
              ? "bg-amber-400 text-slate-950 shadow-sm"
              : "text-slate-950 font-bold"
            : "text-muted-foreground group-hover:text-foreground",
        )}
      >
        <Sun className="h-4 w-4" />
      </span>

      {/* Moon Icon (Dark) */}
      <span
        className={cn(
          "relative z-10 grid h-7 w-7 place-items-center rounded-full transition-colors duration-200",
          isDark
            ? showLabel
              ? "bg-primary text-primary-foreground shadow-glow"
              : "text-primary-foreground font-bold"
            : "text-muted-foreground group-hover:text-foreground",
        )}
      >
        <Moon className="h-4 w-4" />
      </span>

      {showLabel && (
        <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
          {isDark ? "Dark" : "Light"}
        </span>
      )}
    </button>
  );
}
