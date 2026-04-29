import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, animate, AnimatePresence } from 'framer-motion';

// Counter Component for Mockup Data
const Counter = ({ value, duration = 2, delay = 0, decimals = 0, prefix = "", suffix = "" }) => {
    const motionValue = useMotionValue(0);
    const [display, setDisplay] = useState(prefix + (0).toFixed(decimals) + suffix);

    useEffect(() => {
        const controls = animate(motionValue, value, {
            duration,
            delay,
            ease: "easeOut",
            onUpdate: (latest) => {
                setDisplay(prefix + latest.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + suffix);
            }
        });
        return controls.stop;
    }, [value, duration, delay, decimals, prefix, suffix]);

    return <span>{display}</span>;
};

export default function Hero() {
    const mousePosRef = useRef({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isHoveringMockup, setIsHoveringMockup] = useState(false);
    const [screenIndex, setScreenIndex] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const containerRef = useRef(null);
    const canvasRef = useRef(null);

    // Motion values for 3D tilt
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Typewriter state for "Applications"
    const [typedText, setTypedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const fullText = "Applications";

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDeleting && typedText.length < fullText.length) {
                setTypedText(fullText.substring(0, typedText.length + 1));
            } else if (isDeleting && typedText.length > 0) {
                setTypedText(fullText.substring(0, typedText.length - 1));
            } else if (!isDeleting && typedText.length === fullText.length) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && typedText.length === 0) {
                setIsDeleting(false);
            }
        }, isDeleting ? 200 : 300);

        return () => clearTimeout(timeout);
    }, [typedText, isDeleting]);

    useEffect(() => {
        let interval;
        // Only cycle if hovering AND we are on the first slide
        if (isHoveringMockup && currentSlide === 0) {
            setScreenIndex(prev => prev === 0 ? 1 : prev);
            interval = setInterval(() => {
                setScreenIndex((prev) => (prev + 1) % 3);
            }, 2000);
        } else {
            setScreenIndex(0);
        }
        return () => clearInterval(interval);
    }, [isHoveringMockup, currentSlide]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % 2);
        }, 12000);
        return () => clearInterval(interval);
    }, []);

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
            className="relative min-h-screen lg:h-screen flex flex-col items-center justify-center pt-24 pb-20 lg:py-0 overflow-hidden bg-brand-dark cursor-none"
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

            <div className="relative z-10 w-full max-w-7xl mx-auto px-8">
                <AnimatePresence mode="wait">
                    {currentSlide === 0 ? (
                        <motion.div
                            key="slide1"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="flex flex-col lg:flex-row items-center justify-between md:gap-12 gap-0 w-full"
                        >
                            {/* Hero Text */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="w-full lg:flex-1 text-left"
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-8">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                    </span>
                                    <span className="text-[10px] font-bold text-green-500 uppercase tracking-wider">available for new projects · 2026</span>
                                </div>

                                <h1 className="text-[32px] sm:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-6">
                                    <motion.span
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="block"
                                    >We build</motion.span>
                                    <span className="text-brand-purple block py-2">
                                        {typedText}
                                        <motion.span
                                            animate={{ opacity: [1, 0, 1] }}
                                            transition={{ duration: 0.8, repeat: Infinity }}
                                            className="inline-block w-0.5 h-8 sm:h-12 lg:h-16 bg-brand-purple ml-2 translate-y-1 lg:translate-y-3"
                                        />
                                    </span>
                                    <motion.span
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className="block"
                                    >that ship.</motion.span>
                                </h1>

                                <p className="text-brand-gray text-base lg:text-lg max-w-xl mb-6 lg:mb-10 leading-relaxed font-medium">
                                    A tight-knit team of engineers and designers who obsess over product quality — from the first wireframe to production-scale deployment.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 mb-6 lg:mb-10">
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href="#work"
                                        className="w-full sm:w-auto px-10 py-4 rounded-xl bg-brand-purple text-white font-bold shadow-[0_10px_30px_rgba(178,73,248,0.3)] hover:shadow-[0_15px_40px_rgba(178,73,248,0.4)] transition-all duration-300 text-sm uppercase tracking-widest text-center"
                                    >
                                        view our work
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href="#start"
                                        className="w-full sm:w-auto px-10 py-4 rounded-xl border border-white/20 font-bold bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-sm uppercase tracking-widest text-center"
                                    >
                                        start a project &rarr;
                                    </motion.a>
                                </div>
                            </motion.div>

                            {/* Phone Mockup Unit Wrapper (Flex Container) */}
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
                                        <div className="relative p-2 md:p-12 scale-[0.65] sm:scale-75 md:scale-90 transition-transform duration-500">
                                            {/* Floating Pill 1 */}
                                            <motion.div
                                                animate={{ y: [0, -10, 0] }}
                                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                                className="absolute top-12 md:top-24 -right-4 md:-right-8 px-4 py-2 rounded-full bg-brand-purple text-white text-[10px] md:text-sm font-bold uppercase shadow-[0_10px_30px_rgba(178,73,248,0.3)] w-28 md:w-36 text-end z-10"
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
                                                animate={{ borderColor: isHoveringMockup ? "rgba(178, 73, 248, 0.5)" : "#1a1a2e" }}
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
                                                                    <div className="h-12 w-full rounded-xl bg-brand-purple flex items-center justify-center font-bold text-sm uppercase tracking-widest text-white shadow-lg shadow-brand-purple/20">
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
                        </motion.div>
                    ) : (
                        <motion.div
                            key="slide2"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="flex flex-col lg:flex-row items-center justify-between md:gap-12 gap-0 w-full"
                        >
                            {/* Hero Text (Slide 2) */}
                            <div className="w-full lg:flex-1 text-left">

                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                    </span>
                                    <span className="text-[10px] font-bold text-blue-500 uppercase tracking-wider">available for new projects · 2026</span>
                                </div>

                                <h1 className="text-[32px] sm:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-6">
                                    We build <br />
                                    <span className="bg-gradient-to-r from-blue-400 to-brand-purple bg-clip-text text-transparent">AI products</span> <br />
                                    that ship.
                                </h1>

                                <p className="text-brand-gray text-base lg:text-lg max-w-xl mb-6 lg:mb-10 leading-relaxed font-medium">
                                    A tight-knit team of engineers and designers who obsess over product quality — from the first wireframe to production-scale deployment.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 mb-6 lg:mb-10">
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href="#start"
                                        className="w-full sm:w-auto px-10 py-4 rounded-xl bg-blue-600 text-white font-bold shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] transition-all duration-300 text-sm uppercase tracking-widest text-center"
                                    >
                                        start a project &rarr;
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href="#work"
                                        className="w-full sm:w-auto px-10 py-4 rounded-xl border border-white/20 font-bold bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-sm uppercase tracking-widest text-center"
                                    >
                                        view our work
                                    </motion.a>
                                </div>

                                <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8">
                                    <span className="text-[10px] text-brand-gray uppercase font-bold tracking-widest">trusted by</span>
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <div key={i} className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-brand-dark bg-gradient-to-br ${i % 2 === 0 ? 'from-blue-500 to-purple-500' : 'from-brand-purple to-pink-500'} flex items-center justify-center text-[8px] sm:text-[10px] font-bold text-white`}>
                                                {String.fromCharCode(64 + i * 3)}
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-[8px] sm:text-[10px] text-brand-gray font-medium">+42 founders worldwide</span>
                                </div>


                            </div>

                            {/* Browser Mockup (Slide 2) */}
                            <div className="flex-none lg:flex-1 flex justify-center lg:justify-end z-20 w-full lg:w-auto mt-8 lg:mt-0">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="relative w-full max-w-xl bg-[#0c0c14] rounded-2xl border border-white/10 shadow-2xl overflow-visible scale-[0.7] xs:scale-[0.85] sm:scale-100 origin-center lg:origin-right"
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
                                    <div className="p-4 sm:p-6 h-auto flex flex-col gap-3 sm:gap-4">
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
                                    </div>

                                    {/* Floating Pill on Browser */}
                                    <motion.div
                                        animate={{ x: [0, 10, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute top-12 -right-6 px-4 py-3 rounded-xl bg-brand-dark/90 border border-brand-purple/30 backdrop-blur-xl shadow-2xl z-30"
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
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition-opacity z-30"
            >
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </motion.div>

            {/* Slider Navigation Buttons */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-12 z-40 flex items-center gap-4">
                <div className="flex gap-4">
                    <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(178, 73, 248, 0.2)" }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setCurrentSlide(prev => (prev - 1 + 2) % 2)}
                        className="w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white transition-colors hover:border-brand-purple/50 shadow-xl"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(178, 73, 248, 0.2)" }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setCurrentSlide(prev => (prev + 1) % 2)}
                        className="w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white transition-colors hover:border-brand-purple/50 shadow-xl"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </motion.button>
                </div>
            </div>

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
