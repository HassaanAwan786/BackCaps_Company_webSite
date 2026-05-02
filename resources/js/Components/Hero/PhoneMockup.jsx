import { motion, AnimatePresence } from 'framer-motion';
import Counter from './Counter';

const PhoneMockup = ({ rotateX, rotateY, isHoveringMockup, setIsHoveringMockup, screenIndex }) => {
    return (
        <div className="flex-1 flex justify-center lg:justify-end z-20 w-full lg:w-auto">
            {/* Precise Stable Hitbox */}
            <div
                onMouseEnter={() => setIsHoveringMockup(true)}
                onMouseLeave={() => setIsHoveringMockup(false)}
                className="relative w-fit h-fit"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                    className="w-full lg:w-auto flex justify-center lg:justify-end"
                >
                    <div className="relative p-2 md:p-12 scale-[0.85] sm:scale-90 md:scale-90 transition-transform duration-500">
                        {/* Floating Pill 1 */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-12 md:top-24 -right-4 md:-right-8 px-4 py-2 rounded-full bg-brand-purple text-white text-[10px] md:text-sm font-bold uppercase shadow-[0_10px_30px_rgba(21,93,252,0.3)] w-28 md:w-36 text-end z-10"
                        >
                            6 weeks
                        </motion.div>

                        {/* Floating Pill 2 */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-12 md:bottom-24 -left-2 md:-left-4 px-4 py-2 rounded-full bg-green-500/90 text-brand-dark text-[10px] md:text-sm font-bold uppercase shadow-[0_10px_30px_rgba(34,197,94,0.3)] w-28 md:w-36 text-start z-10"
                        >
                            +340%
                        </motion.div>

                        {/* Phone Body */}
                        <motion.div
                            animate={{ borderColor: isHoveringMockup ? "rgba(21, 93, 252, 0.5)" : "#1a1a2e" }}
                            className="relative w-[260px] sm:w-[320px] h-[520px] sm:h-[640px] bg-[#0c0c14] rounded-[3rem] border-[2px] shadow-2xl overflow-hidden z-10 cursor-pointer"
                            style={{
                                transform: "translateZ(50px)",
                                transformStyle: "preserve-3d"
                            }}
                        >
                            <AnimatePresence>
                                {screenIndex === 0 ? (
                                    <motion.div
                                        key="dashboard"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.4 }}
                                        className="p-6 pt-0 flex flex-col h-full"
                                    >
                                        <div className='flex justify-center items-center'>
                                            <div className='inset-0 bg-[#05050d] rounded-b-3xl w-36 h-12 mb-4'></div>
                                        </div>

                                        <div className="flex justify-between items-center mb-4">
                                            <div className="flex gap-1.5">
                                                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                                            </div>
                                            <span className="text-[10px] text-brand-gray font-bold uppercase tracking-widest">dashboard</span>
                                        </div>

                                        <div className="flex flex-col gap-4">
                                            {/* Metric 1 */}
                                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                                <div className="flex justify-between text-[10px] mb-2 text-brand-gray uppercase font-bold">
                                                    <span>monthly revenue</span>
                                                    <span className="text-white">
                                                        <Counter value={84000} prefix="$" delay={1} />
                                                    </span>
                                                </div>
                                                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: "80%" }}
                                                        transition={{ duration: 1.5, delay: 1 }}
                                                        className="h-full bg-brand-purple rounded-full"
                                                    ></motion.div>
                                                </div>
                                            </div>

                                            {/* Metric 2 */}
                                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                                <div className="flex justify-between text-[10px] mb-2 text-brand-gray uppercase font-bold">
                                                    <span>active users</span>
                                                    <span className="text-white">
                                                        <Counter value={12400} delay={1.2} />
                                                    </span>
                                                </div>
                                                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: "65%" }}
                                                        transition={{ duration: 1.5, delay: 1.2 }}
                                                        className="h-full bg-green-500 rounded-full"
                                                    ></motion.div>
                                                </div>
                                                <div className="flex gap-2 mt-3">
                                                    <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 text-[8px] font-bold uppercase">live</span>
                                                    <span className="px-2 py-0.5 rounded-full bg-white/5 text-brand-gray text-[8px] font-bold uppercase">+12% today</span>
                                                </div>
                                            </div>

                                            {/* Metric 3 */}
                                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                                <div className="flex justify-between text-[10px] mb-2 text-brand-gray uppercase font-bold">
                                                    <span>uptime</span>
                                                    <span className="text-green-500">
                                                        <Counter value={99.98} suffix="%" decimals={2} delay={1.4} />
                                                    </span>
                                                </div>
                                                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: "99%" }}
                                                        transition={{ duration: 1.5, delay: 1.4 }}
                                                        className="h-full bg-green-500 rounded-full"
                                                    ></motion.div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3 mt-4 mb-8">
                                            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                                                <span className="text-[8px] text-brand-gray uppercase font-bold block mb-1">sprint</span>
                                                <span className="text-xs font-bold text-white">week 3</span>
                                            </div>
                                            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                                                <span className="text-[8px] text-brand-gray uppercase font-bold block mb-1">velocity</span>
                                                <span className="text-xs font-bold text-brand-purple">
                                                    <Counter value={92} suffix="pts" delay={1.6} />
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ) : screenIndex === 1 ? (
                                    <motion.div
                                        key="video"
                                        initial={{ opacity: 0, scale: 0.9, rotateY: 45 }}
                                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                        exit={{ opacity: 0, scale: 1.1, rotateY: -45 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className="h-full w-full bg-brand-purple/10 flex flex-col p-6 pt-0"
                                    >
                                        <div className='flex justify-center items-center'>
                                            <div className='inset-0 bg-[#05050d] rounded-b-3xl w-36 h-12 mb-8'></div>
                                        </div>

                                        <div className="flex-1 rounded-2xl bg-white/5 border border-white/10 overflow-hidden relative group">
                                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-60"></div>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <motion.div
                                                    animate={{ scale: [1, 1.2, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                    className="w-16 h-16 rounded-full bg-brand-purple flex items-center justify-center shadow-2xl"
                                                >
                                                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M8 5v14l11-7z" />
                                                    </svg>
                                                </motion.div>
                                            </div>
                                            <div className="absolute bottom-4 left-4 right-4">
                                                <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: "100%" }}
                                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                                        className="h-full bg-brand-purple"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <h3 className="text-xl font-bold text-white mb-2">BackCaps AI App</h3>
                                            <p className="text-brand-gray text-xs mb-6">Experience the next generation of automated deployments and real-time analytics.</p>

                                            <div className="flex flex-col gap-3">
                                                <div className="h-12 w-full rounded-xl bg-brand-purple flex items-center justify-center font-bold text-sm uppercase tracking-widest text-white shadow-lg shadow-brand-purple/30">
                                                    launch demo
                                                </div>
                                                <div className="h-12 w-full rounded-xl border border-white/10 flex items-center justify-center font-bold text-sm uppercase tracking-widest text-brand-gray">
                                                    view source
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="code"
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.5 }}
                                        className="h-full w-full bg-[#05050d] p-6 pt-0 flex flex-col"
                                    >
                                        <div className='flex justify-center items-center'>
                                            <div className='inset-0 bg-brand-dark rounded-b-3xl w-36 h-12 mb-8'></div>
                                        </div>

                                        <div className="flex-1 rounded-2xl bg-black/50 border border-brand-purple/20 p-4 font-mono text-[10px] leading-relaxed overflow-hidden">
                                            <div className="flex gap-1.5 mb-4">
                                                <div className="w-2 h-2 rounded-full bg-red-500/40"></div>
                                                <div className="w-2 h-2 rounded-full bg-yellow-500/40"></div>
                                                <div className="w-2 h-2 rounded-full bg-green-500/40"></div>
                                            </div>
                                            <div className="text-brand-purple">class</div> <div className="text-blue-400 inline">BackCapsEngine</div> {'{'} <br />
                                            &nbsp;&nbsp;<div className="text-brand-purple inline">async</div> <div className="text-yellow-400 inline">deploy</div>() {'{'} <br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;<div className="text-brand-gray inline">// Initializing...</div> <br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;<div className="text-brand-purple inline">const</div> cloud = <div className="text-brand-purple inline">await</div> <div className="text-blue-400 inline">Connect</div>(); <br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;<div className="text-green-400 inline">return</div> cloud.<div className="text-yellow-400 inline">push</div>({'{'} <br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scale: <div className="text-orange-400 inline">true</div>, <br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quality: <div className="text-orange-400 inline">100</div> <br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;{'}'}); <br />
                                            &nbsp;&nbsp;{'}'} <br />
                                            {'}'}

                                            <motion.div
                                                animate={{ opacity: [0.3, 1, 0.3] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                                className="mt-6 text-green-500 font-bold"
                                            >
                                                {'>'} STAGING DEPLOY: SUCCESS
                                            </motion.div>
                                            <div className="text-brand-gray mt-2">{'>'} Building assets...</div>
                                            <div className="text-brand-gray">{'>'} Optimizing bundle...</div>
                                        </div>

                                        <div className="mt-8 p-4 rounded-xl bg-brand-purple/5 border border-brand-purple/20">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="w-8 h-8 rounded-lg bg-brand-purple/20 flex items-center justify-center">
                                                    <div className="w-4 h-4 bg-brand-purple rounded-sm animate-pulse"></div>
                                                </div>
                                                <span className="text-xs font-bold text-white uppercase tracking-tighter">Automated Pipeline</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mt-3">
                                                <motion.div
                                                    animate={{ x: ["-100%", "100%"] }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                                    className="h-full w-1/2 bg-brand-purple"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PhoneMockup;
