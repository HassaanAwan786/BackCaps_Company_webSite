import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#1a1a2e]/90 backdrop-blur-md py-4 px-2 md:px-16' : 'bg-transparent py-6'
            }`}>
            <header className={`mx-auto transition-all duration-500 flex items-center justify-between px-2 md:px-8 ${isScrolled ? 'max-w-full' : 'max-w-8xl'
                }`}>
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center group">
                        <span className="text-2xl font-bold tracking-tighter text-white">Back</span>
                        <span className="text-2xl font-bold tracking-tighter text-brand-purple">Caps</span>
                    </Link>
                </div>

                <nav className="hidden md:flex items-center gap-10">
                    <a href="#work" className="text-lg font-medium text-brand-gray hover:text-white transition-colors">work</a>
                    <a href="#studio" className="text-lg font-medium text-brand-gray hover:text-white transition-colors">studio</a>
                    <a href="#process" className="text-lg font-medium text-brand-gray hover:text-white transition-colors">process</a>
                </nav>

                <div className="flex items-center">
                    <a href="#hire" className={`px-6 py-2 rounded-full border border-brand-purple/50 transition-all duration-300 text-sm font-semibold ${isScrolled
                        ? 'bg-brand-purple text-white'
                        : 'bg-brand-purple/10 text-brand-purple hover:bg-brand-purple hover:text-white'
                        }`}>
                        hire us
                    </a>
                </div>
            </header>
        </div>
    );
}
