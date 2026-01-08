import React from 'react';
import { motion } from 'framer-motion';

const ContactButton = ({ onClick, className = "" }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`relative group overflow-hidden rounded-full bg-white px-8 py-4 font-semibold text-[#0f172a] border border-[#f7bea7]/30 shadow-sm hover:shadow-xl hover:shadow-[#f7bea7]/20 transition-all duration-300 cursor-pointer ${className}`}
        >
            {/* Liquid Fill Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#f7bea7] to-[#fbccb9] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />

            {/* Content */}
            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                Contact Me
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </span>
            </span>
        </motion.button>
    );
};

export default ContactButton;
