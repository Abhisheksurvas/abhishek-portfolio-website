import type { ComponentType } from "react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiMongodb,
  SiMysql,
  SiGit,
} from "react-icons/si";
import { Sparkles, MessagesSquare, DatabaseZap, Bot, Webhook, MonitorSmartphone, Database } from "lucide-react";

export const skillIcons: Record<string, ComponentType<{ className?: string }>> = {
  HTML5: SiHtml5,
  CSS3: SiCss,
  JavaScript: SiJavascript,
  "React.js": SiReact,
  "Node.js (Basics)": SiNodedotjs,
  "PHP (Basic)": SiPhp,
  Python: SiPython,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  "Generative AI": Sparkles,
  "AI/LLMs": MessagesSquare,
  "Retrieval-Augmented Generation (RAG)": DatabaseZap,
  "AI-powered application development": Bot,
  Git: SiGit,
  "REST APIs": Webhook,
  "Responsive Web Design": MonitorSmartphone,
  "Database Management": Database,
};
