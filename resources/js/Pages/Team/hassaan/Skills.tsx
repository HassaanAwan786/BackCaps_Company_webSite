import { motion } from "framer-motion";

const techStack = [
  { name: "React", level: 90, color: "#61DAFB" },
  { name: "JavaScript", level: 88, color: "#F7DF1E" },
  { name: "HTML & CSS", level: 95, color: "#E34F26" },
  { name: "TypeScript", level: 75, color: "#3178C6" },
  { name: "REST APIs", level: 85, color: "#00d4ff" },
  { name: "Node.js", level: 78, color: "#339933" },
  { name: "Database Design", level: 80, color: "#8b5cf6" },
  { name: "SQL / NoSQL", level: 78, color: "#F29111" },
];

const leadershipSkills = [
  { name: "Business Operations", level: 95 },
  { name: "Project Management", level: 92 },
  { name: "Team Leadership", level: 90 },
  { name: "Client Relations", level: 93 },
  { name: "Strategic Planning", level: 87 },
  { name: "Risk Assessment", level: 88 },
];

const tools = [
  "Git & GitHub", "VS Code", "Figma", "Postman", "Jira", "Trello",
  "Linux", "Docker", "AWS", "Vercel", "MongoDB", "MySQL",
];

// Circular ring skill indicator
function SkillRing({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const circumference = 2 * Math.PI * 36; // radius 36
  const offset = circumference - (level / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.06, transition: { duration: 0.2 } }}
      className="flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-5 rounded-2xl transition-all duration-300 cursor-default"
      style={{
        background: "rgba(255, 255, 255, 0.02)",
        border: "1px solid rgba(255, 255, 255, 0.06)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${color}40`;
        e.currentTarget.style.boxShadow = `0 0 30px ${color}15`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div className="relative w-16 h-16 sm:w-20 sm:h-20">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
          {/* Background circle */}
          <circle
            cx="40" cy="40" r="36"
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="4"
          />
          {/* Progress circle */}
          <motion.circle
            cx="40" cy="40" r="36"
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: delay + 0.3, ease: "easeOut" }}
            style={{ filter: `drop-shadow(0 0 6px ${color}60)` }}
          />
        </svg>
        {/* Center percentage */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-hud" style={{ fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)", fontWeight: 700, color }}>
            {level}%
          </span>
        </div>
      </div>
      <span style={{ fontSize: "clamp(0.7rem, 1.5vw, 0.8rem)", color: "#e2e8f0", fontWeight: 600, textAlign: "center" }}>
        {name}
      </span>
    </motion.div>
  );
}

// Bar indicator for leadership skills
function GlassBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="mb-4 sm:mb-5"
    >
      <div className="flex items-center justify-between mb-2">
        <span style={{ fontSize: "clamp(0.78rem, 1.5vw, 0.85rem)", color: "#e2e8f0", fontWeight: 600 }}>{name}</span>
        <span className="font-hud" style={{ fontSize: "0.72rem", color: "#64748b" }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.04)" }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #00d4ff, #8b5cf6)",
            boxShadow: "0 0 10px rgba(0, 212, 255, 0.3)",
          }}
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 md:py-28 relative overflow-hidden" style={{ background: "#050510" }}>
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 80% 60%, rgba(139, 92, 246, 0.03), transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4 sm:mb-6"
          >
            <div className="h-px w-8 sm:w-12" style={{ background: "linear-gradient(90deg, transparent, #00d4ff)" }} />
            <span className="font-hud" style={{ fontSize: "0.75rem", fontWeight: 600, color: "#00d4ff", letterSpacing: "0.15em" }}>
              TECH_STACK
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
          >
            Technical{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00d4ff, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Arsenal
            </span>
          </motion.h2>
        </div>

        {/* Tech Skills — Ring Grid */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6 sm:mb-8"
            style={{ fontSize: "0.95rem", fontWeight: 700, color: "#00d4ff" }}
          >
            <div className="w-1 h-4 rounded-full" style={{ background: "linear-gradient(to bottom, #00d4ff, #8b5cf6)" }} />
            Development Skills
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {techStack.map((skill, i) => (
              <SkillRing key={skill.name} {...skill} delay={i * 0.06} />
            ))}
          </div>
        </div>

        {/* Leadership Skills — Glass Bars */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-12 sm:mb-16 md:mb-20">
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6 sm:mb-8"
              style={{ fontSize: "0.95rem", fontWeight: 700, color: "#8b5cf6" }}
            >
              <div className="w-1 h-4 rounded-full" style={{ background: "linear-gradient(to bottom, #8b5cf6, #f43f5e)" }} />
              Leadership & Management
            </motion.h3>
            {leadershipSkills.map((skill, i) => (
              <GlassBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.06} />
            ))}
          </div>

          {/* Tools */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6 sm:mb-8"
              style={{ fontSize: "0.95rem", fontWeight: 700, color: "#94a3b8" }}
            >
              <div className="w-1 h-4 rounded-full" style={{ background: "linear-gradient(to bottom, #94a3b8, #475569)" }} />
              Tools & Platforms
            </motion.h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {tools.map((tool, i) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ scale: 1.08, y: -3 }}
                  className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl cursor-default transition-all duration-300"
                  style={{
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    fontSize: "clamp(0.75rem, 1.5vw, 0.83rem)",
                    color: "#cbd5e1",
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.3)";
                    e.currentTarget.style.color = "#00d4ff";
                    e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 212, 255, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.color = "#cbd5e1";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
