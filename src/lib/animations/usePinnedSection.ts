import { useEffect, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PinnedSectionOptions {
    pinDuration?: string; // e.g. '+=120vh'
    scrub?: boolean | number;
    onUpdate?: (self: ScrollTrigger) => void;
    animationSetup?: (tl: gsap.core.Timeline) => void;
}

export function usePinnedSection(
    ref: RefObject<HTMLElement | null>,
    options: PinnedSectionOptions = {}
) {
    const {
        pinDuration = '+=120%',
        scrub = 1.2,
        animationSetup,
    } = options;

    useEffect(() => {
        if (!ref.current) return;

        const mm = gsap.matchMedia();

        // Desktop only – no pin on mobile
        mm.add('(min-width: 768px)', () => {
            const ctx = gsap.context(() => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ref.current,
                        start: 'top top',
                        end: pinDuration,
                        pin: true,
                        scrub,
                        anticipatePin: 1,
                    },
                });

                if (animationSetup) {
                    animationSetup(tl);
                }
            }, ref);

            return () => ctx.revert();
        });

        return () => mm.revert();
    }, []);
}
