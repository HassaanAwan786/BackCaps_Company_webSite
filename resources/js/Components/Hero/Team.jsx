import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Team = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

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
            bio: "10+ years of experience in building digital products and leading teams.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop",
            color: "text-blue-500"
        },
        {
            name: "Sarah Williams",
            role: "Creative Director",
            bio: "Passionate about design systems, brands, and user experiences.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2000&auto=format&fit=crop",
            color: "text-pink-500"
        },
        {
            name: "David Martinez",
            role: "Lead Developer",
            bio: "Full-stack developer who loves clean code and scalable solutions.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2000&auto=format&fit=crop",
            color: "text-blue-400"
        },
        {
            name: "Emily Johnson",
            role: "Project Manager",
            bio: "Keeps projects on track and ensures seamless collaboration.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2000&auto=format&fit=crop",
            color: "text-blue-600"
        },
        {
            name: "James Lee",
            role: "UI/UX Designer",
            bio: "Crafting intuitive interfaces that users love and remember.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2000&auto=format&fit=crop",
            color: "text-cyan-500"
        },
        {
            name: "Olivia Brown",
            role: "Front-end Developer",
            bio: "Brings designs to life with pixel-perfect and responsive code.",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2000&auto=format&fit=crop",
            color: "text-blue-500"
        },
        {
            name: "Daniel Kim",
            role: "Backend Developer",
            bio: "Building robust APIs and backend systems that scale.",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2000&auto=format&fit=crop",
            color: "text-blue-700"
        },
        {
            name: "Sophia Davis",
            role: "QA Engineer",
            bio: "Ensures quality, performance, and a bug-free experience.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop",
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
                        >
                            <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-4 transition-all duration-500 group-hover:bg-white/[0.05] group-hover:border-white/10 group-hover:-translate-y-2">
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
                                        {member.bio}
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
        </section>
    );
};

export default Team;
