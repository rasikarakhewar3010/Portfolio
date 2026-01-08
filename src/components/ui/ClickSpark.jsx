import React, { useRef, useEffect, useCallback } from 'react';

const ClickSpark = ({
    children,
    sparkColor = '#fff',
    sparkSize = 10,
    sparkRadius = 15,
    sparkCount = 8,
    duration = 400,
    className = "",
    svgClassName = ""
}) => {
    const canvasRef = useRef(null);
    const sparksRef = useRef([]);
    const containerRef = useRef(null);

    const createSparks = useCallback((x, y) => {
        const newSparks = Array.from({ length: sparkCount }, (_, i) => {
            const angle = (i * 2 * Math.PI) / sparkCount;
            return {
                x,
                y,
                angle,
                startTime: performance.now(),
                id: Math.random(),
            };
        });
        sparksRef.current.push(...newSparks);
    }, [sparkCount]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationId;

        const animate = (time) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            sparksRef.current = sparksRef.current.filter((spark) => {
                const elapsed = time - spark.startTime;
                if (elapsed > duration) return false;

                const progress = elapsed / duration;
                const currentRadius = sparkRadius * progress;
                const opacity = 1 - progress;

                const sparkX = spark.x + Math.cos(spark.angle) * currentRadius;
                const sparkY = spark.y + Math.sin(spark.angle) * currentRadius;

                ctx.beginPath();
                ctx.arc(sparkX, sparkY, sparkSize * (1 - progress), 0, Math.PI * 2);
                ctx.fillStyle = sparkColor;
                ctx.globalAlpha = opacity;
                ctx.fill();

                return true;
            });

            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        const handleResize = () => {
            if (containerRef.current) {
                canvas.width = containerRef.current.offsetWidth;
                canvas.height = containerRef.current.offsetHeight;
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', handleResize);
        };
    }, [duration, sparkColor, sparkRadius, sparkSize]);

    const handleClick = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        createSparks(x, y);
    };

    return (
        <div
            ref={containerRef}
            className={`relative inline-block ${className}`}
            onClick={handleClick}
        >
            <canvas
                ref={canvasRef}
                className={`absolute inset-0 pointer-events-none z-50 ${svgClassName}`}
                style={{ width: '100%', height: '100%' }}
            />
            {children}
        </div>
    );
};

export default ClickSpark;
