import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
    const ref = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    // Physics configuration
    const springValues = {
        damping: 30,
        stiffness: 100,
        mass: 2
    };

    // Motion values for tilt effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useMotionValue(0), springValues);
    const rotateY = useSpring(useMotionValue(0), springValues);
    const scale = useSpring(1, springValues);
    const opacity = useSpring(0);
    const rotateFigcaption = useSpring(0, {
        stiffness: 350,
        damping: 30,
        mass: 1
    });

    const [lastY, setLastY] = useState(0);

    // Mobile check
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Mouse handlers
    const handleMouse = (e) => {
        if (!ref.current || isMobile) return;

        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        const rotateAmplitude = 14;
        const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
        const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

        rotateX.set(rotationX);
        rotateY.set(rotationY);

        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);

        const velocityY = offsetY - lastY;
        rotateFigcaption.set(-velocityY * 0.6);
        setLastY(offsetY);
    };

    const handleMouseEnter = () => {
        if (isMobile) return;
        scale.set(1.1);
        opacity.set(1);
    };

    const handleMouseLeave = () => {
        if (isMobile) return;
        opacity.set(0);
        scale.set(1);
        rotateX.set(0);
        rotateY.set(0);
        rotateFigcaption.set(0);
    };

    return (
        <figure
            ref={ref}
            className="relative h-full w-full z-10" // Removed cursor-none for visible cursor
            onMouseMove={handleMouse}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: "1000px" // Force perspective
            }}
        >
            <motion.div
                className="h-full"
                style={{
                    rotateX: isMobile ? 0 : rotateX,
                    rotateY: isMobile ? 0 : rotateY,
                    scale: isMobile ? 1 : scale,
                    transformStyle: "preserve-3d" // Force 3D context
                }}
            >
                {/* Card Content Wrapper */}
                <div className="group relative flex flex-col h-full rounded-3xl bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-200">

                    {/* Image Container */}
                    <div className="relative h-52 md:h-60 overflow-hidden rounded-t-3xl">
                        {/* Removed transform-style-3d from here to simplify nesting */}
                        <div className="w-full h-full">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#fffaf5] via-transparent to-transparent opacity-60" />

                        {/* Floating Tags */}
                        <div
                            className="absolute top-4 right-4 flex gap-2 z-20"
                            style={{ transform: "translateZ(30px)" }} // Add Z-depth
                        >
                            {project.tags.slice(0, 2).map((tag) => (
                                <span key={tag} className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0f172a] bg-white/90 backdrop-blur-md border border-white/40 rounded-full shadow-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-grow p-6 z-10 -mt-4 bg-white/40 backdrop-blur-sm rounded-b-3xl">
                        <h3 className="text-xl font-bold text-[#0f172a] mb-2 font-poppins group-hover:text-[#f7bea7] transition-colors duration-300">
                            {project.title}
                        </h3>

                        <p className="text-gray-700 text-sm mb-6 line-clamp-3 leading-relaxed font-medium">
                            {project.description}
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap items-center gap-3 mt-auto">
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs md:text-sm font-bold text-white transition-all duration-300 bg-[#0f172a] rounded-full hover:bg-[#f7bea7] hover:text-[#0f172a] hover:shadow-lg hover:shadow-[#f7bea7]/30 overflow-hidden group/btn"
                            >
                                <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                                    Live Demo
                                    <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </a>
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-xs md:text-sm font-bold text-[#0f172a] hover:text-[#f7bea7] transition-colors px-3 py-2 rounded-full hover:bg-white/50 group/github"
                            >
                                <span className="whitespace-nowrap">GitHub</span>
                                <svg className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover/github:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Floating Cursor Caption (Tooltip) */}
            {!isMobile && (
                <motion.figcaption
                    className="pointer-events-none absolute left-0 top-0 rounded-xl bg-white/90 backdrop-blur-md px-4 py-3 text-sm font-bold text-[#0f172a] opacity-0 z-[100] whitespace-nowrap flex flex-col items-center gap-1 border border-white/50 shadow-2xl"
                    style={{
                        x,
                        y,
                        opacity,
                        rotate: rotateFigcaption,
                    }}
                >
                    <span className="uppercase tracking-wider text-[10px] text-gray-500">View Project</span>
                    <span className="text-base">{project.title}</span>
                </motion.figcaption>
            )}
        </figure>
    );
};

export default ProjectCard;
