import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'work', href: '#work' },
        { name: 'studio', href: '#studio' },
        { name: 'process', href: '#process' },
    ];

    return (
        <>
            <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen ? 'bg-[#1a1a2e]/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
                <header className={`mx-auto transition-all duration-500 flex items-center justify-between px-6 md:px-12 ${isScrolled ? 'max-w-full' : 'max-w-8xl'}`}>
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center group">
                            <span className="text-2xl font-bold tracking-tighter text-white">Back</span>
                            <span className="text-2xl font-bold tracking-tighter text-brand-purple">Caps</span>
                        </Link>
                    </div>

                    <nav className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="text-sm uppercase tracking-widest font-bold text-brand-gray hover:text-white transition-colors">
                                {link.name}
                            </a>
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
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-3xl font-black text-white tracking-tighter hover:text-brand-purple transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
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
