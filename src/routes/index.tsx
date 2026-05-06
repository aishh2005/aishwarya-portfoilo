import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import {
  Hero, About, Education, Experience, Skills, Certifications, Projects, Contact,
} from "@/components/portfolio/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aishwarya Hemant Juwlekar — Cybersecurity & Networking Portfolio" },
      { name: "description", content: "Cybersecurity & Networking enthusiast. B.Sc. IT graduate specializing in threat detection, penetration testing, and secure web development." },
      { property: "og:title", content: "Aishwarya Hemant Juwlekar — Cybersecurity Portfolio" },
      { property: "og:description", content: "Defending systems. Securing connections." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
