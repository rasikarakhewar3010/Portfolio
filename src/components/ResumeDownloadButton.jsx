import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Loader2, CheckCircle } from "lucide-react";

const ResumeDownloadButton = ({ className }) => {
    const [downloadStatus, setDownloadStatus] = useState("idle");
    const [progress, setProgress] = useState(0);

    const downloadResume = () => {
        setDownloadStatus("downloading");
        setProgress(0);

        // Simulate download progress
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(interval);
                    setDownloadStatus("downloaded");
                    return 100;
                }
                return prevProgress + 5;
            });
        }, 200);

        // Trigger actual file download ONCE after progress completes
        setTimeout(() => {
            const link = document.createElement('a');
            link.href = '/Rasika_Rakhewar_Resume.pdf';
            link.download = 'Rasika_Rakhewar_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }, 4100); // Trigger download after progress animation

        // Show 'Downloaded' state for 1.5 seconds
        setTimeout(() => {
            setDownloadStatus("complete");
        }, 4000 + 1500);

        // Reset to idle state
        setTimeout(() => {
            setDownloadStatus("idle");
            setProgress(0);
        }, 4000 + 1500 + 100);
    };

    const handleClick = () => {
        if (downloadStatus === "idle") {
            downloadResume();
        }
    };

    return (
        <motion.button
            whileHover="hover"
            whileTap="tap"
            onClick={handleClick}
            disabled={downloadStatus !== "idle"}
            className={`relative group overflow-hidden rounded-full bg-[#0f172a] px-8 py-4 font-medium text-white shadow-lg transition-all duration-300 ${downloadStatus === "downloading" && "pointer-events-none"
                } ${className}`}
        >
            {/* Background Gradient Transition */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#f7bea7] to-[#fbccb9] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />

            {/* Progress Bar */}
            {downloadStatus === "downloading" && (
                <motion.div
                    className="absolute bottom-0 left-0 h-full bg-gradient-to-r from-[#f7bea7] to-[#fbccb9]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                />
            )}

            {/* Content */}
            <span className="relative z-10 flex items-center gap-2 group-hover:text-[#0f172a] transition-colors duration-300">
                {downloadStatus === "idle" && (
                    <>
                        <Download className="h-5 w-5" />
                        Download Resume
                    </>
                )}
                {downloadStatus === "downloading" && (
                    <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        {progress}%
                    </>
                )}
                {downloadStatus === "downloaded" && (
                    <>
                        <CheckCircle className="h-5 w-5" />
                        Downloaded
                    </>
                )}
                {downloadStatus === "complete" && (
                    <>
                        <Download className="h-5 w-5" />
                        Download Resume
                    </>
                )}
            </span>

            {/* Sparkles - Same as SparkleButton */}
            {[...Array(5)].map((_, i) => (
                <Sparkle key={i} index={i} />
            ))}
        </motion.button>
    );
};

const Sparkle = () => {
    const variants = {
        hover: {
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: [0, (Math.random() - 0.5) * 50],
            y: [0, (Math.random() - 0.5) * 50],
            transition: {
                duration: 0.6,
                repeat: Infinity,
                repeatDelay: Math.random() * 0.5,
                delay: Math.random() * 0.2,
            }
        },
        tap: {
            scale: 0
        }
    };

    return (
        <motion.div
            variants={variants}
            className="absolute w-3 h-3 pointer-events-none z-20"
            style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
            }}
        >
            <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-full h-full text-white group-hover:text-[#0f172a]"
            >
                <path
                    d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
                    fill="currentColor"
                />
            </svg>
        </motion.div>
    );
};

export default ResumeDownloadButton;
