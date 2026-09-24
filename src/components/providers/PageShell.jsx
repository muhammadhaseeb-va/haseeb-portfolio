'use client';

import { useRef } from 'react';
import { useScrollStage } from '@/hooks/useScrollStage';

export default function PageShell({ children }) {
  const ref = useRef(null);
  useScrollStage(ref);

  return (
    <main ref={ref} className="content-layer relative">
      {children}
    </main>
  );
}
