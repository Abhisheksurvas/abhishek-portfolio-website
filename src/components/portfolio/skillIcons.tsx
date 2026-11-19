import type { ComponentType } from "react";
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiHtml5,
  SiCss,
  SiGit,
} from "react-icons/si";
import { Brain, MessagesSquare, DatabaseZap } from "lucide-react";

export const skillIcons: Record<string, ComponentType<{ className?: string }>> = {
  Python: SiPython,
  JavaScript: SiJavascript,
  React: SiReact,
  "Node.js": SiNodedotjs,
  MongoDB: SiMongodb,
  HTML: SiHtml5,
  CSS: SiCss,
  Git: SiGit,
  AI: Brain,
  LLM: MessagesSquare,
  RAG: DatabaseZap,
};
