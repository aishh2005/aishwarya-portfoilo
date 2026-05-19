import { Reveal } from "./Reveal";
import {
  Shield, User, GraduationCap, Briefcase, Cpu, Box, FolderGit2, Send,
  Mail, Phone, MapPin, Linkedin, Github, Code2, Search, UserSearch,
  FileText, Network, ShieldCheck, Target, Brain, ExternalLink, ChevronDown,
  Award, BadgeCheck, Terminal, ShieldAlert, X,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
 import profileImg from "@/assets/profile.png";
import shieldImg from "@/assets/shield.png";
import certEthicalHacking from "@/assets/cert-ethical-hacking.jpg";
import certRttdm1 from "@/assets/cert-rttdm-1.png";
import certPythonCyberSec from "@/assets/cert-python-cybersec.png";
import certRttdm2 from "@/assets/cert-rttdm-2.jpg";
import eduImg from "@/assets/education.png";
 import autismImg from "@/assets/project-autism.png";
import foodImg from "@/assets/project-food.jpg";
import aboutPortrait from "@/assets/about-cyber-portrait.png";
import emailjs from "@emailjs/browser";

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
    <section id="home" className="relative min-h-[100svh] pt-20 pb-12 overflow-hidden flex items-center">
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

      <div className="relative mx-auto max-w-7xl w-full px-6 grid lg:grid-cols-[320px_1fr_300px] gap-8 items-center">
        {/* Profile frame */}
        <Reveal>
          <div className="relative mx-auto w-full" style={{ maxWidth: 360 }}>
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
            <p className="tracking-[0.25em] text-foreground/90 text-sm md:text-base mb-4 font-display">
              AISHWARYA HEMANT JUWLEKAR
            </p>

             <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.02] mb-1 text-gradient glow-text">
               CYBER SECURITY &
             </h1>
             <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.02] text-gradient glow-text">
               NETWORKING
            </h1>

            <div className="flex items-center gap-3 my-4 justify-center lg:justify-start">
              <span className="h-px flex-1 max-w-[140px]" style={{ background: "linear-gradient(90deg, transparent, var(--cyan))" }} />
              <Shield className="w-4 h-4" style={cyan} />
              <span className="h-px flex-1 max-w-[140px]" style={{ background: "linear-gradient(90deg, var(--purple), transparent)" }} />
            </div>

            <p className="font-display tracking-[0.25em] text-xs md:text-sm mb-4">
              <span style={cyan}>DEFENDING SYSTEMS.</span>{" "}
              <span style={{ color: "var(--purple)" }}>SECURING CONNECTIONS.</span>
            </p>
            <p className="text-foreground/80 max-w-xl leading-relaxed mb-8 mx-auto lg:mx-0 text-sm md:text-base">
              Focused on protecting digital assets and building secure network infrastructures.
              Driven by curiosity and guided by a strong passion for cybersecurity and threat detection.
            </p>

            <div className="flex justify-center lg:justify-start mb-6">
              <a href="#contact" className="btn-neon">
                <User className="w-4 h-4" /> Contact Me
              </a>
            </div>
          </div>
        </Reveal>

        {/* Right shield */}
        <Reveal delay={300}>
          <div className="hidden lg:block relative">
          <div className="relative aspect-square holo-stage">
            {/* Rotating rings */}
            <div className="holo-ring holo-ring-1" aria-hidden />
            <div className="holo-ring holo-ring-2" aria-hidden />
            <div className="holo-ring holo-ring-3" aria-hidden />
            {/* Soft radial aura */}
            <div className="holo-aura" aria-hidden />
            {/* Light streaks */}
            <span className="holo-streak holo-streak-a" aria-hidden />
            <span className="holo-streak holo-streak-b" aria-hidden />
            {/* Shield */}
            <img src={shieldImg} alt="" width={768} height={896} className="floaty pulse-glow absolute inset-0 m-auto w-[78%] h-auto drop-shadow-[0_0_40px_var(--cyan)] z-10" />
            {/* Orbiting particles */}
            <div className="absolute inset-0 orbit-slow z-0" aria-hidden>
              <span className="holo-dot" style={{ top: "8%", left: "50%", background: "var(--cyan)" }} />
              <span className="holo-dot" style={{ bottom: "10%", right: "12%", background: "var(--purple)" }} />
            </div>
            <div className="absolute inset-0 orbit-rev z-0" aria-hidden>
              <span className="holo-dot" style={{ top: "20%", right: "8%", background: "var(--cyan)" }} />
              <span className="holo-dot" style={{ bottom: "20%", left: "10%", background: "var(--purple)" }} />
            </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce" style={cyan}>
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
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 items-start">
            <div>
              <div className="space-y-3 text-foreground/85 leading-relaxed">
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
            </div>

            {/* Personal cyber portrait */}
            <div className="relative hidden md:block self-center">
              <div className="relative aspect-square max-w-sm mx-auto holo-stage">
                <div className="holo-aura" aria-hidden />
                <div className="holo-ring holo-ring-1" aria-hidden />
                <div className="holo-ring holo-ring-2" aria-hidden />
                <span className="holo-streak holo-streak-a" aria-hidden />
                <span className="holo-streak holo-streak-b" aria-hidden />
                <img
                  src={aboutPortrait}
                  alt="Cyber portrait of Aishwarya"
                  loading="eager"
                  width={896}
                  height={1024}
                  className="floaty relative z-10 w-[88%] h-auto mx-auto block drop-shadow-[0_0_30px_var(--cyan)]"
                />
                <div className="absolute inset-0 orbit-slow z-0" aria-hidden>
                  <span className="holo-dot" style={{ top: "8%", left: "50%", background: "var(--cyan)" }} />
                  <span className="holo-dot" style={{ bottom: "10%", right: "12%", background: "var(--purple)" }} />
                </div>
              </div>
            </div>
          </div>
          {/* Highlights row at bottom */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {highlights.map((h) => (
              <div key={h.title} className="neon-card rounded-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-md flex items-center justify-center shrink-0" style={{ background: "oklch(0.85 0.15 200 / 0.1)", color: "var(--cyan)" }}>
                  <h.icon className="w-5 h-5" />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold font-sans">{h.title}</div>
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
    { year: "2026", title: "B.Sc. Information Technology", place: "Patkar Varde College", note: "Graduating in 2026", icon: GraduationCap },
    { year: "2023", title: "Higher Secondary Education", place: "Thomas Baptista Jr. College", note: "Completed in 2023", icon: GraduationCap },
    { year: "2021", title: "Secondary School Education", place: "St. Xaviers High School", note: "Completed in 2021", icon: GraduationCap },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <Reveal>
        <div className="neon-card rounded-2xl p-8 md:p-10">
          <SectionTitle icon={GraduationCap} id="education">Education</SectionTitle>
          <div className="grid sm:grid-cols-2 gap-6">
            {items.map((it, i) => (
              <Reveal key={i} delay={i * 100} className={i === items.length - 1 ? "sm:col-span-2 sm:max-w-[calc(50%-12px)] sm:mx-auto sm:w-full" : ""}>
                <div className="edu-card neon-card rounded-xl p-6 h-full flex flex-col gap-3 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm px-3 py-1 rounded-full neon-border" style={cyan}>{it.year}</span>
                    <span className="w-10 h-10 rounded-md flex items-center justify-center neon-border" style={cyan}>
                      <it.icon className="w-5 h-5" />
                    </span>
                  </div>
                  <div className="font-semibold font-sans text-lg leading-tight">{it.title}</div>
                  <div className="text-sm" style={{ color: "var(--purple)" }}>{it.place}</div>
                  <div className="text-xs text-muted-foreground mt-auto">📅 {it.note}</div>
                </div>
              </Reveal>
            ))}
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
          <div className="space-y-8">
            {exps.map((e, i) => (
              <div key={i} className="grid md:grid-cols-[1fr_1fr] gap-6 items-start">
                <div className="flex items-start gap-3">
                  <span className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "oklch(0.18 0.04 265)", border: "1px solid var(--cyan)", color: "var(--cyan)", boxShadow: "0 0 16px oklch(0.85 0.15 200 / 0.4)" }}>
                    <e.icon className="w-4 h-4" />
                  </span>
                  <div className="min-w-0">
                    <div className="font-semibold font-sans text-lg leading-tight">{e.title}</div>
                    <div style={{ color: "var(--cyan)" }}>{e.company}</div>
                    <div className="text-xs text-muted-foreground mt-1">📅 {e.period}</div>
                  </div>
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
                <h3 className="text-base font-semibold font-sans mb-3" style={{ color: "var(--cyan)" }}>{g.title}</h3>
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

export function Certifications() {
  const list = [
    {
      icon: ShieldAlert,
      title: "Ethical Hacking Concepts",
      issuer: "Infosys Springboard",
      date: "24 February 2025",
      desc: "Completed a course on ethical hacking concepts, gaining strong knowledge of cybersecurity fundamentals, ethical hacking techniques, and securing digital assets.",
      image: certEthicalHacking,
    },
    {
      icon: ShieldCheck,
      title: "Real-Time Threat Detection and Management",
      issuer: "Patkar-Varde College (Erasmus+ CS4ALL)",
      date: "June 2025",
      desc: "Learned real-time threat detection, cybersecurity practices, and incident management through a hands-on academic program.",
      image: certRttdm1,
    },
    {
      icon: Terminal,
      title: "Python for Cyber Security",
      issuer: "Patkar-Varde College (Erasmus+ CS4ALL)",
      date: "Dec 2025",
      desc: "Gained practical knowledge of using Python for cybersecurity, improving problem-solving and analytical skills.",
      image: certPythonCyberSec,
    },
    {
      icon: BadgeCheck,
      title: "Real-Time Threat Detection and Management (Advanced)",
      issuer: "",
      date: "28 February 2026",
      desc: "Strengthened expertise in identifying and managing real-time cybersecurity threats and improved incident response skills.",
      image: certRttdm2,
    },
  ];
  const [active, setActive] = useState<number | null>(null);
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActive(null); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);
  const current = active !== null ? list[active] : null;
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <Reveal>
        <div className="neon-card rounded-2xl p-8 md:p-10">
          <SectionTitle icon={Award} id="certifications">Certifications</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {list.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="flip-card h-64 w-full group" onClick={() => setActive(i)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter") setActive(i); }}>
                  <div className="flip-card-inner">
                    {/* Front */}
                    <div className="flip-card-front neon-card items-center justify-center text-center gap-3">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: "oklch(0.7 0.2 310 / 0.12)", color: "var(--cyan)", border: "1px solid oklch(0.85 0.15 200 / 0.3)" }}>
                        <c.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold font-sans text-sm leading-tight">{c.title}</h3>
                      {c.issuer && (
                        <p className="text-xs" style={{ color: "var(--purple)" }}>{c.issuer}</p>
                      )}
                      <p className="text-[11px] text-muted-foreground">📅 {c.date}</p>
                    </div>
                    {/* Back */}
                    <div className="flip-card-back neon-card overflow-hidden !p-0" style={{ borderColor: "var(--cyan)", boxShadow: "0 0 30px color-mix(in oklab, var(--cyan) 35%, transparent)" }}>
                      <img src={c.image} alt={c.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
      {current && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
          style={{ background: "oklch(0.05 0.02 265 / 0.7)", backdropFilter: "blur(8px)" }}
          onClick={() => setActive(null)}
        >
          <div
            className="neon-card rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden grid md:grid-cols-2 relative animate-scale-in"
            onClick={(e) => e.stopPropagation()}
            style={{ borderColor: "var(--cyan)", boxShadow: "0 0 40px color-mix(in oklab, var(--cyan) 35%, transparent)" }}
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute top-3 right-3 w-9 h-9 rounded-md neon-border flex items-center justify-center z-10 hover:scale-110 transition"
              style={cyan}
            >
              <X className="w-4 h-4" />
            </button>
            <div className="bg-black/40 flex items-center justify-center p-4">
              <img src={current.image} alt={current.title} className="max-h-[80vh] w-full object-contain rounded-md" />
            </div>
            <div className="p-6 md:p-8 flex flex-col gap-4 overflow-y-auto">
              <h3 className="font-display text-xl md:text-2xl font-bold" style={cyan}>{current.title}</h3>
              {current.issuer && (
                <p className="text-sm" style={{ color: "var(--purple)" }}>{current.issuer}</p>
              )}
              <p className="text-xs text-muted-foreground">📅 {current.date}</p>
              <p className="text-sm leading-relaxed text-foreground/90">{current.desc}</p>
            </div>
          </div>
        </div>
      )}
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
      href: "https://talk-to-me-82a68.web.app/",
    },
    {
      img: foodImg,
      title: "Juwlekar's Foods Website",
      desc: "Responsive website built using HTML, CSS, and JavaScript for a food-based business. Features clean UI, interactive elements, and smooth experience across devices.",
      tags: ["HTML", "CSS", "JavaScript"],
      href: "https://github.com/aishh2005/Juwlekars_Foods",
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
                    <h3 className="font-semibold font-sans">{p.title}</h3>
                    <a href={p.href} target="_blank" rel="noopener noreferrer" aria-label="View project" style={cyan}><ExternalLink className="w-4 h-4" /></a>
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
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    const form = formRef.current;
    const fromName = (form.elements.namedItem("from_name") as HTMLInputElement).value;
    const fromEmail = (form.elements.namedItem("from_email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    const time = new Date().toLocaleString();
    const params = {
      from_name: fromName,
      from_email: fromEmail,
      name: fromName,
      email: fromEmail,
      message,
      time,
    };
    emailjs
      .send("service_k35gk34", "template_nshnh2s", params, { publicKey: "fx3n2QaHtxPv7yX-c" })
      .then(() => {
        setStatus("sent");
        formRef.current?.reset();
        setTimeout(() => setStatus("idle"), 4000);
      })
      .catch(() => setStatus("error"));
  };
  const contactItems = [
    { icon: Mail, label: "Email", text: "aishwaryahjuwlekar@gmail.com", href: "mailto:aishwaryahjuwlekar@gmail.com" },
    { icon: Phone, label: "Phone", text: "+91 8421099761", href: "tel:+918421099761" },
    { icon: MapPin, label: "Location", text: "Virar, Mumbai, Maharashtra, India" },
    { icon: Linkedin, label: "LinkedIn", text: "linkedin.com/in/aishwarya-juwlekar", href: "https://linkedin.com/in/aishwarya-juwlekar" },
    { icon: Github, label: "GitHub", text: "github.com/aishh2005", href: "https://github.com/aishh2005" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 pb-24">
      <Reveal>
        <div className="neon-card rounded-2xl p-8 md:p-10">
          <SectionTitle icon={Send} id="contact">Contact Me</SectionTitle>
          <p className="text-foreground/85 leading-relaxed max-w-3xl mb-10">
            I'm always open to discussing cybersecurity opportunities, collaborations, or networking.
            Let's connect and build a more secure digital world together!
          </p>
          <div className="grid lg:grid-cols-[0.9fr_1.6fr] gap-10 lg:gap-14 relative">
            {/* Glowing divider */}
            <span aria-hidden className="hidden lg:block absolute top-0 bottom-0 left-[37%] w-px" style={{ background: "linear-gradient(180deg, transparent, var(--cyan), var(--purple), transparent)", boxShadow: "0 0 12px var(--cyan)" }} />
            {/* LEFT — contact info */}
            <div className="flex flex-col gap-5">
              {contactItems.map((c) => (
                <a
                  key={c.label}
                  href={c.href || "#"}
                  target={c.href?.startsWith("http") ? "_blank" : undefined}
                  rel="noopener"
                  className="contact-row group flex items-center gap-4 p-3 rounded-lg transition-all duration-300"
                >
                  <span className="w-11 h-11 rounded-md neon-border flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110" style={cyan}>
                    <c.icon className="w-5 h-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="font-display text-[10px] tracking-[0.25em]" style={{ color: "var(--purple)" }}>{c.label}</div>
                    <div className="text-sm text-foreground/90 break-all">{c.text}</div>
                  </div>
                </a>
              ))}
            </div>
            {/* RIGHT — form */}
            <form ref={formRef} onSubmit={onSubmit} className="cyber-form space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="cyber-field">
                  <label className="cyber-label">Name</label>
                  <input required type="text" name="from_name" placeholder="Your Name" className="cyber-input" />
                </div>
                <div className="cyber-field">
                  <label className="cyber-label">Email</label>
                  <input required type="email" name="from_email" placeholder="you@example.com" className="cyber-input" />
                </div>
              </div>
              <div className="cyber-field">
                <label className="cyber-label">Message</label>
                <textarea required name="message" placeholder="Tell me about your project or just say hi..." rows={8} className="cyber-input cyber-textarea" />
              </div>
              <button type="submit" disabled={status === "sending"} className="btn-neon w-full justify-center text-base py-4">
                {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent ✓" : "Contact Me"}
                <Send className="w-4 h-4" />
              </button>
              {status === "error" && (
                <p className="text-xs text-center" style={{ color: "var(--destructive)" }}>Failed to send. Please try again or email directly.</p>
              )}
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
