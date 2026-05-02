import { motion, AnimatePresence } from 'framer-motion';

export default function DeleteConfirmationModal({ isOpen, onClose, onConfirm, title, message }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-md bg-[#0a0a0f] border border-white/10 rounded-[2.5rem] p-10 shadow-2xl overflow-hidden"
                    >
                        {/* Background Decor */}
                        <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-red-500/10 blur-[50px] rounded-full pointer-events-none" />

                        <div className="relative z-10 text-center">
                            <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/20">
                                <span className="text-3xl">⚠️</span>
                            </div>
                            
                            <h3 className="text-2xl font-black text-white tracking-tighter mb-4 uppercase">{title || 'Are you sure?'}</h3>
                            <p className="text-gray-500 font-medium mb-10 leading-relaxed text-sm">
                                {message || 'This action cannot be undone. This will permanently delete the selected item from the database.'}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={onClose}
                                    className="flex-1 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => {
                                        onConfirm();
                                        onClose();
                                    }}
                                    className="flex-1 py-4 bg-red-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20 transition-all"
                                >
                                    Confirm Delete
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
