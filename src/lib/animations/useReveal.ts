import { useEffect, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface RevealOptions {
    y?: number;
    x?: number;
    opacity?: number;
    duration?: number;
    delay?: number;
    stagger?: number;
    ease?: string;
    start?: string;
    selector?: string;
}

export function useReveal(
    ref: RefObject<HTMLElement | null>,
    options: RevealOptions = {}
) {
    const {
        y = 60,
        x = 0,
        opacity = 0,
        duration = 0.9,
        delay = 0,
        stagger = 0,
        ease = 'power4.out',
        start = 'top 82%',
        selector,
    } = options;

    useEffect(() => {
        if (!ref.current) return;

        const ctx = gsap.context(() => {
            const targets = selector
                ? gsap.utils.toArray<HTMLElement>(selector, ref.current!)
                : ref.current!;

            gsap.fromTo(
                targets,
                { y, x, opacity, willChange: 'transform, opacity' },
                {
                    y: 0,
                    x: 0,
                    opacity: 1,
                    duration,
                    delay,
                    stagger,
                    ease,
                    clearProps: 'willChange',
                    scrollTrigger: {
                        trigger: ref.current,
                        start,
                        once: true,
                    },
                }
            );
        }, ref);

        return () => ctx.revert();
    }, []);
}
