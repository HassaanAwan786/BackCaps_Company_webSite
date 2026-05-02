import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
    const [activeTab, setActiveTab] = useState('project');
    const [flippedCard, setFlippedCard] = useState(null); // For mobile tap interaction

    const checkmark = (
        <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
        </svg>
    );

    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const services = [
        {
            title: "Web Development",
            category: 'project',
            description: "Custom websites and web applications built for performance, scalability, and conversion.",
            items: ["Blog Websites", "Business Websites", "Portals and Event Websites", "E-Commerce Solutions"],
            bg: "bg-gradient-to-br from-blue-600/10 via-blue-600/5 to-transparent border-blue-500/20",
            image: "/assets/images/macbook.png",
            icon: "/assets/images/macbook_logo.png",
            techIcons: [
                { name: 'wordpress', top: '-3%', left: '50%', mTop: '-15%', mLeft: '50%', color: '#21759B' },
                { name: 'javascript', top: '5%', left: '15%', mTop: '15%', mLeft: '0%', color: '#F7DF1E' },
                { name: 'nodedotjs', top: '82%', left: '74%', mTop: '85%', mLeft: '80%', color: '#339933' },
                { name: 'react', top: '90%', left: '26%', mTop: '90%', mLeft: '20%', color: '#61DAFB' },
                { name: 'html5', top: '48%', left: '-25%', mTop: '50%', mLeft: '-3%', color: '#E34F26' }
            ]
        },
        {
            title: "Mobile Application Development",
            category: 'project',
            description: "High-performance mobile apps designed to engage users and drive growth.",
            items: ["Cross-Platform Development", "Native App Development", "Pixel Perfect UI & UX", "High-Performance Apps"],
            bg: "bg-gradient-to-br from-pink-600/10 via-pink-600/5 to-transparent border-pink-500/20",
            image: "/assets/images/iPhone_1.png",
            image2: "/assets/images/iPhone_2.png",
            icon: "/assets/images/iphone_logo.png",
            techIcons: [
                // { name: 'swift', top: '10%', left: '10%', color: '#F05138' },
                // { name: 'kotlin', top: '35%', right: '5%', color: '#7F52FF' }
            ]
        },
        {
            title: "UI/UX Designing",
            category: 'project',
            description: "We have a team of skilled professionals crafting user-centric designs that are intuitive, engaging and impactful.",
            items: ["User Research", "Wireframing and Prototyping", "UI Design", "Usability Testing"],
            bg: "bg-gradient-to-br from-cyan-600/10 via-cyan-600/5 to-transparent border-cyan-500/20",
            image: "/assets/images/studio.png",
            icon: "/assets/images/studio_logo.png",
            techIcons: [
                { name: 'figma', top: '25%', left: '5%', color: '#F24E1E', mTop: '25%', mLeft: '0%', },
                { name: 'dribbble', top: '25%', right: '-10%', color: '#EA4C89', mTop: '25%', mRight: '10%', },
                { name: 'behance', bottom: '70%', left: '42%', color: '#1769FF', mBottom: '80%', mLeft: '42%', },
                { name: 'miro', top: '70%', right: '-15%', color: '#FFD500', mTop: '60%', mRight: '0%', },
                { name: 'sketch', bottom: '25%', left: '-20%', color: '#F7B500', mTop: '60%', m: '-20%', },
            ]
        },
        {
            title: "Artificial Intelligence",
            description: "Intelligent Solutions that automate processes, uncover insights, and accelerate innovation.",
            items: ["Machine Learning", "Predictive Analytics", "Chatbots and Automation", "AI Integration"],
            bg: "bg-gradient-to-br from-purple-600/10 via-purple-600/5 to-transparent border-purple-500/20",
            image: "/assets/images/ai.png",
            icon: "/assets/images/ai_logo.png",
            category: 'project',
            expertise: "Deep Learning & NLP",
            stats: "98% Accuracy",
            techIcons: [
                { name: 'python', top: '15%', left: '25%', color: '#3776AB', mTop: '-15%', mLeft: '20%' },
                { name: 'tensorflow', top: '10%', right: '15%', color: '#FF6F00', mTop: '-10%', mRight: '0%' },
                { name: 'pytorch', bottom: '45%', left: '-10%', color: '#EE4C2C', mTop: '30%', mLeft: '-55%' },
                { name: 'keras', top: '70%', left: '-20%', color: '#D00000', mTop: '40%', mLeft: '-5%' }
            ]
        },
        {
            title: "Cloud Infrastructure",
            category: 'service',
            expertise: "DevOps & Scaling",
            stats: "99.9% Uptime",
            description: "Scalable and secure cloud hosting, DevOps, and infrastructure management solutions.",
            items: ["AWS/Azure Management", "CI/CD Pipelines", "Kubernetes Orchestration", "Server Migration"],
            bg: "bg-gradient-to-br from-orange-600/10 via-orange-600/5 to-transparent border-orange-500/20",
            image: "/assets/images/macbook.png",
            icon: "/assets/images/macbook_logo.png",
            techIcons: [
                { name: 'amazonwebservices', top: '20%', left: '10%', color: '#FF9900' },
                { name: 'docker', top: '10%', right: '15%', color: '#2496ED' },
                { name: 'kubernetes', bottom: '30%', left: '5%', color: '#326CE5' }
            ]
        },
        {
            title: "Cyber Security",
            category: 'service',
            expertise: "Security Audits",
            stats: "Zero Breaches",
            description: "Enterprise-grade security audits, threat protection, and vulnerability assessments.",
            items: ["Security Audits", "Penetration Testing", "Encryption Solutions", "Threat Monitoring"],
            bg: "bg-gradient-to-br from-red-600/10 via-red-600/5 to-transparent border-red-500/20",
            image: "/assets/images/ai.png",
            icon: "/assets/images/ai_logo.png",
            techIcons: [
                { name: 'kalilinux', top: '15%', left: '15%', color: '#557C94' },
                { name: 'fortinet', top: '10%', right: '20%', color: '#EE3124' }
            ]
        },
        {
            title: "Digital Marketing",
            category: 'service',
            expertise: "Growth Hacking",
            stats: "3x ROI",
            description: "Data-driven marketing strategies to increase your online presence and conversion rates.",
            items: ["SEO Optimization", "Social Media Management", "Content Strategy", "PPC Campaigns"],
            bg: "bg-gradient-to-br from-green-600/10 via-green-600/5 to-transparent border-green-500/20",
            image: "/assets/images/studio.png",
            icon: "/assets/images/studio_logo.png",
            techIcons: [
                { name: 'googleads', top: '20%', left: '10%', color: '#4285F4' },
                { name: 'mailchimp', bottom: '25%', right: '15%', color: '#FFE01B' }
            ]
        }
    ];

    // Add expertise/stats to existing projects
    services[0].expertise = "Performance Web"; services[0].stats = "200+ Projects";
    services[1].expertise = "Cross-Platform"; services[1].stats = "150+ Apps";
    services[2].expertise = "User-Centric UI"; services[2].stats = "50+ Designs";

    const filteredServices = services.filter(s => s.category === activeTab);

    return (
        <section className="bg-[#05050d] py-24 px-6 sm:px-12 lg:px-24 relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-[2px] w-8 bg-blue-600" />
                        <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Our Services</span>
                    </div>

                    <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tighter leading-tight max-w-4xl mx-auto mb-8">
                        We Build Digital <br /> Solutions That <span className="text-blue-600">Drive Results.</span>
                    </h2>

                    <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed">
                        Our team blends design with technology to deliver exceptional and functional digital solutions.
                    </p>
                </div>

                <div className="flex justify-center mb-16 sm:mb-20">
                    <div className="bg-white/5 border border-white/10 p-1 sm:p-1.5 rounded-full flex items-center shadow-inner max-w-[95%] sm:max-w-none mx-auto">
                        <button
                            onClick={() => setActiveTab('project')}
                            className={`px-4 sm:px-8 py-2 sm:py-3 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-[0.1em] transition-all duration-300 ${activeTab === 'project' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-gray-500 hover:text-white'}`}
                        >
                            Project-Based
                        </button>
                        <button
                            onClick={() => setActiveTab('service')}
                            className={`px-4 sm:px-8 py-2 sm:py-3 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-[0.1em] transition-all duration-300 ${activeTab === 'service' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-gray-500 hover:text-white'}`}
                        >
                            Service-Based
                        </button>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                    >
                        {filteredServices.map((service, index) => {
                            const isFlipped = flippedCard === index;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => isMobile && setFlippedCard(isFlipped ? null : index)}
                                    className={`${service.bg} ${service.className || ''} rounded-[2rem] p-6 sm:p-10 lg:p-12 relative overflow-hidden group lg:min-h-[380px] border flex flex-col lg:flex-row gap-8 lg:gap-10 items-start text-left transition-all duration-500 hover:scale-[1.01] lg:hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-600/10 cursor-pointer lg:cursor-default`}
                                >
                                    {/* Mobile Flip Indicator */}
                                    {isMobile && (
                                        <div className="absolute top-6 right-6 text-[8px] font-black uppercase tracking-widest text-blue-600/50">
                                            {isFlipped ? 'Close Details ×' : 'Tap for Insights ⚡'}
                                        </div>
                                    )}

                                    {/* Content Side */}
                                    <div className="flex-1 z-10 relative pr-4 w-full">
                                        {/* Default Screen */}
                                        <div className={`transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] 
                                            ${isFlipped ? 'opacity-0 -translate-y-12 scale-95 blur-sm' : 'opacity-100 translate-y-0 scale-100'}
                                            lg:group-hover:opacity-0 lg:group-hover:-translate-y-12 lg:group-hover:scale-95 lg:group-hover:blur-sm`}>
                                            <div className="flex items-center gap-4 mb-8">
                                                <div className="flex-shrink-0 flex items-center justify-center">
                                                    <img src={service.icon} alt="" width={40} height={40} className="sm:w-[50px] sm:h-[50px] brightness-110" />
                                                </div>
                                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white uppercase tracking-tight leading-tight">
                                                    {service.title}
                                                </h3>
                                            </div>
                                            <p className="text-gray-400 text-[13px] sm:text-sm font-medium leading-relaxed mb-8">
                                                {service.description}
                                            </p>
                                            <ul className="space-y-3 sm:space-y-4 inline-block text-left">
                                                {service.items.map((item, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-[13px] font-bold text-gray-300">
                                                        {checkmark}
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Hover/Flip Screen - Insights Dashboard */}
                                        <div className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col justify-center
                                            ${isFlipped ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-12 pointer-events-none'}
                                            lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:group-hover:pointer-events-auto`}>
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                                                    <img src={service.icon} alt="" width={24} height={24} className="brightness-125" />
                                                </div>
                                                <h4 className="text-lg font-black text-white uppercase tracking-widest">Insights</h4>
                                            </div>

                                            <div className="space-y-6 mb-8">
                                                <div>
                                                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-1">Expertise</p>
                                                    <p className="text-lg font-black text-blue-400 uppercase">{service.expertise}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-1">Key Result</p>
                                                    <p className="text-lg font-black text-white uppercase">{service.stats}</p>
                                                </div>
                                            </div>

                                            <button className="w-fit px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-lg shadow-blue-600/20 active:scale-95">
                                                Explore Solutions
                                            </button>
                                        </div>
                                    </div>

                                    {/* Visual Side */}
                                    <div className="flex-1 w-full relative min-h-[200px] sm:min-h-[250px] lg:min-h-full self-stretch mt-6 lg:mt-0">
                                        <div className={`absolute inset-0 flex ${(service.title === 'UI/UX Designing' || service.title === 'Artificial Intelligence') ? 'items-end' : 'items-center'} justify-center transition-opacity duration-500 ${isFlipped ? 'opacity-20' : 'opacity-100'}`}>
                                            <motion.div
                                                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                                                whileInView={{
                                                    scale: 1,
                                                    opacity: 1,
                                                    y: [0, -15, 0],
                                                    rotate: [0, 1, -1, 0]
                                                }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    scale: { duration: 0.8, delay: 0.2 },
                                                    opacity: { duration: 0.8, delay: 0.2 },
                                                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                                                    rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                                                }}
                                                className="relative z-0"
                                            >
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className={`w-full 
                                                        ${service.title === 'UI/UX Designing' ? 'max-w-[220px] lg:max-w-[340px] translate-y-4 lg:translate-y-8 scale-110 lg:scale-140 lg:group-hover:scale-145' :
                                                            service.title === 'Artificial Intelligence' ? 'max-w-[220px] lg:max-w-[320px] translate-y-6 lg:translate-x-10 lg:translate-y-10 scale-100 lg:scale-110' :
                                                                'max-w-[180px] lg:max-w-[300px] lg:group-hover:scale-105'} 
                                                        object-contain drop-shadow-2xl transition-transform duration-700 ${service.title === 'Mobile Application Development' ? 'translate-x-20 lg:translate-x-12 translate-y-18 lg:translate-y-5' : ''}`}
                                                />
                                                {service.image2 && (
                                                    <motion.img
                                                        src={service.image2}
                                                        alt={service.title}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        whileInView={{
                                                            opacity: 1,
                                                            x: 0,
                                                            y: [0, 10, 0],
                                                            rotate: [0, -3, 3, 0]
                                                        }}
                                                        transition={{
                                                            opacity: { duration: 0.8, delay: 0.4 },
                                                            x: { duration: 0.8, delay: 0.4 },
                                                            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                                                            rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" }
                                                        }}
                                                        className="absolute -left-10 bottom-0 w-[120px] object-contain drop-shadow-2xl z-20 transition-transform duration-700 group-hover:-translate-x-4 group-hover:translate-y-2"
                                                    />
                                                )}
                                            </motion.div>

                                            {service.techIcons?.map((icon, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    whileInView={{
                                                        opacity: 1,
                                                        scale: 1,
                                                        y: [0, (i % 2 === 0 ? -12 : 12), 0],
                                                        x: [0, (i % 3 === 0 ? 8 : -8), 0],
                                                        rotate: [0, (i % 2 === 0 ? 10 : -10), 0]
                                                    }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        opacity: { duration: 0.5, delay: 0.5 + i * 0.1 },
                                                        scale: { duration: 0.5, delay: 0.5 + i * 0.1 },
                                                        y: { duration: 3 + (i % 3), repeat: Infinity, ease: "easeInOut" },
                                                        x: { duration: 4 + (i % 2), repeat: Infinity, ease: "easeInOut" },
                                                        rotate: { duration: 5 + (i % 4), repeat: Infinity, ease: "easeInOut" }
                                                    }}
                                                    style={{
                                                        position: 'absolute',
                                                        top: isMobile ? (icon.mTop || icon.top) : icon.top,
                                                        bottom: isMobile ? (icon.mBottom || icon.bottom) : icon.bottom,
                                                        left: isMobile ? (icon.mLeft || icon.left) : icon.left,
                                                        right: isMobile ? (icon.mRight || icon.right) : icon.right,
                                                        zIndex: 10
                                                    }}
                                                    className="bg-white p-1.5 sm:p-2 rounded-lg sm:rounded-xl shadow-lg hover:scale-110 transition-transform duration-300"
                                                >
                                                    <img
                                                        src={`https://cdn.simpleicons.org/${icon.name}/${icon.color.replace('#', '')}`}
                                                        alt={icon.name}
                                                        className="w-4 h-4 sm:w-6 sm:h-6 object-contain"
                                                    />
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Services;
