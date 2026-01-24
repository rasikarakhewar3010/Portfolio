import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [progress, setProgress] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Mouse tracking for interactive effects
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: (e.clientY / window.innerHeight) * 2 - 1,
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const hasShown = sessionStorage.getItem('preloaderShown');

        if (hasShown) {
            setIsVisible(false);
            onComplete();
            return;
        }

        // Smooth progress animation
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + 2;
            });
        }, 20);

        const timer = setTimeout(() => {
            setIsVisible(false);
            sessionStorage.setItem('preloaderShown', 'true');
            setTimeout(() => onComplete(), 600);
        }, 2000);

        return () => {
            clearTimeout(timer);
            clearInterval(progressInterval);
        };
    }, [onComplete]);

    if (!isVisible && sessionStorage.getItem('preloaderShown')) {
        return null;
    }

    return (
        <AnimatePresence mode="wait">
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 1.1,
                        filter: 'blur(20px)',
                        y: -50,
                    }}
                    transition={{
                        duration: 1.2,
                        ease: [0.76, 0, 0.24, 1], // Custom bezier for premium feel
                        staggerChildren: 0.1
                    }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
                    style={{
                        background: 'radial-gradient(ellipse at center, #fff5eb 0%, #fffaf5 50%, #fef8f3 100%)',
                    }}
                >
                    {/* Mesh Gradient Background */}
                    <div className="absolute inset-0 opacity-40">
                        <motion.div
                            className="absolute top-0 left-0 w-full h-full"
                            style={{
                                background: `
                  radial-gradient(at ${50 + mousePosition.x * 10}% ${50 + mousePosition.y * 10}%, #f7bea7 0%, transparent 50%),
                  radial-gradient(at ${30 + mousePosition.x * -5}% ${70 + mousePosition.y * -5}%, #fcd6c7 0%, transparent 50%),
                  radial-gradient(at ${70 + mousePosition.x * 8}% ${30 + mousePosition.y * 8}%, #fbccb9 0%, transparent 50%)
                `,
                            }}
                            animate={{
                                opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />
                    </div>

                    {/* Animated Grid Pattern */}
                    <motion.div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `
                linear-gradient(#0f172a 1px, transparent 1px),
                linear-gradient(90deg, #0f172a 1px, transparent 1px)
              `,
                            backgroundSize: '50px 50px',
                        }}
                        animate={{
                            backgroundPosition: ['0px 0px', '50px 50px'],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    />

                    {/* Floating Geometric Shapes */}
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full"
                            style={{
                                width: `${20 + i * 8}px`,
                                height: `${20 + i * 8}px`,
                                background: `linear-gradient(135deg, ${i % 3 === 0 ? '#f7bea7' : i % 3 === 1 ? '#fcd6c7' : '#fbccb9'
                                    }40, transparent)`,
                                left: `${10 + (i * 7) % 80}%`,
                                top: `${15 + (i * 11) % 70}%`,
                                filter: 'blur(2px)',
                            }}
                            animate={{
                                y: [0, -30 - i * 5, 0],
                                x: [0, (i % 2 === 0 ? 20 : -20), 0],
                                rotate: [0, 180, 360],
                                scale: [1, 1.2, 1],
                                opacity: [0.2, 0.5, 0.2],
                            }}
                            transition={{
                                duration: 8 + i * 0.5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: i * 0.2,
                            }}
                        />
                    ))}

                    {/* Main Content Container */}
                    <div className="relative z-10 flex flex-col items-center">
                        {/* GIF Container with Advanced Effects */}
                        <motion.div
                            initial={{
                                scale: 0.3,
                                opacity: 0,
                                rotateY: -180,
                                filter: 'blur(20px)'
                            }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                                rotateY: 0,
                                filter: 'blur(0px)'
                            }}
                            exit={{
                                scale: 1.2,
                                opacity: 0,
                                rotateY: 180,
                                filter: 'blur(20px)'
                            }}
                            transition={{
                                duration: 1.4,
                                ease: [0.34, 1.56, 0.64, 1],
                            }}
                            className="relative mb-12"
                        >
                            {/* Multi-layered Glow Effects */}
                            <motion.div
                                className="absolute inset-0 rounded-full blur-[80px]"
                                style={{
                                    background: 'radial-gradient(circle, #f7bea7 0%, #fcd6c7 50%, transparent 70%)'
                                }}
                                animate={{
                                    opacity: [0.4, 0.8, 0.4],
                                    scale: [0.8, 1.3, 0.8],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            />

                            <motion.div
                                className="absolute inset-0 rounded-full blur-[40px]"
                                style={{
                                    background: 'radial-gradient(circle, #fbccb9 0%, transparent 60%)'
                                }}
                                animate={{
                                    opacity: [0.3, 0.6, 0.3],
                                    scale: [1.1, 0.9, 1.1],
                                    rotate: [0, 180, 360],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            />

                            {/* Rotating Ring */}
                            <motion.div
                                className="absolute inset-[-20px] rounded-full border-2 border-[#f7bea7]/20"
                                animate={{
                                    rotate: [0, 360],
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{
                                    rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
                                    scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                                }}
                            />

                            {/* GIF with Dynamic Shadow */}
                            <motion.img
                                src="/Tulip-Animation-For-rasika.gif"
                                alt="Loading..."
                                className="relative w-96 h-96 object-contain"
                                style={{
                                    filter: `drop-shadow(0 0 ${30 + progress * 0.2}px rgba(247, 190, 167, ${0.3 + progress * 0.003}))`,
                                }}
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            />

                            {/* Orbiting Particles */}
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-[#f7bea7] to-[#fcd6c7]"
                                    style={{
                                        top: '50%',
                                        left: '50%',
                                    }}
                                    animate={{
                                        x: Math.cos((i / 8) * Math.PI * 2) * 200,
                                        y: Math.sin((i / 8) * Math.PI * 2) * 200,
                                        scale: [0, 1, 0],
                                        opacity: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: i * 0.15,
                                        ease: 'easeInOut',
                                    }}
                                />
                            ))}
                        </motion.div>

                        {/* Text Content with Stagger */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 1 }}
                            className="flex flex-col items-center gap-5"
                        >
                            {/* Main Title with Gradient */}
                            <motion.h2
                                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0f172a] via-[#f7bea7] to-[#0f172a] bg-clip-text text-transparent tracking-tight"
                                style={{
                                    backgroundSize: '200% 100%',
                                }}
                                animate={{
                                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                            >
                                Rasika Rakhewar
                            </motion.h2>

                            {/* Animated Subtitle */}
                            <motion.p
                                className="text-sm font-medium text-gray-600 tracking-[0.3em] uppercase"
                                animate={{
                                    opacity: [0.5, 1, 0.5],
                                    letterSpacing: ['0.2em', '0.4em', '0.2em'],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            >
                                Full-Stack Developer
                            </motion.p>

                            {/* Premium Progress Bar */}
                            <div className="relative w-80 h-2 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full overflow-hidden backdrop-blur-sm border border-white/20 shadow-2xl mt-2">
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-[#f7bea7] via-[#fcd6c7] to-[#f7bea7]"
                                    style={{
                                        width: `${progress}%`,
                                        backgroundSize: '200% 100%',
                                    }}
                                    animate={{
                                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: 'linear',
                                    }}
                                />

                                {/* Shimmer Effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                                    style={{ width: '30%' }}
                                    animate={{
                                        x: ['-100%', '400%'],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                />
                            </div>

                            {/* Percentage with Animation - FIXED SPACING */}
                            <motion.div
                                className="flex items-center justify-center gap-3 mt-4 min-h-[40px]"
                                key={Math.floor(progress)}
                            >
                                <motion.p
                                    className="text-2xl font-bold text-[#f7bea7] tabular-nums"
                                    initial={{ scale: 1.2, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {Math.floor(progress)}%
                                </motion.p>

                                {/* Spinning Loader */}
                                <motion.div
                                    className="w-5 h-5 border-2 border-[#f7bea7] border-t-transparent rounded-full"
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        ease: 'linear',
                                    }}
                                />
                            </motion.div>
                        </motion.div>
                    </div>



                    {/* Corner Accents */}
                    {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((corner) => (
                        <motion.div
                            key={corner}
                            className={`absolute ${corner === 'top-left' ? 'top-8 left-8' :
                                corner === 'top-right' ? 'top-8 right-8' :
                                    corner === 'bottom-left' ? 'bottom-8 left-8' :
                                        'bottom-8 right-8'
                                }`}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 0.3, scale: 1 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            <motion.div
                                className="w-12 h-12 border-2 border-[#f7bea7]/30"
                                style={{
                                    borderTopWidth: corner.includes('top') ? '2px' : '0',
                                    borderBottomWidth: corner.includes('bottom') ? '2px' : '0',
                                    borderLeftWidth: corner.includes('left') ? '2px' : '0',
                                    borderRightWidth: corner.includes('right') ? '2px' : '0',
                                }}
                                animate={{
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
