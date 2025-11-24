import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const skillsData = [
    {
        category: "Languages",
        items: ["JavaScript (ES6+)", "Python", "C", "Java"]
    },
    {
        category: "Frontend",
        items: ["React.js", "Redux", "HTML5", "CSS3", "Tailwind", "Bootstrap", "Three.js"]
    },
    {
        category: "Tools",
        items: ["VS Code", "Cloudinary", "Git", "GitHub", "Render"]
    },
    {
        category: "Concepts",
        items: ["OOP", "DSA", "REST APIs", "SDLC", "Debugging", "Agile"]
    },
    {
        category: "Soft Skills",
        items: ["Communication", "Team Collaboration", "Adaptability"]
    }
];

const Card = ({ category, items, index }) => {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setOpacity(1);
    };

    const handleBlur = () => {
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.2, 0.9, 0.2, 1]
            }}
            whileHover={{
                y: -6,
                scale: 1.01,
            }}
            className="relative overflow-hidden rounded-2xl bg-white/40 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
        >
            {/* Spotlight Effect Layer */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(240,179,131,0.4), transparent 40%)`,
                }}
            />

            {/* Inner Content Layer (to sit on top of spotlight) */}
            <div className="relative z-10 p-6 h-full flex flex-col backdrop-blur-md bg-white/40 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-[#0f172a] font-poppins">{category}</h3>
                <div className="flex flex-wrap gap-3">
                    {items.map((skill, i) => (
                        <Chip key={skill} text={skill} index={i} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Chip = ({ text, index }) => {
    return (
        <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.3,
                delay: index * 0.03,
                ease: "easeOut"
            }}
            whileHover={{
                y: -4,
                boxShadow: "0 4px 12px rgba(240, 179, 131, 0.3)",
                backgroundColor: "#0f172a",
                color: "#ffffff",
                borderColor: "#0f172a"
            }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden px-4 py-2 rounded-full text-sm font-medium text-gray-700 bg-white/60 border border-white/80 shadow-sm transition-colors duration-200 cursor-default focus:outline-none focus:ring-2 focus:ring-[#f7bea7] focus:ring-offset-2"
            aria-label={`Skill: ${text}`}
        >
            {text}
        </motion.button>
    );
};

const Skills = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section
            ref={containerRef}
            id="skills"
            className="relative w-full py-24 px-4 md:px-16 lg:px-24 xl:px-32 overflow-hidden" // Restored padding, removed negative margin
            style={{
                background: `linear-gradient(180deg, #ffffff 0%, #fffaf5 100%)`, // Starts with white to match About end
            }}
        >
            {/* Top Connector Gradient (Fade in from About) */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#ffffff] to-transparent pointer-events-none" />

            {/* Background Elements */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.div
                    className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-30 mix-blend-multiply"
                    style={{ backgroundColor: '#f7bea7' }}
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 20, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-[10%] left-[5%] w-[30%] h-[30%] rounded-full blur-[100px] opacity-20 mix-blend-multiply"
                    style={{ backgroundColor: '#fbccb9' }}
                    animate={{
                        scale: [1, 1.1, 1],
                        x: [0, 30, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-[#0f172a]">
                        Skills & <span className="text-[#f7bea7]">Tech Stack</span>
                    </h2>
                    <div className="h-2 w-32 mx-auto rounded-full bg-gradient-to-r from-transparent via-[#f7bea7] to-transparent" />
                </motion.div>

                <motion.div
                    style={{ y }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    {skillsData.map((category, index) => (
                        <Card
                            key={category.category}
                            category={category.category}
                            items={category.items}
                            index={index}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
