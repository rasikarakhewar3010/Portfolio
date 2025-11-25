import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import certificatesData from '../data/certificates.json';
import SEO from '../components/SEO';

const CertificateCard = ({ certificate, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
            }}
            className="h-full"
        >
            <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                <div className="group relative flex flex-col h-full rounded-3xl overflow-hidden bg-white/60 backdrop-blur-xl border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

                    {/* Image Container */}
                    <div className="relative h-56 md:h-64 overflow-hidden">
                        <img
                            src={certificate.thumbnail}
                            alt={certificate.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#fffaf5] via-transparent to-transparent opacity-90" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-6 flex-grow flex flex-col justify-between -mt-12">
                        <div>
                            <h3 className="text-xl font-bold text-[#0f172a] mb-2 group-hover:text-[#f7bea7] transition-colors">
                                {certificate.title}
                            </h3>
                        </div>
                        <div className="mt-4 flex items-center text-sm font-medium text-[#f7bea7] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            View Certificate <span className="ml-2">→</span>
                        </div>
                    </div>
                </div>
            </a>
        </motion.div>
    );
};

const AllCertificates = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen w-full bg-[#fffaf5] relative overflow-hidden">
            <SEO
                title="Certifications"
                description="Professional certifications and achievements of Rasika Rakhewar."
                url="https://rasikarakhewar.vercel.app/certificates"
            />
            {/* Background Elements */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.div
                    className="absolute top-[10%] left-[10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-30 mix-blend-multiply"
                    style={{ backgroundColor: '#f7bea7' }}
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 20, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-[20%] right-[5%] w-[30%] h-[30%] rounded-full blur-[100px] opacity-20 mix-blend-multiply"
                    style={{ backgroundColor: '#fbccb9' }}
                    animate={{
                        scale: [1, 1.1, 1],
                        x: [0, 30, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-16 lg:px-24 py-20">
                {/* Header */}
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
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Home
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f172a]">
                            All <span className="text-[#f7bea7]">Certifications</span>
                        </h1>
                    </motion.div>
                </div>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificatesData.map((certificate, index) => (
                        <CertificateCard key={certificate.title} certificate={certificate} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllCertificates;
