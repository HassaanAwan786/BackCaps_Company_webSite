import { useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ReadyToStart() {
    const { data, setData, post, processing, errors, reset, wasSuccessful } = useForm({
        name: '',
        email: '',
        phone: '',
        service: 'Web Development',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('inquiry.store'), {
            onSuccess: () => {
                reset();
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 5000);
            },
        });
    };

    return (
        <section id="ready-to-start" className="py-24 bg-[#05050d] relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden backdrop-blur-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Info Side */}
                        <div className="p-12 lg:p-16 bg-gradient-to-br from-brand-purple/20 to-transparent flex flex-col justify-center">
                            <motion.span 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-brand-purple font-black uppercase tracking-[0.3em] text-xs mb-6 block"
                            >
                                Get Started
                            </motion.span>
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl lg:text-6xl font-black text-white leading-none tracking-tighter mb-8"
                            >
                                READY TO <br /> <span className="text-brand-purple">BUILD?</span>
                            </motion.h2>
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-white text-lg font-normal leading-relaxed mb-10"
                            >
                                Tell us about your vision. Our team of product engineers is ready to turn your ideas into a high-performance digital reality.
                            </motion.p>
                            
                            <div className="space-y-6">
                                {[
                                    { icon: '✨', text: 'Free initial consultation' },
                                    { icon: '🚀', text: 'Project timeline estimation' },
                                    { icon: '🛡️', text: 'NDA protected discussion' }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <span className="text-2xl">{item.icon}</span>
                                        <span className="text-white font-bold text-sm tracking-wide">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="p-12 lg:p-16 border-l border-white/10">
                            {submitted ? (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full flex flex-col items-center justify-center text-center space-y-6"
                                >
                                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-4xl">✅</div>
                                    <h3 className="text-2xl font-black text-white">MESSAGE SENT!</h3>
                                    <p className="text-white font-normal">We've received your inquiry and will get back to you within 24 hours.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Name</label>
                                            <input 
                                                type="text" 
                                                value={data.name}
                                                onChange={e => setData('name', e.target.value)}
                                                placeholder="John Doe"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-purple transition-all"
                                                required
                                            />
                                            {errors.name && <p className="text-red-500 text-[10px] mt-1">{errors.name}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Email</label>
                                            <input 
                                                type="email" 
                                                value={data.email}
                                                onChange={e => setData('email', e.target.value)}
                                                placeholder="john@example.com"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-purple transition-all"
                                                required
                                            />
                                            {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Service</label>
                                            <select 
                                                value={data.service}
                                                onChange={e => setData('service', e.target.value)}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-purple transition-all appearance-none"
                                            >
                                                <option className="bg-[#080814]">Web Development</option>
                                                <option className="bg-[#080814]">Mobile App</option>
                                                <option className="bg-[#080814]">UI/UX Design</option>
                                                <option className="bg-[#080814]">AI/ML Solutions</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Phone (Optional)</label>
                                            <input 
                                                type="text" 
                                                value={data.phone}
                                                onChange={e => setData('phone', e.target.value)}
                                                placeholder="+1 234 567 890"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-purple transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Tell us more</label>
                                        <textarea 
                                            value={data.message}
                                            onChange={e => setData('message', e.target.value)}
                                            placeholder="I have an idea for..."
                                            rows="4"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-purple transition-all resize-none"
                                        ></textarea>
                                    </div>

                                    <button 
                                        disabled={processing}
                                        className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white font-black uppercase tracking-widest py-6 rounded-2xl shadow-xl shadow-brand-purple/20 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {processing ? 'SENDING...' : 'INITIATE PROJECT'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
