import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "3+", label: "Years Experience", color: "#00d4ff" },
  { value: "20+", label: "Projects Delivered", color: "#8b5cf6" },
  { value: "1", label: "Company Co-Founded", color: "#ff9f43" },
  { value: "100%", label: "Client Satisfaction", color: "#2ecc71" },
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 relative overflow-hidden" style={{ background: "#050510" }}>
      {/* BG accent */}
      <div className="absolute right-0 top-0 w-1/2 h-full"
        style={{ background: "radial-gradient(ellipse at 100% 30%, rgba(0, 212, 255, 0.03), transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10 sm:mb-16"
        >
          <div className="h-px w-8 sm:w-12" style={{ background: "linear-gradient(90deg, transparent, #00d4ff)" }} />
          <span className="font-hud" style={{ fontSize: "0.75rem", fontWeight: 600, color: "#00d4ff", letterSpacing: "0.15em" }}>
            ABOUT_ME
          </span>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left – Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                  className="p-4 sm:p-6 rounded-2xl transition-all duration-300 hover:scale-[1.03]"
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    backdropFilter: "blur(20px)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${stat.color}40`;
                    e.currentTarget.style.boxShadow = `0 0 30px ${stat.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
                      fontWeight: 800,
                      color: stat.color,
                      lineHeight: 1,
                    }}
                    className="mb-2"
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: "clamp(0.68rem, 1.5vw, 0.78rem)", color: "#64748b", fontWeight: 500 }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Values */}
            <div className="mt-6 sm:mt-8 space-y-3">
              {[
                "Business strategy backed by technical depth",
                "Clear communication across all stakeholder levels",
                "Risk identification at the code level",
                "End-to-end product ownership",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "#00d4ff", boxShadow: "0 0 6px rgba(0, 212, 255, 0.4)" }}
                  />
                  <span style={{ fontSize: "clamp(0.8rem, 1.8vw, 0.88rem)", color: "#94a3b8", fontWeight: 500 }}>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right – Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          >
            <h2
              style={{
                fontSize: "clamp(1.6rem, 4vw, 3rem)",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
              className="mb-4 sm:mb-6"
            >
              The Leader Who{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00d4ff, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Actually Codes
              </span>
            </h2>

            <div className="space-y-4 sm:space-y-5" style={{ color: "#94a3b8", lineHeight: 1.85, fontSize: "clamp(0.88rem, 1.8vw, 0.97rem)" }}>
              <p>
                I'm <strong className="text-white">Hassaan</strong> — co-founder, Director, and COO of{" "}
                <strong style={{ color: "#00d4ff" }}>Backcaps Pvt Ltd</strong>. My journey sits at a rare
                intersection: executive leadership powered by hands-on technical expertise.
              </p>
              <p>
                While most executives delegate technical decisions, I{" "}
                <strong className="text-white">write the code myself</strong>. I build responsive
                frontends, architect REST APIs, design databases, and deliver complete features
                end-to-end. This means I don't just manage your project — I genuinely understand it.
              </p>
              <p>
                Because I understand code, I can{" "}
                <strong className="text-white">accurately estimate effort</strong>, spot risks early,
                and communicate with clarity between technical teams and non-technical stakeholders.
                You get a COO who doesn't just delegate — he understands your product at a technical
                level.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #00d4ff, #8b5cf6)",
                  color: "#ffffff",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  boxShadow: "0 0 25px rgba(0, 212, 255, 0.2)",
                }}
              >
                Let's Talk
              </button>
              <button
                onClick={() => document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto px-6 py-3 rounded-xl transition-all duration-300"
                style={{
                  background: "rgba(0, 212, 255, 0.06)",
                  border: "1px solid rgba(0, 212, 255, 0.2)",
                  color: "#00d4ff",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                }}
              >
                My Journey
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
