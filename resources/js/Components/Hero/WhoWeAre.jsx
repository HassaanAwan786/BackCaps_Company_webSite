import React from 'react';
import { motion } from 'framer-motion';

const WhoWeAre = () => {
    const pillars = [
        {
            title: "Innovation",
            description: "We push the boundaries of what's possible by embracing cutting-edge technologies that deliver tangible value. Our team stays ahead of the curve, ensuring your product leverages the latest tools and methodologies like AI/ML, cloud infrastructure at scale.",
            image: "/assets/images/who_1.png",
            reverse: false
        },
        {
            title: "Collaboration",
            description: "Your vision becomes our mission. We embed ourselves into your workflow, treating your success as our own. From ideation to deployment, our transparent communication ensures we're always aligned with your business goals.",
            image: "/assets/images/who_2.png",
            reverse: true
        },
        {
            title: "Scalability",
            description: "We don't just build for today—we architect for tomorrow. Whether you're handling 100 users or 10 million, our infrastructure is designed to grow seamlessly alongside your business without breaking a sweat.",
            image: "/assets/images/who_3.png",
            reverse: false
        }
    ];

    return (
        <section className="bg-white py-24 sm:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] block mb-4"
                    >
                        Premium Digital Agency
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col items-center gap-2 mb-8"
                    >
                        <span className="text-5xl sm:text-7xl font-black text-black uppercase tracking-tighter leading-none">Who</span>
                        <div className="bg-[#2563eb] px-6 py-2 rotate-[-1deg]">
                            <span className="text-5xl sm:text-7xl font-black text-white uppercase tracking-tighter leading-none">We Are</span>
                        </div>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 text-sm sm:text-base leading-relaxed font-medium"
                    >
                        For a decade, we've partnered with ambitious startups and Fortune 500s to design, develop, and scale world-class digital products. Our team doesn't just build software—we architect solutions that redefine industries.
                    </motion.p>
                </div>

                {/* Pillars Section Title */}
                <div className="flex items-center gap-4 mb-20">
                    <div className="h-[1px] w-12 bg-blue-600/30" />
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Our Pillars</span>
                </div>

                {/* Pillars Content */}
                <div className="space-y-32">
                    {pillars.map((pillar, i) => (
                        <div key={i} className={`flex flex-col ${pillar.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
                            {/* Text Content */}
                            <motion.div
                                initial={{ opacity: 0, x: pillar.reverse ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="flex-1 text-left"
                            >
                                <h3 className="text-4xl sm:text-5xl font-black text-black uppercase tracking-tighter mb-6 leading-none">
                                    {pillar.title}
                                </h3>
                                <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-medium mb-10 max-w-xl">
                                    {pillar.description}
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 rounded-full bg-[#2563eb] text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-blue-600/20"
                                >
                                    Explore {pillar.title}
                                </motion.button>
                            </motion.div>

                            {/* Image Content */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, x: pillar.reverse ? -50 : 50 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="flex-1 w-full"
                            >
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-blue-600/5 rounded-[2.5rem] scale-95 group-hover:scale-100 transition-transform duration-500" />
                                    <img
                                        src={pillar.image}
                                        alt={pillar.title}
                                        className="relative w-full aspect-[4/3] object-cover rounded-[2rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 cursor-crosshair"
                                    />
                                    {/* Corner Accents */}
                                    <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/20 rounded-tr-2xl" />
                                    <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/20 rounded-bl-2xl" />
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
