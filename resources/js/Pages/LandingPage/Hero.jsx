import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function Hero() {
    const mousePosRef = useRef({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const containerRef = useRef(null);
    const canvasRef = useRef(null);

    // Motion values for 3D tilt
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    // Motion values for custom cursor
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const cursorSpringConfig = { damping: 25, stiffness: 250 };
    const cursorXSpring = useSpring(cursorX, cursorSpringConfig);
    const cursorYSpring = useSpring(cursorY, cursorSpringConfig);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    // Handle mouse movement for tilt
    const handleMouseMoveTilt = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);

        cursorX.set(mouseX);
        cursorY.set(mouseY);

        mousePosRef.current = { x: mouseX, y: mouseY };
    };

    const handleMouseLeaveTilt = () => {
        x.set(0);
        y.set(0);
        setIsHovering(false);
    };

    // Canvas Animation Logic
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const symbols = ['Σ', 'Π', 'Ω', '$', '%', '#', 'ア', 'タ', 'ウ', 'エ', 'オ', '[', ']', '+', '1', '0', 'Ω', 'λ', 'μ'];
        const fontSize = 24;
        const spacing = 80;
        const columns = Math.ceil(window.innerWidth / spacing) + 1;
        const rows = Math.ceil(window.innerHeight / spacing) + 1;

        let grid = [];
        for (let i = 0; i < rows; i++) {
            grid[i] = [];
            for (let j = 0; j < columns; j++) {
                grid[i][j] = symbols[Math.floor(Math.random() * symbols.length)];
            }
        }

        const render = () => {
            if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < columns; j++) {
                    if (Math.random() > 0.99) {
                        grid[i][j] = symbols[Math.floor(Math.random() * symbols.length)];
                    }
                }
            }

            ctx.font = `${fontSize}px Outfit`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            const gradient = ctx.createRadialGradient(
                mousePosRef.current.x, mousePosRef.current.y, 0,
                mousePosRef.current.x, mousePosRef.current.y, 250
            );
            gradient.addColorStop(0, 'rgba(59, 130, 246, 0.8)');
            gradient.addColorStop(0.4, 'rgba(59, 130, 246, 0.2)');
            gradient.addColorStop(1, 'rgba(59, 130, 246, 0.05)');

            ctx.fillStyle = gradient;

            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < columns; j++) {
                    const xPos = j * spacing + spacing / 2;
                    const yPos = i * spacing + spacing / 2;
                    ctx.fillText(grid[i][j], xPos, yPos);
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMoveTilt}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={handleMouseLeaveTilt}
            className="relative h-screen flex flex-col items-center justify-center pt-28 pb-14 overflow-hidden bg-brand-dark cursor-none"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a1a2e_0%,_transparent_80%)] opacity-40"></div>
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0"
                    style={{ opacity: 1 }}
                />
            </div>

            <div className="relative z-10 w-full max-w-7xl px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Hero Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 text-left"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-[10px] uppercase tracking-widest font-bold text-green-500/80">currently accepting clients</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
                        We build <br />
                        <span className="text-brand-purple">m</span> <br />
                        <span className="text-white/40">that ship.</span>
                    </h1>

                    <p className="text-brand-gray text-lg md:text-xl max-w-lg mb-12 font-medium leading-relaxed">
                        A tight-knit team of engineers and designers who obsess over product quality — from the first wireframe to production deploy.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#work"
                            className="px-10 py-4 rounded-xl border border-white/20 font-bold hover:bg-white hover:text-brand-dark transition-all duration-300 text-sm uppercase tracking-widest"
                        >
                            view our work
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#start"
                            className="px-10 py-4 rounded-xl border border-white/20 font-bold bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-sm uppercase tracking-widest"
                        >
                            start a project &rarr;
                        </motion.a>
                    </div>
                </motion.div>

                {/* Phone Mockup Unit */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                    className="flex-1 flex justify-center lg:justify-end z-20"
                >
                    <div className="relative p-12">
                        {/* Floating Pill 1 */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-24 -right-8 px-4 py-2 rounded-full bg-brand-purple text-white text-sm font-bold uppercase shadow-[0_10px_30px_rgba(178,73,248,0.3)] w-36 text-end z-10"
                        >
                            6 weeks
                        </motion.div>

                        {/* Floating Pill 2 */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-24 -left-4 px-4 py-2 rounded-full bg-green-500/90 text-brand-dark text-sm font-bold uppercase shadow-[0_10px_30px_rgba(34,197,94,0.3)] w-36 text-start z-10"
                        >
                            +340%
                        </motion.div>

                        {/* Phone Body */}
                        <motion.div
                            className="relative w-[320px] h-[640px] bg-[#0c0c14] rounded-[3rem] border-[2px] border-[#1a1a2e] shadow-2xl overflow-hidden z-10"
                            style={{ transform: "translateZ(50px)" }}
                        >
                            <div className="p-6 pt-0 flex flex-col gap-4">
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

                                {/* Metric 1 */}
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="flex justify-between text-[10px] mb-2 text-brand-gray uppercase font-bold">
                                        <span>monthly revenue</span>
                                        <span className="text-white">$84,000</span>
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
                                        <span className="text-white">12,400</span>
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
                                        <span className="text-green-500">99.98%</span>
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

                                <div className="grid grid-cols-2 gap-3 mt-auto mb-4">
                                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                                        <span className="text-[8px] text-brand-gray uppercase font-bold block mb-1">sprint</span>
                                        <span className="text-xs font-bold text-white">week 3</span>
                                    </div>
                                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                                        <span className="text-[8px] text-brand-gray uppercase font-bold block mb-1">velocity</span>
                                        <span className="text-xs font-bold text-brand-purple">92pts</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
            >
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </motion.div>

            {/* Custom Cursor */}
            {isHovering && (
                <>
                    {/* Inner Dot */}
                    <motion.div
                        className="fixed top-0 left-0 w-2 h-2 bg-brand-purple rounded-full pointer-events-none z-[9999]"
                        style={{
                            x: cursorX,
                            y: cursorY,
                            translateX: "-50%",
                            translateY: "-50%",
                        }}
                    />
                    {/* Outer Glow Ring */}
                    <motion.div
                        className="fixed top-0 left-0 w-12 h-12 border border-brand-purple/50 rounded-full pointer-events-none z-[9998]"
                        style={{
                            x: cursorXSpring,
                            y: cursorYSpring,
                            translateX: "-50%",
                            translateY: "-50%",
                            boxShadow: "0 0 20px rgba(178, 73, 248, 0.3), inset 0 0 15px rgba(178, 73, 248, 0.2)",
                        }}
                    />
                </>
            )}
        </div>
    );
}
