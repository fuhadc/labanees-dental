import { useEffect, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CounterOptions {
    target: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    ease?: string;
    decimals?: number;
}

export function useSmoothCounter(
    ref: RefObject<HTMLElement | null>,
    options: CounterOptions
) {
    const {
        target,
        duration = 2.5,
        suffix = '',
        prefix = '',
        ease = 'power2.out',
        decimals = 0,
    } = options;

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const obj = { val: 0 };

        const ctx = gsap.context(() => {
            gsap.to(obj, {
                val: target,
                duration,
                ease,
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    once: true,
                },
                onUpdate: () => {
                    el.textContent = `${prefix}${obj.val.toFixed(decimals)}${suffix}`;
                },
            });
        });

        return () => ctx.revert();
    }, [target, duration, suffix, prefix, ease, decimals]);
}
