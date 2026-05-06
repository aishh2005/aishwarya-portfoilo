import { useEffect, useState } from "react";
import { Linkedin, Mail, Headphones } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const y = window.scrollY + 120;
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActive(l.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-md neon-border flex items-center justify-center font-display font-bold text-cyan glow-text" style={{ color: "var(--cyan)" }}>
            AJ
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`transition-colors relative ${
                active === l.id ? "text-cyan" : "text-foreground/80 hover:text-foreground"
              }`}
              style={active === l.id ? { color: "var(--cyan)" } : undefined}
            >
              {l.label}
              {active === l.id && (
                <span
                  className="absolute -bottom-1 left-0 right-0 h-px"
                  style={{ background: "var(--cyan)", boxShadow: "0 0 10px var(--cyan)" }}
                />
              )}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a aria-label="LinkedIn" href="https://linkedin.com/in/aishwarya-juwlekar" target="_blank" rel="noopener" className="w-9 h-9 rounded-md neon-border flex items-center justify-center hover:scale-110 transition" style={{ color: "var(--cyan)" }}>
            <Linkedin className="w-4 h-4" />
          </a>
          <a aria-label="Support" href="#contact" className="w-9 h-9 rounded-md neon-border flex items-center justify-center hover:scale-110 transition" style={{ color: "var(--cyan)" }}>
            <Headphones className="w-4 h-4" />
          </a>
          <a aria-label="Email" href="mailto:aishwaryahjuwlekar@gmail.com" className="w-9 h-9 rounded-md neon-border flex items-center justify-center hover:scale-110 transition" style={{ color: "var(--cyan)" }}>
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
