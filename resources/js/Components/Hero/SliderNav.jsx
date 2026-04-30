import { motion } from 'framer-motion';

const SliderNav = ({ onPrev, onNext }) => {
    return (
        <div className="absolute md:bottom-10 bottom-0 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-12 z-40 flex items-center gap-4">
            <div className="flex gap-4">
                <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(178, 73, 248, 0.2)" }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onPrev}
                    className="w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white transition-colors hover:border-brand-purple/50 shadow-xl"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(178, 73, 248, 0.2)" }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onNext}
                    className="w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white transition-colors hover:border-brand-purple/50 shadow-xl"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </motion.button>
            </div>
        </div>
    );
};

export default SliderNav;
