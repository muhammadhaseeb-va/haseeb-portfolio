'use client';

import { useEffect, useState } from 'react';
import { useExperience } from '@/store/experience';

function detectTier() {
  if (typeof window === 'undefined') return 'medium';

  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const saveData = typeof navigator !== 'undefined' && navigator.connection?.saveData;
  if (reducedMotion || saveData) return 'static';

  let hasWebGL = false;
  try {
    const canvas = document.createElement('canvas');
    hasWebGL = !!(
      canvas.getContext('webgl2') ||
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl')
    );
  } catch {
    hasWebGL = false;
  }
  if (!hasWebGL) return 'static';

  const cores = navigator.hardwareConcurrency || 4;
  const memory = navigator.deviceMemory || 4;
  const coarsePointer = window.matchMedia?.('(pointer: coarse)').matches;

  if (cores <= 4 || memory <= 2) return coarsePointer ? 'low' : 'medium';
  if (cores >= 8 && memory >= 6 && !coarsePointer) return 'high';
  return 'medium';
}

export function usePerformanceTier() {
  const setTier = useExperience((s) => s.setTier);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const tier = detectTier();
    document.documentElement.dataset.tier = tier;
    setTier(tier);
    setReady(true);
  }, [setTier]);

  return ready;
}
