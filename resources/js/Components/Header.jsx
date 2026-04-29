import { Link } from '@inertiajs/react';

export default function Header() {
    return (
        <header className="w-full py-6 px-8 flex items-center justify-between border-b border-white/5 backdrop-blur-sm sticky top-0 z-50 bg-brand-dark/80">
            <div className="flex items-center gap-2">
                <Link href="/" className="flex items-center group">
                    <span className="text-2xl font-bold tracking-tighter text-white">stack</span>
                    <span className="text-2xl font-bold tracking-tighter text-brand-purple">forge</span>
                </Link>
            </div>

            <nav className="hidden md:flex items-center gap-8">
                <a href="#work" className="text-sm font-medium text-brand-gray hover:text-white transition-colors">work</a>
                <a href="#studio" className="text-sm font-medium text-brand-gray hover:text-white transition-colors">studio</a>
                <a href="#process" className="text-sm font-medium text-brand-gray hover:text-white transition-colors">process</a>
            </nav>

            <div className="flex items-center">
                <a href="#hire" className="px-6 py-2 rounded-full border border-brand-purple/50 bg-brand-purple/10 text-brand-purple hover:bg-brand-purple hover:text-white transition-all duration-300 text-sm font-semibold">
                    hire us
                </a>
            </div>
        </header>
    );
}
