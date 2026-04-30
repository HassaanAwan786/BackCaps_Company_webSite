import { useState, useEffect } from 'react';
import { animate, useMotionValue } from 'framer-motion';

const Counter = ({ value, duration = 2, delay = 0, decimals = 0, prefix = "", suffix = "" }) => {
    const motionValue = useMotionValue(0);
    const [display, setDisplay] = useState(prefix + (0).toFixed(decimals) + suffix);

    useEffect(() => {
        const controls = animate(motionValue, value, {
            duration,
            delay,
            ease: "easeOut",
            onUpdate: (latest) => {
                setDisplay(prefix + latest.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + suffix);
            }
        });
        return controls.stop;
    }, [value, duration, delay, decimals, prefix, suffix]);

    return <span>{display}</span>;
};

export default Counter;
