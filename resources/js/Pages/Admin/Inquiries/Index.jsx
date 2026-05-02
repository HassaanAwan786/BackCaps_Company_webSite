import AdminLayout from '@/Layouts/AdminLayout';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, router } from '@inertiajs/react';
import { useState } from 'react';
import DeleteConfirmationModal from '@/Components/Admin/DeleteConfirmationModal';

export default function Inquiries({ auth, inquiries }) {
    const [selectedInquiry, setSelectedInquiry] = useState(null);
    const [filter, setFilter] = useState('all');
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);

    const filteredInquiries = inquiries.filter(inquiry => {
        if (filter === 'all') return true;
        return inquiry.status === filter;
    });

    const updateStatus = (id, status) => {
        router.patch(`/admin/inquiries/${id}/status`, { status }, {
            onSuccess: (page) => {
                const updated = page.props.inquiries.find(i => i.id === id);
                setSelectedInquiry(updated);
            }
        });
    };

    const confirmDelete = () => {
        if (itemToDelete) {
            router.delete(`/admin/inquiries/${itemToDelete}`, {
                onSuccess: () => {
                    setSelectedInquiry(null);
                    setItemToDelete(null);
                }
            });
        }
    };

    const openDeleteModal = (id) => {
        setItemToDelete(id);
        setIsDeleteModalOpen(true);
    };

    return (
        <AdminLayout auth={auth} title="Inquiries">
            <div className="max-w-[1600px] mx-auto space-y-6 sm:space-y-10">
                {/* Header Section */}
                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tighter mb-2 sm:mb-4 uppercase">
                            Lead <span className="text-brand-purple">Center</span>
                        </h1>
                        <p className="text-gray-500 font-medium text-sm sm:text-lg">Manage your project pipeline with precision.</p>
                    </motion.div>

                    <div className="flex flex-wrap gap-2 bg-white/5 p-1 sm:p-1.5 rounded-2xl border border-white/10 w-full sm:w-auto">
                        {['all', 'pending', 'contacted', 'closed'].map((f) => (
                            <button
                                key={f}
                                onClick={() => {
                                    setFilter(f);
                                    setSelectedInquiry(null);
                                }}
                                className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-[8px] sm:text-[10px] font-black uppercase tracking-widest transition-all
                                ${filter === f ? 'bg-brand-purple text-white shadow-lg shadow-brand-purple/20' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Dashboard Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 sm:gap-10">
                    {/* List Section */}
                    <div className="xl:col-span-7 space-y-4">
                        <div className="flex items-center justify-between px-2 sm:px-4 mb-2 sm:mb-4">
                            <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em]">Showing {filteredInquiries.length} leads</span>
                            <div className="flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                                <span className="text-[10px] font-black text-gray-500 uppercase">Live Feed</span>
                            </div>
                        </div>

                        <div className="space-y-4 lg:custom-scrollbar xl:max-h-[calc(100vh-350px)] xl:overflow-y-auto xl:pr-2">
                            {filteredInquiries.length > 0 ? filteredInquiries.map((inquiry, i) => (
                                <motion.div
                                    key={inquiry.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => setSelectedInquiry(inquiry)}
                                    className={`group relative overflow-hidden cursor-pointer bg-[#0a0a0f] border rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 transition-all duration-500
                                    ${selectedInquiry?.id === inquiry.id ? 'border-brand-purple ring-1 ring-brand-purple/30 bg-white/[0.03]' : 'border-white/5 hover:border-white/20'}`}
                                >
                                    {selectedInquiry?.id === inquiry.id && (
                                        <div className="absolute top-0 left-0 w-1 h-full bg-brand-purple" />
                                    )}
                                    
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-4 mb-3">
                                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/5 flex items-center justify-center text-lg sm:text-xl border border-white/10 group-hover:bg-brand-purple/10 group-hover:border-brand-purple/20 transition-colors">
                                                    {inquiry.name.charAt(0)}
                                                </div>
                                                <div className="min-w-0">
                                                    <h3 className="text-lg sm:text-xl font-black text-white leading-tight group-hover:text-brand-purple transition-colors truncate">{inquiry.name}</h3>
                                                    <p className="text-gray-500 text-[10px] sm:text-xs font-bold truncate">{inquiry.company ?? 'Individual Client'}</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[8px] font-black uppercase tracking-widest text-gray-400">
                                                    {inquiry.service ?? 'General'}
                                                </span>
                                                <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[8px] font-black uppercase tracking-widest text-gray-400">
                                                    {inquiry.budget ?? 'N/A'}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-4 border-t border-white/5 sm:border-0 pt-4 sm:pt-0">
                                            <div className={`px-4 sm:px-5 py-2 rounded-2xl text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] border shadow-sm
                                                ${inquiry.status === 'pending' ? 'text-orange-500 bg-orange-500/10 border-orange-500/20' : 
                                                  inquiry.status === 'contacted' ? 'text-blue-500 bg-blue-500/10 border-blue-500/20' : 
                                                  'text-green-500 bg-green-500/10 border-green-500/20'}`}>
                                                {inquiry.status}
                                            </div>
                                            <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">
                                                {new Date(inquiry.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )) : (
                                <div className="bg-[#0a0a0f] border border-dashed border-white/10 rounded-[3rem] py-20 sm:py-32 text-center">
                                    <p className="text-gray-500 font-black uppercase tracking-[0.3em] text-[10px] sm:text-sm">No leads match your filter.</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Details Panel Section */}
                    <div className={`xl:col-span-5 relative ${selectedInquiry ? 'fixed inset-0 z-[110] p-4 bg-black/95 xl:relative xl:inset-auto xl:z-auto xl:p-0 xl:bg-transparent overflow-y-auto custom-scrollbar' : 'hidden xl:block'}`}>
                        <AnimatePresence mode="wait">
                            {selectedInquiry ? (
                                <motion.div
                                    key={selectedInquiry.id}
                                    initial={{ opacity: 0, scale: 0.98, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.98, y: 10 }}
                                    className="bg-[#0a0a0f] border border-white/10 rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 xl:sticky xl:top-10 shadow-2xl overflow-hidden min-h-full xl:min-h-0"
                                >
                                    {/* Mobile Close Button */}
                                    <button 
                                        onClick={() => setSelectedInquiry(null)}
                                        className="absolute top-6 right-6 w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-xl xl:hidden z-20"
                                    >
                                        ×
                                    </button>

                                    {/* Glassmorphism Background elements */}
                                    <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-brand-purple/5 blur-[80px] rounded-full pointer-events-none" />
                                    <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-blue-600/5 blur-[80px] rounded-full pointer-events-none" />

                                    <div className="relative z-10">
                                        <div className="flex flex-col sm:flex-row justify-between items-start mb-8 sm:mb-12 gap-4">
                                            <div>
                                                <span className="text-[10px] font-black text-brand-purple uppercase tracking-[0.4em] mb-2 block">Client Profile</span>
                                                <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-white mb-2">{selectedInquiry.name}</h2>
                                                <div className="flex items-center gap-3">
                                                    <span className="text-gray-500 font-bold text-xs sm:text-sm truncate max-w-[200px]">{selectedInquiry.email}</span>
                                                    <button 
                                                        onClick={() => navigator.clipboard.writeText(selectedInquiry.email)}
                                                        className="text-[10px] text-gray-700 hover:text-white transition-colors"
                                                    >📋 Copy</button>
                                                </div>
                                            </div>
                                            <button 
                                                onClick={() => openDeleteModal(selectedInquiry.id)}
                                                className="w-12 h-12 bg-red-500/10 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all flex items-center justify-center border border-red-500/20"
                                            >
                                                🗑️
                                            </button>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
                                            <div className="p-6 bg-white/5 rounded-[2rem] border border-white/10">
                                                <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-3">Service Interest</p>
                                                <div className="flex items-center gap-3">
                                                    <span className="text-xl">🚀</span>
                                                    <p className="text-sm font-black text-white uppercase tracking-tight">{selectedInquiry.service ?? 'Custom Build'}</p>
                                                </div>
                                            </div>
                                            <div className="p-6 bg-white/5 rounded-[2rem] border border-white/10">
                                                <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-3">Allocated Budget</p>
                                                <div className="flex items-center gap-3">
                                                    <span className="text-xl">💰</span>
                                                    <p className="text-sm font-black text-white uppercase tracking-tight">{selectedInquiry.budget ?? 'Discussion Req.'}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-6 sm:p-8 bg-gradient-to-br from-brand-purple/20 to-blue-600/10 rounded-[2.5rem] border border-white/10 mb-8 sm:mb-10">
                                            <div className="flex justify-between items-center mb-6">
                                                <p className="text-[10px] font-black text-brand-purple uppercase tracking-[0.3em]">Proposed Meeting</p>
                                                <span className="px-3 py-1 rounded-full bg-white/10 text-[8px] font-black text-white uppercase">Confirmed Slot</span>
                                            </div>
                                            <div className="flex items-center gap-6">
                                                <div className="flex flex-col">
                                                    <p className="text-2xl sm:text-3xl font-black text-white">{new Date(selectedInquiry.meeting_date + 'T00:00:00').toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}</p>
                                                    <p className="text-[10px] sm:text-xs font-bold text-brand-purple uppercase tracking-widest">{selectedInquiry.meeting_time}</p>
                                                </div>
                                                <div className="h-10 w-[1px] bg-white/10" />
                                                <p className="text-[9px] sm:text-[10px] text-gray-400 font-medium leading-relaxed italic">
                                                    Slot pre-selected by the client.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mb-8 sm:mb-10">
                                            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4 ml-2">Project Brief</p>
                                            <div className="p-6 sm:p-8 bg-white/5 rounded-[2.5rem] border border-white/10 text-sm text-gray-300 leading-relaxed font-medium min-h-[120px] sm:min-h-[150px]">
                                                {selectedInquiry.message || "No specific message provided."}
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between px-2">
                                                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Pipeline Status</p>
                                            </div>
                                            <div className="flex flex-wrap gap-2 p-1.5 bg-white/5 rounded-2xl border border-white/10">
                                                {['pending', 'contacted', 'closed'].map(status => (
                                                    <button
                                                        key={status}
                                                        onClick={() => updateStatus(selectedInquiry.id, status)}
                                                        className={`flex-1 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all
                                                        ${selectedInquiry.status === status 
                                                            ? 'bg-white text-black shadow-xl' 
                                                            : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
                                                    >
                                                        {status}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <div className="h-[600px] bg-[#0a0a0f] border border-dashed border-white/10 rounded-[3rem] flex flex-col items-center justify-center text-center p-12">
                                    <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center text-4xl mb-8 border border-white/10 animate-pulse">
                                        ⚡
                                    </div>
                                    <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-2">No Lead Selected</h3>
                                    <p className="text-gray-600 text-xs font-bold uppercase tracking-widest max-w-[200px]">Select an inquiry from the feed to view full intelligence.</p>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            <DeleteConfirmationModal 
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={confirmDelete}
                title="Delete Inquiry"
                message="Are you sure you want to delete this inquiry? This will permanently remove the lead from your pipeline."
            />
        </AdminLayout>
    );
}
