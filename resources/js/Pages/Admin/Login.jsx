import { useEffect } from 'react';
import { Head, useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post('/admin/login');
    };

    return (
        <div className="min-h-screen bg-[#05050d] flex items-center justify-center p-6 relative overflow-hidden text-white">
            <Head title="Admin Login" />

            {/* Background Effects */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] bg-brand-purple/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[70%] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md relative z-10"
            >
                <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="text-3xl font-black tracking-tighter">Back</span>
                        <span className="text-3xl font-black tracking-tighter text-brand-purple">Caps</span>
                    </div>
                    <h2 className="text-gray-400 font-bold uppercase tracking-[0.2em] text-xs">Admin Access Center</h2>
                </div>

                <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-10 shadow-2xl relative">
                    <form onSubmit={submit} className="space-y-6">
                        <div>
                            <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2 ml-1">Email Address</label>
                            <input
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-purple/50 transition-colors"
                                placeholder="admin@backcaps.com"
                                required
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-2 ml-1">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2 ml-1">Password</label>
                            <input
                                type="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-purple/50 transition-colors"
                                placeholder="••••••••"
                                required
                            />
                            {errors.password && <p className="text-red-500 text-xs mt-2 ml-1">{errors.password}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full py-4 rounded-2xl bg-brand-purple hover:bg-brand-purple/80 text-white font-black uppercase tracking-widest transition-all duration-300 shadow-lg shadow-brand-purple/20 active:scale-95 disabled:opacity-50"
                        >
                            {processing ? 'Authenticating...' : 'Sign In'}
                        </button>
                    </form>
                </div>

                <p className="text-center mt-10 text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">
                    Restricted Access Area &copy; {new Date().getFullYear()} BackCaps
                </p>
            </motion.div>
        </div>
    );
}
