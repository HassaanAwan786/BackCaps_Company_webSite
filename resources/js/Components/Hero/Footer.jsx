import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    const footerLinks = {
        company: [
            { name: 'About Us', href: '#' },
            { name: 'Careers', href: '#' },
            { name: 'Blog', href: '#' },
            { name: 'Press Kit', href: '#' },
        ],
        services: [
            { name: 'Web Development', href: '#' },
            { name: 'Mobile Apps', href: '#' },
            { name: 'UI/UX Design', href: '#' },
            { name: 'AI Solutions', href: '#' },
        ],
        resources: [
            { name: 'Documentation', href: '#' },
            { name: 'Support', href: '#' },
            { name: 'Privacy Policy', href: '#' },
            { name: 'Terms of Service', href: '#' },
        ]
    };

    const socialIcons = [
        { 
            name: 'facebook', 
            icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978 1.602 0 2.444.053 2.846.106v2.616h-1.51c-1.881 0-2.124.701-2.124 2.15v1.586h3.647l-.406 3.667h-3.241v7.98H9.101z"/>
                </svg>
            ) 
        },
        { 
            name: 'twitter', 
            icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
            ) 
        },
        { 
            name: 'linkedin', 
            icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.23 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.14 1.45-2.14 2.96v5.7h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.86 3.4-1.86 3.63 0 4.31 2.39 4.31 5.5v6.25z"/>
                </svg>
            ) 
        },
        { 
            name: 'instagram', 
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
            ) 
        },
        { 
            name: 'github', 
            icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
            ) 
        },
    ];

    return (
        <footer className="bg-[#05050d] pt-24 pb-12 px-6 sm:px-12 lg:px-24 border-t border-white/5 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-8xl mx-auto relative z-10">
                {/* Top Section: Links & Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-8">
                    {/* Brand Info */}
                    <div className="lg:col-span-5">
                        <div className="text-2xl font-black text-white mb-8 tracking-tighter uppercase font-display">
                            Back<span className="text-blue-600">Caps</span>
                        </div>
                        <p className="text-white text-sm font-normal leading-relaxed mb-8 max-w-sm">
                            Transforming ideas into powerful digital solutions through innovation, expertise, and passion. We build the future of the web.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors group cursor-pointer">
                                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[10px] group-hover:bg-blue-600/20 group-hover:text-blue-500 transition-all">✉️</span>
                                <span className="text-xs font-bold uppercase tracking-wider">hello@backcaps.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors group cursor-pointer">
                                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[10px] group-hover:bg-blue-600/20 group-hover:text-blue-500 transition-all">📞</span>
                                <span className="text-xs font-bold uppercase tracking-wider">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors group cursor-pointer">
                                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[10px] group-hover:bg-blue-600/20 group-hover:text-blue-500 transition-all">📍</span>
                                <span className="text-xs font-bold uppercase tracking-wider">Silicon Valley, CA</span>
                            </div>
                        </div>
                    </div>

                    {/* Link Columns */}
                    <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-white text-xs font-black uppercase tracking-[0.4em] mb-10">Company</h4>
                            <ul className="space-y-4">
                                {footerLinks.company.map((link, i) => (
                                    <li key={i}>
                                        <a href={link.href} className="text-gray-400 text-[11px] font-bold uppercase tracking-widest hover:text-blue-500 transition-all duration-300 flex items-center gap-2 group">
                                            <span className="w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white text-xs font-black uppercase tracking-[0.4em] mb-10">Services</h4>
                            <ul className="space-y-4">
                                {footerLinks.services.map((link, i) => (
                                    <li key={i}>
                                        <a href={link.href} className="text-gray-400 text-[11px] font-bold uppercase tracking-widest hover:text-blue-500 transition-all duration-300 flex items-center gap-2 group">
                                            <span className="w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white text-xs font-black uppercase tracking-[0.4em] mb-10">Resources</h4>
                            <ul className="space-y-4">
                                {footerLinks.resources.map((link, i) => (
                                    <li key={i}>
                                        <a href={link.href} className="text-gray-400 text-[11px] font-bold uppercase tracking-widest hover:text-blue-500 transition-all duration-300 flex items-center gap-2 group">
                                            <span className="w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Middle Section: Newsletter */}
                <div className="py-16 border-y border-white flex flex-col lg:flex-row justify-between items-center gap-12 mb-8">
                    <div className="max-w-lg text-center lg:text-left">
                        <h3 className="text-white text-3xl sm:text-4xl font-black uppercase tracking-tight mb-3 font-display">Stay Updated</h3>
                        <p className="text-white text-sm sm:text-base font-normal leading-relaxed">Subscribe to our newsletter for the latest updates and digital insights from the frontier of tech.</p>
                    </div>
                    <div className="flex w-full lg:w-auto max-w-md gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 bg-white border border-transparent rounded-xl px-6 py-4 text-black text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                        />
                        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl transition-all duration-300 shadow-xl shadow-blue-600/20 active:scale-95">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Bottom Section: Socials & Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex gap-4">
                        {socialIcons.map((social, i) => (
                            <button 
                                key={i} 
                                className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transition-all duration-500 shadow-xl hover:bg-blue-600 hover:text-white hover:-translate-y-1 hover:shadow-blue-600/30 group"
                                aria-label={social.name}
                            >
                                <div className="transform group-hover:scale-110 transition-transform duration-500">
                                    {social.icon}
                                </div>
                            </button>
                        ))}
                    </div>

                    <p className="text-gray-600 text-[10px] font-black uppercase tracking-widest text-center md:text-left">
                        © 2026 Backcaps Software Solutions. All rights reserved.
                    </p>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-all group"
                    >
                        <span className="transform group-hover:-translate-y-1 transition-transform">↑</span>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
