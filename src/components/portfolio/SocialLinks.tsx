import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

export const socials = [
  { label: "GitHub", href: profile.github, Icon: Github, external: true },
  { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin, external: true },
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail, external: false },
];

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {socials.map(({ label, href, Icon, external }) => (
        <li key={label}>
          <Button asChild variant="glass" size="icon-round">
            <a href={href} aria-label={label} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
              <Icon />
            </a>
          </Button>
        </li>
      ))}
    </ul>
  );
}
