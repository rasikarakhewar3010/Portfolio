import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FuzzyText from '../components/ui/FuzzyText';
import ClickSpark from '../components/ui/ClickSpark';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-[#fffaf5] flex flex-col items-center justify-center p-6 text-center overflow-hidden relative">
            {/* Background Decorative Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#f7bea7]/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#fbccb9]/20 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full max-w-[100vw] px-4"
            >
                {/* 404 Text with Fuzzy Effect */}
                <div className="mb-4 w-full flex justify-center overflow-hidden">
                    <FuzzyText
                        color="#0f172a"
                        fontSize="clamp(3rem, 18vw, 12rem)"
                        fontWeight={900}
                        baseIntensity={0.2}
                        hoverIntensity={0.8}
                        glitchMode={true}
                    >
                        404
                    </FuzzyText>
                </div>

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl md:text-4xl font-bold text-[#0f172a] mb-6"
                >
                    Oops! Page Not Found
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-600 max-w-md mx-auto mb-10 text-lg"
                >
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    <ClickSpark
                        sparkColor='#f7bea7'
                        sparkSize={6}
                        sparkRadius={20}
                        sparkCount={10}
                        duration={400}
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center px-6 py-3.5 md:px-8 md:py-4 text-base md:text-lg font-bold text-white bg-[#0f172a] rounded-full hover:bg-[#f7bea7] hover:text-[#0f172a] transition-all duration-300 shadow-xl hover:shadow-[#f7bea7]/30 transform hover:-translate-y-1 whitespace-nowrap"
                        >
                            Back to Home
                            <svg className="w-5 h-5 ml-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 12h18m-9-9l9 9-9 9" />
                            </svg>
                        </Link>
                    </ClickSpark>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default NotFound;
