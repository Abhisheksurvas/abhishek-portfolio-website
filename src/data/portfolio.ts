// All portfolio content lives here so it can be edited in one place.

export const profile = {
  name: "Abhishek Survase",
  firstName: "Abhishek",
  role: "Full-Stack Developer | AI Agent Developer",
  tagline:
    "I build fast, reliable web apps and AI agents that turn real-world problems into practical, production-ready software.",
  location: "Maharashtra, India",
  availability: "Open to internships — Summer 2027",
  email: "abhisheksurvase00@gmail.com",
  github: "https://github.com/Abhisheksurvas",
  linkedin: "https://www.linkedin.com/in/abhisheksurvase",
  resume: "/resume.pdf",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
] as const;

export const stats = [
  { value: "5+", label: "Full-stack projects shipped" },
  { value: "3", label: "AI / LLM systems built" },
  { value: "300+", label: "DSA problems solved" },
];

export const aboutPoints = [
  {
    title: "Web development",
    body: "From pixel-perfect React interfaces to REST APIs on Node.js and MongoDB — I enjoy owning a feature end to end.",
  },
  {
    title: "AI & agents",
    body: "I build LLM-powered tools with retrieval (RAG), tool-calling and evaluation, focused on answers people can trust.",
  },
  {
    title: "Problem solving",
    body: "I break messy problems into small, testable pieces and practise data structures and algorithms every week.",
  },
  {
    title: "Practical products",
    body: "Everything I make starts with a real user — a student, a patient, an admin — and a problem worth solving.",
  },
];

export type SkillGroup = { title: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  { title: "Languages", skills: ["Python", "JavaScript", "HTML", "CSS"] },
  { title: "Frontend & Backend", skills: ["React", "Node.js", "MongoDB"] },
  { title: "AI Engineering", skills: ["AI", "LLM", "RAG"] },
  { title: "Tooling", skills: ["Git"] },
];

export const allSkills = skillGroups.flatMap((g) => g.skills);

export type Project = {
  slug: string;
  title: string;
  tag: string;
  description: string;
  highlights: string[];
  tech: string[];
  github: string;
  demo: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "edurag-ai",
    title: "EduRAG AI",
    tag: "AI · Retrieval-Augmented Generation",
    description:
      "An AI-powered education assistant that uses Retrieval-Augmented Generation to give students accurate, context-based answers from their own course materials.",
    highlights: [
      "Answers grounded in uploaded PDF notes and course content",
      "Separate student and teacher dashboards with course management",
      "Department-wise learning and AI academic assistance",
    ],
    tech: ["Python", "LLM", "RAG", "React", "Node.js", "MongoDB"],
    github: "https://github.com/Abhisheksurvas/EduRAG-AI-System",
    demo: "https://github.com/Abhisheksurvas/EduRAG-AI-System#readme",
    featured: true,
  },
  {
    slug: "smart-doctor",
    title: "AI-Based Smart Doctor Assistance System",
    tag: "AI · Healthcare",
    description:
      "An AI-powered health assistant that guides users through symptoms, suggests possible conditions and next steps, and helps book the right specialist.",
    highlights: [
      "Conversational symptom checker powered by an LLM",
      "Triage levels with clear 'see a doctor' guidance",
      "Patient history and appointment dashboard",
    ],
    tech: ["Python", "AI", "LLM", "React", "Node.js", "MongoDB"],
    github: "https://github.com/Abhisheksurvas/ai-healthcare-g",
    demo: "https://github.com/Abhisheksurvas/ai-healthcare-g#readme",
    featured: true,
  },
  {
    slug: "complaint-management",
    title: "Complaint Management System",
    tag: "Full-Stack · Workflow",
    description:
      "A web app that streamlines registering, tracking and resolving complaints — users submit and follow their issues while admins assign and resolve them.",
    highlights: ["Complaint submission with live status tracking", "Admin tools to manage, assign and resolve issues"],
    tech: ["React", "Node.js", "MongoDB", "JavaScript"],
    github: "https://github.com/Abhisheksurvas/Complaint-Management-System",
    demo: "https://github.com/Abhisheksurvas/Complaint-Management-System#readme",
  },
  {
    slug: "event-management",
    title: "Event Management System",
    tag: "Full-Stack · Bookings",
    description:
      "A college event platform with role-based access: teachers request events, the HOD approves them, students register department-wise and the principal sees everything.",
    highlights: ["Teacher → HOD approval workflow", "Department-wise registration and downloadable reports"],
    tech: ["React", "Node.js", "MongoDB", "CSS"],
    github: "https://github.com/Abhisheksurvas/Event-Management-Sys",
    demo: "https://github.com/Abhisheksurvas/Event-Management-Sys#readme",
  },
  {
    slug: "two-factor-auth",
    title: "2-Factor Authentication System",
    tag: "Security · Auth",
    description:
      "A secure two-factor login and verification system combining a password, an email OTP, and QR-based Google Authenticator (TOTP) codes.",
    highlights: ["Email OTP verification step", "QR enrollment for Google Authenticator (TOTP)"],
    tech: ["Node.js", "JavaScript", "MongoDB", "HTML"],
    github: "https://github.com/Abhisheksurvas/NS-Project",
    demo: "https://github.com/Abhisheksurvas/NS-Project#readme",
  },
];

export const certifications = [
  {
    title: "Generative AI with Large Language Models",
    issuer: "DeepLearning.AI · Coursera",
    year: "2026",
    url: "https://www.coursera.org/learn/generative-ai-with-llms",
  },
  {
    title: "Python for Everybody Specialization",
    issuer: "University of Michigan · Coursera",
    year: "2025",
    url: "https://www.coursera.org/specializations/python",
  },
  {
    title: "MongoDB Node.js Developer Path",
    issuer: "MongoDB University",
    year: "2025",
    url: "https://learn.mongodb.com/learning-paths/mongodb-nodejs-developer-path",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2024",
    url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
  },
];

export const achievements = [
  {
    title: "Hackathon Finalist",
    body: "Top 10 team at an inter-college hackathon for the Smart Doctor Assistance prototype.",
  },
  {
    title: "300+ problems solved",
    body: "Consistent DSA practice on LeetCode and GeeksforGeeks across arrays, graphs and DP.",
  },
  {
    title: "Open-source contributor",
    body: "Bug fixes and documentation pull requests to beginner-friendly JavaScript projects.",
  },
];
