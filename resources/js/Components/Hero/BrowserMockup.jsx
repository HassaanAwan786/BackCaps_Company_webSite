import { motion, AnimatePresence } from 'framer-motion';
import Counter from './Counter';

const BrowserMockup = ({ rotateX, rotateY, isHoveringMockup, setIsHoveringMockup, screenIndex }) => {
    return (
        <div className="flex-none lg:flex-1 flex justify-center lg:justify-end z-20 w-full lg:w-auto mt-8 lg:mt-0">
            <div
                onMouseEnter={() => setIsHoveringMockup(true)}
                onMouseLeave={() => setIsHoveringMockup(false)}
                className="relative w-fit h-fit"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                    className="relative w-full max-w-2xl lg:max-w-3xl bg-[#0c0c14] rounded-2xl border border-white/10 shadow-2xl overflow-visible scale-90 sm:scale-100 lg:scale-110 origin-center lg:origin-right"
                >
                    {/* Browser Top Bar */}
                    <div className="bg-[#1a1a2e] px-4 py-3 flex items-center gap-4 rounded-t-2xl">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>
                        <div className="flex-1 h-7 bg-black/30 rounded-md flex items-center px-4 text-[10px] text-brand-gray font-mono overflow-hidden whitespace-nowrap">
                            app.client-dashboard.io/overview
                        </div>
                        <div className="hidden sm:block px-3 py-1 rounded-md bg-green-500/10 border border-green-500/20 text-[10px] font-bold text-green-500 uppercase tracking-widest">
                            + live
                        </div>
                    </div>

                    {/* Browser Content */}
                    <div className="relative overflow-hidden rounded-b-2xl h-[420px] sm:h-[480px]">
                        <AnimatePresence mode="wait">
                            {screenIndex === 0 ? (
                                <motion.div
                                    key="screen1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="p-4 sm:p-6 h-auto flex flex-col gap-3 sm:gap-4"
                                >
                                    <div className="flex justify-between items-end mb-1">
                                        <div>
                                            <h2 className="text-sm sm:text-base font-bold text-white mb-0.5 uppercase tracking-tight">Dashboard Overview</h2>
                                            <span className="text-[8px] sm:text-[9px] text-brand-gray font-bold uppercase tracking-widest">Last updated: Just now</span>
                                        </div>
                                    </div>

                                    {/* Row 1: 2 Blocks */}
                                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                        <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10">
                                            <span className="text-[8px] sm:text-[9px] text-brand-gray uppercase font-bold block mb-2 sm:mb-3 tracking-wider">monthly revenue</span>
                                            <div className="text-lg sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                                                <Counter value={84000} prefix="$" />
                                            </div>
                                            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden mb-3">
                                                <motion.div initial={{ width: 0 }} animate={{ width: "65%" }} transition={{ duration: 1.5 }} className="h-full bg-blue-500" />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-[8px] sm:text-[9px] font-bold">↑ 23% MoM</span>
                                            </div>
                                        </div>
                                        <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10">
                                            <span className="text-[8px] sm:text-[9px] text-brand-gray uppercase font-bold block mb-2 sm:mb-3 tracking-wider">active users</span>
                                            <div className="text-lg sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                                                <Counter value={12400} />
                                            </div>
                                            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden mb-3">
                                                <motion.div initial={{ width: 0 }} animate={{ width: "80%" }} transition={{ duration: 1.5 }} className="h-full bg-green-500" />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 text-[8px] font-bold uppercase tracking-tighter">live</span>
                                                <span className="text-brand-gray text-[8px] sm:text-[9px] font-bold uppercase tracking-tighter">+12% today</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Row 2: 1 Full Block */}
                                    <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10">
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-[8px] sm:text-[9px] text-brand-gray uppercase font-bold tracking-wider">uptime sla</span>
                                            <span className="text-brand-gray text-[7px] sm:text-[8px] font-bold uppercase tracking-tighter opacity-50">30-day average</span>
                                        </div>
                                        <div className="flex items-baseline gap-2 mb-3">
                                            <span className="text-lg sm:text-3xl font-bold text-green-500">99.98%</span>
                                        </div>
                                        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: "99.98%" }}
                                                transition={{ duration: 2, delay: 0.5 }}
                                                className="h-full bg-green-500"
                                            />
                                        </div>
                                    </div>

                                    {/* Row 3: 4 Small Blocks */}
                                    <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-2">
                                        <div className="p-2 sm:p-3 rounded-xl bg-white/5 border border-white/10">
                                            <span className="text-[7px] sm:text-[8px] text-brand-gray uppercase font-bold block mb-1 tracking-tighter">Current Sprint</span>
                                            <span className="text-[10px] sm:text-xs font-bold text-white">Week 3 of 6</span>
                                        </div>
                                        <div className="p-2 sm:p-3 rounded-xl bg-white/5 border border-white/10">
                                            <span className="text-[7px] sm:text-[8px] text-brand-gray uppercase font-bold block mb-1 tracking-tighter">Velocity</span>
                                            <span className="text-[10px] sm:text-xs font-bold text-blue-400">92 pts</span>
                                        </div>
                                        <div className="p-2 sm:p-3 rounded-xl bg-white/5 border border-white/10">
                                            <span className="text-[7px] sm:text-[8px] text-brand-gray uppercase font-bold block mb-1 tracking-tighter">Open PRs</span>
                                            <span className="text-[10px] sm:text-xs font-bold text-white">4</span>
                                        </div>
                                        <div className="p-2 sm:p-3 rounded-xl bg-white/5 border border-white/10">
                                            <span className="text-[7px] sm:text-[8px] text-brand-gray uppercase font-bold block mb-1 tracking-tighter">Bugs</span>
                                            <span className="text-[10px] sm:text-xs font-bold text-red-500">2</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : screenIndex === 1 ? (
                                <motion.div
                                    key="screen2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="p-4 sm:p-6 h-full flex flex-col gap-6"
                                >
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-lg font-bold text-white uppercase tracking-tight">Active Projects</h3>
                                        <div className="px-3 py-1 rounded-lg bg-brand-purple/20 text-brand-purple text-[10px] font-bold">12 TOTAL</div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-4">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                                                <div className="flex items-center gap-4">
                                                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${i === 1 ? 'from-blue-500 to-blue-700' : i === 2 ? 'from-green-500 to-teal-500' : 'from-orange-500 to-red-500'} flex items-center justify-center font-bold text-white`}>
                                                        P{i}
                                                    </div>
                                                    <div>
                                                        <div className="text-xs font-bold text-white">Project Module {i}</div>
                                                        <div className="text-[10px] text-brand-gray uppercase tracking-tighter">Production v{i}.2.0</div>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-[10px] text-green-500 font-bold mb-1">STABLE</div>
                                                    <div className="h-1 w-16 bg-white/10 rounded-full overflow-hidden">
                                                        <motion.div animate={{ width: i === 1 ? "90%" : i === 2 ? "75%" : "40%" }} className="h-full bg-brand-purple" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="screen3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="p-4 sm:p-6 h-full flex flex-col gap-6"
                                >
                                    <h3 className="text-lg font-bold text-white uppercase tracking-tight">System Health</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center">
                                            <div className="text-3xl font-bold text-blue-400 mb-2">24ms</div>
                                            <div className="text-[10px] text-brand-gray uppercase font-bold tracking-widest">Avg Latency</div>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center">
                                            <div className="text-3xl font-bold text-green-500 mb-2">0%</div>
                                            <div className="text-[10px] text-brand-gray uppercase font-bold tracking-widest">Error Rate</div>
                                        </div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                        <div className="flex justify-between text-[10px] text-brand-gray font-bold uppercase mb-4">
                                            <span>Real-time Traffic</span>
                                            <span className="text-white">Active Now</span>
                                        </div>
                                        <div className="flex items-end gap-1 h-20">
                                            {[40, 70, 45, 90, 65, 80, 50, 95, 75, 60, 85, 45].map((h, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ height: 0 }}
                                                    animate={{ height: `${h}%` }}
                                                    transition={{ delay: i * 0.05 }}
                                                    className="flex-1 bg-brand-purple/40 rounded-t-sm"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Floating Pill on Browser */}
                    <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-12 -right-6 px-4 py-3 rounded-xl bg-brand-dark/90 border border-brand-purple/30 backdrop-blur-xl shadow-2xl z-30"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-brand-purple/20 flex items-center justify-center">
                                <svg className="w-4 h-4 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-[10px] text-white font-bold leading-none mb-1">shipped in 6 weeks</div>
                                <div className="text-[8px] text-brand-gray font-medium uppercase tracking-tighter">verified production</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bottom Left Pill */}
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -bottom-4 -left-4 px-5 py-2 rounded-full bg-green-500/90 text-brand-dark text-[10px] md:text-xs font-black uppercase shadow-2xl z-30 border-2 border-brand-dark"
                    >
                        ↑ +340% growth
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default BrowserMockup;
