import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";


const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "What I Do", href: "#whatido" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (label: string, href: string) => {
    setActive(label);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl border-b shadow-2xl"
          : "bg-transparent"
      }`}
      style={{
        background: scrolled ? "rgba(5, 5, 16, 0.75)" : "transparent",
        borderColor: scrolled ? "rgba(0, 212, 255, 0.08)" : "transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNav("Home", "#home")}
          className="flex items-center gap-3 group"
        >
          {/* Animated monogram ring */}
          <div className="relative w-10 h-10">
            <div
              className="absolute inset-0 rounded-full animate-hud-rotate"
              style={{
                border: "1.5px dashed rgba(0, 212, 255, 0.4)",
              }}
            />
            <div className="absolute inset-[3px] rounded-full flex items-center justify-center"
              style={{ background: "rgba(0, 212, 255, 0.08)", border: "1px solid rgba(0, 212, 255, 0.2)" }}
            >
              <span className="font-hud" style={{ fontSize: "0.85rem", fontWeight: 700, color: "#00d4ff" }}>
                MH
              </span>
            </div>
          </div>
          <div className="relative">
            <span style={{ fontWeight: 700, color: "#ffffff", letterSpacing: "-0.01em" }} className="text-sm sm:text-base">
              <span className="hidden sm:inline">Muhammad </span>Hassaan
            </span>
            {/* Animated scan line under name */}
            <motion.div
              className="absolute -bottom-1 left-0 h-[1px]"
              style={{ background: "linear-gradient(90deg, transparent, #00d4ff, transparent)" }}
              initial={{ width: "0%" }}
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
            />
          </div>
        </a>

        {/* Desktop Links */}
        <div ref={navRef} className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.label, link.href)}
              className="relative px-4 py-2 rounded-xl transition-all duration-300 group"
              style={{
                fontSize: "0.85rem",
                fontWeight: 500,
                color: active === link.label ? "#00d4ff" : "rgba(255,255,255,0.5)",
              }}
              onMouseEnter={(e) => {
                const btn = e.currentTarget;
                btn.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                const btn = e.currentTarget;
                btn.style.color = active === link.label ? "#00d4ff" : "rgba(255,255,255,0.5)";
              }}
            >
              {active === link.label && (
                <motion.div
                  layoutId="activeNavTab"
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: "rgba(0, 212, 255, 0.08)",
                    border: "1px solid rgba(0, 212, 255, 0.2)",
                    boxShadow: "0 0 20px rgba(0, 212, 255, 0.1)",
                  }}
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={"/assets/images/team/portfolio/hassaan/Hassaan_CV.pdf"}
            download="Muhammad_Hassaan_CV.pdf"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(0, 212, 255, 0.1)",
              border: "1px solid rgba(0, 212, 255, 0.25)",
              color: "#00d4ff",
              fontSize: "0.85rem",
              fontWeight: 600,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0, 212, 255, 0.18)";
              e.currentTarget.style.boxShadow = "0 0 25px rgba(0, 212, 255, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(0, 212, 255, 0.1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <Download size={15} />
            Download CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden transition-colors"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden fixed inset-0 top-[60px] sm:top-[72px] backdrop-blur-2xl flex flex-col items-center justify-center gap-2"
            style={{ background: "rgba(5, 5, 16, 0.95)" }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                onClick={() => handleNav(link.label, link.href)}
                className="w-64 text-center px-6 py-4 rounded-2xl transition-all"
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: active === link.label ? "#00d4ff" : "rgba(255,255,255,0.6)",
                  background: active === link.label ? "rgba(0, 212, 255, 0.08)" : "transparent",
                  border: active === link.label ? "1px solid rgba(0, 212, 255, 0.2)" : "1px solid transparent",
                }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.06 + 0.1 }}
              href={"/assets/images/team/portfolio/hassaan/Hassaan_CV.pdf"}
              download="Muhammad_Hassaan_CV.pdf"
              className="mt-4 flex items-center gap-2 px-8 py-4 rounded-2xl"
              style={{
                background: "rgba(0, 212, 255, 0.12)",
                border: "1px solid rgba(0, 212, 255, 0.3)",
                color: "#00d4ff",
                fontSize: "1rem",
                fontWeight: 600,
              }}
            >
              <Download size={18} />
              Download CV
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
