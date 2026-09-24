'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from './Scene';
import { scrollState, useExperience } from '@/store/experience';

export default function SceneCanvas() {
  const tier = useExperience((s) => s.tier);

  if (tier === 'static') return null;

  const dpr = tier === 'high' ? [1, 2] : tier === 'medium' ? [1, 1.5] : [1, 1];

  const handlePointerMove = (event) => {
    scrollState.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    scrollState.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  return (
    <div className="canvas-layer" aria-hidden="true">
      <Canvas
        dpr={dpr}
        gl={{
          antialias: tier !== 'low',
          powerPreference: 'high-performance',
          alpha: false,
        }}
        camera={{ fov: 45, near: 0.1, far: 60, position: [0, 0.4, 6] }}
        onPointerMove={handlePointerMove}
      >
        <color attach="background" args={['#050818']} />
        <fog attach="fog" args={['#050818', 8, 22]} />
        <Suspense fallback={null}>
          <Scene tier={tier} />
        </Suspense>
      </Canvas>
    </div>
  );
}
