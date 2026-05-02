import AdminLayout from '@/Layouts/AdminLayout';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

export default function Dashboard({ auth, leads }) {
    return (
        <AdminLayout auth={auth} title="Overview">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="text-3xl lg:text-5xl font-black tracking-tighter mb-2 uppercase">HEY ADMIN! 👋</h1>
                <p className="text-gray-500 font-medium text-sm sm:text-base">Here is what's happening with BackCaps today.</p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
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
                        className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-6 hover:bg-white/[0.07] transition-all duration-300"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-xl sm:text-2xl">{stat.icon}</span>
                            <span className={`text-[8px] sm:text-[10px] font-black px-2 py-1 rounded-lg bg-white/5 ${stat.color}`}>{stat.trend}</span>
                        </div>
                        <p className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">{stat.label}</p>
                        <p className="text-xl sm:text-2xl font-black">{stat.value}</p>
                    </motion.div>
                ))}
            </div>

            {/* Recent Inquiries Section */}
            <div className="bg-[#080814] border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden">
                <div className="p-6 sm:p-8 border-b border-white/5 flex items-center justify-between flex-wrap gap-4">
                    <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-brand-purple flex items-center gap-3">
                        <span className="w-4 sm:w-8 h-[1px] bg-brand-purple/30"></span>
                        Recent Inquiries
                    </h3>
                    <Link href="/admin/inquiries" className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl transition-all">View All</Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[600px] sm:min-w-[800px]">
                        <thead>
                            <tr className="border-b border-white/5">
                                <th className="px-6 sm:px-8 py-4 sm:py-5 text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-gray-500">Name</th>
                                <th className="px-6 sm:px-8 py-4 sm:py-5 text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-gray-500">Service</th>
                                <th className="px-6 sm:px-8 py-4 sm:py-5 text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-gray-500">Date</th>
                                <th className="px-6 sm:px-8 py-4 sm:py-5 text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-gray-500">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {leads && leads.length > 0 ? leads.slice(0, 5).map((lead, i) => (
                                <tr key={lead.id} className="hover:bg-white/[0.02] transition-colors group">
                                    <td className="px-6 sm:px-8 py-4 sm:py-6">
                                        <p className="text-xs sm:text-sm font-bold text-white group-hover:text-brand-purple transition-colors">{lead.name}</p>
                                        <p className="text-[9px] sm:text-[10px] text-gray-500 truncate max-w-[150px]">{lead.email}</p>
                                    </td>
                                    <td className="px-6 sm:px-8 py-4 sm:py-6">
                                        <p className="text-[10px] sm:text-xs font-bold text-gray-300">{lead.service ?? 'General'}</p>
                                    </td>
                                    <td className="px-6 sm:px-8 py-4 sm:py-6 text-[10px] sm:text-xs text-gray-400 whitespace-nowrap">
                                        {new Date(lead.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                    </td>
                                    <td className="px-6 sm:px-8 py-4 sm:py-6">
                                        <span className={`px-2 sm:px-3 py-1 rounded-full text-[8px] sm:text-[10px] font-black uppercase tracking-widest bg-opacity-10 
                                            ${lead.status === 'pending' ? 'text-orange-500 bg-orange-500/10 border-orange-500/20' : 
                                              lead.status === 'contacted' ? 'text-blue-500 bg-blue-500/10 border-blue-500/20' : 
                                              'text-green-500 bg-green-500/10 border-green-500/20'} border whitespace-nowrap`}>
                                            {lead.status}
                                        </span>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="4" className="px-6 sm:px-8 py-16 sm:py-20 text-center text-gray-500 font-bold uppercase tracking-widest text-[9px] sm:text-[10px]">
                                        No inquiries found yet.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
}
