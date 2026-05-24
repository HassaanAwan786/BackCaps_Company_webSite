import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Head, router } from '@inertiajs/react';

const DynamicSpaceBackground = lazy(() => import('./DynamicSpaceBackground'));

// --- THEME CONFIGURATION ---
const THEMES = {
    purple: {
        primary: '#8b5cf6',
        secondary: '#a78bfa',
        accent: '#c084fc',
        starColor: 0x8b5cf6,
        borderGlow: 'rgba(139, 92, 246, 0.5)',
        textHighlight: 'text-purple-500',
        bgGlow: 'bg-purple-600/10'
    },
    gold: {
        primary: '#fbbf24',
        secondary: '#fcd34d',
        accent: '#fb923c',
        starColor: 0xfbbf24,
        borderGlow: 'rgba(251, 191, 36, 0.5)',
        textHighlight: 'text-yellow-500',
        bgGlow: 'bg-yellow-600/10'
    },
    blue: {
        primary: '#3b82f6',
        secondary: '#60a5fa',
        accent: '#2dd4bf',
        starColor: 0x3b82f6,
        borderGlow: 'rgba(59, 130, 246, 0.5)',
        textHighlight: 'text-blue-500',
        bgGlow: 'bg-blue-600/10'
    }
};

const EXPERIENCES = [
    {
        role: "Team Lead",
        company: "BackCaps",
        period: "Jan 2025 — Present",
        location: "Hybrid / London",
        desc: "Architecting high-performance digital products and leading cross-functional engineering teams to deliver scalable solutions."
    },
    {
        role: "Full Stack Services",
        company: "Free Lancing",
        period: "October, 2025 - Present",
        location: "Remote / Flexible",
        desc: "Delivering high-end web development for clients like Nova Designs Studio, Ellwood Capitals, and Grow Up Tech Solutions."
    },
    {
        role: "Mid-Level Laravel Developer",
        company: "Wondelo",
        period: "December, 2024 - Present",
        location: "Hybrid / Birmingham, West Midlands",
        desc: "Developing scalable backend features using Laravel, Eloquent, and RESTful APIs. Aligning development with business goals in sprint planning."
    },
    {
        role: "Internship - Junior Laravel Developer",
        company: "Grow up tech solution",
        period: "October, 2024",
        location: "Onsite / Rawalpindi",
        desc: "Supported backend development with PHP/Laravel, focusing on database migrations, authentication, and core routing logic."
    }
];

const SKILLS_DATA = [
    {
        category: "Technical Stack",
        desc: "My core engineering toolkit, built on robust backend architectures and high-performance frontend frameworks to deliver elite digital products.",
        items: [
            { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", level: 95 },
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: 92 },
            { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", level: 98 },
            { name: "RESTful API", icon: "https://cdn.simpleicons.org/json/white", level: 96 },
            { name: "Git", icon: "https://cdn.simpleicons.org/git/white", level: 90 },
            { name: "CI/CD", icon: "https://cdn.simpleicons.org/githubactions/white", level: 85 },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 94 }
        ]
    },
    {
        category: "Professional Software",
        desc: "A curated ecosystem of industry-leading tools and platforms used to architect, collaborate, and deploy complex technical solutions.",
        items: [
            { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", level: 98 },
            { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg", level: 90 },
            { name: "Slack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg", level: 95 },
            { name: "Swagger", icon: "https://cdn.simpleicons.org/swagger/white", level: 88 },
            { name: "XAMPP", icon: "https://cdn.simpleicons.org/xampp/white", level: 92 },
            { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", level: 96 },
            { name: "Fork", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: 85 },
            { name: "Dev C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", level: 80 },
            { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", level: 88 },
            { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white", level: 98 }
        ]
    }
];

const PROJECTS_DATA = [
    {
        title: "Document Organiser",
        category: "Backend & API Development",
        desc: "Developed secure RESTful APIs with Laravel Sanctum, implementing email/social authentication and complex file synchronization logic.",
        tech: ["Laravel", "Sanctum", "MySQL", "SSH"],
        image: "/assets/images/team/portfolio/doc_organiser_img.png"
    },
    {
        title: "GXG Trade",
        category: "Fintech Trading Platform",
        desc: "Built a high-performance trading engine 'Global X' using React and Inertia.js. Integrated VertexFX APIs and architected a custom CRM system with secure, real-time market data.",
        tech: ["React", "Inertia.js", "VertexFX", "Laravel"],
        image: "/assets/images/team/portfolio/gxg_trade_showcase.png",
        preview: "https://gxgtrade.com"
    },
    {
        title: "Sunnis4Marriage",
        category: "Performance Engineering",
        desc: "Optimized complex SQL queries and refactored legacy code into clean Eloquent models, significantly improving database efficiency and resolving lazy loading issues.",
        tech: ["SQL Optimization", "Eloquent", "PHP", "Performance"],
        image: "/assets/images/team/portfolio/sunni_marriage_img.png"
    },
    {
        title: "Yorkshire Chai",
        category: "E-commerce Experience",
        desc: "Designed and developed a premium e-commerce platform for an authentic tea brand, focusing on high-end visual storytelling and a seamless, high-conversion shopping journey.",
        tech: ["React", "Tailwind CSS", "Modern UI/UX"],
        image: "/assets/images/team/portfolio/yorkshire_img.png",
        preview: "http://yorkshirechaii.co.uk/"
    }
];

const EDUCATION_DATA = [
    {
        school: "CAPITAL UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        degree: "Bachelor in Software Engineering (BSE)",
        period: "2020 - 2024",
        desc: "Core focus on enterprise software architecture, high-performance database systems, and advanced web development frameworks. Graduated with honors in technical engineering."
    },
    {
        school: "Punjab group of colleges, morgah campus",
        degree: "Intermediate",
        period: "2018 - 2020",
        desc: "Specialized in Pre-Engineering with distinction in Mathematics and Computer Science, building the foundational logic for complex software systems."
    },
    {
        school: "Army public and colleges, rawat islamabad",
        degree: "Matriculation",
        period: "2016 - 2018",
        desc: "Science group with advanced mathematics and computer studies, establishing an early interest in digital infrastructure."
    }
];

// --- THREE.JS BACKGROUND LAZY LOADED ---

const Typewriter = ({ text, theme }) => {
    const [currentText, setCurrentText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setCurrentText("");
        setIndex(0);
    }, [text]);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prev => prev + text[index]);
                setIndex(prev => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [index, text]);

    return (
        <span>
            {currentText}
            <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className={`inline-block w-1 h-8 ml-1 translate-y-1 transition-colors duration-1000 ${THEMES[theme].textHighlight}`}
            />
        </span>
    );
};

const CinematicShineBorder = ({ children, theme, compact = false }) => {
    return (
        <div className={`relative p-[3px] group transition-all duration-1000 ${compact ? 'rounded-2xl' : 'rounded-[3.5rem]'} overflow-hidden`}>
            <div className="absolute inset-0 z-0">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%]"
                    style={{
                        background: `conic-gradient(from 0deg, transparent 0deg, transparent 150deg, ${THEMES[theme].primary} 180deg, transparent 210deg, transparent 360deg)`
                    }}
                />
            </div>
            <div className={`relative z-10 bg-[#02020a]/95 backdrop-blur-3xl transition-all duration-1000 ${compact ? 'rounded-xl p-8' : 'rounded-[3rem] p-12 lg:p-20'} border border-white/5 shadow-2xl`}>
                <div className={`absolute inset-0 border pointer-events-none transition-colors duration-1000 ${compact ? 'rounded-xl' : 'rounded-[3rem]'}`} style={{ borderColor: `${THEMES[theme].primary}20` }} />
                {children}
            </div>
            <div className={`absolute -inset-10 -z-10 blur-[80px] rounded-full opacity-30 transition-all duration-1000 ${compact ? 'opacity-10 scale-50' : 'opacity-30'}`} style={{ backgroundColor: THEMES[theme].primary }} />
        </div>
    );
};

const PortfolioFooter = ({ theme }) => {
    return (
        <footer className="relative z-10 py-20 px-10 border-t border-white/5 bg-[#02020a]/50 backdrop-blur-md">
            <div className="max-w-8xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="space-y-4 text-center md:text-left">
                    <div className="flex items-center gap-4 justify-center md:justify-start mb-6">
                        <div className={`w-10 h-10 rounded-full overflow-hidden border-2`} style={{ borderColor: `${THEMES[theme].primary}40` }}>
                            <img src="/assets/images/team/portfolio/ibnay_img.jpeg" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-xl font-black text-white tracking-tighter italic">Ibnay.</span>
                    </div>
                    <p className="text-gray-500 text-xs uppercase tracking-[0.4em]">© 2026 Syed Ibnay Hussain. All rights reserved.</p>
                </div>
                <div className="flex flex-col items-center md:items-end gap-6">
                    <div className="flex gap-8">
                        {['LinkedIn', 'GitHub', 'Twitter', 'Dribbble'].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className={`text-[10px] font-black uppercase tracking-widest transition-all duration-500 opacity-40 hover:opacity-100 hover:scale-110`}
                                style={{ color: THEMES[theme].primary }}
                            >
                                {social}
                            </a>
                        ))}
                    </div>
                    <p className="text-[10px] text-white/20 uppercase tracking-[0.2em]">
                        Architected with <span style={{ color: THEMES[theme].primary }}>Laravel</span> + <span style={{ color: THEMES[theme].primary }}>Inertia</span> + <span style={{ color: THEMES[theme].primary }}>React</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default function IbnayHussain() {
    const [currentTheme, setCurrentTheme] = useState('gold');
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Basic intersection observer for nav highlighting
            const sectionIds = ['home', 'about', 'skills', 'portfolio', 'contact'];
            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(id);
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-[#02020a] text-white selection:bg-purple-500/30 min-h-screen font-sans scroll-smooth">
            <Head title="Syed Ibnay Hussain - Full Stack Lead" />
            <Suspense fallback={<div className="fixed inset-0 z-0 bg-[#02020a]" />}>
                <DynamicSpaceBackground themeColors={THEMES[currentTheme]} />
            </Suspense>

            <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-10 ${isScrolled ? 'py-4 bg-[#02020a]/80 backdrop-blur-xl border-b border-white/5' : 'py-10 bg-transparent mix-blend-difference'}`}>
                <div className="max-w-8xl mx-auto w-full flex justify-between items-center">
                    <button onClick={() => scrollToSection('home')} className="group flex items-center gap-4">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 transition-all duration-1000 group-hover:scale-110`} style={{ borderColor: `${THEMES[currentTheme].primary}40` }}>
                            <img src="/assets/images/team/portfolio/ibnay_img.jpeg" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <span className="text-lg sm:text-xl font-black text-white tracking-tighter hover:text-white/80 transition-all italic hidden xs:block">
                            Ibnay.
                        </span>
                    </button>
                    <nav className="flex items-center gap-12">
                        {['home', 'about', 'skills', 'portfolio', 'education', 'contact'].map(key => (
                            <button
                                key={key}
                                onClick={() => scrollToSection(key)}
                                className={`text-[10px] font-black uppercase tracking-[0.4em] transition-all ${activeSection === key ? 'opacity-100' : 'opacity-40 hover:opacity-80'}`}
                                style={{ color: activeSection === key ? THEMES[currentTheme].primary : 'white' }}
                            >
                                {key}
                            </button>
                        ))}
                    </nav>

                    <div className="flex items-center gap-8">
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-1.5 rounded-full flex gap-1.5 items-center">
                            {Object.keys(THEMES).map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setCurrentTheme(t)}
                                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 relative group overflow-hidden ${currentTheme === t ? 'scale-110' : 'opacity-40 hover:opacity-100'}`}
                                >
                                    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity" style={{ backgroundColor: THEMES[t].primary }} />
                                    <div className={`w-2 h-2 rounded-full shadow-[0_0_10px_current]`} style={{ backgroundColor: THEMES[t].primary, color: THEMES[t].primary }} />
                                    {currentTheme === t && (
                                        <motion.div layoutId="activeTheme" className="absolute inset-0 border-[1.5px] rounded-full" style={{ borderColor: THEMES[t].primary }} />
                                    )}
                                </button>
                            ))}
                        </div>

                        <button
                            className="hidden md:flex items-center gap-3 px-6 py-2.5 rounded-full border text-[10px] font-black uppercase tracking-widest transition-all duration-500 hover:scale-105 active:scale-95 shadow-lg group relative overflow-hidden"
                            style={{
                                borderColor: `${THEMES[currentTheme].primary}40`,
                                color: THEMES[currentTheme].primary,
                                backgroundColor: `${THEMES[currentTheme].primary}10`
                            }}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Download CV
                                <svg className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white opacity-5" />
                        </button>
                    </div>
                </div>
            </header>

            <main className="relative z-10 pt-20">
                {/* Home Section */}
                <section id="home" className="min-h-screen flex flex-col justify-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2,
                                    delayChildren: 0.3
                                }
                            }
                        }}
                        className="max-w-[1600px] mx-auto px-10 py-32 w-full"
                    >
                        <motion.div variants={{
                            hidden: { opacity: 0, scale: 0.98, y: 20 },
                            visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] } }
                        }}>
                            <CinematicShineBorder theme={currentTheme}>
                                <div className="space-y-16">
                                    <motion.div
                                        variants={{
                                            hidden: { opacity: 0, x: -20, filter: 'blur(10px)' },
                                            visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 1 } }
                                        }}
                                        className="flex items-center gap-8 lg:gap-12"
                                    >
                                        <div className={`w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 transition-all duration-1000 shadow-[0_0_80px_rgba(139,92,246,0.3)] shrink-0`} style={{ borderColor: `${THEMES[currentTheme].primary}40`, boxShadow: `0 0 80px ${THEMES[currentTheme].primary}30` }}>
                                            <img src="/assets/images/team/portfolio/ibnay_img.jpeg" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="space-y-4">
                                            <p className="text-gray-400 text-xs lg:text-sm uppercase tracking-[0.4em]">Hello, I am <span className={`font-black transition-colors duration-1000 ${THEMES[currentTheme].textHighlight}`}>Syed Ibnay Hussain</span></p>
                                            <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight tracking-tighter italic font-serif">
                                                "Still achieving, still pursuing, <br />
                                                learn to <span className={`underline underline-offset-8 transition-all duration-1000 ${THEMES[currentTheme].textHighlight}`} style={{ textDecorationColor: `${THEMES[currentTheme].primary}80` }}>labor and to wait."</span>
                                            </h2>
                                        </div>
                                    </motion.div>

                                    <div className="space-y-10">
                                        <motion.div
                                            variants={{
                                                hidden: { opacity: 0, y: 20 },
                                                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                                            }}
                                            className="flex flex-wrap gap-4"
                                        >
                                            {['Inertia.js', 'PHP Laravel', 'React'].map((tech) => (
                                                <div
                                                    key={tech}
                                                    className={`px-6 py-2 border rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-1000 shadow-[0_0_20px_rgba(0,0,0,0.1)]`}
                                                    style={{
                                                        backgroundColor: `${THEMES[currentTheme].primary}15`,
                                                        borderColor: `${THEMES[currentTheme].primary}40`,
                                                        color: THEMES[currentTheme].primary
                                                    }}
                                                >
                                                    {tech}
                                                </div>
                                            ))}
                                        </motion.div>
                                        <div className="space-y-6">
                                            <motion.h1
                                                variants={{
                                                    hidden: { opacity: 0, y: 20 },
                                                    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
                                                }}
                                                className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-tight"
                                            >
                                                <Typewriter text="Full Stack Web Development." theme={currentTheme} />
                                            </motion.h1>
                                            <motion.p
                                                variants={{
                                                    hidden: { opacity: 0 },
                                                    visible: { opacity: 1, transition: { duration: 1.5, delay: 0.5 } }
                                                }}
                                                className="text-gray-400 text-xl lg:text-2xl max-w-4xl font-light leading-relaxed"
                                            >
                                                Specializing in architecting seamless, high-performance web applications. I turn complex technical requirements into elegant digital realities using the most powerful modern frameworks.
                                            </motion.p>
                                        </div>
                                    </div>
                                </div>
                            </CinematicShineBorder>
                        </motion.div>
                    </motion.div>
                </section>

                {/* About Section */}
                <section id="about" className="py-32">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.15
                                }
                            }
                        }}
                        className="max-w-8xl mx-auto px-10"
                    >
                        <div className="space-y-12">
                            <motion.div variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
                            }}>
                                <h3 className={`text-xs font-black uppercase tracking-[0.4em] border-l-2 pl-4 transition-all duration-1000`} style={{ color: `${THEMES[currentTheme].primary}80`, borderColor: THEMES[currentTheme].primary }}>Work Experience</h3>
                                <p className="text-gray-400 text-lg max-w-3xl leading-relaxed mt-4">
                                    A chronological journey through my professional milestones, showcasing evolution from technical engineering to strategic leadership in high-performance digital environments.
                                </p>
                            </motion.div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {EXPERIENCES.map((exp, i) => (
                                    <motion.div
                                        key={i}
                                        variants={{
                                            hidden: { opacity: 0, y: 30 },
                                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                                        }}
                                        whileHover={{ y: -5 }}
                                    >
                                        <CinematicShineBorder theme={currentTheme} compact={true}>
                                            <div className="flex justify-between items-start mb-6">
                                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black transition-all duration-1000`} style={{ backgroundColor: `${THEMES[currentTheme].primary}20`, color: THEMES[currentTheme].primary }}>0{i + 1}</div>
                                                <div className="text-right">
                                                    <span className="text-[10px] text-gray-400 uppercase font-black block">{exp.period}</span>
                                                    <span className="text-[9px] text-gray-600 uppercase tracking-widest">{exp.location}</span>
                                                </div>
                                            </div>
                                            <h4 className="text-xl font-black text-white mb-1">{exp.role}</h4>
                                            <p className={`text-xs font-bold uppercase tracking-widest mb-4 transition-colors duration-1000`} style={{ color: THEMES[currentTheme].primary }}>@ {exp.company}</p>
                                            <p className="text-sm text-gray-400 leading-relaxed">{exp.desc}</p>
                                        </CinematicShineBorder>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-8xl mx-auto px-10"
                    >
                        <div className="space-y-24">
                            {SKILLS_DATA.map((group) => (
                                <div key={group.category} className="space-y-12">
                                    <div className="space-y-4">
                                        <h3 className={`text-xs font-black uppercase tracking-[0.4em] border-l-2 pl-4 transition-all duration-1000`} style={{ color: `${THEMES[currentTheme].primary}80`, borderColor: THEMES[currentTheme].primary }}>{group.category}</h3>
                                        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
                                            {group.desc}
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                        {group.items.map((skill, idx) => (
                                            <motion.div
                                                key={skill.name}
                                                whileHover={{ y: -5 }}
                                                className="group relative bg-[#02020a]/60 backdrop-blur-3xl rounded-2xl p-6 border transition-all duration-500 hover:bg-[#02020a]/80"
                                                style={{ borderColor: `${THEMES[currentTheme].primary}30` }}
                                            >
                                                <div className="flex flex-col gap-5 relative z-10">
                                                    <div className="flex justify-between items-center">
                                                        <div className="w-10 h-10 flex items-center justify-center">
                                                            <img
                                                                src={skill.icon}
                                                                alt={skill.name}
                                                                className={`w-full h-full object-contain transition-all duration-500 ${skill.icon.includes('simpleicons.org') ? 'opacity-40 group-hover:opacity-100' : 'filter grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100'}`}
                                                            />
                                                        </div>
                                                        <span className="text-[10px] font-black" style={{ color: `${THEMES[currentTheme].primary}90` }}>{skill.level}%</span>
                                                    </div>
                                                    <div className="space-y-3">
                                                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">{skill.name}</span>
                                                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                                            <motion.div
                                                                initial={{ width: 0 }}
                                                                whileInView={{ width: `${skill.level}%` }}
                                                                viewport={{ once: true }}
                                                                transition={{ duration: 1.5, ease: "easeOut", delay: idx * 0.05 }}
                                                                className="h-full"
                                                                style={{ backgroundColor: THEMES[currentTheme].primary }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none" style={{ backgroundColor: THEMES[currentTheme].primary }} />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* Portfolio Section */}
                <section id="portfolio" className="py-32">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="max-w-8xl mx-auto px-10"
                    >
                        <div className="space-y-6 mb-16">
                            <h3 className={`text-xs font-black uppercase tracking-[0.4em] border-l-2 pl-4 transition-all duration-1000`} style={{ color: `${THEMES[currentTheme].primary}80`, borderColor: THEMES[currentTheme].primary }}>Projects</h3>
                            <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
                                A curated collection of digital architecture, ranging from complex financial engines and trading platforms to secure document ecosystems and performance-optimized enterprise applications.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                            {PROJECTS_DATA.map((project, idx) => (
                                <motion.div
                                    key={project.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group bg-[#02020a]/60 backdrop-blur-3xl rounded-[2.5rem] p-8 lg:p-10 border transition-all duration-700 hover:bg-[#02020a]/80"
                                    style={{ borderColor: `${THEMES[currentTheme].primary}40` }}
                                >
                                    <div className="space-y-10">
                                        <div className="aspect-video relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-white/20 transition-all duration-700">
                                            <img
                                                src={project.image}
                                                className="w-full h-auto object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[5000ms] ease-in-out absolute top-0 left-0 hover-scroll-img"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#02020a]/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                                        </div>

                                        <div className="space-y-6 px-2">
                                            <div className="flex justify-between items-center">
                                                <span className={`text-[10px] font-black uppercase tracking-[0.3em] transition-colors duration-1000`} style={{ color: THEMES[currentTheme].primary }}>
                                                    {project.category}
                                                </span>
                                                <div className="flex gap-2">
                                                    {project.tech.slice(0, 3).map(t => (
                                                        <span key={t} className="text-[8px] text-white/30 uppercase tracking-widest border border-white/5 px-3 py-1.5 rounded-full bg-white/[0.02]">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <h4 className="text-3xl font-black text-white group-hover:translate-x-2 transition-transform duration-500 tracking-tighter">
                                                    {project.title}
                                                </h4>
                                                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors">
                                                    {project.desc}
                                                </p>
                                                {project.preview && (
                                                    <div className="pt-4">
                                                        <a 
                                                            href={project.preview} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border transition-all duration-500 group/btn"
                                                            style={{ 
                                                                borderColor: `${THEMES[currentTheme].primary}20`,
                                                                backgroundColor: `${THEMES[currentTheme].primary}05`
                                                            }}
                                                        >
                                                            <span className="text-[10px] font-black uppercase tracking-widest text-white group-hover/btn:opacity-80">Live Preview</span>
                                                            <svg 
                                                                className="w-4 h-4 transition-transform duration-500 group-hover/btn:translate-x-1" 
                                                                fill="none" 
                                                                stroke="currentColor" 
                                                                viewBox="0 0 24 24"
                                                                style={{ color: THEMES[currentTheme].primary }}
                                                            >
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* Education Section */}
                <section id="education" className="py-32">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.15
                                }
                            }
                        }}
                        className="max-w-8xl mx-auto px-10"
                    >
                        <div className="space-y-12">
                            <motion.div variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
                            }}>
                                <h3 className={`text-xs font-black uppercase tracking-[0.4em] border-l-2 pl-4 transition-all duration-1000`} style={{ color: `${THEMES[currentTheme].primary}80`, borderColor: THEMES[currentTheme].primary }}>Education</h3>
                                <p className="text-gray-400 text-lg max-w-3xl leading-relaxed mt-4">
                                    My academic foundation, representing a journey of rigorous technical training and specialization in software engineering principles.
                                </p>
                            </motion.div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {EDUCATION_DATA.map((edu, i) => (
                                    <motion.div
                                        key={i}
                                        variants={{
                                            hidden: { opacity: 0, y: 30 },
                                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                                        }}
                                        whileHover={{ y: -5 }}
                                    >
                                        <CinematicShineBorder theme={currentTheme} compact={true}>
                                            <div className="flex justify-between items-start mb-6">
                                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black transition-all duration-1000`} style={{ backgroundColor: `${THEMES[currentTheme].primary}20`, color: THEMES[currentTheme].primary }}>
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                                    </svg>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-[10px] text-gray-400 uppercase font-black block">{edu.period}</span>
                                                </div>
                                            </div>
                                            <h4 className="text-lg font-black text-white mb-1 leading-tight">{edu.school}</h4>
                                            <p className={`text-[10px] font-bold uppercase tracking-widest mb-4 transition-colors duration-1000`} style={{ color: THEMES[currentTheme].primary }}>{edu.degree}</p>
                                            <p className="text-xs text-gray-500 leading-relaxed">{edu.desc}</p>
                                        </CinematicShineBorder>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </section>

                <style dangerouslySetInnerHTML={{
                    __html: `
                    .hover-scroll-img {
                        transition: transform 2s ease-in-out !important;
                    }
                    .group:hover .hover-scroll-img {
                        transform: translateY(calc(-100% + 400px));
                    }
                    /* Prevent scrolling if image is smaller than container */
                    .hover-scroll-img {
                        min-height: 100%;
                    }
                `}} />

                {/* Contact Section */}
                <section id="contact" className="py-32 pb-48">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.15 }
                            }
                        }}
                        className="max-w-8xl mx-auto px-10"
                    >
                        <div className="text-center space-y-6 mb-24">
                            <motion.h2 
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                                }}
                                className="text-5xl lg:text-7xl font-black text-white tracking-tighter"
                            >
                                Let's <span className={`transition-colors duration-1000 ${THEMES[currentTheme].textHighlight}`}>Connect.</span>
                            </motion.h2>
                            <motion.p 
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: { opacity: 1, transition: { delay: 0.2 } }
                                }}
                                className="text-gray-400 max-w-2xl mx-auto text-lg lg:text-xl font-light"
                            >
                                Currently available for high-impact technical architecture consulting and engineering leadership. Reach out to discuss your next elite digital product.
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { 
                                    label: "Email", 
                                    value: "ibnahussainshah@gmail.com", 
                                    link: "mailto:ibnahussainshah@gmail.com", 
                                    svg: <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/> 
                                },
                                { 
                                    label: "Phone", 
                                    value: "+92 3195119531", 
                                    link: "tel:+923195119531", 
                                    svg: <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14zM12 17c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z"/> 
                                },
                                { 
                                    label: "Github", 
                                    value: "github.com/ibnay-hussain", 
                                    link: "https://github.com/ibnay-hussain", 
                                    svg: <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/> 
                                },
                                { 
                                    label: "Linkedin", 
                                    value: "linkedin.com/in/ibnayshah/", 
                                    link: "https://linkedin.com/in/ibnayshah/", 
                                    svg: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/> 
                                }
                            ].map((item, idx) => (
                                <motion.a
                                    key={item.label}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.95 },
                                        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
                                    }}
                                    whileHover={{ y: -5 }}
                                    className="group block"
                                >
                                    <CinematicShineBorder theme={currentTheme} compact={true}>
                                        <div className="space-y-6 text-center py-6">
                                            <div className="w-12 h-12 mx-auto flex items-center justify-center">
                                                <svg 
                                                    viewBox="0 0 24 24" 
                                                    className="w-full h-full fill-white opacity-40 group-hover:opacity-100 group-hover:fill-current transition-all duration-500"
                                                    style={{ color: THEMES[currentTheme].primary }}
                                                >
                                                    {item.svg}
                                                </svg>
                                            </div>
                                            <div className="space-y-2">
                                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">{item.label}</p>
                                                <p className="text-white font-black text-sm break-all group-hover:text-white/80 transition-colors">{item.value}</p>
                                            </div>
                                        </div>
                                    </CinematicShineBorder>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </section>
            </main>

            <PortfolioFooter theme={currentTheme} />
        </div>
    );
}
