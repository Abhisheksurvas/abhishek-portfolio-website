// All portfolio content lives here so it can be edited in one place.
// Leave a link as "" when it doesn't exist yet — the matching button is hidden or shown as "coming soon".

export const profile = {
  name: "Abhishek Survase",
  firstName: "Abhishek",
  greeting: "Hello, I'm Abhishek 👋",
  role: "Full-Stack Developer | AI Agent Developer | Computer Science Engineer",
  shortRole: "Full-Stack Developer | AI Developer",
  intro:
    "I'm a passionate developer focused on building intelligent web applications, AI-powered solutions, and modern digital experiences. I enjoy turning ideas into practical products using technology.",
  focusAreas: ["Full-Stack Development", "AI & Generative AI", "Web Applications", "Problem Solving"],
  availability: "Open to Internship Opportunities",
  location: "Pandharpur, Maharashtra",
  email: "abhisheksurvase00@gmail.com",
  github: "https://github.com/Abhisheksurvas",
  githubHandle: "Abhisheksurvas",
  linkedin: "https://linkedin.com/in/abhishek-survase",
  /** The owner's own resume PDF, served from public folder. */
  resume: "/Abhishek_s_resume-1.pdf",
  resumeFileName: "Abhishek_s_resume-1.pdf",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
] as const;

export const about = {
  body: "I'm a Computer Science and Engineering student at SKN Sinhgad College of Engineering, Pandharpur. I have hands-on experience in frontend and backend development, database management, and AI-based application development. I enjoy solving problems, exploring emerging technologies, and developing useful software applications. My goal is to grow as a Full-Stack Developer and AI Engineer while contributing to real-world projects.",
  highlights: [
    {
      title: "Problem Solver",
      body: "I break problems into small, clear steps and build solutions that are simple to use and maintain.",
    },
    {
      title: "AI Enthusiast",
      body: "Exploring Generative AI, LLMs and RAG to build applications that understand and assist people.",
    },
    {
      title: "Full-Stack Developer",
      body: "Building complete web apps — responsive interfaces, backend APIs and databases working together.",
    },
  ],
  stats: [
    { value: "B.Tech CSE", label: "2023 – 2027" },
    { value: "2", label: "Internship experiences" },
    { value: "5+", label: "Project showcases" },
  ],
};

export const education = [
  {
    degree: "B.Tech — Computer Science and Engineering",
    school: "SKN Sinhgad College of Engineering, Pandharpur",
    period: "2023 – 2027",
    current: true,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "New English School & Jr. College, Gadegaon",
    period: "2021 – 2023",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    school: "New English School & Jr. College, Gadegaon",
    period: "2020",
  },
];

export type SkillGroupId = "frontend" | "backend" | "database" | "ai" | "tools";
export type SkillGroup = { id: SkillGroupId; title: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  { id: "frontend", title: "Frontend", skills: ["HTML5", "CSS3", "JavaScript", "React.js"] },
  { id: "backend", title: "Backend", skills: ["Node.js (Basics)", "PHP (Basic)", "Python"] },
  { id: "database", title: "Database", skills: ["MongoDB", "MySQL"] },
  {
    id: "ai",
    title: "AI & Emerging Technologies",
    skills: [
      "Generative AI",
      "AI/LLMs",
      "Retrieval-Augmented Generation (RAG)",
      "AI-powered application development",
    ],
  },
  {
    id: "tools",
    title: "Tools & Concepts",
    skills: ["Git", "REST APIs", "Responsive Web Design", "Database Management"],
  },
];

export const experience = [
  {
    title: "Data Analytics using AI-LLMs — Virtual Internship",
    org: "Vodafone Idea Foundation & Connecting Dreams Foundation",
    period: "October 2024 – November 2024",
    type: "Virtual",
    points: [
      "Performed data cleaning and analysis.",
      "Worked with AI and Large Language Model concepts.",
      "Created data visualizations.",
      "Extracted meaningful insights from datasets to support decision-making.",
    ],
  },
  {
    title: "MERN Stack Development Internship",
    org: "SKN Sinhgad College of Engineering, Korti, Pandharpur",
    period: "3 October 2025 – 13 October 2025",
    type: "On-site",
    points: [
      "Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
      "Designed responsive frontend interfaces.",
      "Developed and integrated backend APIs.",
      "Worked on application frontend and backend integration.",
    ],
  },
];

export const projectFilters = [
  "All Projects",
  "Full Stack",
  "AI / ML",
  "Web Development",
  "Security",
] as const;
export type ProjectFilter = (typeof projectFilters)[number];
export type ProjectCategory = Exclude<ProjectFilter, "All Projects">;

export type ProjectVisual = "rag" | "health" | "complaint" | "event" | "auth" | "library";

export type Project = {
  slug: string;
  title: string;
  category: string;
  highlight: string;
  description: string;
  tech: string[];
  categories: ProjectCategory[];
  visual: ProjectVisual;
  /** Public repository URL, or "" if not published yet. */
  github: string;
  /** Live demo URL, or "" until it's deployed. */
  demo: string;
  note?: string;
};

export const projects: Project[] = [
  {
    slug: "edurag-ai",
    title: "EduRAG AI | Engineering Study Assistant",
    category: "AI · EdTech",
    highlight: "AI + Document Intelligence",
    description:
      "An AI-powered educational platform that uses Retrieval-Augmented Generation (RAG) to provide context-aware answers from uploaded study materials. It supports document-based question answering, AI-generated notes, quizzes, and personalized learning.",
    tech: ["React.js", "Python", "MongoDB", "RAG", "AI/LLMs"],
    categories: ["AI / ML", "Full Stack"],
    visual: "rag",
    github: "https://github.com/Abhisheksurvas/EduRAG-AI-System",
    demo: "",
  },
  {
    slug: "smart-doctor",
    title: "AI-Based Smart Doctor Assistance System",
    category: "AI · Healthcare",
    highlight: "AI Healthcare",
    description:
      "An AI-based healthcare assistance project designed to provide users with preliminary health information, symptom-related guidance, and intelligent assistance through a digital interface.",
    tech: ["Python", "AI", "Machine Learning", "REST API"],
    categories: ["AI / ML"],
    visual: "health",
    github: "https://github.com/Abhisheksurvas/ai-healthcare-g",
    demo: "",
    note: "Educational prototype — not a medical diagnosis tool.",
  },
  {
    slug: "complaint-management",
    title: "Complaint Management System",
    category: "Full-Stack · MERN",
    highlight: "Full-Stack MERN",
    description:
      "A full-stack complaint management platform that allows users to register complaints and track their status through an integrated frontend and backend system.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    categories: ["Full Stack", "Web Development"],
    visual: "complaint",
    github: "https://github.com/Abhisheksurvas/Complaint-Management-System",
    demo: "",
  },
  {
    slug: "event-management",
    title: "Event Management System",
    category: "Web App · Events",
    highlight: "Event Organization",
    description:
      "A web application for organizing, managing, and displaying events with an interactive frontend and backend integration.",
    tech: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "MongoDB"],
    categories: ["Full Stack", "Web Development"],
    visual: "event",
    github: "https://github.com/Abhisheksurvas/Event-Management-Sys",
    demo: "",
  },
  {
    slug: "two-factor-auth",
    title: "2-Factor Authentication System",
    category: "Backend · Security",
    highlight: "Authentication & Security",
    description:
      "A backend-focused authentication project that enhances login security through OTP and email-based user verification.",
    tech: ["Python", "OTP", "Email Authentication", "Backend Security"],
    categories: ["Security"],
    visual: "auth",
    github: "https://github.com/Abhisheksurvas/NS-Project",
    demo: "",
  },
  {
    slug: "library-management",
    title: "Library Management System",
    category: "Web App · Database",
    highlight: "Library & Database",
    description:
      "A web-based library application with search, filtering, PDF viewing, and department-wise categorization of books.",
    tech: ["PHP", "HTML", "CSS", "MySQL", "XAMPP"],
    categories: ["Web Development"],
    visual: "library",
    github: "https://github.com/Abhisheksurvas/LMS-project-php",
    demo: "",
  },
];

export function filterProjects(list: Project[], filter: ProjectFilter): Project[] {
  if (filter === "All Projects") return list;
  return list.filter((p) => p.categories.includes(filter));
}

export type Certification = {
  title: string;
  issuer: string;
  year?: string;
  /** Certificate link, or "" — the View button only shows when this is set. */
  url: string;
};

export const certifications: Certification[] = [
  { title: "Generative AI Essentials", issuer: "TCS iON Career Edge", year: "2026", url: "" },
  { title: "Data Analytics using AI-LLMs", issuer: "AICTE & Vodafone Idea", year: "2024", url: "" },
  { title: "DBMS", issuer: "IIT Kharagpur — NPTEL", year: "2025", url: "" },
  { title: "MERN Stack Development Internship", issuer: "LeadSoft", url: "" },
];

export const githubFocus = [
  { title: "Coding & problem solving", body: "Practising logic and clean code through regular project work." },
  { title: "Full-stack applications", body: "MERN and PHP/MySQL apps with real frontend–backend integration." },
  { title: "AI project development", body: "RAG and LLM-powered tools like EduRAG AI and the Smart Doctor prototype." },
];
