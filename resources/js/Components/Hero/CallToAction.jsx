import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
    return (
        <section className="bg-white py-24 px-6 sm:px-12 lg:px-24">
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="bg-black rounded-[3rem] p-12 sm:p-24 text-center flex flex-col items-center justify-center relative overflow-hidden"
            >
                {/* Background Ambient Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2" />
                
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-[0.9] max-w-5xl mb-10 font-display"
                    >
                        Let's Build<br />
                        Something Great<br />
                        Together
                    </motion.h2>
                
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-white text-sm sm:text-lg max-w-2xl mb-14 font-normal leading-relaxed"
                >
                    Ready to turn your vision into reality? Whether you're launching a startup or scaling an enterprise, we're here to build something extraordinary with you.
                </motion.p>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-12 py-5 bg-white text-black rounded-full text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] w-full sm:w-auto shadow-xl shadow-white/5 transition-all"
                    >
                        Let's Talk
                    </motion.button>
                    
                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-12 py-5 border-2 border-white/20 text-white rounded-full text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] w-full sm:w-auto transition-all"
                    >
                        View Portfolio
                    </motion.button>
                </motion.div>

                {/* Corner Accents */}
                <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-white/10 rounded-tl-2xl" />
                <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-white/10 rounded-br-2xl" />
            </motion.div>
        </section>
    );
};

export default CallToAction;
