import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as SiIcons from 'react-icons/si';

const TechIcon = ({ iconName, color, name }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Safely get the icon component
    const Icon = SiIcons[iconName];

    // Fallback if icon is missing from the installed version
    if (!Icon) return null;

    return (
        <div
            className="group relative flex items-center justify-center shrink-0"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Glass Orb Frame */}
            <div className="absolute inset-0 rounded-full bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 group-hover:scale-110 shadow-sm" />

            {/* Glow Effect */}
            <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"
                style={{ backgroundColor: color }}
            />

            {/* The Icon */}
            <div className="relative z-10 p-5 transition-all duration-500 transform group-hover:-translate-y-1">
                <Icon
                    size={40}
                    className="transition-all duration-500"
                    style={{
                        color: isHovered ? color : '#9ca3af',
                        filter: isHovered ? `drop-shadow(0 0 8px ${color}44)` : 'none'
                    }}
                />
            </div>

            {/* Tooltip-style Name Reveal */}
            <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-xs font-bold text-[#0f172a] bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/50 shadow-lg pointer-events-none z-50 whitespace-nowrap">
                {name}
            </div>
        </div>
    );
};

const Row = ({ items, direction = "left", speed = 30 }) => {
    const doubledItems = [...items, ...items, ...items, ...items];

    return (
        <div className="flex overflow-hidden whitespace-nowrap py-10 select-none">
            <motion.div
                className="flex items-center gap-12 md:gap-16 px-6"
                animate={{
                    x: direction === "left" ? [0, -1800] : [-1800, 0]
                }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {doubledItems.map((item, index) => (
                    <TechIcon
                        key={`${item.name}-${index}`}
                        iconName={item.iconName}
                        color={item.color}
                        name={item.name}
                    />
                ))}
            </motion.div>
        </div>
    );
};

const TechMarquee = () => {
    const topIcons = [
        { iconName: "SiReact", color: "#61DAFB", name: "React" },
        { iconName: "SiJavascript", color: "#F7DF1E", name: "JavaScript" },
        { iconName: "SiTypescript", color: "#3178C6", name: "TypeScript" },
        { iconName: "SiTailwindcss", color: "#06B6D4", name: "Tailwind" },
        { iconName: "SiNextdotjs", color: "#000000", name: "Next.js" },
        { iconName: "SiRedux", color: "#764ABC", name: "Redux" },
        { iconName: "SiVite", color: "#646CFF", name: "Vite" },
        { iconName: "SiBootstrap", color: "#7952B3", name: "Bootstrap" },
        { iconName: "SiFirebase", color: "#FFCA28", name: "Firebase" },
        { iconName: "SiSupabase", color: "#3ECF8E", name: "Supabase" },
    ];

    const bottomIcons = [
        { iconName: "SiNodedotjs", color: "#339933", name: "Node.js" },
        { iconName: "SiExpress", color: "#000000", name: "Express" },
        { iconName: "SiMongodb", color: "#47A248", name: "MongoDB" },
        { iconName: "SiMongoose", color: "#880000", name: "Mongoose" },
        { iconName: "SiPython", color: "#3776AB", name: "Python" },
        { iconName: "SiGithub", color: "#181717", name: "GitHub" },
        { iconName: "SiVisualstudiocode", color: "#007ACC", name: "VS Code" },
        { iconName: "SiGit", color: "#F05032", name: "Git" },
        { iconName: "SiVercel", color: "#000000", name: "Vercel" },
        { iconName: "SiPostman", color: "#FF6C37", name: "Postman" },
    ];

    return (
        <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden bg-transparent">
            <div className="absolute inset-y-0 left-0 w-32 md:w-96 bg-gradient-to-r from-[#fffaf5] via-[#fffaf5]/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 md:w-96 bg-gradient-to-l from-[#fffaf5] via-[#fffaf5]/90 to-transparent z-10 pointer-events-none" />

            <div className="flex flex-col">
                <Row items={topIcons} direction="left" speed={35} />
                <div className="-mt-16">
                    <Row items={bottomIcons} direction="right" speed={40} />
                </div>
            </div>
        </div>
    );
};

export default TechMarquee;
