import { Head, useForm, Link } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function AdminLayout({ auth, children, title }) {
    const { post } = useForm();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle window resize for sidebar
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setIsSidebarOpen(false);
            } else {
                setIsSidebarOpen(true);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLogout = (e) => {
        e.preventDefault();
        post('/admin/logout');
    };

    const sidebarLinks = [
        { name: 'Overview', icon: '📊', route: '/admin/dashboard', active: window.location.pathname === '/admin/dashboard' },
        { name: 'Inquiries', icon: '✉️', route: '/admin/inquiries', active: window.location.pathname.startsWith('/admin/inquiries') },
        { name: 'Time Slots', icon: '🕒', route: '/admin/time-slots', active: window.location.pathname.startsWith('/admin/time-slots') },
        { name: 'Projects', icon: '🚀', route: '#', active: false },
        { name: 'Analytics', icon: '📈', route: '#', active: false },
        { name: 'Team', icon: '👥', route: '#', active: false },
        { name: 'Settings', icon: '⚙️', route: '#', active: false },
    ];

    const SidebarContent = () => (
        <>
            <div className="h-20 flex items-center px-6 border-b border-white/5 shrink-0">
                <div className={`flex-1 flex items-center gap-2 transition-all duration-300 ${isSidebarOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden lg:hidden'}`}>
                    <span className="text-xl font-black tracking-tighter text-white whitespace-nowrap">Back<span className="text-brand-purple">Caps</span></span>
                </div>
                <button 
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className={`p-2 hover:bg-white/5 rounded-xl transition-colors shrink-0 hidden lg:block ${isSidebarOpen ? '' : 'mx-auto'}`}
                >
                    <span className="text-lg text-gray-400">{isSidebarOpen ? '«' : '»'}</span>
                </button>
                <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-white/5 rounded-xl transition-colors shrink-0 lg:hidden"
                >
                    <span className="text-2xl text-gray-400">×</span>
                </button>
            </div>

            <div className={`flex-1 overflow-y-auto py-6 space-y-2 custom-scrollbar transition-all duration-300 ${isSidebarOpen ? 'px-4' : 'px-2'}`}>
                {sidebarLinks.map((link, i) => (
                    <Link
                        key={i}
                        href={link.route}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`w-full flex items-center rounded-2xl transition-all duration-300 group
                        ${(isSidebarOpen || isMobileMenuOpen) ? 'px-4 py-4 gap-4 justify-start' : 'p-4 justify-center'}
                        ${link.active ? 'bg-brand-purple text-white shadow-lg shadow-brand-purple/20' : 'text-gray-500 hover:bg-white/5 hover:text-white'}`}
                    >
                        <span className="text-xl shrink-0 flex items-center justify-center">{link.icon}</span>
                        <span className={`font-bold text-xs uppercase tracking-widest transition-all duration-300 whitespace-nowrap overflow-hidden ${isSidebarOpen || isMobileMenuOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 lg:hidden'}`}>
                            {link.name}
                        </span>
                    </Link>
                ))}
            </div>

            <div className={`border-t border-white/5 shrink-0 overflow-hidden transition-all duration-300 ${isSidebarOpen || isMobileMenuOpen ? 'p-4' : 'p-2'}`}>
                <button
                    onClick={handleLogout}
                    className={`w-full flex items-center rounded-2xl text-gray-500 hover:bg-red-500/10 hover:text-red-500 transition-all duration-300
                    ${isSidebarOpen || isMobileMenuOpen ? 'px-4 py-4 gap-4 justify-start' : 'p-4 justify-center'}`}
                >
                    <span className="text-xl shrink-0 flex items-center justify-center">🚪</span>
                    <span className={`font-black text-[10px] uppercase tracking-widest transition-all duration-300 overflow-hidden ${isSidebarOpen || isMobileMenuOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 lg:hidden'}`}>
                        Logout
                    </span>
                </button>
            </div>
        </>
    );

    return (
        <div className="h-screen bg-[#05050d] text-white flex overflow-hidden font-sans relative">
            <Head title={title} />

            {/* Desktop Sidebar */}
            <aside 
                className={`h-full border-r border-white/5 bg-[#080814]/90 backdrop-blur-3xl flex flex-col transition-all duration-500 ease-in-out shrink-0 z-20 overflow-hidden hidden lg:flex
                ${isSidebarOpen ? 'w-72' : 'w-20'}`}
            >
                <SidebarContent />
            </aside>

            {/* Mobile Sidebar (Overlay) */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] lg:hidden"
                        />
                        <motion.aside
                            initial={{ x: -300 }}
                            animate={{ x: 0 }}
                            exit={{ x: -300 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed left-0 top-0 h-full w-72 bg-[#080814] border-r border-white/10 z-[101] flex flex-col lg:hidden shadow-2xl"
                        >
                            <SidebarContent />
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            {/* Content Container */}
            <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden z-10">
                {/* Header Section */}
                <header className="h-20 border-b border-white/5 bg-[#05050d]/50 backdrop-blur-xl px-6 lg:px-10 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="p-2 hover:bg-white/5 rounded-xl transition-colors lg:hidden"
                        >
                            <span className="text-2xl text-gray-400">≡</span>
                        </button>
                        <h2 className="text-[10px] sm:text-sm font-black uppercase tracking-widest text-gray-400">
                            Admin / <span className="text-white">{title}</span>
                        </h2>
                    </div>

                    <div className="flex items-center gap-4 sm:gap-6">
                        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                            <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center text-[10px] font-black shrink-0">AU</div>
                            <span className="text-xs font-bold hidden sm:block truncate max-w-[100px]">{auth.user.name}</span>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-10 space-y-8 lg:space-y-10 custom-scrollbar bg-[#05050d]">
                    {children}
                </main>

                {/* Footer */}
                <footer className="h-16 border-t border-white/5 bg-[#05050d]/50 backdrop-blur-xl px-6 lg:px-10 flex items-center justify-between shrink-0">
                    <p className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em]">
                        Admin &copy; {new Date().getFullYear()}
                    </p>
                </footer>
            </div>
        </div>
    );
}
