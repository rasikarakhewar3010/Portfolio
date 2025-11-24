import React from 'react';
import { motion } from 'framer-motion';

const AnimatedLogo = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-20 h-20 md:w-24 md:h-24"
        >
            {/* Glow Effect */}
            <motion.div
                className="absolute inset-0 rounded-full blur-xl"
                style={{
                    background: 'radial-gradient(circle, #f7bea7 0%, #fcd6c7 50%, transparent 70%)'
                }}
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [0.9, 1.2, 0.9],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Rotating Ring */}
            <motion.div
                className="absolute inset-[-4px] rounded-full border-2 border-[#f7bea7]/30"
                animate={{
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />

            {/* GIF */}
            <motion.img
                src="/Tulip-Animation-For-rasika.gif"
                alt="Logo"
                className="relative w-full h-full object-contain rounded-full"
                animate={{
                    y: [0, -3, 0],
                }}
                transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Orbiting Particles */}
            {[...Array(4)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-[#f7bea7]"
                    style={{
                        top: '50%',
                        left: '50%',
                    }}
                    animate={{
                        x: Math.cos((i / 4) * Math.PI * 2) * 40,
                        y: Math.sin((i / 4) * Math.PI * 2) * 40,
                        scale: [0, 1, 0],
                        opacity: [0, 0.8, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </motion.div>
    );
};

export default AnimatedLogo;
