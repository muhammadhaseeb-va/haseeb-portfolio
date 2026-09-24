'use client';

import { useEffect } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

export function useHeadlineReveal(ref, { delay = 0 } = {}) {
  useEffect(() => {
    if (!ref.current) return undefined;

    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray('.line-mask > span', ref.current);
      const reveals = gsap.utils.toArray('.reveal', ref.current);

      // Elements start fully visible in markup (so no-JS visitors read
      // everything); we hide them only once GSAP is actually running.
      gsap.set(lines, { yPercent: 110 });
      gsap.set(reveals, { autoAlpha: 0, y: 18 });

      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top 78%',
        once: true,
        onEnter: () => {
          const tl = gsap.timeline({ delay });
          tl.to(lines, {
            yPercent: 0,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.08,
          }).to(
            reveals,
            { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.08 },
            '-=0.5'
          );
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [ref, delay]);
}
