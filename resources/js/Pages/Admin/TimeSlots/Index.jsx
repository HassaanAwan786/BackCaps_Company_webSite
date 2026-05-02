import AdminLayout from '@/Layouts/AdminLayout';
import { motion } from 'framer-motion';
import { useForm, router } from '@inertiajs/react';
import { useState } from 'react';
import DeleteConfirmationModal from '@/Components/Admin/DeleteConfirmationModal';

export default function TimeSlots({ auth, timeSlots }) {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);

    const { data, setData, post, processing, reset, errors } = useForm({
        time: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.time-slots.store'), {
            onSuccess: () => reset(),
        });
    };

    const toggleStatus = (id) => {
        router.patch(route('admin.time-slots.toggle', id));
    };

    const confirmDelete = () => {
        if (itemToDelete) {
            router.delete(route('admin.time-slots.destroy', itemToDelete), {
                onSuccess: () => setItemToDelete(null)
            });
        }
    };

    const openDeleteModal = (id) => {
        setItemToDelete(id);
        setIsDeleteModalOpen(true);
    };

    return (
        <AdminLayout auth={auth} title="Time Slots Management">
            <div className="max-w-5xl mx-auto space-y-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-4xl lg:text-5xl font-black tracking-tighter mb-4 uppercase">
                        Manage <span className="text-brand-purple">Time Slots</span>
                    </h1>
                    <p className="text-gray-500 font-medium">Add or toggle available meeting slots for your clients.</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Add Slot Form */}
                    <div className="lg:col-span-4">
                        <div className="bg-[#0a0a0f] border border-white/10 rounded-[2.5rem] p-8">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-6">Add New Slot</h3>
                            <form onSubmit={submit} className="space-y-4">
                                <div>
                                    <label className="text-[10px] text-gray-500 font-black uppercase tracking-widest block mb-2">Slot Time</label>
                                    <input 
                                        type="text" 
                                        value={data.time}
                                        onChange={e => setData('time', e.target.value)}
                                        placeholder="e.g. 11:00 AM" 
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white focus:border-brand-purple focus:outline-none transition-all"
                                        required
                                    />
                                    {errors.time && <p className="text-red-500 text-[10px] mt-1">{errors.time}</p>}
                                </div>
                                <button 
                                    disabled={processing}
                                    className="w-full py-4 bg-brand-purple text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:shadow-lg hover:shadow-brand-purple/20 transition-all disabled:opacity-50"
                                >
                                    {processing ? 'Saving...' : 'Create Slot'}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Slots List */}
                    <div className="lg:col-span-8">
                        <div className="bg-[#0a0a0f] border border-white/10 rounded-[2.5rem] overflow-hidden">
                            <div className="p-8 border-b border-white/5">
                                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">Existing Slots</h3>
                            </div>
                            <div className="p-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {timeSlots.map((slot) => (
                                        <div 
                                            key={slot.id}
                                            className="bg-white/5 border border-white/5 rounded-2xl p-6 flex items-center justify-between group hover:border-white/10 transition-all"
                                        >
                                            <div>
                                                <p className="text-lg font-black text-white">{slot.time}</p>
                                                <span className={`text-[8px] font-black uppercase tracking-widest ${slot.is_available ? 'text-green-500' : 'text-orange-500'}`}>
                                                    {slot.is_available ? 'Available' : 'Full / Blocked'}
                                                </span>
                                            </div>
                                            <div className="flex gap-2">
                                                <button 
                                                    onClick={() => toggleStatus(slot.id)}
                                                    className={`p-2 rounded-lg border transition-all ${slot.is_available ? 'border-orange-500/20 text-orange-500 hover:bg-orange-500/10' : 'border-green-500/20 text-green-500 hover:bg-green-500/10'}`}
                                                    title={slot.is_available ? 'Mark Full' : 'Make Available'}
                                                >
                                                    {slot.is_available ? '🔒' : '🔓'}
                                                </button>
                                                <button 
                                                    onClick={() => openDeleteModal(slot.id)}
                                                    className="p-2 border border-red-500/20 text-red-500 rounded-lg hover:bg-red-500/10 transition-all"
                                                    title="Delete"
                                                >
                                                    🗑️
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {timeSlots.length === 0 && (
                                    <div className="py-20 text-center text-gray-500 font-bold uppercase tracking-widest text-[10px]">
                                        No time slots created yet.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DeleteConfirmationModal 
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={confirmDelete}
                title="Delete Time Slot"
                message="Are you sure you want to delete this meeting slot? This cannot be undone."
            />
        </AdminLayout>
    );
}
