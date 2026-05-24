import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
const SOCIAL_LINKS = { linkedin: "https://www.linkedin.com/in/hassaan712/", github: "https://github.com/HassaanAwan786", email: "hassaanawan777@gmail.com" }; const MAILTO = "mailto:hassaanawan777@gmail.com";

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative py-10 sm:py-14 overflow-hidden" style={{ background: "#050510", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(0,212,255,0.03), transparent 70%)" }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 rounded-full animate-hud-rotate" style={{ border: "1px dashed rgba(0,212,255,0.3)" }} />
              <div className="absolute inset-[2px] rounded-full flex items-center justify-center" style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.15)" }}>
                <span className="font-hud" style={{ fontSize: "0.65rem", fontWeight: 700, color: "#00d4ff" }}>MH</span>
              </div>
            </div>
            <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff" }}>
              Hassaan<span style={{ color: "#00d4ff" }}>.</span>
            </span>
          </div>

          {/* Center */}
          <p style={{ fontSize: "clamp(0.72rem, 1.5vw, 0.82rem)", color: "#475569", fontWeight: 500 }} className="text-center order-3 md:order-2">
            © 2026 Hassaan · Co-Founder & COO at <span style={{ color: "#00d4ff" }}>Backcaps Pvt Ltd</span>
          </p>

          {/* Social + Scroll Top */}
          <div className="flex items-center gap-2 sm:gap-3 order-2 md:order-3">
            {[
              { icon: <Linkedin size={15} />, href: SOCIAL_LINKS.linkedin, label: "LinkedIn", external: true },
              { icon: <Github size={15} />, href: SOCIAL_LINKS.github, label: "GitHub", external: true },
              { icon: <Mail size={15} />, href: MAILTO, label: "Email", external: false },
            ].map((s) => (
              <a key={s.label} href={s.href} {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} title={s.label}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#00d4ff"; e.currentTarget.style.borderColor = "rgba(0,212,255,0.3)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.4)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; }}>
                {s.icon}
              </a>
            ))}
            <button onClick={scrollTop} title="Back to top"
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ml-1 sm:ml-2"
              style={{ background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", color: "#00d4ff" }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 15px rgba(0,212,255,0.15)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}>
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
