import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';

// Sub-components
import Counter from '@/Components/Hero/Counter';
import BackgroundCanvas from '@/Components/Hero/BackgroundCanvas';
import PhoneMockup from '@/Components/Hero/PhoneMockup';
import BrowserMockup from '@/Components/Hero/BrowserMockup';
import TabletMockup from '@/Components/Hero/TabletMockup';
import SliderNav from '@/Components/Hero/SliderNav';
import CustomCursor from '@/Components/Hero/CustomCursor';

export default function Hero() {
    const mousePosRef = useRef({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isHoveringMockup, setIsHoveringMockup] = useState(false);
    const [screenIndex, setScreenIndex] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const containerRef = useRef(null);

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
        // Cycle screens if hovering any mockup
        if (isHoveringMockup) {
            setScreenIndex(prev => prev === 0 ? 1 : prev);
            interval = setInterval(() => {
                setScreenIndex((prev) => (prev + 1) % 3);
            }, 2000);
        } else {
            setScreenIndex(0);
        }
        return () => clearInterval(interval);
    }, [isHoveringMockup]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % 3);
        }, 20000);

        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsHovering(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            clearInterval(interval);
            window.removeEventListener('scroll', handleScroll);
        };
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

        // Only show custom cursor if at the top of the page
        if (window.scrollY > 50) {
            if (isHovering) setIsHovering(false);
            return;
        }

        const rect = containerRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Check if mouse is actually within the hero bounds relative to viewport
        if (e.clientY > rect.bottom || e.clientY < rect.top) {
            if (isHovering) setIsHovering(false);
            return;
        }

        if (!isHovering) setIsHovering(true);

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

    const handleNextSlide = () => setCurrentSlide(prev => (prev + 1) % 3);
    const handlePrevSlide = () => setCurrentSlide(prev => (prev - 1 + 3) % 3);

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMoveTilt}
            onMouseEnter={() => {
                if (window.scrollY < 50) setIsHovering(true);
            }}
            onMouseLeave={() => setIsHovering(false)}
            className={`relative min-h-screen lg:h-screen flex flex-col items-center justify-center pt-24 pb-20 lg:py-0 overflow-hidden bg-brand-dark transition-colors duration-500 ${isHovering ? 'cursor-none' : ''}`}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a1a2e_0%,_transparent_80%)] opacity-40"></div>
                <BackgroundCanvas mousePosRef={mousePosRef} />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 mt-8 lg:mt-24">
                <AnimatePresence mode="wait">
                    {currentSlide === 0 ? (
                        <motion.div
                            key="slide1"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.2}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);
                                if (swipe < -swipeConfidenceThreshold) handleNextSlide();
                                else if (swipe > swipeConfidenceThreshold) handlePrevSlide();
                            }}
                            className="flex flex-col lg:flex-row items-center justify-between md:gap-12 gap-0 w-full touch-pan-y"
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
                                    <span className="text-[10px] sm:text-xs font-black text-green-500 uppercase tracking-[0.2em]">available for new projects · 2026</span>
                                </div>

                                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-6 font-display">
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

                                <p className="text-white text-sm sm:text-lg lg:text-xl max-w-xl mb-6 lg:mb-10 leading-relaxed font-light">
                                    A tight-knit team of engineers and designers who obsess over product quality — from the first wireframe to production-scale deployment.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 mb-6 lg:mb-10">
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href="#work"
                                        className="w-full sm:w-auto px-6 py-3 sm:px-10 sm:py-4 rounded-xl bg-brand-purple text-white font-bold shadow-[0_10px_30px_rgba(21,93,252,0.3)] hover:shadow-[0_15px_40px_rgba(21,93,252,0.4)] transition-all duration-300 text-xs sm:text-sm uppercase tracking-widest text-center"
                                    >
                                        view our work
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href="#start"
                                        className="w-full sm:w-auto px-6 py-3 sm:px-10 sm:py-4 rounded-xl border border-white/20 font-bold bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-xs sm:text-sm uppercase tracking-widest text-center"
                                    >
                                        start a project &rarr;
                                    </motion.a>
                                </div>
                            </motion.div>

                            <PhoneMockup
                                rotateX={rotateX}
                                rotateY={rotateY}
                                isHoveringMockup={isHoveringMockup}
                                setIsHoveringMockup={setIsHoveringMockup}
                                screenIndex={screenIndex}
                            />
                        </motion.div>
                    ) : currentSlide === 1 ? (
                        <motion.div
                            key="slide2"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.2}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);
                                if (swipe < -swipeConfidenceThreshold) handleNextSlide();
                                else if (swipe > swipeConfidenceThreshold) handlePrevSlide();
                            }}
                            className="flex flex-col lg:flex-row items-center justify-between md:gap-12 gap-0 w-full touch-pan-y"
                        >
                            {/* Hero Text (Slide 2) */}
                            <div className="w-full lg:flex-1 text-left">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                    </span>
                                    <span className="text-[10px] sm:text-xs font-black text-blue-500 uppercase tracking-[0.2em]">available for new projects · 2026</span>
                                </div>

                                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-6 font-display">
                                    We build <br />
                                    <span className="bg-gradient-to-r from-blue-400 to-brand-purple bg-clip-text text-transparent">AI products</span> <br />
                                    that ship.
                                </h1>

                                <p className="text-white text-sm sm:text-lg lg:text-xl max-w-xl mb-6 lg:mb-10 leading-relaxed font-light">
                                    A tight-knit team of engineers and designers who obsess over product quality — from the first wireframe to production-scale deployment.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 mb-6 lg:mb-10">
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href="#start"
                                        className="w-full sm:w-auto px-6 py-3 sm:px-10 sm:py-4 rounded-xl bg-blue-600 text-white font-bold shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] transition-all duration-300 text-xs sm:text-sm uppercase tracking-widest text-center"
                                    >
                                        start a project &rarr;
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href="#work"
                                        className="w-full sm:w-auto px-6 py-3 sm:px-10 sm:py-4 rounded-xl border border-white/20 font-bold bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-xs sm:text-sm uppercase tracking-widest text-center"
                                    >
                                        view our work
                                    </motion.a>
                                </div>

                                <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8">
                                    <span className="text-[10px] sm:text-xs text-brand-gray uppercase font-black tracking-[0.2em]">trusted by</span>
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <div key={i} className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-brand-dark bg-gradient-to-br ${i % 2 === 0 ? 'from-blue-500 to-blue-700' : 'from-brand-purple to-blue-400'} flex items-center justify-center text-[8px] sm:text-[10px] font-bold text-white`}>
                                                {String.fromCharCode(64 + i * 3)}
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-[8px] sm:text-[10px] text-brand-gray font-medium">+42 founders worldwide</span>
                                </div>
                            </div>

                            <BrowserMockup
                                rotateX={rotateX}
                                rotateY={rotateY}
                                isHoveringMockup={isHoveringMockup}
                                setIsHoveringMockup={setIsHoveringMockup}
                                screenIndex={screenIndex}
                            />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="slide3"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.2}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);
                                if (swipe < -swipeConfidenceThreshold) handleNextSlide();
                                else if (swipe > swipeConfidenceThreshold) handlePrevSlide();
                            }}
                            className="flex flex-col lg:flex-row items-center justify-between md:gap-12 gap-0 w-full touch-pan-y"
                        >
                            {/* Hero Text (Slide 3) */}
                            <div className="w-full lg:flex-1 text-left">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 mb-6">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-purple opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-purple"></span>
                                    </span>
                                    <span className="text-[10px] sm:text-xs font-black text-brand-purple uppercase tracking-[0.2em]">available for new projects · 2026</span>
                                </div>

                                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-6 font-display">
                                    We build <br />
                                    <span className="bg-gradient-to-r from-brand-purple to-blue-400 bg-clip-text text-transparent">Tablet Apps</span> <br />
                                    that ship.
                                </h1>

                                <p className="text-white text-sm sm:text-lg lg:text-xl max-w-xl mb-6 lg:mb-10 leading-relaxed font-light">
                                    A tight-knit team of engineers and designers who obsess over product quality — from the first wireframe to production-scale deployment.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 mb-6 lg:mb-10">
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href="#start"
                                        className="w-full sm:w-auto px-6 py-3 sm:px-10 sm:py-4 rounded-xl bg-brand-purple text-white font-bold shadow-[0_10px_30px_rgba(21,93,252,0.3)] hover:shadow-[0_15px_40px_rgba(21,93,252,0.4)] transition-all duration-300 text-xs sm:text-sm uppercase tracking-widest text-center"
                                    >
                                        start a project &rarr;
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href="#work"
                                        className="w-full sm:w-auto px-6 py-3 sm:px-10 sm:py-4 rounded-xl border border-white/20 font-bold bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-xs sm:text-sm uppercase tracking-widest text-center"
                                    >
                                        view our work
                                    </motion.a>
                                </div>
                            </div>

                            <TabletMockup
                                rotateX={rotateX}
                                rotateY={rotateY}
                                isHoveringMockup={isHoveringMockup}
                                setIsHoveringMockup={setIsHoveringMockup}
                                screenIndex={screenIndex}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <motion.button
                onClick={() => {
                    const element = document.getElementById('tech-stats');
                    if (element) {
                        const offset = 80; // Header height
                        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                        window.scrollTo({
                            top: elementPosition - offset,
                            behavior: 'smooth'
                        });
                    }
                }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition-opacity z-30"
            >
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </motion.button>

            <SliderNav onPrev={handlePrevSlide} onNext={handleNextSlide} />

            <CustomCursor
                cursorX={cursorX}
                cursorY={cursorY}
                cursorXSpring={cursorXSpring}
                cursorYSpring={cursorYSpring}
                isHovering={isHovering}
            />
        </div>
    );
}
