import { useEffect, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxOptions {
    speed?: number; // multiplier: 0.3 = slow, 0.6 = medium, 1 = fast
    direction?: 'y' | 'x';
    start?: string;
    end?: string;
}

export function useParallax(
    ref: RefObject<HTMLElement | null>,
    options: ParallaxOptions = {}
) {
    const {
        speed = 0.4,
        direction = 'y',
        start = 'top bottom',
        end = 'bottom top',
    } = options;

    useEffect(() => {
        if (!ref.current) return;

        const mm = gsap.matchMedia();

        mm.add('(min-width: 768px)', () => {
            const ctx = gsap.context(() => {
                const distance = 100 * speed;
                const fromProps = direction === 'y' ? { y: -distance } : { x: -distance };
                const toProps = direction === 'y' ? { y: distance } : { x: distance };

                gsap.fromTo(ref.current!, fromProps, {
                    ...toProps,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: ref.current,
                        start,
                        end,
                        scrub: true,
                    },
                });
            }, ref);

            return () => ctx.revert();
        });

        return () => mm.revert();
    }, []);
}
