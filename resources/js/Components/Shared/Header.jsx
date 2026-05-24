import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileServicesExpanded, setIsMobileServicesExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState(null);

    const handleMouseEnter = () => {
        if (hoverTimeout) clearTimeout(hoverTimeout);
        setIsServicesOpen(true);
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setIsServicesOpen(false);
        }, 150);
        setHoverTimeout(timeout);
    };

    const navLinks = [
        { name: 'Home', href: '#work' },
        { name: 'About Us', href: '#studio' },
        { name: 'Services', href: '#process', hasDropdown: true },
        { name: 'Contact', href: '#process' },
        { name: 'Portfolio', href: '#process' },
    ];

    const serviceCategories = {
        project: {
            title: "Project Based",
            description: "High-impact, end-to-end digital solutions for your vision.",
            items: [
                { title: "Web Development", desc: "Custom websites and applications built for performance and scale.", icon: "/assets/Website%20icons/web-development.svg" },
                { title: "Mobile Apps", desc: "High-performance iOS and Android experiences with native speed.", icon: "/assets/Website%20icons/app-development.svg" },
                { title: "UI/UX Design", desc: "User-centric design systems and interactive prototyping.", icon: "/assets/Website%20icons/ux-design.svg" },
                { title: "Artificial Intelligence", desc: "Intelligent automation and predictive analytics solutions.", icon: "/assets/Website%20icons/artificial-intelligence.svg" }
            ]
        },
        service: {
            title: "Service Based",
            description: "Continuous expertise and specialized technology support.",
            items: [
                { title: "Cloud Infrastructure", desc: "Managed hosting, DevOps, and automated scaling solutions.", icon: "/assets/Website%20icons/cloud-infrastructure.svg" },
                { title: "Cyber Security", desc: "Enterprise-grade security audits and vulnerability assessments.", icon: "/assets/Website%20icons/cyber-security.svg" },
                { title: "Digital Marketing", desc: "Data-driven strategies for growth and conversion optimization.", icon: "/assets/Website%20icons/digital marketing.svg" },
                { title: "Tech Consulting", desc: "Strategic technology roadmaps and architecture reviews.", icon: "/assets/Website%20icons/tech consulting.svg" }
            ]
        }
    };

    return (
        <>
            <div
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-center
                    ${isScrolled || isMobileMenuOpen || isServicesOpen ? 'pt-0 px-0' : 'sm:pt-6 px-0 sm:px-8'}`}
                onMouseLeave={handleMouseLeave}
            >
                <header 
                    className={`transition-all duration-700 flex items-center justify-between px-6 sm:px-12 py-4 w-full relative
                        ${isScrolled || isMobileMenuOpen || isServicesOpen 
                            ? 'bg-[#0c0c14]/90 backdrop-blur-2xl border-b border-white/10 rounded-none max-w-full' 
                            : 'bg-[#0c0c14]/80 backdrop-blur-2xl border border-white/10 sm:rounded-[2.5rem] shadow-2xl max-w-7xl sm:max-w-7xl'}`}
                >
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2 group">
                            <img
                                src="/assets/Website%20icons/Backcaps.jpeg"
                                alt="BackCaps Logo"
                                className="w-12 h-12 object-contain rounded-full"
                            />
                            <span className="text-2xl font-bold tracking-tighter"><span className="text-white">Back</span><span className="text-brand-purple">Caps</span></span>
                        </Link>
                    </div>

                    <nav className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative py-2"
                                onMouseEnter={link.hasDropdown ? handleMouseEnter : undefined}
                            >
                                <a
                                    href={link.href}
                                    className={`text-sm uppercase tracking-widest font-bold transition-colors flex items-center gap-1.5 ${isServicesOpen && link.hasDropdown ? 'text-brand-purple' : 'text-brand-gray hover:text-white'}`}
                                >
                                    {link.name}
                                    {link.hasDropdown && (
                                        <motion.svg
                                            animate={{ rotate: isServicesOpen ? 180 : 0 }}
                                            className="w-3 h-3"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </motion.svg>
                                    )}
                                </a>
                            </div>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <a href="#hire" className="hidden sm:block px-6 py-2 rounded-full border border-brand-purple/50 bg-brand-purple/10 text-brand-purple hover:bg-brand-purple hover:text-white transition-all duration-300 text-xs font-bold uppercase tracking-widest">
                            hire us
                        </a>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-white md:hidden focus:outline-none"
                        >
                            <div className="w-6 h-5 relative flex flex-col justify-between">
                                <motion.span
                                    animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                                    className="w-full h-0.5 bg-white rounded-full origin-left transition-all"
                                />
                                <motion.span
                                    animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                    className="w-full h-0.5 bg-white rounded-full transition-all"
                                />
                                <motion.span
                                    animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                                    className="w-full h-0.5 bg-white rounded-full origin-left transition-all"
                                />
                            </div>
                        </button>
                    </div>
                </header>

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                    {isServicesOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                            className="absolute top-full left-0 w-full bg-[#05050d] backdrop-blur-3xl border-b border-white/10 overflow-hidden hidden md:block"
                            onMouseEnter={handleMouseEnter}
                        >
                            {/* Decorative background elements */}
                            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[80%] bg-brand-purple/10 blur-[120px] rounded-full"></div>
                                <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[80%] bg-blue-600/10 blur-[120px] rounded-full"></div>
                            </div>

                            <div className="relative max-w-7xl mx-auto px-12 py-16">
                                {/* Close Button */}
                                <button
                                    onClick={() => setIsServicesOpen(false)}
                                    className="absolute top-8 right-12 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-purple hover:border-brand-purple transition-all duration-300 group/close"
                                >
                                    <svg className="w-5 h-5 group-hover/close:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                <div className="grid grid-cols-2 gap-20">
                                    {Object.entries(serviceCategories).map(([key, category], catIdx) => (
                                        <div key={key} className="space-y-10">
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.1 + (catIdx * 0.1) }}
                                                className="space-y-3"
                                            >
                                                <h3 className="text-brand-purple text-[11px] font-black uppercase tracking-[0.3em] flex items-center gap-3">
                                                    <span className="w-8 h-[1px] bg-brand-purple/30"></span>
                                                    {category.title}
                                                </h3>
                                                <p className="text-white text-base font-normal max-w-md">
                                                    {category.description}
                                                </p>
                                            </motion.div>

                                            <div className="grid grid-cols-1 gap-4">
                                                {category.items.map((item, idx) => (
                                                    <motion.a
                                                        key={idx}
                                                        href="#process"
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.2 + (idx * 0.05) + (catIdx * 0.2) }}
                                                        className="group/item flex items-center gap-6 p-5 rounded-[2rem] hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all duration-500"
                                                    >
                                                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:bg-brand-purple/20 group-hover/item:border-brand-purple/30 group-hover/item:scale-110 transition-all duration-500 shadow-xl p-3">
                                                            <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                                                        </div>
                                                        <div className="space-y-1.5 flex-1">
                                                            <div className="flex items-center justify-between">
                                                                <h4 className="text-white font-bold text-lg group-hover/item:text-brand-purple transition-colors duration-300">
                                                                    {item.title}
                                                                </h4>
                                                                <span className="opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0 -translate-x-4 transition-all duration-500 text-brand-purple text-xl">
                                                                    &rarr;
                                                                </span>
                                                            </div>
                                                            <p className="text-brand-gray text-[13px] leading-relaxed group-hover/item:text-white/70 transition-colors duration-300 line-clamp-2">
                                                                {item.desc}
                                                            </p>
                                                        </div>
                                                    </motion.a>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="mt-16 pt-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-8"
                                >
                                    <div className="flex items-center gap-8">
                                        <div className="flex -space-x-4">
                                            {[1, 2, 3, 4].map((i) => (
                                                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#05050d] bg-gradient-to-br from-brand-purple to-blue-600 flex items-center justify-center text-xs font-bold text-white shadow-xl">
                                                    {String.fromCharCode(64 + i)}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-white text-sm font-normal">Trusted by global innovators</p>
                                            <p className="text-brand-gray text-[10px] font-black uppercase tracking-[0.2em]">
                                                40+ projects shipped successfully
                                            </p>
                                        </div>
                                    </div>
                                    <a href="#contact" className="group/btn relative px-8 py-4 rounded-full overflow-hidden bg-white/5 border border-white/10 transition-all duration-500 hover:border-brand-purple/50">
                                        <span className="relative z-10 text-white text-xs font-black uppercase tracking-[0.2em] flex items-center gap-3">
                                            Start your journey <span className="group-hover/btn:translate-x-2 transition-transform duration-300">&rarr;</span>
                                        </span>
                                        <div className="absolute inset-0 bg-brand-purple/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-[#0c0c14] pt-28 px-6 flex flex-col gap-8 md:hidden"
                    >
                        <div className="flex flex-col gap-6 overflow-y-auto pb-8">
                            {navLinks.map((link) => (
                                <div key={link.name} className="flex flex-col gap-4">
                                    <div className="flex items-center justify-between">
                                        <a
                                            href={link.href}
                                            onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                                            className="text-3xl font-black text-white tracking-tighter hover:text-brand-purple transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                        {link.hasDropdown && (
                                            <button
                                                onClick={() => setIsMobileServicesExpanded(!isMobileServicesExpanded)}
                                                className="p-2 text-white"
                                            >
                                                <motion.svg
                                                    animate={{ rotate: isMobileServicesExpanded ? 180 : 0 }}
                                                    className="w-6 h-6"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </motion.svg>
                                            </button>
                                        )}
                                    </div>

                                    {link.hasDropdown && isMobileServicesExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            className="flex flex-col gap-6 pl-4 border-l border-white/10"
                                        >
                                            {Object.entries(serviceCategories).map(([key, category]) => (
                                                <div key={key} className="space-y-4">
                                                    <h4 className="text-brand-purple text-[10px] font-black uppercase tracking-widest">
                                                        {category.title}
                                                    </h4>
                                                    <div className="flex flex-col gap-4">
                                                        {category.items.map((item, idx) => (
                                                            <a
                                                                key={idx}
                                                                href="#process"
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                className="flex items-center gap-3 group"
                                                            >
                                                                <img src={item.icon} alt={item.title} className="w-5 h-5 object-contain" />
                                                                <span className="text-white/70 group-hover:text-white transition-colors font-bold text-sm">{item.title}</span>
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="mt-auto pb-12">
                            <a
                                href="#hire"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full py-4 rounded-2xl bg-brand-purple text-center text-white font-bold uppercase tracking-widest"
                            >
                                hire us
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
