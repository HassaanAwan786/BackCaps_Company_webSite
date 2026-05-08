import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TeamModal = ({ member, onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8"
        >
            <div className="absolute inset-0 bg-[#05050d]/90 backdrop-blur-2xl" onClick={onClose} />

            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-white/[0.03] border border-white/10 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[3rem] relative z-10 custom-scrollbar"
            >
                {/* Modal Header/Close */}
                <button
                    onClick={onClose}
                    className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all z-20"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative">
                    {/* Left Side: Visuals */}
                    <div className="relative h-[400px] lg:h-auto overflow-hidden bg-white/5">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#05050d] via-transparent to-transparent lg:bg-gradient-to-r" />

                        {/* Overlay Info */}
                        <div className="absolute bottom-12 left-12">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <span className={`text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 ${member.color} mb-4 inline-block`}>
                                    {member.role}
                                </span>
                                <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tighter mb-2">
                                    {member.name.split(' ')[0]}<br />
                                    <span className="text-white/20">{member.name.split(' ').slice(1).join(' ')}</span>
                                </h2>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="p-8 sm:p-12 lg:p-20 flex flex-col justify-center">
                        <div className="space-y-12">
                            {/* Bio Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-6">Professional Bio</h4>
                                <p className="text-gray-300 text-lg font-medium leading-relaxed italic mb-8 border-l-2 border-blue-600 pl-6">
                                    "{member.quote}"
                                </p>
                                <p className="text-gray-400 text-sm leading-relaxed font-medium">
                                    {member.about}
                                </p>
                            </motion.div>

                            {/* Discover Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="pt-12 border-t border-white/5"
                            >
                                <h3 className="text-white text-xl font-black uppercase tracking-tight mb-4">Discover {member.name.split(' ')[0]}'s Story</h3>
                                <p className="text-gray-500 text-xs font-medium leading-relaxed mb-10">
                                    Explore the expertise, achievements, and creative journey of our {member.role}.
                                </p>

                                <button
                                    onClick={() => console.log("Navigate to full profile page")}
                                    className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-xl shadow-blue-600/20 active:scale-95 group flex items-center gap-3"
                                >
                                    <span>View Full Profile</span>
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Team = () => {
    const testimonials = [
        {
            name: "John Doe",
            role: "CEO, Acme Inc.",
            quote: "BackCaps brought our vision to life with creativity, precision, and unmatched dedication. They truly feel like an extension of our team.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop"
        },
        {
            name: "Jane Smith",
            role: "Founder, StartupX",
            quote: "Their technical expertise and design sensibilities are second to none. They delivered a world-class product ahead of schedule.",
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2000&auto=format&fit=crop"
        },
        {
            name: "Robert Brown",
            role: "CTO, TechFlow",
            quote: "The team's ability to solve complex backend challenges while maintaining a sleek frontend is what sets them apart from everyone else.",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2000&auto=format&fit=crop"
        },
        {
            name: "Sarah Connor",
            role: "Director, Innovate",
            quote: "Working with BackCaps was a game-changer for our digital strategy. They transformed our outdated platform into a modern powerhouse.",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2000&auto=format&fit=crop"
        }
    ];

    const team = [
        {
            name: "Waqar Ahmed",
            role: "Mobile App Team Lead",
            experience: "8+ Years",
            projectsCount: "45+",
            quote: "Great mobile applications are not just built with code—they are crafted with vision, precision, and a deep understanding of user experience.",
            about: "Waqar Ahmed is a dedicated Mobile App Team Lead focused on building scalable, user-friendly, and high-performance applications. With strong expertise in modern frameworks and clean architecture, he leads teams to deliver reliable and impactful digital products. His approach blends technical excellence with a clear understanding of user needs.",
            education: "BS Software Engineering",
            expertise: ["Mobile Frameworks", "Clean Architecture", "Team Leadership", "Performance Optimization", "User Experience"],
            achievements: ["Led 15+ high-performance app launches", "Architected scalable mobile solutions", "Mentored 20+ mobile developers"],
            workSamples: [
                { title: "Enterprise Mobile ERP", type: "Mobile", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop" },
                { title: "FinTech App", type: "Finance", image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1000&auto=format&fit=crop" },
                { title: "Health Monitoring System", type: "Health", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1000&auto=format&fit=crop" }
            ],
            socials: { linkedin: "#", twitter: "#", github: "#" },
            image: "/assets/images/team/portfolio/waqar_img.jpeg",
            color: "text-blue-500"
        },
        {
            name: "Syed Ibnay Hussain",
            role: "Full Stack Web Developer Team Lead",
            experience: "10+ Years",
            projectsCount: "75+",
            quote: "For me, development isn’t about stacking technologies—it’s about making things work simply and effectively.",
            about: "Syed Ibnay Hussain leads with a builder’s mindset—someone who doesn’t just manage projects but actively shapes them from idea to deployment. He works across the entire stack, connecting clean backend logic with intuitive front-end experiences. He focuses on writing maintainable code and designing scalable systems.",
            education: "Software Engineering Specialist",
            expertise: ["Full Stack Development", "System Design", "Scalable Architecture", "API Engineering", "UI Interactions"],
            achievements: ["Architected 30+ complex web systems", "Reduced system latency by 50%", "Established team coding standards"],
            workSamples: [
                { title: "Global E-commerce Engine", type: "Web", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop" },
                { title: "Real-time SaaS Platform", type: "SaaS", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" },
                { title: "Interactive Analytics Dashboard", type: "Analytics", image: "https://images.unsplash.com/photo-1551288049-bbbda5366392?q=80&w=1000&auto=format&fit=crop" }
            ],
            socials: { linkedin: "#", twitter: "#", github: "#" },
            image: "/assets/images/team/portfolio/ibnay_img.jpeg",
            color: "text-blue-600"
        },
        {
            name: "Uzair Ahmed",
            role: "Product Designer",
            experience: "6+ Years",
            projectsCount: "40+",
            quote: "I believe great products are built at the intersection of clarity, usability, and purpose.",
            about: "Uzair is a Product Designer with a strong foundation in software engineering, focused on creating intuitive, scalable, and user-centered digital experiences. His approach combines design thinking with technical understanding, allowing him to bridge the gap between users and business goals.",
            education: "Product Design & Software Engineering",
            expertise: ["Design Thinking", "User-Centered Design", "Scalable Experiences", "Prototyping", "Technical Design"],
            achievements: ["Redesigned 5+ enterprise platforms", "Won 3 international design awards", "Led successful rebranding for 10+ clients"],
            workSamples: [
                { title: "Modern FinTech Interface", type: "Design", image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=1000&auto=format&fit=crop" },
                { title: "Mobile App Design System", type: "System", image: "https://images.unsplash.com/photo-1581291518062-c9a79e7e9f33?q=80&w=1000&auto=format&fit=crop" },
                { title: "Corporate Branding Identity", type: "Branding", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop" }
            ],
            socials: { linkedin: "#", twitter: "#", github: "#" },
            image: "/assets/images/team/portfolio/uzair_img.jpeg",
            color: "text-pink-500"
        },
        {
            name: "Zohaib Ahmed",
            role: "SwiftUI & Mobile Developer",
            experience: "7+ Years",
            projectsCount: "50+",
            quote: "Software is about more than just functionality—it’s about how it feels to use. A great app should work so naturally that the user never thinks about the complexity behind it.",
            about: "Zohaib Ahmed turns clean design into functional, high-quality products. As a SwiftUI and cross-platform mobile Developer with a strong foundation in Software Engineering, he bridges the gap between polished UI/UX and solid backend logic. He prioritizes seamless user experiences.",
            education: "Software Engineering",
            expertise: ["SwiftUI", "Xcode", "Cross-Platform Mobile", "UI/UX Design", "Figma", "Data Structures"],
            achievements: ["Developed 20+ iOS applications", "Instructed Data Structures labs", "Built complex logistics platforms"],
            workSamples: [
                { title: "SwiftUI Logistics App", type: "iOS", image: "https://images.unsplash.com/photo-1512428559083-a40ce9033afb?q=80&w=1000&auto=format&fit=crop" },
                { title: "Cross-Platform Restaurant Hub", type: "Mobile", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop" },
                { title: "iOS Fitness Tracker", type: "iOS", image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=1000&auto=format&fit=crop" }
            ],
            socials: { linkedin: "#", twitter: "#", github: "#" },
            image: "/assets/images/team/portfolio/zohaib_img.jpeg",
            color: "text-blue-600"
        },
        {
            name: "Muhammad Hassan",
            role: "Full-Stack Developer | System Architect | Design-Focused Engineer",
            experience: "4+ Years",
            projectsCount: "25+",
            quote: "For me, great software starts with great structure—and great structure deserves great design. I build full-stack applications with a focus on architecture that lasts and interfaces that feel right. Whether it's integrating an LLM chatbot or designing a seamless user journey, I keep the bird's eye view while sweating the small details. Code works. Systems scale. And design makes it all worth using.",
            about: "Hassan is a Software Engineering graduate who thinks in systems and designs with intention.With a 3x Chancellor's Roll of Honor and Bronze Medal, he brings technical depth and architectural clarity to every project. He has hands-on experience with LLMs and chatbots, but his true focus lies in clean architecture, thoughtful design, and full-stack development. He maintains a bird's eye view of the entire project lifecycle—from database schema and backend logic to frontend polish and user flow.Whether he's structuring a ReactJS frontend, building out Node.js/Express backends, or ensuring design consistency across features, Hassan prioritizes scalability, maintainability, and visual quality. His approach blends the precision of a system architect with the intuition of a designer who cares how things feel to use.",
            education: "Computer Science Degree",
            expertise: ["Node.js", "Python", "PostgreSQL", "System Architecture", "Cloud Infrastructure"],
            achievements: ["Built 10+ core backend services", "Optimized database queries by 60%", "Improved server uptime to 99.9%"],
            workSamples: [
                { title: "Core API Infrastructure", type: "Backend", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=1000&auto=format&fit=crop" },
                { title: "Database Migration Engine", type: "System", image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1000&auto=format&fit=crop" },
                { title: "High-Traffic Auth Service", type: "Security", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" }
            ],
            socials: { linkedin: "#", twitter: "#", github: "#" },
            image: "/assets/images/team/portfolio/hassan_img.jpeg",
            color: "text-blue-400"
        }
    ];

    const stats = [
        { label: "Team Members", value: "20+", icon: "👥" },
        { label: "Years of Experience", value: "10+", icon: "💼" },
        { label: "Projects Delivered", value: "250+", icon: "🚀" },
        { label: "Client Satisfaction", value: "98%", icon: "❤️" }
    ];

    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [activePage, setActivePage] = useState(0);
    const [selectedMember, setSelectedMember] = useState(null);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) { // Below LG breakpoint
                setItemsPerPage(1);
            } else {
                setItemsPerPage(5);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalPages = Math.ceil(team.length / itemsPerPage);

    // Reset active page if total pages change (e.g. on resize)
    useEffect(() => {
        if (activePage >= totalPages) {
            setActivePage(0);
        }
    }, [totalPages, activePage]);

    // Auto-slide effect for Team Slider
    useEffect(() => {
        if (selectedMember || totalPages <= 1) return;
        const timer = setInterval(() => {
            setActivePage((prev) => (prev + 1) % totalPages);
        }, 8000);
        return () => clearInterval(timer);
    }, [selectedMember, totalPages]);

    return (
        <section className="bg-[#05050d] py-24 px-6 sm:px-12 lg:px-24 relative overflow-hidden border-t border-white/5">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-[2px] w-8 bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.8)]" />
                            <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em]">Our Elite Collective</span>
                        </div>
                        <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tighter leading-tight mb-8">
                            Meet the Minds <br /> Behind <span className="text-blue-600">The Magic.</span>
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base font-medium leading-relaxed mb-8 max-w-lg">
                            We're a team of designers, developers, and strategists passionate about building digital experiences that drive real results.
                        </p>
                        <button className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-xl shadow-blue-600/20 active:scale-95 group">
                            <span>Work With Us</span>
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>

                    {/* Testimonial Card */}
                    <div className="relative group">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTestimonial}
                                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -20, scale: 0.95 }}
                                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                                className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] max-w-sm relative shadow-2xl"
                            >
                                <div className="text-4xl text-blue-600/30 font-serif absolute top-4 left-6 leading-none">"</div>
                                <p className="text-gray-300 text-sm font-medium leading-relaxed mb-8 italic relative z-10">
                                    {testimonials[activeTestimonial].quote}
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-600/20">
                                        <img src={testimonials[activeTestimonial].image} alt={testimonials[activeTestimonial].name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="text-white text-sm font-black uppercase tracking-wider">{testimonials[activeTestimonial].name}</h4>
                                        <p className="text-gray-500 text-[10px] font-bold uppercase">{testimonials[activeTestimonial].role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Testimonial Selectors */}
                        <div className="flex gap-3 mt-6 justify-center lg:justify-start">
                            {testimonials.map((t, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveTestimonial(i)}
                                    className={`w-10 h-10 rounded-full overflow-hidden border-2 transition-all duration-300 ${activeTestimonial === i ? 'border-blue-600 scale-110 shadow-lg shadow-blue-600/20' : 'border-white/10 opacity-50 hover:opacity-100'}`}
                                >
                                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Team Straight Grid Slider - 5 Cards Loop */}
                <div className="relative mb-10 md:mb-24 min-h-[500px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activePage}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                            className={`grid grid-cols-1 ${itemsPerPage === 5 ? 'lg:grid-cols-5' : ''} gap-6`}
                        >
                            {team.slice(activePage * itemsPerPage, (activePage + 1) * itemsPerPage).map((member) => (
                                <motion.div
                                    key={member.name}
                                    whileHover={{ y: -12 }}
                                    onClick={() => setSelectedMember(member)}
                                    className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden cursor-pointer group hover:bg-white/[0.06] hover:border-blue-600/30 transition-all duration-500 shadow-xl"
                                >
                                    <div className="aspect-[4/5] relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#05050d] via-transparent to-transparent opacity-80" />
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <h3 className="text-white text-base font-black uppercase tracking-tight group-hover:tracking-[0.1em] transition-all duration-500">{member.name}</h3>
                                            <p className={`text-[8px] font-black uppercase tracking-[0.2em] mt-1 ${member.color}`}>
                                                {member.role}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="p-6 pt-0 text-center">
                                        <div className="h-[1px] w-full bg-white/5 group-hover:bg-blue-600/30 transition-all duration-500 mb-4" />
                                        <button className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-500 group-hover:text-blue-500 transition-colors">
                                            View Profile
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-8 lg:gap-16 z-20 w-full justify-center">
                        <button
                            onClick={() => setActivePage(prev => (prev - 1 + totalPages) % totalPages)}
                            className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-white/10 bg-white/5 items-center justify-center text-white/40 hover:text-white hover:border-blue-600 hover:bg-blue-600/10 transition-all group hidden lg:flex"
                        >
                            <svg className="w-5 h-5 transform rotate-180 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <div className="flex gap-3 lg:gap-4">
                            {Array.from({ length: totalPages }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActivePage(i)}
                                    className={`h-1 lg:h-1.5 rounded-full transition-all duration-700 ${activePage === i ? 'w-10 lg:w-16 bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.6)]' : 'w-3 lg:w-4 bg-white/10 hover:bg-white/20'}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={() => setActivePage(prev => (prev + 1) % totalPages)}
                            className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-white/10 bg-white/5 items-center justify-center text-white/40 hover:text-white hover:border-blue-600 hover:bg-blue-600/10 transition-all group hidden lg:flex"
                        >
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="bg-white/[0.02] border border-white/5 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-14 md:mt-32">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex items-center gap-6 sm:gap-8 group">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl border border-white/10 flex items-center justify-center text-2xl sm:text-3xl group-hover:border-blue-600/50 group-hover:bg-blue-600/5 transition-all duration-700 shadow-2xl shrink-0">
                                    {stat.icon}
                                </div>
                                <div>
                                    <div className="text-2xl sm:text-4xl font-black text-white mb-1 tracking-tight group-hover:text-blue-500 transition-colors whitespace-nowrap">{stat.value}</div>
                                    <div className="text-[9px] sm:text-[10px] font-black text-gray-500 uppercase tracking-widest leading-none">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {selectedMember && (
                    <TeamModal
                        member={selectedMember}
                        onClose={() => setSelectedMember(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Team;
