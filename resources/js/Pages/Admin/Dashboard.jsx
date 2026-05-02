import { Head, Link, useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function Dashboard({ auth }) {
    const { post } = useForm();

    const handleLogout = (e) => {
        e.preventDefault();
        post('/admin/logout');
    };

    return (
        <div className="min-h-screen bg-[#05050d] text-white flex flex-col relative overflow-hidden">
            <Head title="Admin Dashboard" />

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

            {/* Top Navigation */}
            <header className="relative z-10 border-b border-white/5 bg-[#05050d]/50 backdrop-blur-xl px-8 py-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-black tracking-tighter">Back</span>
                    <span className="text-2xl font-black tracking-tighter text-brand-purple">Caps</span>
                    <span className="ml-4 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-[10px] font-black uppercase tracking-widest text-brand-purple">
                        Admin Panel
                    </span>
                </div>

                <div className="flex items-center gap-6">
                    <div className="text-right hidden sm:block">
                        <p className="text-xs font-black uppercase tracking-widest text-white">{auth.user.name}</p>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{auth.user.email}</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-red-500/10 hover:border-red-500/20 hover:text-red-500 transition-all duration-300"
                    >
                        Sign Out
                    </button>
                </div>
            </header>

            <main className="flex-1 relative z-10 p-8 max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl font-black tracking-tight mb-2 uppercase">Welcome back, Admin.</h1>
                    <p className="text-gray-400 font-medium">Manage your digital empire from here.</p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {[
                        { label: 'Total Projects', value: '42', icon: '🚀' },
                        { label: 'Active Clients', value: '18', icon: '💎' },
                        { label: 'System Uptime', value: '99.9%', icon: '⚡' },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] transition-all duration-500 group"
                        >
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-1">{stat.label}</p>
                            <p className="text-3xl font-black tracking-tighter">{stat.value}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Quick Actions */}
                <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-3xl">
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-brand-purple mb-8 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-brand-purple/30"></span>
                        Quick Operations
                    </h3>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {['Add Project', 'View Leads', 'Settings', 'Database'].map((action, i) => (
                            <button key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-purple/50 hover:bg-brand-purple/5 text-[10px] font-black uppercase tracking-widest text-center transition-all duration-300">
                                {action}
                            </button>
                        ))}
                    </div>
                </div>
            </main>

            <footer className="relative z-10 border-t border-white/5 px-8 py-6 text-center">
                <p className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em]">
                    BackCaps internal systems &copy; {new Date().getFullYear()}
                </p>
            </footer>
        </div>
    );
}
