"use client";
import React, { useRef, useCallback } from 'react';
import gsap from 'gsap';

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    maxTilt?: number;
    glowColor?: string;
}

const TiltCard: React.FC<TiltCardProps> = ({
    children,
    className = '',
    maxTilt = 8,
    glowColor = 'rgba(184,144,80,0.3)',
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const el = cardRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const rx = ((e.clientY - cy) / (rect.height / 2)) * -maxTilt;
        const ry = ((e.clientX - cx) / (rect.width / 2)) * maxTilt;

        gsap.to(el, {
            rotateX: rx,
            rotateY: ry,
            transformPerspective: 800,
            duration: 0.5,
            ease: 'power2.out',
            overwrite: true,
        });

        // Move the glow follow effect
        if (glowRef.current) {
            const px = ((e.clientX - rect.left) / rect.width) * 100;
            const py = ((e.clientY - rect.top) / rect.height) * 100;
            gsap.to(glowRef.current, {
                background: `radial-gradient(circle at ${px}% ${py}%, ${glowColor} 0%, transparent 70%)`,
                opacity: 1,
                duration: 0.3,
            });
        }
    }, [maxTilt, glowColor]);

    const onMouseLeave = useCallback(() => {
        const el = cardRef.current;
        if (!el) return;
        gsap.to(el, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.8,
            ease: 'elastic.out(1, 0.5)',
            overwrite: true,
        });
        if (glowRef.current) {
            gsap.to(glowRef.current, { opacity: 0, duration: 0.4 });
        }
    }, []);

    const onMouseEnter = useCallback(() => {
        const el = cardRef.current;
        if (!el) return;
        gsap.to(el, {
            z: 20,
            scale: 1.02,
            duration: 0.4,
            ease: 'power3.out',
        });
    }, []);

    const handleMouseLeave = useCallback(() => {
        const el = cardRef.current;
        if (!el) return;
        onMouseLeave();
        gsap.to(el, {
            z: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power3.out',
        });
    }, [onMouseLeave]);

    return (
        <div
            ref={cardRef}
            onMouseMove={onMouseMove}
            onMouseEnter={onMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative ${className}`}
            style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
        >
            {/* Light sweep glow overlay */}
            <div
                ref={glowRef}
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 z-10"
                style={{ transition: 'background 0.1s' }}
            />
            {/* Light sweep shine */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none z-10">
                <div className="sweep-shine absolute inset-0" />
            </div>
            {children}
        </div>
    );
};

export default TiltCard;
