import React from 'react';
import { motion } from 'framer-motion';

const ContactButton = ({ onClick, className = "" }) => {
    return (
        <motion.button
            whileHover="hover"
            whileTap="tap"
            onClick={onClick}
            className={`relative group overflow-hidden rounded-full bg-white px-8 py-4 font-medium text-[#0f172a] border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}
        >
            {/* Background Gradient Transition */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#f7bea7]/20 to-[#fbccb9]/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />

            {/* Content */}
            <span className="relative z-10 flex items-center gap-2 group-hover:text-[#0f172a] transition-colors duration-300">
                Contact Me
                <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </span>
        </motion.button>
    );
};

export default ContactButton;
