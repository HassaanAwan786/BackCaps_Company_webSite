import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Code2, ExternalLink } from "lucide-react";

const timeline = [
  {
    period: "2022 – Present",
    role: "Co-Founder, COO & Director",
    company: "Backcaps Pvt Ltd",
    type: "leadership",
    color: "#00d4ff",
    badge: "Current",
    points: [
      "Co-founded and scaled the company from ground up",
      "Oversee all business operations, project delivery, and team management",
      "Drive client alignment between technical teams and business stakeholders",
      "Establish operational processes that enable efficient, scalable delivery",
      "Lead strategy, hiring, and cross-functional collaboration company-wide",
    ],
    icon: <Building2 size={18} />,
  },
  {
    period: "2022 – Present",
    role: "Software Engineer",
    company: "Backcaps Pvt Ltd",
    type: "engineering",
    color: "#8b5cf6",
    badge: "Ongoing",
    points: [
      "Build responsive frontends using React, HTML, CSS, and JavaScript",
      "Develop backend logic, REST APIs, and system architecture",
      "Design and integrate relational and NoSQL databases",
      "Deliver end-to-end features from spec to production deployment",
      "Ensure code quality, reviews, and technical standards across the team",
    ],
    icon: <Code2 size={18} />,
  },
];

export function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-16 sm:py-20 md:py-28 relative overflow-hidden" style={{ background: "#050510" }}>
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 20% 70%, rgba(0, 212, 255, 0.03), transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4 sm:mb-6"
        >
          <div className="h-px w-8 sm:w-12" style={{ background: "linear-gradient(90deg, transparent, #00d4ff)" }} />
          <span className="font-hud" style={{ fontSize: "0.75rem", fontWeight: 600, color: "#00d4ff", letterSpacing: "0.15em" }}>
            EXPERIENCE
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{
            fontSize: "clamp(1.6rem, 4vw, 3rem)",
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-0.02em",
          }}
          className="mb-3 sm:mb-4"
        >
          Professional{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #00d4ff, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Journey
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: "clamp(0.88rem, 1.8vw, 1rem)", color: "#64748b", maxWidth: "550px" }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          Building Backcaps from the ground up — simultaneously as an executive and an engineer.
        </motion.p>

        {/* Timeline Cards */}
        <div ref={ref} className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {timeline.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative p-5 sm:p-8 rounded-3xl transition-all duration-300"
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                backdropFilter: "blur(20px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${item.color}30`;
                e.currentTarget.style.boxShadow = `0 10px 40px ${item.color}08`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-5 right-5 sm:left-8 sm:right-8 h-px rounded-full"
                style={{ background: `linear-gradient(90deg, ${item.color}50, transparent)` }}
              />

              {/* Badge */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div
                  className="flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full font-hud"
                  style={{
                    background: `${item.color}10`,
                    border: `1px solid ${item.color}30`,
                    color: item.color,
                  }}
                >
                  {item.icon}
                  <span style={{ fontSize: "0.7rem", fontWeight: 600 }}>{item.badge}</span>
                </div>
                <span className="font-hud" style={{ fontSize: "clamp(0.62rem, 1.2vw, 0.72rem)", color: "#475569" }}>
                  {item.period}
                </span>
              </div>

              {/* Role */}
              <h3
                style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.3 }}
                className="mb-1"
              >
                {item.role}
              </h3>

              {/* Company */}
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <span style={{ fontSize: "clamp(0.82rem, 1.5vw, 0.9rem)", fontWeight: 600, color: item.color }}>
                  {item.company}
                </span>
                <ExternalLink size={14} style={{ color: item.color, opacity: 0.6 }} />
              </div>

              {/* Points */}
              <ul className="space-y-2 sm:space-y-3">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 sm:gap-3">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 sm:mt-2"
                      style={{ backgroundColor: item.color, boxShadow: `0 0 6px ${item.color}50` }}
                    />
                    <span style={{ fontSize: "clamp(0.78rem, 1.5vw, 0.86rem)", color: "#94a3b8", lineHeight: 1.7 }}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Company Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 sm:mt-16 p-6 sm:p-8 lg:p-12 rounded-3xl relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(0, 212, 255, 0.03), rgba(139, 92, 246, 0.03))",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(0, 212, 255, 0.04), transparent 70%)" }}
          />
          <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 sm:mb-5 font-hud"
                style={{
                  background: "rgba(0, 212, 255, 0.08)",
                  border: "1px solid rgba(0, 212, 255, 0.2)",
                }}
              >
                <Building2 size={14} style={{ color: "#00d4ff" }} />
                <span style={{ fontSize: "0.7rem", color: "#00d4ff", fontWeight: 600 }}>
                  COMPANY_SPOTLIGHT
                </span>
              </div>
              <h3
                style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.3 }}
                className="mb-3 sm:mb-4"
              >
                Backcaps Pvt Ltd
              </h3>
              <p style={{ fontSize: "clamp(0.82rem, 1.5vw, 0.92rem)", color: "#94a3b8", lineHeight: 1.8 }}>
                Backcaps is a technology company built on the principle that great software requires
                both technical excellence and business intelligence. As co-founder, I've led the
                company's growth from a startup idea to delivering solutions for real clients —
                with a team that moves fast and builds right.
              </p>
            </div>
            <div
              className="rounded-2xl overflow-hidden aspect-video lg:aspect-auto lg:h-52"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                alt="Backcaps team collaboration"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
