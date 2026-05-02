import { Head, useForm } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Dashboard({ auth }) {
    const { post } = useForm();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleLogout = (e) => {
        e.preventDefault();
        post('/admin/logout');
    };

    const sidebarLinks = [
        { name: 'Overview', icon: '📊', active: true },
        { name: 'Projects', icon: '🚀', active: false },
        { name: 'Analytics', icon: '📈', active: false },
        { name: 'Messages', icon: '✉️', active: false },
        { name: 'Team', icon: '👥', active: false },
        { name: 'Settings', icon: '⚙️', active: false },
    ];

    return (
        <div className="h-screen bg-[#05050d] text-white flex overflow-hidden font-sans relative">
            <Head title="Admin Dashboard" />

            {/* Background Decor */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-purple/5 blur-[150px] rounded-full pointer-events-none z-0" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none z-0" />

            {/* Sidebar Section */}
            <aside 
                className={`h-full border-r border-white/5 bg-[#080814]/90 backdrop-blur-3xl flex flex-col transition-all duration-500 ease-in-out shrink-0 z-20 overflow-hidden
                ${isSidebarOpen ? 'w-72' : 'w-20'}`}
            >
                <div className="h-20 flex items-center px-6 border-b border-white/5 shrink-0">
                    <div className={`flex-1 flex items-center gap-2 transition-all duration-300 ${isSidebarOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'}`}>
                        <span className="text-xl font-black tracking-tighter text-white whitespace-nowrap">Back<span className="text-brand-purple">Caps</span></span>
                    </div>
                    <button 
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className={`p-2 hover:bg-white/5 rounded-xl transition-colors shrink-0 ${isSidebarOpen ? '' : 'mx-auto'}`}
                    >
                        <span className="text-lg text-gray-400">{isSidebarOpen ? '«' : '»'}</span>
                    </button>
                </div>

                <div className={`flex-1 overflow-y-auto py-6 space-y-2 custom-scrollbar transition-all duration-300 ${isSidebarOpen ? 'px-4' : 'px-2'}`}>
                    {sidebarLinks.map((link, i) => (
                        <button
                            key={i}
                            className={`w-full flex items-center rounded-2xl transition-all duration-300 group
                            ${isSidebarOpen ? 'px-4 py-4 gap-4 justify-start' : 'p-4 justify-center'}
                            ${link.active ? 'bg-brand-purple text-white shadow-lg shadow-brand-purple/20' : 'text-gray-500 hover:bg-white/5 hover:text-white'}`}
                        >
                            <span className="text-xl shrink-0 flex items-center justify-center">{link.icon}</span>
                            <span className={`font-bold text-xs uppercase tracking-widest transition-all duration-300 whitespace-nowrap overflow-hidden ${isSidebarOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0'}`}>
                                {link.name}
                            </span>
                        </button>
                    ))}
                </div>

                <div className={`border-t border-white/5 shrink-0 overflow-hidden transition-all duration-300 ${isSidebarOpen ? 'p-4' : 'p-2'}`}>
                    <button
                        onClick={handleLogout}
                        className={`w-full flex items-center rounded-2xl text-gray-500 hover:bg-red-500/10 hover:text-red-500 transition-all duration-300
                        ${isSidebarOpen ? 'px-4 py-4 gap-4 justify-start' : 'p-4 justify-center'}`}
                    >
                        <span className="text-xl shrink-0 flex items-center justify-center">🚪</span>
                        <span className={`font-black text-[10px] uppercase tracking-widest transition-all duration-300 overflow-hidden ${isSidebarOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0'}`}>
                            Logout
                        </span>
                    </button>
                </div>
            </aside>

            {/* Content Container */}
            <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden z-10">
                {/* Header Section */}
                <header className="h-20 border-b border-white/5 bg-[#05050d]/50 backdrop-blur-xl px-6 lg:px-10 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="p-2 hover:bg-white/5 rounded-xl transition-colors lg:hidden"
                        >
                            <span className="text-2xl text-gray-400">≡</span>
                        </button>
                        <h2 className="text-[10px] sm:text-sm font-black uppercase tracking-widest text-gray-400">
                            Dashboard / <span className="text-white">Overview</span>
                        </h2>
                    </div>

                    <div className="flex items-center gap-4 sm:gap-6">
                        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                            <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center text-[10px] font-black shrink-0">AU</div>
                            <span className="text-xs font-bold hidden sm:block truncate max-w-[100px]">{auth.user.name}</span>
                        </div>
                    </div>
                </header>

                {/* Main Content Section (Data) */}
                <main className="flex-1 overflow-y-auto p-6 lg:p-10 space-y-10 custom-scrollbar bg-[#05050d]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-3xl lg:text-5xl font-black tracking-tighter mb-2">HEY ADMIN! 👋</h1>
                        <p className="text-gray-500 font-medium">Here is what's happening with BackCaps today.</p>
                    </motion.div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        {[
                            { label: 'Revenue', value: '$24,500', trend: '+12.5%', color: 'text-green-500', icon: '💰' },
                            { label: 'Total Clients', value: '1,240', trend: '+3.2%', color: 'text-blue-500', icon: '👤' },
                            { label: 'Active Projects', value: '42', trend: '+8.4%', color: 'text-purple-500', icon: '⚡' },
                            { label: 'Completion Rate', value: '94%', trend: '+1.1%', color: 'text-orange-500', icon: '🎯' },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/[0.07] transition-all duration-300"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-2xl">{stat.icon}</span>
                                    <span className={`text-[10px] font-black px-2 py-1 rounded-lg bg-white/5 ${stat.color}`}>{stat.trend}</span>
                                </div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">{stat.label}</p>
                                <p className="text-2xl font-black">{stat.value}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Recent Projects Table */}
                    <div className="bg-[#080814] border border-white/10 rounded-[2.5rem] overflow-hidden">
                        <div className="p-8 border-b border-white/5 flex items-center justify-between flex-wrap gap-4">
                            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-brand-purple flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-brand-purple/30"></span>
                                Recent Projects
                            </h3>
                            <button className="text-[10px] font-black uppercase tracking-widest bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl transition-all">View All</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left min-w-[700px]">
                                <thead>
                                    <tr className="border-b border-white/5">
                                        <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-500">Project Name</th>
                                        <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-500">Client</th>
                                        <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-500">Status</th>
                                        <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-500">Deadline</th>
                                        <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-500">Budget</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {[
                                        { name: 'Fintech App', client: 'Alpha Corp', status: 'In Progress', date: 'Oct 24, 2024', budget: '$12,000', color: 'bg-blue-500' },
                                        { name: 'E-commerce Redesign', client: 'Fashion Hub', status: 'Completed', date: 'Sep 12, 2024', budget: '$8,500', color: 'bg-green-500' },
                                        { name: 'AI Integration', client: 'Tech Solutions', status: 'Pending', date: 'Nov 05, 2024', budget: '$15,000', color: 'bg-orange-500' },
                                        { name: 'Brand Identity', client: 'Modern Art', status: 'In Progress', date: 'Oct 30, 2024', budget: '$4,200', color: 'bg-purple-500' },
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                                            <td className="px-8 py-6 text-sm font-bold text-white group-hover:text-brand-purple transition-colors">{row.name}</td>
                                            <td className="px-8 py-6 text-sm text-gray-400 font-medium">{row.client}</td>
                                            <td className="px-8 py-6">
                                                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-opacity-10 ${row.color.replace('bg-', 'text-')} ${row.color.replace('bg-', 'bg-')}/10 border ${row.color.replace('bg-', 'border-')}/20 whitespace-nowrap`}>
                                                    {row.status}
                                                </span>
                                            </td>
                                            <td className="px-8 py-6 text-sm text-gray-400 whitespace-nowrap">{row.date}</td>
                                            <td className="px-8 py-6 text-sm font-black text-white">{row.budget}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>

                {/* Footer Section */}
                <footer className="h-16 border-t border-white/5 bg-[#05050d]/50 backdrop-blur-xl px-10 flex items-center justify-between shrink-0">
                    <p className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em]">
                        BackCaps Admin &copy; {new Date().getFullYear()}
                    </p>
                    <div className="flex gap-6">
                        <span className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em] hover:text-white transition-colors cursor-pointer">Support</span>
                        <span className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em] hover:text-white transition-colors cursor-pointer">Terms</span>
                    </div>
                </footer>
            </div>
        </div>
    );
}
