import { useState, useEffect, useRef } from "react";

const NAV = ["Home", "Education", "Skills", "Projects", "Contact"];

const SKILLS = {
  Frontend: ["HTML", "CSS","JavaScript"],
  Backend: ["Java", "Advance Java", " Spring framework","Spring Boot"],
  Frameworks: ["React","REST APIs"],
  Databases: ["SQL","MySQL", "MongoDB"],
  Tools: ["Git", "GitHub","AWS"],
};

const PROJECTS = [
  {
    name: "Bank Management System",
    stack: "Oops with Java ",
    desc: "Build a core banking operations like account creation, deposits, withdrawals, and balance tracking — built on object-oriented principles with clean java code.",
    //stat: "$0 marketing",
    link: "github.com/Santosh9611",
  },
  {
    name: "Medi-care",
    stack:"JavaScript  · HTML · CSS · React",
    desc: "Built a full-stack Hospital Management System using HTML, CSS, JavaScript, and React.js, featuring modules for patient registration, appointment scheduling, and doctor management with a responsive and intuitive UI",
    //stat: "Adopted by own",
    link: "github.com/Santosh9611",
  },
];

function useInView(ref) {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); o.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, [ref]);
  return vis;
}

function Section({ id, children }) {
  const ref = useRef(null);
  const vis = useInView(ref);
  return (
    <section id={id} ref={ref} style={{
      padding: "80px 0",
      opacity: vis ? 1 : 0,
      transform: vis ? "translateY(0)" : "translateY(24px)",
      transition: "opacity 0.6s ease, transform 0.6s ease",
      borderBottom: "1px solid #f1f5f9",
    }}>{children}</section>
  );
}

function SectionHeading({ children }) {
  return (
    <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0f172a", marginBottom: "2.5rem", letterSpacing: "-0.02em" }}>
      {children}
    </h2>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      const sections = NAV.map(n => document.getElementById(n.toLowerCase()));
      const scrollY = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollY) {
          setActive(NAV[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", background: "#fff", color: "#0b0c0c", margin: 0 }}>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(255,255,255,0.95)", backdropFilter: "blur(10px)",
        borderBottom: "1px solid #f1f5f9",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 5%", height: 64,
      }}>
        <span style={{ fontWeight: 700, fontSize: "1.1rem", color: "#0f172a", letterSpacing: "-0.02em" }}>Santosh T</span>
        {/* Desktop */}
        <div style={{ display: "flex", gap: "0.25rem" }}>
          {NAV.map(n => (
            <button key={n} onClick={() => scrollTo(n)} style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "0.5rem 0.9rem", borderRadius: 6,
              fontSize: "0.875rem", fontWeight: 500,
              color: active === n ? "#2563eb" : "#64748b",
              background: active === n ? "#eff6ff" : "transparent",
              transition: "all 0.2s",
            }}>{n}</button>
          ))}
        </div>
        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(m => !m)} style={{
          display: "none", background: "none", border: "none", cursor: "pointer",
          fontSize: "1.4rem", color: "#0f172a",
          "@media(max-width:640px)": { display: "block" },
        }}>☰</button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 64, left: 0, right: 0, zIndex: 99,
          background: "#fff", borderBottom: "1px solid #f1f5f9",
          display: "flex", flexDirection: "column",
        }}>
          {NAV.map(n => (
            <button key={n} onClick={() => scrollTo(n)} style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "1rem 5%", textAlign: "left",
              fontSize: "0.95rem", fontWeight: 500,
              color: active === n ? "#2563eb" : "#334155",
              borderBottom: "1px solid #f8fafc",
            }}>{n}</button>
          ))}
        </div>
      )}

      {/* MAIN */}
      <main style={{ maxWidth: 760, margin: "0 auto", padding: "0 5%" }}>

        {/* HOME */}
        <section id="home" style={{ paddingTop: 140, paddingBottom: 80, borderBottom: "1px solid #f1f5f9" }}>
          <div style={{
            display: "inline-block", background: "#eff6ff", color: "#2563eb",
            fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.06em",
            padding: "0.35rem 0.9rem", borderRadius: 999, marginBottom: "1.5rem",
            textTransform: "uppercase",
          }}>Available for hire · Bengalure, KA</div>
          <h1 style={{ fontSize: "clamp(2.5rem,6vw,4rem)", fontWeight: 800, color: "#0f172a", lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 1rem" }}>
            Hi, I'm Santosh T 👋
          </h1>
          <p style={{ fontSize: "1.15rem", color: "#5192ee", lineHeight: 1.75, maxWidth: 560, margin: "0 0 2rem" }}>
            Java Full-Stack Developer with a B.E. in Computer Science from VTU Belgaum. I build fast, tested, production-ready web apps — and I ship things people actually use.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            <a href="stbhosgi@gmail.com" style={{
              background: "#2563eb", color: "#fff", textDecoration: "none",
              padding: "0.7rem 1.5rem", borderRadius: 8, fontWeight: 600, fontSize: "0.9rem",
              transition: "background 0.2s",
            }}
              onMouseEnter={e => e.target.style.background = "#1d4ed8"}
              onMouseLeave={e => e.target.style.background = "#2563eb"}
            >Get in touch</a>
            <a href="https://github.com/Santosh9611" target="_blank" rel="noreferrer" style={{
              background: "#f8fafc", color: "#334155", textDecoration: "none",
              padding: "0.7rem 1.5rem", borderRadius: 8, fontWeight: 600, fontSize: "0.9rem",
              border: "1px solid #e2e8f0", transition: "border-color 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#2563eb"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "#e2e8f0"}
            >GitHub ↗</a>
          </div>

          {/* Quick stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1rem" }}>
            {[["8.07 CGPA","VTU Belgaum"],["🏆 AWS Certified Cloud Practitioner","Amazon Web Services"],["Problem-Solving","50+ leetCode"]].map(([n,l]) => (
              <div key={n} style={{
                background: "#f8fafc", borderRadius: 10, padding: "1.1rem",
                border: "1px solid #f1f5f9",
              }}>
                <div style={{ fontWeight: 700, fontSize: "1rem", color: "#0f172a", marginBottom: "0.2rem" }}>{n}</div>
                <div style={{ fontSize: "0.78rem", color: "#94a3b8" }}>{l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <Section id="education">
          <SectionHeading >Education</SectionHeading>
          <div style={{ border: "1px solid #6ca1e7", borderRadius: 12, padding: "2rem", background: "#fafafa" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: "1.15rem", color: "#0f172a" }}>B.E. Computer Science</div>
                <div style={{ color: "#2563eb", fontWeight: 500, fontSize: "0.95rem", marginTop: "0.2rem" }}>
                  Visvesvaraya Technological University at Belgaum
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "0.82rem", color: "#64748b" }}>Aug 2022 – May 2026</div>
                <div style={{ fontWeight: 600, color: "#0f172a", fontSize: "0.9rem", marginTop: "0.2rem" }}>GPA: 8.07 / 10.0</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
              {["IBM SQL Certified","AWS Certified 2025","GeeksforGeeks Git,Python Certifid(Nation Skillup)"].map(t => (
                <span key={t} style={{ background: "#eff6ff", color: "#2563eb", fontSize: "0.72rem", fontWeight: 500, padding: "0.25rem 0.7rem", borderRadius: 999 }}>{t}</span>
              ))}
            </div>
            <div style={{ fontSize: "0.8rem", color: "#64748b", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.6rem" }}>Key Coursework</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {["Data Structures & Algorithms","Operating Systems","Database Systems","Machine Learning","Computer Networks","Web Development"].map(c => (
                <span key={c} style={{ background: "#fff", border: "1px solid #e2e8f0", color: "#475569", fontSize: "0.78rem", padding: "0.25rem 0.65rem", borderRadius: 6 }}>{c}</span>
              ))}
            </div>
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills">
          <SectionHeading>Skills</SectionHeading>
          <div style={{ border: "1px solid #6ca1e7", borderRadius: 12, padding: "2rem", background: "#fafafa" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {Object.entries(SKILLS).map(([group, items]) => (
              <div key={group}>
                <div style={{ fontSize: "0.78rem",fontWeight: 600, color: "#16ba31", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.6rem" }}>{group}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem"}}>
                  {items.map(s => (
                    <span key={s} style={{
                      background: "#f8fafc", border: "1px solid #e2e8f0", color: "#334155",
                      fontSize: "0.85rem", fontWeight: 500, padding: "0.35rem 0.85rem", borderRadius: 7,
                      transition: "all 0.2s", cursor: "default",

                    }}
                      onMouseEnter={e => { e.target.style.background = "#eff6ff"; e.target.style.borderColor = "#bfdbfe"; e.target.style.color = "#1d4ed8"; }}
                      onMouseLeave={e => { e.target.style.background = "#f8fafc"; e.target.style.borderColor = "#e2e8f0"; e.target.style.color = "#334155"; }}
                    >{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects">
          <SectionHeading>Projects</SectionHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {PROJECTS.map((p, i) => (
              <div key={i} style={{
                border: "1px solid #e2e8f0", borderRadius: 12, padding: "1.75rem",
                transition: "box-shadow 0.2s, border-color 0.2s", background: "#fff",
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,99,235,0.08)"; e.currentTarget.style.borderColor = "#bfdbfe"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "#e2e8f0"; }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.1rem", color: "#0f172a" }}>{p.name}</div>
                  <a href={`https://${p.link}`} target="_blank" rel="noreferrer" style={{
                    fontSize: "0.78rem", color: "#2563eb", textDecoration: "none", fontWeight: 500,
                  }}>View →</a>
                </div>
                <div style={{ fontSize: "0.78rem", color: "#94a3b8", marginBottom: "0.75rem", fontWeight: 500 }}>{p.stack}</div>
                <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.7, margin: "0 0 1rem" }}>{p.desc}</p>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "#f0fdf4", color: "#16a34a", fontSize: "0.78rem", fontWeight: 600, padding: "0.3rem 0.8rem", borderRadius: 999 }}>
                  <span>▲</span> {p.stat}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact">
          <SectionHeading>Contact</SectionHeading>
          <p style={{ color: "#64748b", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
            I'm open to full-time roles and freelance projects. Drop me a message — I reply within 24 hours.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1rem" }}>
            {[
              { label: "Email", val: "stbhosgi@email.com", href: "stbhoshi@email.com", icon: "✉️" },
              { label: "LinkedIn", val: "linkedin.com/in/Santosh9611 🔗", href: "https://linkedin.com/in/Santosh9611", icon: "💼" },
              { label: "GitHub", val: "https://github.com/Santosh9611 🔗", href: "https://github.com/Santosh9611", icon: "🐙" },
              { label: "Phone", val: "(+91) 9380377813", href: "tel:9380377813", icon: "📞" },
            ].map(({ label, val, href, icon }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" style={{
                display: "flex", alignItems: "center", gap: "0.85rem",
                padding: "1.1rem 1.25rem", borderRadius: 10,
                border: "1px solid #e2e8f0", textDecoration: "none",
                transition: "all 0.2s", background: "#fafafa",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#bfdbfe"; e.currentTarget.style.background = "#eff6ff"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#8db6eb"; e.currentTarget.style.background = "#fafafa"; }}
              >
                <span style={{ fontSize: "1.2rem" }}>{icon}</span>
                <div>
                  <div style={{ fontSize: "0.7rem", color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</div>
                  <div style={{ fontSize: "0.85rem", color: "#334155", fontWeight: 500 }}>{val}</div>
                </div>
              </a>
            ))}
          </div>
        </Section>

      </main>

      {/* FOOTER */}
      <footer style={{ textAlign: "center", padding: "2rem", fontSize: "0.8rem", color: "#020f2c", borderTop: "1px solid #f1f5f9" }}>
        © 2026 Santosh T · Built with React
      </footer>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        @media (max-width: 640px) {
          nav > div:nth-child(2) { display: none !important; }
          nav > button:last-child { display: block !important; }
          div[style*="repeat(3,1fr)"] { grid-template-columns: 1fr !important; }
          div[style*="repeat(2,1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}