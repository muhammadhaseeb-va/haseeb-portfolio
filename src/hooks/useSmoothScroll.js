'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { scrollState, useExperience } from '@/store/experience';

export function useSmoothScroll() {
  const tier = useExperience((s) => s.tier);

  useEffect(() => {
    // Static tier (no WebGL, reduced motion, or save-data) keeps native
    // scroll — Lenis is a purely cosmetic smoothing layer, never required.
    if (tier === 'static') return undefined;

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      syncTouch: false, // keep touch scroll native/responsive on mobile
    });
    scrollState.lenis = lenis;
    document.documentElement.classList.add('lenis');

    lenis.on('scroll', ScrollTrigger.update);

    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      scrollState.lenis = null;
      document.documentElement.classList.remove('lenis');
    };
  }, [tier]);
}
