'use client';

import { useEffect, useState } from 'react';
import { usePerformanceTier } from '@/hooks/usePerformanceTier';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { useExperience } from '@/store/experience';
import Loader from '@/components/ui/Loader';

export default function ExperienceProvider({ children }) {
  const tierReady = usePerformanceTier();
  useSmoothScroll();

  const loaded = useExperience((s) => s.loaded);
  const setLoaded = useExperience((s) => s.setLoaded);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (!tierReady) return undefined;
    // Small delay so the loader never just flashes on a fast connection.
    const timeout = setTimeout(() => setLoaded(true), 400);
    return () => clearTimeout(timeout);
  }, [tierReady, setLoaded]);

  useEffect(() => {
    if (!loaded) return undefined;
    const timeout = setTimeout(() => setShowLoader(false), 650);
    return () => clearTimeout(timeout);
  }, [loaded]);

  return (
    <>
      {showLoader && <Loader done={loaded} />}
      {children}
      <div className="film-grain" aria-hidden="true" />
    </>
  );
}
