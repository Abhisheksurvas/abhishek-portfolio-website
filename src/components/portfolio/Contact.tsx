import { useState, type FormEvent } from "react";
import { Mail, Github, Linkedin, ArrowUpRight, Copy, Send } from "lucide-react";
import { toast } from "sonner";
import { profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Reveal, handleSpotlight } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail, external: false },
  {
    label: "GitHub",
    value: profile.github.replace("https://", ""),
    href: profile.github,
    Icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    value: profile.linkedin.replace("https://www.", ""),
    href: profile.linkedin,
    Icon: Linkedin,
    external: true,
  },
];

const fieldClass =
  "w-full rounded-xl border border-input bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      toast.success("Email copied to clipboard");
    } catch {
      toast.error("Couldn't copy — please copy it manually");
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Internship opportunity — from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email app…");
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div aria-hidden className="aurora-violet pointer-events-none absolute left-1/2 top-1/3 h-[30rem] w-[40rem] -translate-x-1/2 rounded-full opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          index="05"
          eyebrow="Contact"
          title="Let's build something"
          accent="together."
          description="Hiring for an internship or have a project in mind? My inbox is always open — I usually reply within a day."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-3">
            {channels.map(({ label, value, href, Icon, external }, i) => (
              <Reveal key={label} delay={i * 80}>
                <div
                  onMouseMove={handleSpotlight}
                  className="glass spotlight group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:border-primary/40"
                >
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="flex min-w-0 flex-1 items-center gap-4"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                        {label}
                      </span>
                      <span className="block truncate text-foreground">{value}</span>
                    </span>
                  </a>
                  {label === "Email" ? (
                    <Button variant="ghost" size="icon" onClick={copyEmail} aria-label="Copy email">
                      <Copy />
                    </Button>
                  ) : (
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <form onSubmit={onSubmit} className="glass-strong gradient-border space-y-4 rounded-3xl p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm text-muted-foreground">Your name</span>
                  <input
                    required
                    maxLength={80}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={fieldClass}
                    placeholder="Priya Sharma"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm text-muted-foreground">Your email</span>
                  <input
                    required
                    type="email"
                    maxLength={120}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={fieldClass}
                    placeholder="priya@company.com"
                  />
                </label>
              </div>
              <label className="block space-y-2">
                <span className="text-sm text-muted-foreground">Message</span>
                <textarea
                  required
                  rows={5}
                  maxLength={2000}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${fieldClass} resize-none`}
                  placeholder="Hi Abhishek, we have an internship opening for…"
                />
              </label>
              <Button type="submit" variant="glow" size="xl" className="w-full">
                <Send /> Send message
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
