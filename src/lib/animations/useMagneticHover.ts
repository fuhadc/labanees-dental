import { useEffect, RefObject } from 'react';
import gsap from 'gsap';

interface MagneticOptions {
    strength?: number; // 0.3 = subtle, 1 = strong
    ease?: string;
    duration?: number;
}

export function useMagneticHover(
    ref: RefObject<HTMLElement | null>,
    options: MagneticOptions = {}
) {
    const { strength = 0.35, ease = 'power3.out', duration = 0.4 } = options;

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        let bounds: DOMRect;

        const onMouseEnter = () => {
            bounds = el.getBoundingClientRect();
        };

        const onMouseMove = (e: MouseEvent) => {
            if (!bounds) return;
            const cx = bounds.left + bounds.width / 2;
            const cy = bounds.top + bounds.height / 2;
            const dx = (e.clientX - cx) * strength;
            const dy = (e.clientY - cy) * strength;

            gsap.to(el, {
                x: dx,
                y: dy,
                duration,
                ease,
                overwrite: true,
            });
        };

        const onMouseLeave = () => {
            gsap.to(el, {
                x: 0,
                y: 0,
                duration: duration * 1.5,
                ease: 'elastic.out(1, 0.5)',
                overwrite: true,
            });
        };

        el.addEventListener('mouseenter', onMouseEnter);
        el.addEventListener('mousemove', onMouseMove);
        el.addEventListener('mouseleave', onMouseLeave);

        return () => {
            el.removeEventListener('mouseenter', onMouseEnter);
            el.removeEventListener('mousemove', onMouseMove);
            el.removeEventListener('mouseleave', onMouseLeave);
            gsap.killTweensOf(el);
        };
    }, []);
}
