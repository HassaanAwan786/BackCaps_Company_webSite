import { motion } from 'framer-motion';

const CustomCursor = ({ cursorX, cursorY, cursorXSpring, cursorYSpring, isHovering }) => {
    if (!isHovering) return null;

    return (
        <>
            {/* Inner Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-brand-purple rounded-full pointer-events-none z-[9999]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
            {/* Outer Glow Ring */}
            <motion.div
                className="fixed top-0 left-0 w-12 h-12 border border-brand-purple/50 rounded-full pointer-events-none z-[9998]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                    boxShadow: "0 0 20px rgba(21, 93, 252, 0.3), inset 0 0 15px rgba(21, 93, 252, 0.2)",
                }}
            />
        </>
    );
};

export default CustomCursor;
