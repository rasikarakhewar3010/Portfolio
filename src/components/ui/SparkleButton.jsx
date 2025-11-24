import React from 'react';
import { motion } from 'framer-motion';

const SparkleButton = ({ children, onClick, className = "" }) => {
    return (
        <motion.button
            whileHover="hover"
            whileTap="tap"
            onClick={onClick}
            className={`relative group overflow-hidden rounded-full bg-[#0f172a] px-8 py-4 font-medium text-white shadow-lg transition-all duration-300 ${className}`}
        >
            {/* Background Gradient Transition */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#f7bea7] to-[#fbccb9] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />

            {/* Content */}
            <span className="relative z-10 flex items-center gap-2 group-hover:text-[#0f172a] transition-colors duration-300">
                {children}
            </span>

            {/* Sparkles */}
            {[...Array(5)].map((_, i) => (
                <Sparkle key={i} index={i} />
            ))}
        </motion.button>
    );
};

const Sparkle = () => {


    const variants = {
        hover: {
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: [0, (Math.random() - 0.5) * 50],
            y: [0, (Math.random() - 0.5) * 50],
            transition: {
                duration: 0.6,
                repeat: Infinity,
                repeatDelay: Math.random() * 0.5,
                delay: Math.random() * 0.2,
            }
        },
        tap: {
            scale: 0
        }
    };

    return (
        <motion.div
            variants={variants}
            className="absolute w-3 h-3 pointer-events-none z-20"
            style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
            }}
        >
            <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-full h-full text-white group-hover:text-[#0f172a]"
            >
                <path
                    d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
                    fill="currentColor"
                />
            </svg>
        </motion.div>
    );
};

export default SparkleButton;
