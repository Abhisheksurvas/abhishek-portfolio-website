import { useState, type FormEvent } from "react";
import { Mail, Github, Linkedin, ArrowUpRight, Copy, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal, handleSpotlight } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ResumeButton } from "./ResumeButton";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail, external: false },
  { label: "LinkedIn", value: profile.linkedin.replace("https://", ""), href: profile.linkedin, Icon: Linkedin, external: true },
  { label: "GitHub", value: profile.github.replace("https://", ""), href: profile.github, Icon: Github, external: true },
];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(120),
  subject: z.string().trim().min(3, "Please add a subject").max(120, "Subject is too long"),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(2000, "Message is too long"),
});
type FormValues = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormValues, string>>;

const fieldClass =
  "w-full rounded-xl border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30";

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm text-muted-foreground">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="flex items-center gap-1.5 text-xs text-destructive">
          <AlertCircle className="h-3.5 w-3.5" /> {error}
        </p>
      )}
    </div>
  );
}

export function Contact() {
  const empty: FormValues = { name: "", email: "", subject: "", message: "" };
  const [form, setForm] = useState<FormValues>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "opened">("idle");

  const set = (k: keyof FormValues) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

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
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const next: Errors = {};
      parsed.error.issues.forEach((i) => {
        const k = i.path[0] as keyof FormValues;
        next[k] ??= i.message;
      });
      setErrors(next);
      toast.error("Please fix the highlighted fields");
      return;
    }
    const { name, email, subject, message } = parsed.data;
    const body = `${message}\n\n— ${name}\n${email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("opened");
  };

  const inputProps = (k: keyof FormValues) => ({
    id: `contact-${k}`,
    value: form[k],
    onChange: set(k),
    "aria-invalid": !!errors[k],
    "aria-describedby": errors[k] ? `contact-${k}-error` : undefined,
    className: cn(fieldClass, errors[k] ? "border-destructive" : "border-input"),
  });

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div aria-hidden className="aurora-violet pointer-events-none absolute left-1/2 top-1/3 h-[30rem] w-[40rem] -translate-x-1/2 rounded-full opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          index="08"
          eyebrow="Contact"
          title="Let's Build Something"
          accent="Amazing."
          description="I'm open to internships, opportunities, collaborations, and innovative projects. Let's connect!"
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-3">
            {channels.map(({ label, value, href, Icon, external }, i) => (
              <Reveal key={label} delay={i * 80}>
                <div
                  onMouseMove={handleSpotlight}
                  className="glass spotlight group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:border-primary/40"
                >
                  <a href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})} className="flex min-w-0 flex-1 items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
                      <span className="block truncate text-foreground">{value}</span>
                    </span>
                  </a>
                  {label === "Email" ? (
                    <Button variant="ghost" size="icon" onClick={copyEmail} aria-label="Copy email address">
                      <Copy />
                    </Button>
                  ) : (
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  )}
                </div>
              </Reveal>
            ))}
            <Reveal delay={260}>
              <div className="glass flex flex-wrap items-center justify-between gap-4 rounded-2xl p-5">
                <p className="text-sm text-muted-foreground">Prefer a quick overview?</p>
                <ResumeButton size="pill" />
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            {status === "opened" ? (
              <div className="glass-strong gradient-border flex h-full flex-col items-center justify-center rounded-3xl p-8 text-center sm:p-10">
                <CheckCircle2 className="h-12 w-12 text-success" />
                <h3 className="mt-4 text-xl font-semibold text-foreground">Your email app should now be open</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Your message is ready there — press <span className="text-foreground">Send</span> in your email app to
                  deliver it. Nothing has been sent from this website.
                </p>
                <p className="mt-4 text-xs text-muted-foreground">
                  Email app didn't open? Write to{" "}
                  <a href={`mailto:${profile.email}`} className="text-primary-glow underline-offset-4 hover:underline">
                    {profile.email}
                  </a>
                </p>
                <Button
                  variant="glass"
                  size="pill"
                  className="mt-6"
                  onClick={() => {
                    setForm(empty);
                    setStatus("idle");
                  }}
                >
                  Write another message
                </Button>
              </div>
            ) : (
              <form noValidate onSubmit={onSubmit} className="glass-strong gradient-border space-y-4 rounded-3xl p-6 sm:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field id="contact-name" label="Name" error={errors.name}>
                    <input {...inputProps("name")} autoComplete="name" placeholder="Your name" maxLength={80} />
                  </Field>
                  <Field id="contact-email" label="Email" error={errors.email}>
                    <input {...inputProps("email")} type="email" autoComplete="email" placeholder="you@company.com" maxLength={120} />
                  </Field>
                </div>
                <Field id="contact-subject" label="Subject" error={errors.subject}>
                  <input {...inputProps("subject")} placeholder="Internship opportunity" maxLength={120} />
                </Field>
                <Field id="contact-message" label="Message" error={errors.message}>
                  <textarea {...inputProps("message")} rows={5} maxLength={2000} placeholder="Hi Abhishek, …" className={cn(inputProps("message").className, "resize-none")} />
                </Field>
                <Button type="submit" variant="glow" size="xl" className="w-full">
                  <Send /> Send via email
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  This opens your email app with the message filled in.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
