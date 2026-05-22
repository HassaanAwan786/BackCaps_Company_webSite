import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const SOCIAL_LINKS = { linkedin: "https://www.linkedin.com/in/hassaan712/", github: "https://github.com/HassaanAwan786", email: "hassaanawan777@gmail.com" }; const MAILTO = "mailto:hassaanawan777@gmail.com";

const roles = ["Founder", "Director", "Chief Operating Officer", "Software Engineer"];

function HudDataPanel({
  children,
  position,
  delay = 0,
}: {
  children: React.ReactNode;
  position: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2 + delay, duration: 0.6, ease: "easeOut" }}
      className={`absolute ${position} hidden xl:block`}
      style={{ zIndex: 20 }}
    >
      <div
        className="px-4 py-3 rounded-xl font-hud"
        style={{
          background: "rgba(0, 212, 255, 0.04)",
          border: "1px solid rgba(0, 212, 255, 0.15)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 0 30px rgba(0, 212, 255, 0.05)",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}

// Floating particle component
function Particle({ delay, x, size }: { delay: number; x: number; size: number }) {
  return (
    <div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        bottom: "-10px",
        background: "rgba(0, 212, 255, 0.4)",
        animation: `particle-float ${8 + Math.random() * 6}s linear infinite`,
        animationDelay: `${delay}s`,
        filter: "blur(0.5px)",
      }}
    />
  );
}

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  // Typewriter effect
  useEffect(() => {
    const fullText = roles[roleIndex];
    if (typing) {
      if (displayed.length < fullText.length) {
        const timeout = setTimeout(
          () => setDisplayed(fullText.slice(0, displayed.length + 1)),
          70
        );
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayed.length > 0) {
        const timeout = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          40
        );
        return () => clearTimeout(timeout);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  // Memoize particles to prevent re-render flicker
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        delay: Math.random() * 10,
        x: Math.random() * 100,
        size: 1 + Math.random() * 2,
      })),
    []
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#050510" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Ambient glow orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-[#00d4ff]/[0.03] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/6 w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full bg-[#8b5cf6]/[0.03] blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-[#00d4ff]/[0.02] blur-[150px]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <Particle key={i} {...p} />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          {/* Mobile/Tablet Photo — shown above content on small screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="flex lg:hidden items-center justify-center mb-8"
          >
            <div className="relative w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px]">
              {/* Scanning ring */}
              <div
                className="absolute inset-[-15px] sm:inset-[-20px] rounded-full animate-hud-rotate"
                style={{ border: "1px dashed rgba(0, 212, 255, 0.2)" }}
              />
              {/* Middle ring */}
              <div
                className="absolute inset-[-8px] sm:inset-[-10px] rounded-full animate-hud-rotate-reverse"
                style={{
                  border: "1px solid rgba(0, 212, 255, 0.1)",
                  borderTop: "2px solid rgba(0, 212, 255, 0.5)",
                  borderRight: "2px solid rgba(0, 212, 255, 0.3)",
                }}
              />
              {/* Glow */}
              <div
                className="absolute inset-[-12px] sm:inset-[-16px] rounded-full animate-glow-pulse"
                style={{
                  background: "radial-gradient(circle, rgba(0, 212, 255, 0.08) 0%, transparent 70%)",
                }}
              />
              {/* Photo */}
              <div className="relative w-full h-full rounded-full overflow-hidden"
                style={{
                  border: "2px solid rgba(0, 212, 255, 0.2)",
                  boxShadow: "0 0 40px rgba(0, 212, 255, 0.1), inset 0 0 40px rgba(0, 0, 0, 0.3)",
                }}
              >
                <img
                  src={"/assets/images/team/portfolio/hassaan/COO.png"}
                  alt="Muhammad Hassaan — Founder & COO"
                  className="w-full h-full object-cover object-top"
                />
                {/* Holographic overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(180deg, rgba(0, 212, 255, 0.05) 0%, transparent 30%, transparent 70%, rgba(0, 212, 255, 0.08) 100%)",
                  }}
                />
                {/* Scan line */}
                <div
                  className="absolute left-0 right-0 h-[2px] animate-hud-scan"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.6), transparent)",
                    boxShadow: "0 0 15px rgba(0, 212, 255, 0.3)",
                  }}
                />
              </div>
              {/* Corner brackets */}
              <div className="absolute top-[-6px] left-[-6px] w-4 h-4 sm:w-5 sm:h-5" style={{
                borderTop: "2px solid rgba(0, 212, 255, 0.5)",
                borderLeft: "2px solid rgba(0, 212, 255, 0.5)",
                borderRadius: "4px 0 0 0",
              }} />
              <div className="absolute top-[-6px] right-[-6px] w-4 h-4 sm:w-5 sm:h-5" style={{
                borderTop: "2px solid rgba(0, 212, 255, 0.5)",
                borderRight: "2px solid rgba(0, 212, 255, 0.5)",
                borderRadius: "0 4px 0 0",
              }} />
              <div className="absolute bottom-[-6px] left-[-6px] w-4 h-4 sm:w-5 sm:h-5" style={{
                borderBottom: "2px solid rgba(0, 212, 255, 0.5)",
                borderLeft: "2px solid rgba(0, 212, 255, 0.5)",
                borderRadius: "0 0 0 4px",
              }} />
              <div className="absolute bottom-[-6px] right-[-6px] w-4 h-4 sm:w-5 sm:h-5" style={{
                borderBottom: "2px solid rgba(0, 212, 255, 0.5)",
                borderRight: "2px solid rgba(0, 212, 255, 0.5)",
                borderRadius: "0 0 4px 0",
              }} />
            </div>
          </motion.div>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8 font-hud"
            style={{
              background: "rgba(0, 212, 255, 0.06)",
              border: "1px solid rgba(0, 212, 255, 0.2)",
              fontSize: "clamp(0.55rem, 1.5vw, 0.75rem)",
              color: "#00d4ff",
            }}
          >
            <div
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full flex-shrink-0"
              style={{
                background: "#2ecc71",
                boxShadow: "0 0 8px rgba(46, 204, 113, 0.6)",
                animation: "hud-pulse 2s ease-in-out infinite",
              }}
            />
            <span className="hidden sm:inline">SYSTEM STATUS: AVAILABLE FOR COLLABORATION</span>
            <span className="sm:hidden">AVAILABLE FOR COLLABORATION</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-white mb-2"
            style={{
              fontSize: "clamp(2rem, 6vw, 4.5rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
            }}
          >
            Hi, I'm{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00d4ff, #00478aff, #002198ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              
              Hassaan
            </span>
          </motion.h1>

          {/* Typewriter Role — HUD style */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mb-5 sm:mb-7 font-hud flex items-center gap-2 justify-center lg:justify-start"
            style={{ minHeight: "2rem" }}
          >
            <span style={{ fontSize: "0.7rem", color: "#475569" }}>ROLE://</span>
            <span style={{ fontSize: "clamp(0.85rem, 2vw, 1.3rem)", fontWeight: 600, color: "#00d4ff" }}>
              {displayed}
              <span
                className="inline-block w-[2px] h-4 sm:h-5 ml-1 align-middle"
                style={{ background: "#00d4ff", animation: "hud-blink 1s step-end infinite" }}
              />
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            style={{ fontSize: "clamp(0.88rem, 2vw, 1rem)", lineHeight: 1.8, color: "#94a3b8", maxWidth: "520px" }}
            className="mb-8 sm:mb-10 mx-auto lg:mx-0"
          >
            Co-Founder & COO at{" "}
            <span className="font-semibold" style={{ color: "#00d4ff" }}>Backcaps Pvt Ltd</span>. I bridge
            the gap between business strategy and technical execution — understanding both your
            product and your market at a deep level.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10 justify-center lg:justify-start"
          >
            <button
              onClick={() =>
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #00d4ff, #8b5cf6)",
                color: "#ffffff",
                fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
                fontWeight: 600,
                boxShadow: "0 0 30px rgba(0, 212, 255, 0.25)",
              }}
            >
              Get In Touch
            </button>
            <button
              onClick={() =>
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(0, 212, 255, 0.06)",
                border: "1px solid rgba(0, 212, 255, 0.25)",
                color: "#00d4ff",
                fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
                fontWeight: 600,
              }}
            >
              View Projects
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="flex items-center gap-4 justify-center lg:justify-start"
          >
            <span className="font-hud" style={{ fontSize: "0.7rem", color: "#475569" }}>
              CONNECT://
            </span>
            {[
              { icon: <Linkedin size={17} />, label: "LinkedIn", href: SOCIAL_LINKS.linkedin, external: true },
              { icon: <Github size={17} />, label: "GitHub", href: SOCIAL_LINKS.github, external: true },
              { icon: <Mail size={17} />, label: "Email", href: MAILTO, external: false },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: "rgba(0, 212, 255, 0.05)",
                  border: "1px solid rgba(0, 212, 255, 0.15)",
                  color: "rgba(255,255,255,0.5)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#00d4ff";
                  e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.4)";
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 212, 255, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                  e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.15)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right – JARVIS HUD Photo (Desktop only) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="hidden lg:flex items-center justify-center relative"
        >
          <div className="relative w-[340px] h-[340px] xl:w-[420px] xl:h-[420px]">
            {/* Outer scanning ring */}
            <div
              className="absolute inset-[-30px] rounded-full animate-hud-rotate"
              style={{
                border: "1px dashed rgba(0, 212, 255, 0.2)",
              }}
            >
              {/* Ring tick marks */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                <div
                  key={deg}
                  className="absolute w-[3px] h-3 rounded-full"
                  style={{
                    background: "#00d4ff",
                    opacity: 0.5,
                    top: "50%",
                    left: "50%",
                    transform: `rotate(${deg}deg) translateY(-240px) translateX(-1.5px)`,
                  }}
                />
              ))}
            </div>

            {/* Middle scanning ring */}
            <div
              className="absolute inset-[-15px] rounded-full animate-hud-rotate-reverse"
              style={{
                border: "1px solid rgba(0, 212, 255, 0.1)",
                borderTop: "2px solid rgba(0, 212, 255, 0.5)",
                borderRight: "2px solid rgba(0, 212, 255, 0.3)",
              }}
            />

            {/* Inner subtle ring */}
            <div
              className="absolute inset-[5px] rounded-full animate-hud-rotate-slow"
              style={{
                border: "1px dotted rgba(139, 92, 246, 0.2)",
              }}
            />

            {/* Glow behind photo */}
            <div
              className="absolute inset-[-20px] rounded-full animate-glow-pulse"
              style={{
                background: "radial-gradient(circle, rgba(0, 212, 255, 0.08) 0%, transparent 70%)",
              }}
            />

            {/* Photo container */}
            <div className="relative w-full h-full rounded-full overflow-hidden"
              style={{
                border: "2px solid rgba(0, 212, 255, 0.2)",
                boxShadow: "0 0 60px rgba(0, 212, 255, 0.1), inset 0 0 60px rgba(0, 0, 0, 0.3)",
              }}
            >
              <img
                src={"/assets/images/team/portfolio/hassaan/COO.png"}
                alt="Muhammad Hassaan — Founder & COO"
                className="w-full h-full object-cover object-top"
              />
              {/* Holographic overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 212, 255, 0.05) 0%, transparent 30%, transparent 70%, rgba(0, 212, 255, 0.08) 100%)",
                }}
              />
              {/* Scan line */}
              <div
                className="absolute left-0 right-0 h-[2px] animate-hud-scan"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.6), transparent)",
                  boxShadow: "0 0 15px rgba(0, 212, 255, 0.3)",
                }}
              />
            </div>


            {/* Corner brackets - top left */}
            <div className="absolute top-[-8px] left-[-8px] w-6 h-6" style={{
              borderTop: "2px solid rgba(0, 212, 255, 0.5)",
              borderLeft: "2px solid rgba(0, 212, 255, 0.5)",
              borderRadius: "4px 0 0 0",
            }} />
            {/* Corner brackets - top right */}
            <div className="absolute top-[-8px] right-[-8px] w-6 h-6" style={{
              borderTop: "2px solid rgba(0, 212, 255, 0.5)",
              borderRight: "2px solid rgba(0, 212, 255, 0.5)",
              borderRadius: "0 4px 0 0",
            }} />
            {/* Corner brackets - bottom left */}
            <div className="absolute bottom-[-8px] left-[-8px] w-6 h-6" style={{
              borderBottom: "2px solid rgba(0, 212, 255, 0.5)",
              borderLeft: "2px solid rgba(0, 212, 255, 0.5)",
              borderRadius: "0 0 0 4px",
            }} />
            {/* Corner brackets - bottom right */}
            <div className="absolute bottom-[-8px] right-[-8px] w-6 h-6" style={{
              borderBottom: "2px solid rgba(0, 212, 255, 0.5)",
              borderRight: "2px solid rgba(0, 212, 255, 0.5)",
              borderRadius: "0 0 4px 0",
            }} />

            {/* HUD Panel: Top-left — Status */}
            <HudDataPanel position="-top-16 -left-44" delay={0}>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#2ecc71", boxShadow: "0 0 6px #2ecc71" }} />
                <span style={{ fontSize: "0.6rem", color: "#2ecc71", fontWeight: 600 }}>ONLINE</span>
              </div>
              <div style={{ fontSize: "0.65rem", color: "#475569" }}>SYS.STATUS</div>
              <div style={{ fontSize: "0.75rem", color: "#94a3b8", fontWeight: 600 }}>OPERATIONAL</div>
            </HudDataPanel>

            {/* HUD Panel: Top-right — ID */}
            <HudDataPanel position="-top-10 -right-40" delay={0.15}>
              <div style={{ fontSize: "0.6rem", color: "#475569", marginBottom: "2px" }}>SUBJECT.ID</div>
              <div style={{ fontSize: "0.78rem", color: "#00d4ff", fontWeight: 700 }}>M.HASSAAN</div>
              <div style={{ fontSize: "0.6rem", color: "#64748b" }}>BACKCAPS PVT LTD</div>
            </HudDataPanel>

            {/* HUD Panel: Bottom-left — Stats */}
            <HudDataPanel position="-bottom-14 -left-40" delay={0.3}>
              <div style={{ fontSize: "0.6rem", color: "#475569", marginBottom: "4px" }}>METRICS</div>
              <div className="flex gap-4">
                <div>
                  <div style={{ fontSize: "0.9rem", color: "#00d4ff", fontWeight: 700 }}>3+</div>
                  <div style={{ fontSize: "0.55rem", color: "#64748b" }}>YRS EXP</div>
                </div>
                <div>
                  <div style={{ fontSize: "0.9rem", color: "#8b5cf6", fontWeight: 700 }}>20+</div>
                  <div style={{ fontSize: "0.55rem", color: "#64748b" }}>PROJECTS</div>
                </div>
              </div>
            </HudDataPanel>

            {/* HUD Panel: Bottom-right — Role */}
            <HudDataPanel position="-bottom-8 -right-44" delay={0.45}>
              <div style={{ fontSize: "0.6rem", color: "#475569", marginBottom: "2px" }}>DESIGNATION</div>
              <div style={{ fontSize: "0.72rem", color: "#ff9f43", fontWeight: 700 }}>COO & CO-FOUNDER</div>
              <div style={{ fontSize: "0.6rem", color: "#64748b" }}>SOFTWARE ENGINEER</div>
            </HudDataPanel>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToAbout}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-colors font-hud"
        style={{ color: "rgba(0, 212, 255, 0.4)" }}
        onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(0, 212, 255, 0.8)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(0, 212, 255, 0.4)"; }}
      >
        <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em" }}>SCROLL</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}