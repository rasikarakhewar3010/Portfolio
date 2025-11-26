import * as React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// A single icon component with premium motion logic
const Icon = ({
    mouseX,
    mouseY,
    iconData,
    index,
}) => {
    const ref = React.useRef(null);

    // Motion values for the icon's position
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring physics for smooth magnetic effect
    const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    // Random floating parameters for organic feel
    const randomDuration = React.useMemo(() => 10 + Math.random() * 10, []);
    const randomDelay = React.useMemo(() => Math.random() * 5, []);
    const randomX = React.useMemo(() => (Math.random() - 0.5) * 40, []);
    const randomY = React.useMemo(() => (Math.random() - 0.5) * 40, []);

    React.useEffect(() => {
        const handleMouseMove = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const iconCenterX = rect.left + rect.width / 2;
                const iconCenterY = rect.top + rect.height / 2;

                const distance = Math.sqrt(
                    Math.pow(mouseX.current - iconCenterX, 2) +
                    Math.pow(mouseY.current - iconCenterY, 2)
                );

                // Magnetic effect range
                const triggerRange = 300;

                if (distance < triggerRange) {
                    const force = (triggerRange - distance) / triggerRange;
                    const moveX = (mouseX.current - iconCenterX) * force * 0.8; // Magnetic pull
                    const moveY = (mouseY.current - iconCenterY) * force * 0.8;

                    x.set(moveX);
                    y.set(moveY);
                } else {
                    x.set(0);
                    y.set(0);
                }
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [x, y, mouseX, mouseY]);

    return (
        <motion.div
            ref={ref}
            key={iconData.id}
            style={{
                x: springX,
                y: springY,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                delay: index * 0.05,
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
            className={cn('absolute z-10', iconData.className)}
        >
            {/* Continuous Organic Floating */}
            <motion.div
                animate={{
                    y: [0, randomY, 0],
                    x: [0, randomX, 0],
                    rotate: [0, 5, -5, 0],
                }}
                transition={{
                    duration: randomDuration,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                    delay: randomDelay,
                }}
            >
                {/* Glassmorphic Card with Hover Glow */}
                <motion.div
                    className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 p-4 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] group cursor-pointer overflow-hidden"
                    whileHover={{
                        scale: 1.2,
                        rotate: [0, -5, 5, 0],
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    {/* Inner Glow Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Icon */}
                    <iconData.icon className="w-8 h-8 md:w-10 md:h-10 text-slate-700 group-hover:text-[#f7bea7] transition-colors duration-300 relative z-10 drop-shadow-sm" />

                    {/* Shine Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-0" />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

const FloatingIconsHero = React.forwardRef(({ className, title, subtitle, ctaText, ctaHref, icons, children, ...props }, ref) => {
    // Refs to track the raw mouse position
    const mouseX = React.useRef(0);
    const mouseY = React.useRef(0);

    const handleMouseMove = (event) => {
        mouseX.current = event.clientX;
        mouseY.current = event.clientY;
    };

    return (
        <section
            ref={ref}
            onMouseMove={handleMouseMove}
            className={cn(
                'relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-[#fffaf5]',
                className
            )}
            {...props}
        >
            {/* Container for the background floating icons */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                {icons.map((iconData, index) => (
                    <Icon
                        key={iconData.id}
                        mouseX={mouseX}
                        mouseY={mouseY}
                        iconData={iconData}
                        index={index}
                    />
                ))}
            </div>

            {/* Container for the foreground content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
                {children ? (
                    children
                ) : (
                    <div className="text-center">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text">
                            {title}
                        </h1>
                        <p className="mt-6 max-w-xl mx-auto text-lg text-muted-foreground">
                            {subtitle}
                        </p>
                        <div className="mt-10">
                            <Button asChild size="lg" className="px-8 py-6 text-base font-semibold">
                                <a href={ctaHref}>{ctaText}</a>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
});

FloatingIconsHero.displayName = 'FloatingIconsHero';

export { FloatingIconsHero };
