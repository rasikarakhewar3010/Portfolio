import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

    return (
        <section
            ref={containerRef}
            id="about"
            className="relative w-full py-16 md:py-24 overflow-hidden"
            style={{
                background: `linear-gradient(180deg, #fffaf5 0%, #ffffff 100%)`
            }}
        >
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#f7bea7]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#0f172a]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
                <motion.div
                    style={{ opacity, y }}
                    className="backdrop-blur-xl bg-white/60 border border-white/80 rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                >
                    <div className="flex flex-col md:flex-row gap-10 items-center">

                        {/* Left: Title & Visual */}
                        <div className="md:w-1/3 text-center md:text-left">
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-5xl md:text-6xl font-extrabold text-[#0f172a] mb-4 tracking-tight"
                            >
                                About <span className="text-[#f7bea7]">Me</span>
                            </motion.h2>
                            <div className="h-2 w-24 bg-[#f7bea7] rounded-full mb-6 mx-auto md:mx-0" />
                            <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">
                                Developer • Designer • Mentor
                            </p>
                        </div>

                        {/* Right: Content */}
                        <div className="md:w-2/3 space-y-6 text-lg text-gray-700 leading-relaxed font-light">
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                I am <span className="font-semibold text-[#0f172a]">Rasika Rakhewar</span>, a Full-Stack Developer blending technical precision with creative design. I build scalable, user-centric applications that solve real-world problems, bridging the gap between <span className="font-medium text-[#f7bea7]">complex algorithms</span> and <span className="font-medium text-[#f7bea7]">intuitive interfaces</span>.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                Beyond code, I am a community leader. As head of the <span className="font-semibold text-[#0f172a]">IEI Student Chapter</span>, I&apos;ve mentored 100+ students, driven by the belief that technology empowers. Currently, I am advancing my expertise in AI and Web Development through <span className="italic text-gray-900">Intel Unnati</span> and <span className="italic text-gray-900">BITS Pilani</span>.
                            </motion.p>

                            <div className="pt-4">
                                <a href="#contact" className="inline-flex items-center text-[#0f172a] font-medium hover:text-[#f7bea7] transition-colors group">
                                    Let&apos;s Connect
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Seamless Connector Gradient at Bottom */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#ffffff] to-transparent pointer-events-none" />
        </section>
    );
};

export default About;
