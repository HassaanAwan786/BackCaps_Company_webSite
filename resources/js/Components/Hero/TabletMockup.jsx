import { motion, AnimatePresence } from 'framer-motion';

const TabletMockup = ({ rotateX, rotateY, isHoveringMockup, setIsHoveringMockup, screenIndex }) => {
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
                    style={{ 
                        rotateX: isHoveringMockup ? rotateX : 0, 
                        rotateY: isHoveringMockup ? rotateY : 0, 
                        transformStyle: "preserve-3d" 
                    }}
                    className="relative w-[300px] xs:w-[400px] sm:w-[540px] bg-[#0c0c14] rounded-[2.5rem] border-[10px] border-[#1a1a2e] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden scale-90 sm:scale-100 origin-center lg:origin-right transition-transform duration-500 ease-out"
                >
                    {/* Tablet Glass Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-10"></div>

                    {/* Status Bar */}
                    <div className="absolute top-0 left-0 right-0 h-10 px-8 flex items-center justify-between z-30 pointer-events-none">
                        <div className="text-[10px] font-bold text-white/40 tracking-wider">9:41 AM</div>
                        <div className="flex items-center gap-3">
                            <div className="flex gap-1">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className={`w-1 h-1 rounded-full ${i <= 3 ? 'bg-white/40' : 'bg-white/10'}`}></div>
                                ))}
                            </div>
                            <div className="w-5 h-2.5 border border-white/20 rounded-[2px] relative">
                                <div className="absolute inset-[1px] bg-green-500/50 w-3/4 rounded-[1px]"></div>
                            </div>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="relative bg-[#0c0c14] h-[380px] sm:h-[480px] overflow-hidden pt-10">
                        <AnimatePresence mode="wait">
                            {screenIndex === 0 ? (
                                <motion.div
                                    key="tablet-s1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="p-6 sm:p-10 h-full flex flex-col"
                                >
                                    <div className="flex justify-between items-center mb-8">
                                        <div className="space-y-1">
                                            <h2 className="text-2xl sm:text-3xl font-black text-white italic tracking-tighter uppercase leading-none">Productivity Hub</h2>
                                            <p className="text-[10px] text-brand-purple font-black uppercase tracking-widest">Global Operations Control</p>
                                        </div>
                                        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center">
                                            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 sm:gap-6 flex-1">
                                        <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10 flex flex-col justify-between shadow-xl">
                                            <span className="text-[10px] text-brand-gray uppercase font-bold tracking-widest">Efficiency</span>
                                            <div className="text-4xl sm:text-5xl font-black text-white">98.4<span className="text-brand-purple">%</span></div>
                                            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                                <motion.div initial={{ width: 0 }} animate={{ width: "98.4%" }} transition={{ duration: 1.5 }} className="h-full bg-gradient-to-r from-brand-purple to-blue-500" />
                                            </div>
                                        </div>
                                        <div className="grid grid-rows-2 gap-4 sm:gap-6">
                                            <div className="p-5 rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-between">
                                                <span className="text-[10px] text-brand-gray font-bold uppercase tracking-widest">Tasks</span>
                                                <span className="text-xl font-bold text-white">42</span>
                                            </div>
                                            <div className="p-5 rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-between">
                                                <span className="text-[10px] text-brand-gray font-bold uppercase tracking-widest">Uptime</span>
                                                <span className="text-xl font-bold text-green-500">99.9</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : screenIndex === 1 ? (
                                <motion.div
                                    key="tablet-s2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="p-6 sm:p-10 h-full flex flex-col"
                                >
                                    <div className="flex justify-between items-center mb-8">
                                        <h2 className="text-2xl sm:text-3xl font-black text-white italic tracking-tighter uppercase leading-none">Creative Suite</h2>
                                        <div className="flex -space-x-2">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-dark bg-brand-purple text-[8px] font-bold flex items-center justify-center text-white">U{i}</div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                                        {[
                                            { name: 'UI Design', color: 'from-pink-500 to-purple-600', icon: '🎨' },
                                            { name: 'Dev Ops', color: 'from-blue-500 to-cyan-500', icon: '⚡' },
                                            { name: 'AI Models', color: 'from-purple-500 to-indigo-600', icon: '🧠' },
                                            { name: 'Analytics', color: 'from-orange-500 to-amber-500', icon: '📈' },
                                            { name: 'Security', color: 'from-green-500 to-emerald-600', icon: '🛡️' },
                                            { name: 'Assets', color: 'from-red-500 to-rose-600', icon: '💎' }
                                        ].map((app, i) => (
                                            <motion.div 
                                                key={i} 
                                                whileHover={{ y: -5, scale: 1.02 }}
                                                className="relative p-4 rounded-[1.5rem] bg-white/5 border border-white/10 overflow-hidden group cursor-pointer"
                                            >
                                                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${app.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
                                                <div className="text-2xl mb-3">{app.icon}</div>
                                                <div className="text-[11px] font-black text-white uppercase tracking-tighter leading-none mb-1">{app.name}</div>
                                                <div className="text-[8px] text-brand-gray font-bold uppercase tracking-widest opacity-60">Stable v2.4</div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="tablet-s3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="p-6 sm:p-10 h-full flex flex-col"
                                >
                                    <h2 className="text-2xl sm:text-3xl font-black text-white italic tracking-tighter uppercase leading-none mb-8">Analytics Pro</h2>
                                    <div className="flex-1 p-8 rounded-[2.5rem] bg-gradient-to-b from-white/5 to-transparent border border-white/10 flex flex-col gap-6">
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <span className="text-[10px] text-brand-gray font-bold uppercase tracking-widest block mb-1">Growth</span>
                                                <div className="text-4xl sm:text-5xl font-black text-white tracking-tighter">+12.4<span className="text-brand-purple">%</span></div>
                                            </div>
                                            <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-[10px] font-bold">LIVE</div>
                                        </div>
                                        <div className="flex-1 flex items-end gap-2 px-1">
                                            {[40, 70, 45, 90, 65, 80, 50, 95, 75].map((h, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ height: 0 }}
                                                    animate={{ height: `${h}%` }}
                                                    transition={{ delay: i * 0.05, type: "spring", stiffness: 100 }}
                                                    className="flex-1 bg-gradient-to-t from-brand-purple to-transparent rounded-t-lg"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Tablet Home Bar */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-40 h-1.5 bg-white/10 rounded-full z-40"></div>
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-6 -left-6 px-5 py-2 rounded-2xl bg-brand-dark/90 border border-brand-purple/30 backdrop-blur-xl shadow-2xl z-50 flex items-center gap-2"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">Enterprise PadOS</span>
                </motion.div>
            </div>
        </div>
    );
};

export default TabletMockup;
