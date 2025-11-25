import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ui/ProjectCard';
import projectsData from '../data/projects.json';
import SEO from '../components/SEO';

const AllProjects = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen w-full bg-[#fffaf5] relative">
            <SEO
                title="All Projects"
                description="Explore the complete portfolio of Rasika Rakhewar's web development and AI projects."
                url="https://rasikarakhewar.vercel.app/projects"
            />
            {/* Header */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-16 lg:px-24 py-20">
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center text-gray-600 hover:text-[#0f172a] transition-colors mb-4 group"
                        >
                            <svg
                                className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                />
                            </svg>
                            Back to Home
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f172a]">
                            All <span className="text-[#f7bea7]">Projects</span>
                        </h1>
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllProjects;
