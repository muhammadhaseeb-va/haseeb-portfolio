'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

export default function Loader({ done }) {
  const rootRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    gsap.to(fillRef.current, { scaleX: 0.82, duration: 1.6, ease: 'power2.out' });
  }, []);

  useEffect(() => {
    if (!done) return;
    const tl = gsap.timeline();
    tl.to(fillRef.current, { scaleX: 1, duration: 0.35, ease: 'power2.out' }).to(rootRef.current, {
      autoAlpha: 0,
      duration: 0.5,
      ease: 'power2.inOut',
      delay: 0.1,
    });
  }, [done]);

  return (
    <div ref={rootRef} className="loader" role="status" aria-live="polite">
      <div className="flex flex-col items-center gap-4">
        <p className="font-display text-sm tracking-wide text-ash">Loading experience</p>
        <div className="loader-track">
          <div ref={fillRef} className="loader-fill" />
        </div>
      </div>
    </div>
  );
}
