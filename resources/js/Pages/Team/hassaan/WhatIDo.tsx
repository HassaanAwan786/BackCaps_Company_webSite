import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Briefcase,
  Users,
  LayoutDashboard,
  GitBranch,
  Server,
  Database,
  TrendingUp,
} from "lucide-react";

const cooCaps = [
  { icon: <Briefcase size={20} />, title: "Business Operations", desc: "Overseeing day-to-day operations, ensuring alignment between teams, processes, and company goals." },
  { icon: <TrendingUp size={20} />, title: "Project Delivery", desc: "Driving projects from inception to delivery with precision — on time, on scope, and on budget." },
  { icon: <Users size={20} />, title: "Team Management", desc: "Building, mentoring, and leading high-performance technical and cross-functional teams." },
  { icon: <LayoutDashboard size={20} />, title: "Client Alignment", desc: "Bridging client expectations with technical reality through transparent, strategic communication." },
];

const devCaps = [
  { icon: <Code2 size={20} />, title: "Frontend Development", desc: "Building responsive, pixel-perfect UIs with React, HTML, CSS, and JavaScript." },
  { icon: <Server size={20} />, title: "Backend & APIs", desc: "Developing robust backend logic and RESTful APIs that scale cleanly." },
  { icon: <Database size={20} />, title: "Database Design", desc: "Architecting efficient database schemas and integrating them seamlessly with applications." },
  { icon: <GitBranch size={20} />, title: "End-to-End Delivery", desc: "Owning features from design spec to production deployment — full stack, no handoffs." },
];

function GlassCapCard({
  icon,
  title,
  desc,
  delay,
  accent,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay: number;
  accent: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group p-4 sm:p-5 rounded-2xl cursor-default transition-all duration-300"
      style={{
        background: "rgba(255, 255, 255, 0.02)",
        border: "1px solid rgba(255, 255, 255, 0.06)",
        backdropFilter: "blur(20px)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${accent}40`;
        e.currentTarget.style.background = `${accent}08`;
        e.currentTarget.style.boxShadow = `0 8px 30px ${accent}10`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
        e.currentTarget.style.background = "rgba(255,255,255,0.02)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-all duration-300"
        style={{
          background: `${accent}12`,
          border: `1px solid ${accent}25`,
          color: accent,
        }}
      >
        {icon}
      </div>
      <h4 style={{ fontSize: "clamp(0.85rem, 1.8vw, 0.95rem)", fontWeight: 700, color: "#ffffff" }} className="mb-1.5 sm:mb-2">
        {title}
      </h4>
      <p style={{ fontSize: "clamp(0.75rem, 1.5vw, 0.83rem)", lineHeight: 1.7, color: "#64748b" }}>{desc}</p>
    </motion.div>
  );
}

export function WhatIDo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="whatido" className="py-16 sm:py-20 md:py-28 relative overflow-hidden" style={{ background: "#070714" }}>
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0, 212, 255, 0.04), transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4 sm:mb-6"
          >
            <div className="h-px w-8 sm:w-12" style={{ background: "linear-gradient(90deg, transparent, #00d4ff)" }} />
            <span className="font-hud" style={{ fontSize: "0.75rem", fontWeight: 600, color: "#00d4ff", letterSpacing: "0.15em" }}>
              CAPABILITIES
            </span>
            <div className="h-px w-8 sm:w-12" style={{ background: "linear-gradient(90deg, #00d4ff, transparent)" }} />
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
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
            className="mb-3 sm:mb-4"
          >
            Two Roles,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00d4ff, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              One Person
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: "clamp(0.88rem, 1.8vw, 1rem)", color: "#64748b", maxWidth: "560px", margin: "0 auto" }}
          >
            I operate at the intersection of executive leadership and hands-on software engineering
            — delivering business value while understanding every line of code behind it.
          </motion.p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* COO Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div
                className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-3 rounded-2xl"
                style={{
                  background: "rgba(0, 212, 255, 0.06)",
                  border: "1px solid rgba(0, 212, 255, 0.2)",
                }}
              >
                <Briefcase size={18} style={{ color: "#00d4ff" }} />
                <div>
                  <div className="font-hud" style={{ fontSize: "0.65rem", color: "#00d4ff", letterSpacing: "0.1em" }}>ROLE_1</div>
                  <div style={{ fontSize: "clamp(0.82rem, 1.8vw, 0.95rem)", color: "#ffffff", fontWeight: 700 }}>COO & Co-Founder</div>
                </div>
              </div>
              <div className="flex-1 h-px hidden sm:block" style={{ background: "linear-gradient(90deg, rgba(0, 212, 255, 0.3), transparent)" }} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {cooCaps.map((item, i) => (
                <GlassCapCard key={item.title} {...item} delay={i * 0.08} accent="#00d4ff" />
              ))}
            </div>
          </motion.div>

          {/* Developer Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div
                className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-3 rounded-2xl"
                style={{
                  background: "rgba(139, 92, 246, 0.06)",
                  border: "1px solid rgba(139, 92, 246, 0.2)",
                }}
              >
                <Code2 size={18} style={{ color: "#8b5cf6" }} />
                <div>
                  <div className="font-hud" style={{ fontSize: "0.65rem", color: "#8b5cf6", letterSpacing: "0.1em" }}>ROLE_2</div>
                  <div style={{ fontSize: "clamp(0.82rem, 1.8vw, 0.95rem)", color: "#ffffff", fontWeight: 700 }}>Software Engineer</div>
                </div>
              </div>
              <div className="flex-1 h-px hidden sm:block" style={{ background: "linear-gradient(90deg, rgba(139, 92, 246, 0.3), transparent)" }} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {devCaps.map((item, i) => (
                <GlassCapCard key={item.title} {...item} delay={i * 0.08 + 0.15} accent="#8b5cf6" />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bridge Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl text-center"
          style={{
            background: "linear-gradient(135deg, rgba(0, 212, 255, 0.04), rgba(139, 92, 246, 0.04))",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            backdropFilter: "blur(20px)",
          }}
        >
          <p
            style={{
              fontSize: "clamp(0.88rem, 2vw, 1.15rem)",
              color: "#94a3b8",
              lineHeight: 1.8,
              maxWidth: "680px",
              margin: "0 auto",
            }}
          >
            "Because I understand code, I can{" "}
            <span style={{ color: "#00d4ff", fontWeight: 600 }}>accurately estimate effort</span>, spot
            risks early, and communicate clearly with both technical teams and non-technical
            stakeholders. You get a COO who doesn't just delegate —{" "}
            <span className="text-white font-semibold">he understands your product at a technical level.</span>"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
