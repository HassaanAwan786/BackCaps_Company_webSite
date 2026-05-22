import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { ExternalLink, Github, Award, FolderGit2 } from "lucide-react";

type ProjectItem = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "project" | "certificate";
  link?: string;
  github?: string;
  accent: string;
};

const items: ProjectItem[] = [
  {
    title: "Backcaps Company Website",
    description: "Full-stack company website with modern UI, dynamic service pages, and a responsive design built from the ground up.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    tags: ["React", "Laravel", "Vite", "Tailwind"],
    category: "project",
    link: "#",
    github: "#",
    accent: "#00d4ff",
  },
  {
    title: "KariGhar Platform",
    description: "A service marketplace platform connecting skilled workers with customers. Features real-time booking and worker management.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    tags: ["React", "Node.js", "MongoDB", "REST API"],
    category: "project",
    link: "#",
    github: "#",
    accent: "#8b5cf6",
  },
  {
    title: "LOADERS Logistics System",
    description: "A logistics and fleet management platform with route optimization, driver tracking, and load management capabilities.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    tags: ["JavaScript", "MySQL", "REST API", "Dashboard"],
    category: "project",
    link: "#",
    accent: "#ff9f43",
  },
  {
    title: "Portfolio Website",
    description: "This very portfolio — a JARVIS HUD-inspired, liquid glass design with React, Framer Motion, and custom animations.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
    tags: ["React", "TypeScript", "Motion", "Tailwind"],
    category: "project",
    github: "#",
    accent: "#2ecc71",
  },
  {
    title: "Software Engineering Certificate",
    description: "Professional certification in software engineering fundamentals, covering architecture, design patterns, and best practices.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&q=80",
    tags: ["Software Engineering", "Architecture"],
    category: "certificate",
    accent: "#00d4ff",
  },
  {
    title: "Project Management Certification",
    description: "Certified in modern project management methodologies including Agile, Scrum, and strategic delivery frameworks.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    tags: ["Agile", "Scrum", "PM"],
    category: "certificate",
    accent: "#ff9f43",
  },
];

const filters = ["All", "Projects", "Certificates"] as const;

// 3D Tilt card
function TiltCard({ item, index }: { item: ProjectItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="rounded-2xl overflow-hidden cursor-default transition-transform duration-200"
        style={{
          background: "rgba(255, 255, 255, 0.02)",
          border: "1px solid rgba(255, 255, 255, 0.06)",
          backdropFilter: "blur(20px)",
          transformStyle: "preserve-3d",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = `${item.accent}35`;
          e.currentTarget.style.boxShadow = `0 20px 60px ${item.accent}12`;
        }}
      >
        {/* Image */}
        <div className="relative h-40 sm:h-48 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500"
            onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(5,5,16,0.9) 0%, transparent 60%)" }}
          />
          {/* Category badge */}
          <div
            className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full font-hud"
            style={{
              background: "rgba(5, 5, 16, 0.7)",
              border: `1px solid ${item.accent}40`,
              fontSize: "0.6rem",
              color: item.accent,
              backdropFilter: "blur(10px)",
            }}
          >
            {item.category === "project" ? <FolderGit2 size={10} /> : <Award size={10} />}
            {item.category === "project" ? "PROJECT" : "CERTIFICATE"}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">
          <h3 style={{ fontSize: "clamp(0.92rem, 1.8vw, 1.05rem)", fontWeight: 700, color: "#ffffff", marginBottom: "8px" }}>
            {item.title}
          </h3>
          <p style={{ fontSize: "clamp(0.78rem, 1.5vw, 0.83rem)", color: "#64748b", lineHeight: 1.7, marginBottom: "14px" }}>
            {item.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg font-hud"
                style={{
                  background: `${item.accent}08`,
                  border: `1px solid ${item.accent}20`,
                  fontSize: "clamp(0.58rem, 1.2vw, 0.65rem)",
                  color: item.accent,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-all duration-200"
                style={{ fontSize: "0.78rem", color: "#94a3b8", fontWeight: 500 }}
                onMouseEnter={(e) => { e.currentTarget.style.color = item.accent; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#94a3b8"; }}
              >
                <ExternalLink size={13} />
                Live Demo
              </a>
            )}
            {item.github && (
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-all duration-200"
                style={{ fontSize: "0.78rem", color: "#94a3b8", fontWeight: 500 }}
                onMouseEnter={(e) => { e.currentTarget.style.color = item.accent; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#94a3b8"; }}
              >
                <Github size={13} />
                Source
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");

  const filtered = items.filter((item) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Projects") return item.category === "project";
    if (activeFilter === "Certificates") return item.category === "certificate";
    return true;
  });

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-28 relative overflow-hidden" style={{ background: "#070714" }}>
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(0, 212, 255, 0.03), transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4 sm:mb-6"
          >
            <div className="h-px w-8 sm:w-12" style={{ background: "linear-gradient(90deg, transparent, #00d4ff)" }} />
            <span className="font-hud" style={{ fontSize: "0.75rem", fontWeight: 600, color: "#00d4ff", letterSpacing: "0.15em" }}>
              PORTFOLIO
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
              letterSpacing: "-0.02em",
            }}
            className="mb-3 sm:mb-4"
          >
            Projects &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00d4ff, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Certificates
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: "clamp(0.88rem, 1.8vw, 1rem)", color: "#64748b", maxWidth: "500px", margin: "0 auto" }}
          >
            A showcase of the work I've built and the credentials I've earned.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="flex items-center justify-center gap-1 sm:gap-2 mb-10 sm:mb-14"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="relative px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl transition-all duration-300"
              style={{
                fontSize: "clamp(0.78rem, 1.5vw, 0.85rem)",
                fontWeight: 600,
                color: activeFilter === filter ? "#00d4ff" : "rgba(255,255,255,0.4)",
              }}
            >
              {activeFilter === filter && (
                <motion.div
                  layoutId="projectFilterTab"
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: "rgba(0, 212, 255, 0.08)",
                    border: "1px solid rgba(0, 212, 255, 0.2)",
                  }}
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{filter}</span>
            </button>
          ))}
        </motion.div>

        {/* Card Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {filtered.map((item, i) => (
            <TiltCard key={item.title} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
