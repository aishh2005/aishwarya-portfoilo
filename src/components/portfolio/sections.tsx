import { Reveal } from "./Reveal";
import {
  Shield, User, GraduationCap, Briefcase, Cpu, Box, FolderGit2, Send,
  Mail, Phone, MapPin, Linkedin, Github, Code2, Search, UserSearch,
  FileText, Network, ShieldCheck, Target, Brain, ExternalLink, ChevronDown,
} from "lucide-react";
 import profileImg from "@/assets/profile.png";
import shieldImg from "@/assets/shield.png";
import eduImg from "@/assets/education.png";
import autismImg from "@/assets/project-autism.jpg";
import foodImg from "@/assets/project-food.jpg";

const cyan = { color: "var(--cyan)" } as const;

function SectionTitle({ icon: Icon, children, id }: { icon: any; children: React.ReactNode; id: string }) {
  return (
    <div id={id} className="flex items-center gap-3 mb-8 pt-4">
      <div className="w-10 h-10 rounded-md neon-border flex items-center justify-center" style={cyan}>
        <Icon className="w-5 h-5" />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold tracking-wider uppercase" style={cyan}>
        {children}
      </h2>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-24 pb-20 overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="absolute inset-0 pointer-events-none" aria-hidden style={{
        background: "radial-gradient(circle at 80% 40%, oklch(0.7 0.2 310 / 0.22), transparent 55%), radial-gradient(circle at 12% 25%, oklch(0.85 0.15 200 / 0.18), transparent 55%), radial-gradient(circle at 50% 100%, oklch(0.7 0.2 310 / 0.15), transparent 60%)",
      }} />
      {/* Subtle particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
              width: 3, height: 3,
              background: i % 2 ? "var(--purple)" : "var(--cyan)",
              opacity: 0.5,
              boxShadow: `0 0 8px ${i % 2 ? "var(--purple)" : "var(--cyan)"}`,
              animation: `float ${5 + (i % 5)}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-[400px_1fr_360px] gap-10 items-center">
        {/* Profile frame */}
        <Reveal>
          <div className="relative mx-auto w-full" style={{ maxWidth: 380 }}>
            <div className="hud-frame relative overflow-hidden">
              <span className="hud-corner-tr" />
              <span className="hud-corner-bl" />
              <div className="rounded-md overflow-hidden relative neon-border">
                <img src={profileImg} alt="Aishwarya Hemant Juwlekar" width={1024} height={1024} className="w-full h-auto block" />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Center content */}
        <Reveal delay={150}>
          <div className="text-center lg:text-left">
            <div className="flex items-center gap-3 mb-3 justify-center lg:justify-start">
              <span className="text-foreground/80 text-base md:text-lg italic">Hi, I'm</span>
              <span className="h-px w-16" style={{ background: "linear-gradient(90deg, var(--cyan), transparent)" }} />
            </div>
            <p className="tracking-[0.25em] text-foreground/90 text-sm md:text-base mb-5 font-display">
              AISHWARYA HEMANT JUWLEKAR
            </p>

             <h1 className="font-display md:text-6xl lg:text-7xl font-extrabold leading-[1.02] mb-1 text-gradient glow-text text-5xl">
               CYBER SECURITY &
             </h1>
             <h1 className="font-display md:text-6xl lg:text-7xl font-extrabold leading-[1.02] text-gradient glow-text text-5xl">
               NETWORKING
            </h1>

            <div className="flex items-center gap-3 my-6 justify-center lg:justify-start">
              <span className="h-px flex-1 max-w-[140px]" style={{ background: "linear-gradient(90deg, transparent, var(--cyan))" }} />
              <Shield className="w-4 h-4" style={cyan} />
              <span className="h-px flex-1 max-w-[140px]" style={{ background: "linear-gradient(90deg, var(--purple), transparent)" }} />
            </div>

            <p className="font-display tracking-[0.25em] text-sm md:text-base mb-5">
              <span style={cyan}>DEFENDING SYSTEMS.</span>{" "}
              <span style={{ color: "var(--purple)" }}>SECURING CONNECTIONS.</span>
            </p>
            <p className="text-foreground/80 max-w-xl leading-relaxed mb-8 mx-auto lg:mx-0">
              Focused on protecting digital assets and building secure network infrastructures.
              Driven by curiosity and guided by a strong passion for cybersecurity and threat detection.
            </p>

            <div className="flex justify-center lg:justify-start">
              <a href="#contact" className="btn-neon">
                <User className="w-4 h-4" /> Contact Me
              </a>
            </div>
          </div>
        </Reveal>

        {/* Right shield */}
        <Reveal delay={300}>
          <div className="hidden lg:block relative">
            <div className="relative aspect-square">
              <img src={shieldImg} alt="" width={768} height={896} className="floaty pulse-glow absolute inset-0 m-auto w-[95%] h-auto" />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce" style={cyan}>
        <ChevronDown className="w-5 h-5" />
        <span className="font-display text-xs tracking-[0.3em]">SCROLL DOWN</span>
      </div>
    </section>
  );
}

export function About() {
  const highlights = [
    { icon: ShieldCheck, title: "Security", sub: "Focused" },
    { icon: Network, title: "Network", sub: "Aware" },
    { icon: Target, title: "Threat", sub: "Conscious" },
    { icon: Brain, title: "Continuous", sub: "Learning" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <Reveal>
        <div className="neon-card rounded-2xl p-8 md:p-10">
          <SectionTitle icon={User} id="about">About Me</SectionTitle>
          <div className="space-y-4 text-foreground/85 leading-relaxed max-w-3xl">
            <p>
              I am a recent B.Sc. Information Technology graduate with a strong passion for
              cybersecurity and networking. My journey in tech is driven by curiosity about how
              systems and networks work and a deep interest in identifying vulnerabilities and
              securing digital environments.
            </p>
            <p>
              During my cybersecurity internship, I gained hands-on experience in security
              assessments, basic penetration testing, and incident documentation, which
              strengthened my understanding of real-world security challenges.
            </p>
            <p>
              I am particularly passionate about ethical hacking, threat detection, and building
              secure IT infrastructures.
            </p>
            <p>Outside of tech, I enjoy travelling and expressing creativity through painting and mandala art.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {highlights.map((h) => (
              <div key={h.title} className="neon-card rounded-lg p-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-md flex items-center justify-center" style={{ background: "oklch(0.85 0.15 200 / 0.1)", color: "var(--cyan)" }}>
                  <h.icon className="w-4 h-4" />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold">{h.title}</div>
                  <div className="text-xs" style={{ color: "var(--purple)" }}>{h.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Education() {
  const items = [
    { year: "2026", title: "B.Sc. Information Technology", place: "Patkar Varde College", note: "Graduating in 2026" },
    { year: "2023", title: "Higher Secondary Education", place: "Thomas Baptista Jr. College", note: "Completed in 2023" },
    { year: "2021", title: "Secondary School Education", place: "St. Xaviers High School", note: "Completed in 2021" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <Reveal>
        <div className="neon-card rounded-2xl p-8 md:p-10 grid md:grid-cols-[1fr_280px] gap-8">
          <div>
            <SectionTitle icon={GraduationCap} id="education">Education</SectionTitle>
            <div className="relative pl-8">
              <span className="absolute left-3 top-2 bottom-2 w-px" style={{ background: "linear-gradient(180deg, var(--cyan), var(--purple))" }} />
              {items.map((it, i) => (
                <div key={i} className="relative mb-8 last:mb-0">
                  <span className="absolute -left-[22px] top-1.5 w-3 h-3 rounded-full" style={{ background: "var(--cyan)", boxShadow: "0 0 12px var(--cyan)" }} />
                  <div className="font-display text-sm" style={cyan}>{it.year}</div>
                  <div className="font-semibold mt-1">{it.title}</div>
                  <div className="text-sm" style={{ color: "var(--purple)" }}>{it.place}</div>
                  <div className="text-xs text-muted-foreground mt-1">📅 {it.note}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <img src={eduImg} alt="" width={640} height={512} className="floaty w-full h-auto" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Experience() {
  const exps = [
    {
      icon: Shield,
      title: "Cyber Security Intern",
      company: "Heptaverse Technologies",
      period: "April 2025 – July 2025",
      points: [
        "Conducted security assessments and identified system vulnerabilities.",
        "Performed basic penetration testing in controlled environments.",
        "Documented incidents and prepared detailed reports.",
      ],
    },
    {
      icon: Code2,
      title: "Web Development Intern",
      company: "Sutantars",
      period: "May 2024 – July 2024",
      points: [
        "Built responsive user interfaces using HTML, CSS, and JavaScript.",
        "Followed secure coding practices in frontend development.",
        "Improved website performance and user experience.",
      ],
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <Reveal>
        <div className="neon-card rounded-2xl p-8 md:p-10">
          <SectionTitle icon={Briefcase} id="experience">Experience</SectionTitle>
          <div className="relative pl-10 space-y-10">
            <span className="absolute left-4 top-2 bottom-2 w-px" style={{ background: "linear-gradient(180deg, var(--cyan), var(--purple))" }} />
            {exps.map((e, i) => (
              <div key={i} className="grid md:grid-cols-[1fr_1fr] gap-6 relative">
                <span className="absolute -left-[26px] top-2 w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "oklch(0.18 0.04 265)", border: "1px solid var(--cyan)", color: "var(--cyan)", boxShadow: "0 0 16px oklch(0.85 0.15 200 / 0.4)" }}>
                  <e.icon className="w-4 h-4" />
                </span>
                <div>
                  <div className="font-semibold text-lg">{e.title}</div>
                  <div style={{ color: "var(--cyan)" }}>{e.company}</div>
                  <div className="text-xs text-muted-foreground mt-1">📅 {e.period}</div>
                </div>
                <ul className="space-y-2 text-sm text-foreground/85">
                  {e.points.map((p, j) => (
                    <li key={j} className="flex gap-2"><span style={{ color: "var(--purple)" }}>▹</span>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Skills() {
  const groups = [
    { title: "Cybersecurity & Networking", tags: ["Cybersecurity Fundamentals", "Network Security", "Threat Detection", "Vulnerability Assessment", "Basic Penetration Testing", "Incident Documentation"] },
    { title: "Technical Skills & Tools", tags: ["Python", "JavaScript", "Linux", "Git", "GitHub", "PuTTY"] },
    { title: "Concepts", tags: ["System Vulnerabilities", "Risk Assessment", "Security Operations"] },
    { title: "Soft Skills", tags: ["Problem Solving", "Analytical Thinking", "Attention to Detail", "Team Collaboration", "Communication", "Adaptability", "Continuous Learning"] },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <Reveal>
        <div className="neon-card rounded-2xl p-8 md:p-10">
          <SectionTitle icon={Cpu} id="skills">Skills</SectionTitle>
          <div className="space-y-6">
            {groups.map((g) => (
              <div key={g.title}>
                <h3 className="text-base font-semibold mb-3" style={{ color: "var(--cyan)" }}>{g.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.tags.map((t) => <span key={t} className="chip">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Services() {
  const list = [
    { icon: ShieldCheck, title: "Security Assessments", desc: "Identify potential vulnerabilities in systems and networks." },
    { icon: Search, title: "Vulnerability Analysis", desc: "Analyze and evaluate security weaknesses and risks." },
    { icon: UserSearch, title: "Penetration Testing (Basic)", desc: "Perform entry-level penetration testing in safe and controlled environments." },
    { icon: FileText, title: "Incident Documentation", desc: "Document and report security incidents with clear recommendations." },
    { icon: Network, title: "Network Security Support", desc: "Assist in securing networks and IT infrastructures with best practices." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <Reveal>
        <div className="neon-card rounded-2xl p-8 md:p-10">
          <SectionTitle icon={Box} id="services">Services</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {list.map((s) => (
              <div key={s.title} className="neon-card rounded-xl p-5 text-center">
                <div className="w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center" style={{ background: "oklch(0.7 0.2 310 / 0.12)", color: "var(--cyan)", border: "1px solid oklch(0.85 0.15 200 / 0.3)" }}>
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-sm mb-2">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Projects() {
  const items = [
    {
      img: autismImg,
      title: "Website for Autistic Children",
      desc: "React-based web application designed with accessibility and user-friendliness in mind. Focuses on creating an inclusive digital experience for children with special needs.",
      tags: ["React", "JavaScript", "CSS", "Accessibility"],
    },
    {
      img: foodImg,
      title: "Juwlekar's Foods Website",
      desc: "Responsive website built using HTML, CSS, and JavaScript for a food-based business. Features clean UI, interactive elements, and smooth experience across devices.",
      tags: ["HTML", "CSS", "JavaScript"],
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <Reveal>
        <div className="neon-card rounded-2xl p-8 md:p-10">
          <SectionTitle icon={FolderGit2} id="projects">Projects</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {items.map((p) => (
              <div key={p.title} className="neon-card rounded-xl overflow-hidden flex flex-col">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" width={800} height={450} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-semibold">{p.title}</h3>
                    <a href="#" aria-label="View project" style={cyan}><ExternalLink className="w-4 h-4" /></a>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => <span key={t} className="chip">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Contact() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 pb-24">
      <Reveal>
        <div className="neon-card rounded-2xl p-8 md:p-10">
          <SectionTitle icon={Send} id="contact">Contact Me</SectionTitle>
          <div className="grid lg:grid-cols-[1fr_1fr_1fr] gap-8">
            <div>
              <p className="text-foreground/85 leading-relaxed mb-6">
                I'm always open to discussing cybersecurity opportunities, collaborations, or networking.
                Let's connect and build a more secure digital world together!
              </p>
            </div>
            <div className="space-y-4 text-sm">
              {[
                { icon: Mail, text: "aishwaryahjuwlekar@gmail.com", href: "mailto:aishwaryahjuwlekar@gmail.com" },
                { icon: Phone, text: "+91 8421099761", href: "tel:+918421099761" },
                { icon: MapPin, text: "Virar, Mumbai, Maharashtra, India" },
                { icon: Linkedin, text: "linkedin.com/in/aishwarya-juwlekar", href: "https://linkedin.com/in/aishwarya-juwlekar" },
                { icon: Github, text: "GitHub Link (To be added soon)" },
              ].map((c, i) => (
                <a key={i} href={c.href || "#"} target={c.href?.startsWith("http") ? "_blank" : undefined} rel="noopener" className="flex items-center gap-3 hover:text-cyan transition" style={{ color: "inherit" }}>
                  <span className="w-9 h-9 rounded-md neon-border flex items-center justify-center shrink-0" style={cyan}>
                    <c.icon className="w-4 h-4" />
                  </span>
                  <span className="break-all">{c.text}</span>
                </a>
              ))}
            </div>
            <form
              onSubmit={(e) => { e.preventDefault(); alert("Thanks! Your message has been queued."); }}
              className="space-y-3"
            >
              <div className="grid grid-cols-2 gap-3">
                <input required placeholder="Your Name" className="bg-input/40 border border-border focus:border-cyan rounded-md px-3 py-2 text-sm outline-none transition" style={{ borderColor: "var(--border)" }} />
                <input required type="email" placeholder="Your Email" className="bg-input/40 border border-border focus:border-cyan rounded-md px-3 py-2 text-sm outline-none transition" />
              </div>
              <textarea required placeholder="Your Message" rows={5} className="w-full bg-input/40 border border-border focus:border-cyan rounded-md px-3 py-2 text-sm outline-none transition" />
              <button type="submit" className="btn-neon w-full justify-center">
                Contact Me <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
          <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Aishwarya Hemant Juwlekar — Defending systems. Securing connections.
          </div>
        </div>
      </Reveal>
    </section>
  );
}
