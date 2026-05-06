import React from 'react';
import { motion } from 'framer-motion';

const CheckIcon = () => (
    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    </div>
);

const WhoWeAre = () => {
    const pillars = [
        {
            title: "Innovation",
            description: "We push the boundaries of what's possible by embracing cutting-edge technologies that deliver tangible value. Our team stays ahead of the curve, ensuring your product leverages the latest tools and methodologies like AWS cloud infrastructure at scale.",
            image: "/assets/images/who/innovation_main.png",
            secondaryImage: "/assets/images/who/innovation_secondary.png",
            features: [
                "AI & Machine Learning Integration",
                "Cloud-Native Architecture",
                "Continuous Innovation Pipeline",
                "Advanced Analytics & Insights",
                "Real-Time Processing Systems"
            ],
            reverse: false
        },
        {
            title: "Collaboration",
            description: "Your vision becomes our mission. We embed ourselves into your workflow, treating your success as our own. From ideation to deployment, our transparent communication ensures we're always aligned with your business goals.",
            image: "/assets/images/who/collaboration_main.png",
            secondaryImage: "/assets/images/who/collaboration_secondary.png",
            features: [
                "Agile Development Process",
                "Transparent Communication",
                "Regular Progress Updates",
                "Cross-Functional Team Integration",
                "Dedicated Project Management"
            ],
            reverse: true
        },
        {
            title: "Scalability",
            description: "We don't just build for today—we architect for tomorrow. Whether you're handling 100 users or 10 million, our infrastructure is designed to grow seamlessly alongside your business without breaking a sweat.",
            image: "/assets/images/who/scalability_main.png",
            secondaryImage: "/assets/images/who/scalability_secondary.png",
            features: [
                "Microservices Architecture",
                "Auto-Scaling Infrastructure",
                "Performance Optimization",
                "Global CDN Distribution",
                "Database Optimization & Caching"
            ],
            reverse: false
        }
    ];

    return (
        <section className="bg-white py-24 sm:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] block mb-4"
                    >
                        Premium Digital Agency
                    </motion.span>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col items-center mb-10"
                    >
                        <h2 className="text-6xl sm:text-8xl font-black text-black uppercase tracking-tighter leading-[0.8] mb-2">
                            Who
                        </h2>
                        <div className="flex items-center gap-8 sm:gap-12">
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="hidden sm:block text-gray-300"
                            >
                                <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                                    <path d="M10 0L0 10L10 20" stroke="currentColor" strokeWidth="2"/>
                                    <path d="M0 10H40" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            </motion.div>
                            
                            <div className="bg-[#1d4ed8] px-8 py-3 rounded-xl transform -rotate-1">
                                <span className="text-5xl sm:text-7xl font-black text-white uppercase tracking-tighter leading-none">
                                    We Are
                                </span>
                            </div>

                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="hidden sm:block text-gray-300"
                            >
                                <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                                    <path d="M30 0L40 10L30 20" stroke="currentColor" strokeWidth="2"/>
                                    <path d="M0 10H40" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 text-sm sm:text-lg leading-relaxed font-medium max-w-2xl mx-auto"
                    >
                        For a decade, we've partnered with ambitious startups and Fortune 500s to design, develop, and scale world-class digital products. Our team doesn't just build software—we architect solutions that redefine industries.
                    </motion.p>
                </div>

                {/* Pillars Section Label */}
                <div className="flex items-center gap-4 mb-20">
                    <div className="h-[2px] w-12 bg-blue-600" />
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Our Pillars</span>
                </div>

                {/* Pillars Content */}
                <div className="space-y-40">
                    {pillars.map((pillar, i) => (
                        <div key={i} className={`flex flex-col ${pillar.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-32`}>
                            {/* Text Content */}
                            <motion.div
                                initial={{ opacity: 0, x: pillar.reverse ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="flex-1 text-left"
                            >
                                <h3 className="text-5xl sm:text-6xl font-black text-black uppercase tracking-tighter mb-8 leading-none">
                                    {pillar.title}
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium mb-10 max-w-xl">
                                    {pillar.description}
                                </p>
                                
                                <ul className="space-y-4">
                                    {pillar.features.map((feature, idx) => (
                                        <motion.li 
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 * idx }}
                                            className="flex items-center gap-3 text-gray-700 font-semibold text-sm"
                                        >
                                            <CheckIcon />
                                            {feature}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Image Content */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="flex-1 w-full relative"
                            >
                                <div className="relative aspect-[4/3] w-full">
                                    {/* Main Image */}
                                    <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl">
                                        <img
                                            src={pillar.image}
                                            alt={pillar.title}
                                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                        />
                                    </div>
                                    
                                    {/* Secondary Overlapping Image */}
                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0.8, x: pillar.reverse ? -20 : 20 }}
                                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 }}
                                        className={`absolute ${pillar.reverse ? '-right-8' : '-left-8'} top-1/2 -translate-y-1/2 w-1/2 aspect-square rounded-3xl overflow-hidden border-8 border-white shadow-xl z-10`}
                                    >
                                        <img
                                            src={pillar.secondaryImage}
                                            alt={`${pillar.title} detail`}
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>

                                    {/* Background Decorative Element */}
                                    <div className={`absolute -inset-4 bg-blue-50 rounded-[3rem] -z-10 transform ${pillar.reverse ? 'translate-x-4' : '-translate-x-4'} translate-y-4`} />
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
