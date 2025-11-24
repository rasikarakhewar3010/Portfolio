import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ui/ProjectCard';
import AnimatedButton from '../components/ui/AnimatedButton';
import projectsData from '../data/projects.json';

const Projects = () => {
    // Display only the top 3 projects
    const displayedProjects = projectsData.slice(0, 3);

    return (
        <section
            id="projects"
            className="relative w-full py-24 px-4 md:px-16 lg:px-24 xl:px-32 overflow-hidden"
            style={{ background: `linear-gradient(180deg, #fffaf5 0%, #fff5eb 100%)` }}
        >
            {/* Top Gradient Connector for Seamless Blend from Skills */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#fffaf5] to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Title - Matching About Section Exactly */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-[#0f172a]">
                        Projects & <span className="text-[#f7bea7]">Case Studies</span>
                    </h2>
                    <div className="h-2 w-48 mx-auto rounded-full bg-gradient-to-r from-transparent via-[#f7bea7] to-transparent" />
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
                    {displayedProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* View More Button - Refined Animation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center"
                >
                    <Link to="/projects">
                        <AnimatedButton text="View All Projects" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
