import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { toast } from "sonner";
import { profile } from "@/data/portfolio";
import { Button, type ButtonProps } from "@/components/ui/button";

let check: Promise<boolean> | null = null;
/** One shared check (per page load) for whether the resume PDF has been added. */
function checkResume() {
  check ??= fetch(profile.resume)
    .then((r) => {
      const ok = r.ok && (r.headers.get("content-type") ?? "").includes("pdf");
      void r.body?.cancel();
      return ok;
    })
    .catch(() => false);
  return check;
}

function useResumeAvailable() {
  const [available, setAvailable] = useState<boolean | null>(null);
  useEffect(() => {
    let cancelled = false;
    checkResume().then((ok) => !cancelled && setAvailable(ok));
    return () => {
      cancelled = true;
    };
  }, []);
  return available;
}

type Props = Pick<ButtonProps, "variant" | "size" | "className"> & { label?: string };

export function ResumeButton({ variant = "glow", size = "xl", className, label = "Download Resume" }: Props) {
  const available = useResumeAvailable();

  if (available === false) {
    return (
      <Button
        variant={variant}
        size={size}
        className={className}
        onClick={() =>
          toast.info("Resume is being updated", {
            description: "Email me and I'll send you the latest copy.",
            action: {
              label: "Email",
              onClick: () => (window.location.href = `mailto:${profile.email}?subject=Resume%20request`),
            },
          })
        }
      >
        <Download /> {label}
      </Button>
    );
  }

  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a href={profile.resume} download={profile.resumeFileName}>
        <Download /> {label}
      </a>
    </Button>
  );
}
