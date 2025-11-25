'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import SparkleButton from './SparkleButton';
import ContactButton from './ContactButton';
import AnimatedLogo from '../../components/AnimatedLogo';
import ResumeDownloadButton from '../../components/ResumeDownloadButton';

export default function HeroSection() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    // Close on ESC & click outside (mobile overlay)
    useEffect(() => {
        function onKey(e) {
            if (e.key === 'Escape') setMenuOpen(false);
        }
        function onClickOutside() {
            if (menuOpen) setMenuOpen(false);
        }

        if (menuOpen) {
            document.addEventListener('keydown', onKey);
            document.addEventListener('click', onClickOutside);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.removeEventListener('keydown', onKey);
            document.removeEventListener('click', onClickOutside);
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

            <section className="relative w-full min-h-screen overflow-hidden bg-[#fffaf5]">
                {/* Richer Background Base */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fffaf5] to-[#fff0e3] opacity-80 pointer-events-none" />

                {/* Aurora / Glow Background */}
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                    <motion.div
                        style={{ y: y1 }}
                        className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full blur-[120px] opacity-50 mix-blend-multiply"
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 10, 0],
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="w-full h-full bg-[#f0b383]" />
                    </motion.div>

                    <motion.div
                        style={{ y: y2 }}
                        className="absolute top-[10%] -right-[10%] w-[60%] h-[60%] rounded-full blur-[100px] opacity-40 mix-blend-multiply"
                        animate={{
                            scale: [1, 1.2, 1],
                            x: [0, -50, 0],
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    >
                        <div className="w-full h-full bg-[#ffcfb5]" />
                    </motion.div>

                    <motion.div
                        className="absolute bottom-[0%] left-[20%] w-[50%] h-[50%] rounded-full blur-[130px] opacity-30 mix-blend-multiply"
                        animate={{
                            scale: [1, 1.3, 1],
                            y: [0, 30, 0],
                        }}
                        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                        <div className="w-full h-full bg-[#fcdcc4]" />
                    </motion.div>
                </div>

                {/* Grid Overlay (Subtle) */}
                <div className="absolute inset-0 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] bg-repeat opacity-[0.04] pointer-events-none mix-blend-multiply"></div>

                {/* Navigation */}
                <nav className="relative z-50 flex items-center justify-between p-6 md:px-16 lg:px-24 xl:px-32 w-full">
                    <motion.a
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        href="#"
                        className="flex items-center"
                    >
                        <AnimatedLogo />
                    </motion.a>

                    {/* Desktop Menu */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden md:flex items-center gap-10 font-medium text-gray-600"
                    >
                        {[
                            { name: 'Home', href: '/' },
                            { name: 'About', href: '/#about' },
                            { name: 'Skills', href: '/#skills' },
                            { name: 'Projects', href: '/projects' },
                            { name: 'Certificates', href: '/certificates' }
                        ].map((item) => (
                            <Link key={item.name} to={item.href} className="hover:text-[#f0b383] transition-colors duration-300">
                                {item.name}
                            </Link>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hidden md:block"
                    >
                        <ContactButton onClick={() => navigate('/#contact')} />
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="md:hidden text-gray-800 p-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
                    </button>
                </nav>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 z-[60] bg-white/95 backdrop-blur-md transition-transform duration-500 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col items-center justify-center gap-8`}>
                    <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                    {[
                        { name: 'Home', href: '/' },
                        { name: 'About', href: '/#about' },
                        { name: 'Skills', href: '/#skills' },
                        { name: 'Projects', href: '/projects' },
                        { name: 'Certificates', href: '/certificates' },
                        { name: 'Contact', href: '/#contact' }
                    ].map((item) => (
                        <Link key={item.name} to={item.href} onClick={() => setMenuOpen(false)} className="text-2xl font-medium text-gray-800 hover:text-[#f0b383]">
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Hero Content */}
                <motion.div
                    style={{ opacity }}
                    className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-150px)] text-center px-4 pb-10"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tight text-[#0f172a] mb-8"
                    >
                        Rasika Rakhewar
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="text-lg md:text-2xl text-gray-600 max-w-3xl leading-relaxed font-light"
                    >
                        I&apos;m a <span className="font-medium text-[#0f172a]">Full-Stack MERN Developer</span> focused on building scalable web applications, intuitive interfaces, and AI-powered solutions that solve real-world problems.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col sm:flex-row items-center gap-6 mt-12"
                    >
                        <ResumeDownloadButton className="hover:shadow-xl transition-shadow duration-300" />

                        <SparkleButton
                            className="!bg-white !text-gray-800 border border-gray-200 hover:!border-transparent"
                            onClick={() => navigate('/projects')}
                        >
                            <span>View Projects</span>
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </SparkleButton>
                    </motion.div>
                </motion.div>

                {/* Fade to white at bottom for seamless transition */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#fffaf5] to-transparent pointer-events-none" />
            </section>
        </>
    );
}
