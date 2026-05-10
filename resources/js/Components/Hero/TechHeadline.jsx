import React from 'react';
import { motion } from 'framer-motion';
import Counter from './Counter';

const TechHeadline = () => {
    const techStack = [
        { name: 'Python', icon: '🐍' },
        { name: 'Next.js', icon: '▲' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'Node.js', icon: '🟢' },
        { name: 'AWS', icon: '☁️' },
        { name: 'React', icon: '⚛️' },
        { name: 'TypeScript', icon: '🔷' },
        { name: 'Docker', icon: '🐳' },
        { name: 'Tailwind', icon: '🌊' },
        { name: 'Redis', icon: '📦' }
    ];

    const stats = [
        { value: 47, label: 'Products Shipped', suffix: '' },
        { value: 6, label: 'Years Building', suffix: '' },
        { value: 2.4, label: 'Raised by Clients', prefix: '$', suffix: 'M', decimals: 1 },
        { value: 97, label: 'On-time Delivery', suffix: '%' },
        { value: 12, label: 'Countries Served', suffix: '' }
    ];

    return (
        <div id="tech-stats" className="mt-16 md:mt-0 w-full bg-[#05050d] border-t border-white/5 relative overflow-hidden">
            {/* Top Row: Tech Stack Marquee */}
            <div className="flex items-center border-b border-white/5 h-14 sm:h-16">
                <div className="bg-[#2563eb] px-4 sm:px-8 h-full flex items-center justify-center z-10 shadow-[20px_0_40px_rgba(0,0,0,0.5)]">
                    <span className="text-[8px] sm:text-[10px] font-black text-white uppercase tracking-[0.2em] whitespace-nowrap">Tech Stack</span>
                </div>

                <div className="flex-1 overflow-hidden relative">
                    {/* Fades for smooth scroll effect */}
                    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#05050d] to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#05050d] to-transparent z-10" />

                    <motion.div
                        animate={{ x: [0, -2000] }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="flex items-center gap-12 sm:gap-24 px-12 whitespace-nowrap"
                    >
                        {[...techStack, ...techStack, ...techStack].map((tech, i) => (
                            <div key={i} className="flex items-center gap-3 group cursor-default">
                                <span className="text-lg sm:text-xl opacity-70 group-hover:opacity-100 transition-opacity">{tech.icon}</span>
                                <span className="text-[10px] sm:text-sm font-bold text-white/30 group-hover:text-white/80 uppercase tracking-widest transition-colors">{tech.name}</span>
                                <div className="w-1 h-1 rounded-full bg-white/10 mx-2" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Bottom Row: Stats - Full Width Responsive Grid */}
            <div className="w-full px-6 sm:px-12 py-8 sm:py-10">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-8">
                    {stats.map((stat, i) => (
                        <div key={i} className="flex flex-col items-center text-center relative group">
                            {/* Vertical Divider Logic */}
                            {i !== 0 && (
                                <div className={`hidden lg:block absolute left-[-16px] top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/5`} />
                            )}
                            
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="mb-2"
                            >
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tighter block group-hover:text-[#2563eb] transition-colors duration-300 font-display">
                                    <Counter
                                        value={stat.value}
                                        prefix={stat.prefix}
                                        suffix={stat.suffix}
                                        decimals={stat.decimals || 0}
                                        duration={2.5}
                                        delay={i * 0.2}
                                    />
                                </div>
                            </motion.div>
                            <span className="text-[9px] sm:text-[10px] font-black text-brand-gray uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 group-hover:text-white transition-all duration-300 leading-tight">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechHeadline;
