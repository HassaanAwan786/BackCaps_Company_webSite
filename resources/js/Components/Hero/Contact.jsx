import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from '@inertiajs/react';

const Contact = ({ timeSlots = [] }) => {
    // Helper to get local YYYY-MM-DD string
    const getLocalISOString = (date) => {
        const offset = date.getTimezoneOffset();
        const adjustedDate = new Date(date.getTime() - (offset * 60 * 1000));
        return adjustedDate.toISOString().split('T')[0];
    };

    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [isCustomBudget, setIsCustomBudget] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        company: '',
        email: '',
        budget: '$25k - $50k',
        service: 'Web Development',
        meeting_date: getLocalISOString(today),
        meeting_time: timeSlots[0]?.time || '09:00 AM',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('inquiry.store'), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                setSubmitted(true);
            },
        });
    };

    const services = [
        'Web Development',
        'Mobile App Development',
        'UI/UX Design',
        'AI & Machine Learning',
        'Blockchain Solutions',
        'Cloud Infrastructure'
    ];

    const socialLinks = [
        { 
            name: 'LinkedIn', 
            desc: 'Case studies & updates', 
            icon: (
                <svg className="w-5 h-5 text-white group-hover:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.23 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.14 1.45-2.14 2.96v5.7h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.86 3.4-1.86 3.63 0 4.31 2.39 4.31 5.5v6.25z"/>
                </svg>
            ) 
        },
        { 
            name: 'Instagram', 
            desc: 'Behind the scenes', 
            icon: (
                <svg className="w-5 h-5 text-white group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
            ) 
        },
        { 
            name: 'X/Twitter', 
            desc: 'Tech thoughts & news', 
            icon: (
                <svg className="w-5 h-5 text-white group-hover:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
            ) 
        },
        { 
            name: 'Facebook', 
            desc: 'Community updates', 
            icon: (
                <svg className="w-5 h-5 text-white group-hover:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978 1.602 0 2.444.053 2.846.106v2.616h-1.51c-1.881 0-2.124.701-2.124 2.15v1.586h3.647l-.406 3.667h-3.241v7.98H9.101z"/>
                </svg>
            ) 
        },
    ];

    // Calendar logic
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const handlePrevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const formatSelectedDate = (day) => {
        const d = new Date(currentYear, currentMonth, day);
        return getLocalISOString(d);
    };

    const todayFormatted = getLocalISOString(today);

    return (
        <section id="contact" className="bg-white py-24 px-6 sm:px-12 lg:px-24 relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
                    <div className="lg:col-span-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-[2px] w-8 bg-blue-600" />
                            <span className="text-[10px] sm:text-xs font-black text-gray-400 uppercase tracking-[0.2em]">Ready to start?</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 uppercase tracking-tighter leading-[0.9] mb-8 font-display">
                            Let's Build <br /> <span className="text-blue-600">Something Great</span> <br /> Together.
                        </h2>
                        <p className="text-gray-900 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-xl mb-10">
                            We're currently accepting new projects for {monthNames[currentMonth]} {currentYear}. Let's discuss how we can scale your vision through premium design and engineering.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button 
                                onClick={() => document.getElementById('calendar-section').scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-xl shadow-blue-600/20 active:scale-95 flex items-center gap-3"
                            >
                                <span className="text-lg">📅</span> Schedule a Meeting
                            </button>
                            <a 
                                href="tel:+447000000000"
                                className="px-8 py-4 bg-gray-50 border border-gray-200 hover:border-blue-600 text-gray-900 text-xs sm:text-sm font-bold uppercase tracking-widest rounded-xl transition-all duration-300 active:scale-95 flex items-center gap-3 group"
                            >
                                <span className="text-lg group-hover:rotate-12 transition-transform">📞</span> Quick Call Request
                            </a>
                        </div>
                    </div>

                    {/* Agency Details Card */}
                    <div className="lg:col-span-4">
                        <div className="bg-[#0a0a0a] rounded-[2.5rem] p-10 h-full flex flex-col shadow-2xl relative overflow-hidden group">
                            {/* Decorative Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full group-hover:bg-blue-600/20 transition-colors duration-500" />
                            
                            <h3 className="text-white text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-8 relative z-10">Agency Details</h3>
                            <div className="space-y-8 flex-1 relative z-10">
                                <div className="flex gap-4 group cursor-pointer">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-blue-600/20 group-hover:border-blue-600/30 transition-all">
                                        <svg className="w-4 h-4 text-white group-hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase font-black mb-1 transition-colors group-hover:text-slate-400">Office</p>
                                        <p className="text-white text-xs font-bold leading-relaxed">85 Great Portland Street,<br />London, W1W 7LT</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 group cursor-pointer">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-blue-600/20 group-hover:border-blue-600/30 transition-all">
                                        <svg className="w-4 h-4 text-white group-hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase font-black mb-1 transition-colors group-hover:text-slate-400">Email</p>
                                        <p className="text-white text-xs font-bold">hello@backcaps.agency</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 group cursor-pointer">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-blue-600/20 group-hover:border-blue-600/30 transition-all">
                                        <svg className="w-4 h-4 text-white group-hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase font-black mb-1 transition-colors group-hover:text-slate-400">Office Hours</p>
                                        <p className="text-white text-xs font-bold">Mon — Fri: 09:00 - 18:00 GMT</p>
                                    </div>
                                </div>
                            </div>

                            {/* Stats in Agency Card */}
                            <div className="mt-10 pt-8 border-t border-white/5 grid grid-cols-2 gap-4 relative z-10">
                                <div>
                                    <p className="text-2xl font-black text-white">250+</p>
                                    <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest">Successful Projects</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-black text-white">100+</p>
                                    <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest">Trusted Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Interaction Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Project Brief & Calendar */}
                    <div className="lg:col-span-9 bg-gray-50 border border-gray-100 rounded-[3rem] overflow-hidden shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                            {/* Form Side */}
                            <div className="pb-0 md:pb-auto p-8 sm:p-12 border-b md:border-b-0 md:border-r border-gray-100 bg-gray-50">
                                <h3 className="text-gray-900 text-lg sm:text-xl font-black uppercase tracking-tight mb-10 font-display">Project Brief</h3>
                                {submitted ? (
                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20"
                                    >
                                        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-4xl">✅</div>
                                        <h3 className="text-2xl font-black text-gray-900">INQUIRY RECEIVED!</h3>
                                        <p className="text-gray-900 font-normal leading-relaxed">We've successfully received your project brief. <br /> Our team will review it and get back to you within 24 hours.</p>
                                        <button 
                                            onClick={() => setSubmitted(false)}
                                            className="text-blue-600 font-black uppercase text-[10px] tracking-widest hover:underline"
                                        >
                                            Send Another Inquiry
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-[10px] text-gray-900/50 uppercase font-black mb-2 block ml-2">Full Name</label>
                                                <input 
                                                    type="text" 
                                                    value={data.name}
                                                    onChange={e => setData('name', e.target.value)}
                                                    placeholder="John Doe" 
                                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-blue-600 transition-colors placeholder:text-gray-900/20" 
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="text-[10px] text-gray-900/50 uppercase font-black mb-2 block ml-2">Company</label>
                                                <input 
                                                    type="text" 
                                                    value={data.company}
                                                    onChange={e => setData('company', e.target.value)}
                                                    placeholder="Acme Inc." 
                                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-blue-600 transition-colors placeholder:text-gray-900/20" 
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-[10px] text-gray-900/50 uppercase font-black mb-2 block ml-2">Email Address</label>
                                                <input 
                                                    type="email" 
                                                    value={data.email}
                                                    onChange={e => setData('email', e.target.value)}
                                                    placeholder="john@acme.com" 
                                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-blue-600 transition-colors placeholder:text-gray-900/20" 
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="text-[10px] text-gray-900/50 uppercase font-black mb-2 block ml-2">Service</label>
                                                <select 
                                                    value={data.service}
                                                    onChange={e => setData('service', e.target.value)}
                                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-blue-600 transition-colors appearance-none"
                                                >
                                                    {services.map(s => <option key={s} className="bg-gray-50">{s}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between items-center mb-2 px-2">
                                                <label className="text-[10px] text-gray-900/50 uppercase font-black block">Approx. Budget</label>
                                                <button 
                                                    type="button"
                                                    onClick={() => {
                                                        setIsCustomBudget(!isCustomBudget);
                                                        setData('budget', isCustomBudget ? '$25k - $50k' : '');
                                                    }}
                                                    className="text-[9px] text-blue-600 font-black uppercase tracking-widest hover:underline"
                                                >
                                                    {isCustomBudget ? 'Choose Preset' : 'Enter Custom'}
                                                </button>
                                            </div>
                                            <AnimatePresence mode="wait">
                                                {isCustomBudget ? (
                                                    <motion.input
                                                        key="custom"
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        type="text"
                                                        value={data.budget}
                                                        onChange={e => setData('budget', e.target.value)}
                                                        placeholder="e.g. $15,000"
                                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-blue-600 transition-colors placeholder:text-gray-900/20"
                                                    />
                                                ) : (
                                                    <motion.select 
                                                        key="preset"
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: 10 }}
                                                        value={data.budget}
                                                        onChange={e => setData('budget', e.target.value)}
                                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-blue-600 transition-colors appearance-none"
                                                    >
                                                        <option className="bg-gray-50">$25k - $50k</option>
                                                        <option className="bg-gray-50">$50k - $100k</option>
                                                        <option className="bg-gray-50">$100k+</option>
                                                    </motion.select>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                        <div>
                                            <label className="text-[10px] text-gray-900/50 uppercase font-black mb-2 block ml-2">Tell us about your project</label>
                                            <textarea 
                                                value={data.message}
                                                onChange={e => setData('message', e.target.value)}
                                                rows="4" 
                                                placeholder="I need a high-converting landing page for..." 
                                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-blue-600 transition-colors resize-none mb-6 placeholder:text-gray-900/20" 
                                            ></textarea>
                                        </div>
                                        <button 
                                            disabled={processing}
                                            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl transition-all duration-300 shadow-xl shadow-blue-600/20 active:scale-95 flex items-center justify-center gap-3 group mb-4 disabled:opacity-50"
                                        >
                                            <span>{processing ? 'SENDING...' : 'Send Inquiry'}</span>
                                            {!processing && <span className="transform group-hover:translate-x-1 transition-transform">↗</span>}
                                        </button>
                                        <p className="text-[9px] text-center text-gray-900/40 font-bold flex items-center justify-center gap-2">
                                            <span className="text-blue-600">🛡️</span> Privacy guaranteed. 24h response time.
                                        </p>
                                    </form>
                                )}
                            </div>

                            {/* Calendar Side */}
                            <div id="calendar-section" className="p-8 sm:p-12 bg-gray-50">
                                <div className="flex justify-between items-center mb-10">
                                    <h3 className="text-gray-900 text-lg sm:text-xl font-black uppercase tracking-tight font-display">Pick a Date</h3>
                                    <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-1 rounded">PKT (UTC+5)</span>
                                </div>

                                {/* Calendar UI */}
                                <div className="bg-gray-50 rounded-2xl p-6 mb-8 shadow-sm border border-gray-100">
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="text-sm font-black text-gray-900 uppercase tracking-wider">{monthNames[currentMonth]} {currentYear}</span>
                                        <div className="flex gap-2">
                                            <button onClick={handlePrevMonth} className="p-1 text-gray-900/40 hover:text-blue-600 transition-colors">←</button>
                                            <button onClick={handleNextMonth} className="p-1 text-gray-900/40 hover:text-blue-600 transition-colors">→</button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-7 gap-2 text-center text-[10px] font-black text-gray-900/20 mb-4">
                                        <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                                    </div>
                                    <div className="grid grid-cols-7 gap-2 text-center">
                                        {/* Padding for first day */}
                                        {[...Array(firstDayOfMonth)].map((_, i) => (
                                            <div key={`empty-${i}`} className="py-2" />
                                        ))}
                                        {[...Array(daysInMonth)].map((_, i) => {
                                            const day = i + 1;
                                            const formattedDate = formatSelectedDate(day);
                                            const isSelected = data.meeting_date === formattedDate;
                                            const isToday = todayFormatted === formattedDate;

                                            return (
                                                <button
                                                    key={day}
                                                    type="button"
                                                    onClick={() => setData('meeting_date', formattedDate)}
                                                    className={`text-[11px] font-bold py-2 rounded-lg transition-all relative
                                                        ${isSelected ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-gray-900 hover:bg-gray-50'}
                                                        ${isToday && !isSelected ? 'text-blue-600' : ''}`}
                                                >
                                                    {day}
                                                    {isToday && <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${isSelected ? 'bg-white' : 'bg-blue-600'}`} />}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <p className="text-[10px] text-gray-900/40 uppercase font-black tracking-widest mb-4">Available Time Slots</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        {timeSlots.map((slot, i) => (
                                            <button
                                                key={i}
                                                type="button"
                                                disabled={!slot.is_available}
                                                onClick={() => setData('meeting_time', slot.time)}
                                                className={`py-3 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${data.meeting_time === slot.time
                                                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20'
                                                    : !slot.is_available
                                                        ? 'bg-gray-50 border-gray-100 text-gray-900/20 cursor-not-allowed'
                                                        : 'bg-gray-50 border-gray-200 text-gray-900 hover:border-blue-600/50'
                                                    }`}
                                            >
                                                {slot.time} {!slot.is_available && '(Full)'}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-8 p-4 bg-blue-600/5 border border-blue-600/10 rounded-2xl">
                                    <p className="text-[10px] text-blue-600 font-black uppercase tracking-widest mb-1">Selected Meeting:</p>
                                    <p className="text-sm font-bold text-gray-900">
                                        {new Date(data.meeting_date + 'T00:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} at {data.meeting_time}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Widgets */}
                    <div className="lg:col-span-3 space-y-8">
                        {/* Social Proof */}
                        <div className="bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-8 flex flex-col items-center text-center shadow-sm">
                            <div className="flex -space-x-3 mb-6">
                                {[1, 2, 3].map(i => (
                                    <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} className="w-10 h-10 rounded-full border-2 border-white" alt="" />
                                ))}
                            </div>
                            <h4 className="text-white text-xs font-black uppercase tracking-wider mb-2">Join 100+ ambitious brands</h4>
                            <p className="text-white text-[10px] font-normal leading-relaxed">Our partners see an average 40% growth in digital engagement.</p>
                        </div>

                        {/* Follow Our Work */}
                        <div className="bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-8 shadow-sm">
                            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">Follow Our Work</h4>
                            <div className="space-y-4">
                                {socialLinks.map((link, i) => (
                                    <button key={i} className="w-full bg-[#0a0a0a] rounded-2xl p-4 flex items-center justify-between group hover:bg-black transition-all shadow-lg">
                                        <div className="flex items-center gap-4 text-left">
                                            <span className="text-xl opacity-70 group-hover:opacity-100 transition-opacity">{link.icon}</span>
                                            <div>
                                                <p className="text-white text-[11px] font-black uppercase tracking-wider">{link.name}</p>
                                                <p className="text-white text-[9px] font-normal">{link.desc}</p>
                                            </div>
                                        </div>
                                        <span className="text-slate-500 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all">→</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
