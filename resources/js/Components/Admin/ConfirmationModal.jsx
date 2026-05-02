import { motion, AnimatePresence } from 'framer-motion';

export default function ConfirmationModal({ 
    isOpen, 
    onClose, 
    onConfirm, 
    title, 
    message, 
    confirmText = "Confirm", 
    cancelText = "Cancel",
    type = "danger" // danger, primary, warning
}) {
    const colors = {
        danger: {
            bg: 'bg-red-500/10',
            border: 'border-red-500/20',
            button: 'bg-red-600 hover:bg-red-700 hover:shadow-red-600/20',
            icon: '⚠️',
            glow: 'bg-red-500/10'
        },
        primary: {
            bg: 'bg-brand-purple/10',
            border: 'border-brand-purple/20',
            button: 'bg-brand-purple hover:bg-brand-purple/80 hover:shadow-brand-purple/20',
            icon: '👋',
            glow: 'bg-brand-purple/10'
        },
        warning: {
            bg: 'bg-orange-500/10',
            border: 'border-orange-500/20',
            button: 'bg-orange-500 hover:bg-orange-600 hover:shadow-orange-500/20',
            icon: '🔔',
            glow: 'bg-orange-500/10'
        }
    };

    const theme = colors[type] || colors.primary;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
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
                        <div className={`absolute top-[-20%] right-[-10%] w-32 h-32 ${theme.glow} blur-[50px] rounded-full pointer-events-none`} />

                        <div className="relative z-10 text-center">
                            <div className={`w-20 h-20 ${theme.bg} rounded-full flex items-center justify-center mx-auto mb-6 border ${theme.border}`}>
                                <span className="text-3xl">{theme.icon}</span>
                            </div>
                            
                            <h3 className="text-2xl font-black text-white tracking-tighter mb-4 uppercase">{title}</h3>
                            <p className="text-gray-500 font-medium mb-10 leading-relaxed text-sm">
                                {message}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={onClose}
                                    className="flex-1 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                                >
                                    {cancelText}
                                </button>
                                <button
                                    onClick={() => {
                                        onConfirm();
                                        onClose();
                                    }}
                                    className={`flex-1 py-4 ${theme.button} text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg transition-all`}
                                >
                                    {confirmText}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
