import { useEffect, useState } from "react";
import { Download } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
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
        <a href="https://drive.google.com/file/d/1ZsR0tMrD6knGT6yd4uKvvGxNmpqkXbWu/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-neon !px-4 !py-2 !text-xs">
          <Download className="w-4 h-4" /> Download CV
        </a>
      </div>
    </header>
  );
}
