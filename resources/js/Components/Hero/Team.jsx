import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TeamModal = ({ member, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    if (!member) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-start justify-center p-4 sm:p-8 lg:p-12 overflow-y-auto bg-black/95 backdrop-blur-md"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-6xl bg-[#0a0a14] border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl"
            >
                {/* Back Button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 left-8 z-20 flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-600 transition-colors">
                        <svg className="w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest">Back to Team</span>
                </button>

                <div className="flex flex-col lg:flex-row min-h-[80vh]">
                    {/* Left Column - Image & Stats */}
                    <div className="lg:w-2/5 p-8 lg:p-12 border-r border-white/5">
                        <div className="sticky top-12">
                            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 shadow-2xl group">
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6">
                                    <h2 className="text-white text-2xl font-black uppercase tracking-tight mb-1">{member.name}</h2>
                                    <p className="text-blue-600 text-[10px] font-black uppercase tracking-widest">{member.role}</p>
                                </div>
                                <a href={member.socials.linkedin} target="_blank" className="absolute bottom-6 right-6 w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </a>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-white/[0.03] border border-white/5 p-6 rounded-2xl">
                                    <div className="text-blue-600 text-xl font-black mb-1">{member.experience}</div>
                                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Experience</div>
                                </div>
                                <div className="bg-white/[0.03] border border-white/5 p-6 rounded-2xl">
                                    <div className="text-blue-600 text-xl font-black mb-1">{member.projectsCount}</div>
                                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Projects</div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">Work Samples</h4>
                                {member.workSamples.map((sample, i) => (
                                    <div key={i} className="relative group/sample aspect-[16/6] rounded-xl overflow-hidden cursor-pointer">
                                        <img src={sample.image} alt={sample.title} className="w-full h-full object-cover transition-transform duration-500 group-hover/sample:scale-110" />
                                        <div className="absolute inset-0 bg-black/60 flex items-center justify-between px-6">
                                            <span className="text-white text-[10px] font-bold">{sample.title}</span>
                                            <span className="text-blue-600 text-[8px] font-black uppercase px-2 py-1 bg-blue-600/10 rounded-full">{sample.type}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-4 mt-8">
                                <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white transition-all">
                                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </a>
                                <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white transition-all">
                                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.19-7.713-2.16-10.141-5.144-.424.722-.666 1.561-.666 2.457 0 1.694.87 3.192 2.188 4.075-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" /></svg>
                                </a>
                                <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white transition-all">
                                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="lg:w-3/5 p-8 lg:p-12 bg-white/[0.01]">
                        <div className="max-w-2xl">
                            <div className="mb-12">
                                <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] block mb-4">Team Member</span>
                                <h1 className="text-5xl sm:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-4">{member.name}</h1>
                                <p className="text-gray-500 text-lg font-medium">{member.role}</p>
                            </div>

                            <div className="mb-12 relative pl-12">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-full" />
                                <svg className="absolute left-4 top-0 w-6 h-6 text-blue-600/30 fill-current" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1.0166 21L1.0166 18C1.0166 16.8954 1.91203 16 3.0166 16H6.0166C6.56888 16 7.0166 15.5523 7.0166 15V9C7.0166 8.44772 6.56888 8 6.0166 8H3.0166C1.91203 8 1.0166 7.10457 1.0166 6V5C1.0166 3.89543 1.91203 3 3.0166 3H6.0166C8.22574 3 10.0166 4.79086 10.0166 7V15C10.0166 18.3137 7.3303 21 4.0166 21H1.0166Z" /></svg>
                                <p className="text-gray-300 text-lg sm:text-xl font-medium leading-relaxed italic">
                                    {member.quote}
                                </p>
                            </div>

                            <div className="mb-12">
                                <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-6">About</h4>
                                <p className="text-gray-400 text-base leading-relaxed font-medium">
                                    {member.about}
                                </p>
                            </div>

                            <div className="mb-12">
                                <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-6">Education</h4>
                                <div className="bg-white/[0.03] border border-white/5 p-6 rounded-2xl flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
                                    </div>
                                    <span className="text-white text-sm font-bold">{member.education}</span>
                                </div>
                            </div>

                            <div className="mb-12">
                                <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-6">Expertise & Tech Stack</h4>
                                <div className="flex flex-wrap gap-3">
                                    {member.expertise.map((skill, i) => (
                                        <span key={i} className="px-6 py-3 bg-white/[0.03] border border-white/5 rounded-full text-white text-xs font-bold hover:bg-blue-600 hover:border-blue-600 transition-all cursor-default">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-12">
                                <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-6">Key Achievements</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {member.achievements.map((achievement, i) => (
                                        <div key={i} className="bg-white/[0.03] border border-white/5 p-6 rounded-2xl flex items-center gap-4 group/ach">
                                            <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 group-hover/ach:scale-110 transition-transform">
                                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            <span className="text-gray-300 text-xs font-semibold">{achievement}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button className="w-full py-6 bg-blue-600 hover:bg-blue-500 text-white text-xs font-black uppercase tracking-[0.3em] rounded-2xl transition-all duration-300 shadow-xl shadow-blue-600/20 active:scale-[0.98] flex items-center justify-center gap-3 group">
                                <span>View Full Profile</span>
                                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Team = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [selectedMember, setSelectedMember] = useState(null);

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
            name: "Michael Anderson",
            role: "Founder & CEO",
            experience: "12+ Years",
            projectsCount: "150+",
            quote: "True innovation isn't just about code; it's about solving real-world problems with elegant, scalable technology.",
            about: "Michael is a visionary leader with over a decade of experience in the tech industry. He has spearheaded numerous high-impact projects for global enterprises.",
            education: "MBA, Stanford University",
            expertise: ["Strategic Leadership", "Venture Capital", "System Architecture", "Business Growth"],
            achievements: ["Built 3 successful startups", "Featured in Forbes 30 Under 30", "Consulted for Fortune 500s"],
            workSamples: [
                { title: "Enterprise ERP", type: "Enterprise", image: "/assets/images/team/work_1.png" },
                { title: "FinTech Platform", type: "Finance", image: "/assets/images/team/work_2.png" },
                { title: "Global Logistics", type: "Infrastructure", image: "/assets/images/team/work_3.png" }
            ],
            socials: { linkedin: "#", twitter: "#", github: "#" },
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop",
            color: "text-blue-500"
        },
        {
            name: "Sarah Williams",
            role: "Creative Director",
            experience: "9+ Years",
            projectsCount: "80+",
            quote: "Design is not just what it looks like and feels like. Design is how it works.",
            about: "Sarah is a design maven who believes in the power of visual storytelling and user-centric interfaces.",
            education: "BFA in Visual Communication, RISD",
            expertise: ["Brand Identity", "UX Strategy", "Motion Design", "Design Systems"],
            achievements: ["Awwwards Site of the Year", "Behance Featured Artist", "Red Dot Design Award"],
            workSamples: [
                { title: "Luxury Brand Refresh", type: "Branding", image: "/assets/images/team/work_1.png" },
                { title: "E-commerce Redesign", type: "UX/UI", image: "/assets/images/team/work_2.png" },
                { title: "Interactive Museum", type: "Experiential", image: "/assets/images/team/work_3.png" }
            ],
            socials: { linkedin: "#", twitter: "#", github: "#" },
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2000&auto=format&fit=crop",
            color: "text-pink-500"
        },
        {
            name: "Emily Johnson",
            role: "Product Manager",
            experience: "7+ Years",
            projectsCount: "50+",
            quote: "Great products come from deeply understanding user needs and translating them into experiences that delight, retain and convert.",
            about: "Emily has 7+ years of product management experience at both startups and enterprise companies. She excels at bridging the gap between technical teams and business stakeholders, ensuring products deliver real value to users.",
            education: "MS Product Management, Berkeley",
            expertise: ["Product Strategy", "Agile/Scrum", "User Research", "Roadmap Planning", "Data Analytics"],
            achievements: ["Launched 15 successful products", "Increased user retention by 150%", "Certified Scrum Master", "Product of the Year award winner"],
            workSamples: [
                { title: "SaaS Product Launch", type: "Product", image: "/assets/images/team/work_1.png" },
                { title: "Mobile App Redesign", type: "Mobile", image: "/assets/images/team/work_2.png" },
                { title: "Growth Experiment", type: "Growth", image: "/assets/images/team/work_3.png" }
            ],
            socials: { linkedin: "#", twitter: "#", github: "#" },
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2000&auto=format&fit=crop",
            color: "text-blue-600"
        },
        {
            name: "David Martinez",
            role: "Lead Developer",
            experience: "8+ Years",
            projectsCount: "120+",
            quote: "Code is like humor. When you have to explain it, it’s bad.",
            about: "David is a full-stack wizard who specializes in building scalable backend systems and high-performance frontend applications.",
            education: "BS Computer Science, MIT",
            expertise: ["React/Next.js", "Node.js", "Python", "Cloud Infrastructure"],
            achievements: ["Open Source Contributor", "Tech Speaker at JSConf", "Developed high-frequency trading bot"],
            workSamples: [
                { title: "Real-time Chat App", type: "Web App", image: "/assets/images/team/work_1.png" },
                { title: "Crypto Exchange", type: "FinTech", image: "/assets/images/team/work_2.png" },
                { title: "AI Image Generator", type: "AI/ML", image: "/assets/images/team/work_3.png" }
            ],
            socials: { linkedin: "#", twitter: "#", github: "#" },
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2000&auto=format&fit=crop",
            color: "text-blue-400"
        }
    ];

    const stats = [
        { label: "Team Members", value: "20+", icon: "👥" },
        { label: "Years of Experience", value: "10+", icon: "💼" },
        { label: "Projects Delivered", value: "250+", icon: "🚀" },
        { label: "Client Satisfaction", value: "98%", icon: "❤️" }
    ];

    return (
        <section className="bg-[#05050d] py-24 px-6 sm:px-12 lg:px-24 relative overflow-hidden border-t border-white/5">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-[2px] w-8 bg-blue-600" />
                            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Our Team</span>
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
                                className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] max-w-sm relative"
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

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                            onClick={() => setSelectedMember(member)}
                        >
                            <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-4 transition-all duration-500 group-hover:bg-white/[0.05] group-hover:border-white/10 group-hover:-translate-y-2 cursor-pointer">
                                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 relative">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#05050d] via-transparent to-transparent opacity-60" />
                                </div>
                                <div className="px-2 pb-2">
                                    <h3 className="text-white text-xl font-black uppercase tracking-tight mb-1">{member.name}</h3>
                                    <p className={`text-[10px] font-black uppercase tracking-[0.2em] mb-4 ${member.color}`}>
                                        {member.role}
                                    </p>
                                    <p className="text-gray-500 text-xs font-medium leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        {member.experience} EXPERIENCE • {member.projectsCount} PROJECTS
                                    </p>
                                    <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                                        <svg className="w-4 h-4 text-white transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Bar */}
                <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 sm:p-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-2xl group-hover:border-blue-600/50 group-hover:bg-blue-600/5 transition-all duration-500">
                                    {stat.icon}
                                </div>
                                <div>
                                    <div className="text-2xl sm:text-3xl font-black text-white mb-1 tracking-tight">{stat.value}</div>
                                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
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
