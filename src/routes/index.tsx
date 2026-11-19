import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { GitHubSection } from "@/components/portfolio/GitHubSection";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { BackToTop } from "@/components/portfolio/BackToTop";

const title = "Abhishek Survase — Full-Stack & AI Developer Portfolio";
const description =
  "Abhishek Survase is a Computer Science Engineering student and Full-Stack & AI Agent Developer building React, Node.js, MongoDB and RAG-powered apps. Open to internships.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: "Abhishek Survase, Full-Stack Developer, AI Developer, React, Node.js, MongoDB, RAG, Internship, Portfolio" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Abhishek Survase",
          jobTitle: "Full-Stack Developer | AI Agent Developer",
          email: "mailto:abhisheksurvase00@gmail.com",
          alumniOf: "SKN Sinhgad College of Engineering, Pandharpur",
          sameAs: ["https://github.com/Abhisheksurvas", "https://linkedin.com/in/abhishek-survase"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="noise bg-midnight relative min-h-screen overflow-x-clip">
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
