import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeOut',
            }}
            className="h-full"
        >
            <div className="group relative flex flex-col h-full rounded-3xl overflow-hidden bg-white/60 backdrop-blur-xl border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-56 md:h-64 overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#fffaf5] via-transparent to-transparent opacity-90" />
                    {/* Floating Tags */}
                    <div className="absolute top-5 right-5 flex gap-2 z-10">
                        {project.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0f172a] bg-white/90 backdrop-blur-md border border-white/40 rounded-full shadow-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                {/* Content */}
                <div className="flex flex-col flex-grow p-8 z-10 -mt-6">
                    <h3 className="text-2xl font-bold text-[#0f172a] mb-3 font-poppins group-hover:text-[#f7bea7] transition-colors duration-300">
                        {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-8 line-clamp-2 leading-relaxed font-medium">
                        {project.description}
                    </p>
                    {/* CTAs */}
                    <div className="flex items-center gap-4 mt-auto">
                        <a
                            href={project.liveLink}
                            className="relative inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white transition-all duration-300 bg-[#0f172a] rounded-full hover:bg-[#f7bea7] hover:shadow-lg overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Live Demo
                                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </a>
                        <a
                            href={project.githubLink}
                            className="inline-flex items-center text-sm font-bold text-[#0f172a] hover:text-[#f7bea7] transition-colors px-4 py-2 rounded-full hover:bg-white/50"
                        >
                            GitHub
                            <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
