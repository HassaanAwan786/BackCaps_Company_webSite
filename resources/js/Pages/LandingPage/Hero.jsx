import { useState, useEffect, useRef } from 'react';

export default function Hero() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePos({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden"
        >
            {/* Background Pattern - Reveal Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-brand-purple)_0%,_transparent_70%)] opacity-20"></div>

                {/* The hidden symbols that get revealed */}
                <div
                    className="absolute inset-0 bg-repeat mix-blend-overlay transition-opacity duration-700"
                    style={{
                        backgroundImage: "url('/assets/images/tech_grid_bg.png')",
                        backgroundSize: '1200px',
                        maskImage: `radial-gradient(circle 350px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
                        WebkitMaskImage: `radial-gradient(circle 350px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
                        opacity: isHovering ? 1 : 0
                    }}
                ></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Hero Text */}
                <div className="flex-1 text-left">
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
                        <a href="#work" className="px-10 py-4 rounded-xl border border-white/20 font-bold hover:bg-white hover:text-brand-dark transition-all duration-500 text-sm uppercase tracking-widest">
                            view our work
                        </a>
                        <a href="#start" className="px-10 py-4 rounded-xl border border-white/20 font-bold bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 text-sm uppercase tracking-widest">
                            start a project &rarr;
                        </a>
                    </div>
                </div>

                {/* Phone Mockup Unit */}
                <div className="flex-1 flex justify-center lg:justify-end z-20">
                    <div className="relative p-12">
                        {/* Floating elements anchored to the mockup unit */}
                        <div className="absolute top-24 -right-6 px-2 py-2 rounded-full bg-brand-purple text-white text-sm font-bold uppercase shadow-lg w-36 text-end z-10">
                            6 weeks
                        </div>
                        <div className="absolute bottom-24 -left-4 px-2 py-2 rounded-full bg-green-500/90 text-brand-dark text-sm font-bold uppercase shadow-lg w-36 text-start z-10">
                            +340%
                        </div>

                        {/* Phone Body */}
                        <div className="relative w-[320px] h-[640px] bg-[#0c0c14] rounded-[3rem] border-[2px] border-[#1a1a2e] shadow-2xl overflow-hidden z-10">
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

                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="flex justify-between text-[10px] mb-2 text-brand-gray uppercase font-bold">
                                        <span>monthly revenue</span>
                                        <span className="text-white">$84,000</span>
                                    </div>
                                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full w-[80%] bg-brand-purple rounded-full"></div>
                                    </div>
                                </div>

                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="flex justify-between text-[10px] mb-2 text-brand-gray uppercase font-bold">
                                        <span>active users</span>
                                        <span className="text-white">12,400</span>
                                    </div>
                                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full w-[65%] bg-green-500 rounded-full"></div>
                                    </div>
                                    <div className="flex gap-2 mt-3">
                                        <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 text-[8px] font-bold uppercase">live</span>
                                        <span className="px-2 py-0.5 rounded-full bg-white/5 text-brand-gray text-[8px] font-bold uppercase">+12% today</span>
                                    </div>
                                </div>

                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="flex justify-between text-[10px] mb-2 text-brand-gray uppercase font-bold">
                                        <span>uptime</span>
                                        <span className="text-green-500">99.98%</span>
                                    </div>
                                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full w-[99%] bg-green-500 rounded-full"></div>
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
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
