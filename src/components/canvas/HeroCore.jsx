'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';
import { scrollState } from '@/store/experience';

export default function HeroCore({ tier }) {
  const group = useRef(null);
  const ring1 = useRef(null);
  const ring2 = useRef(null);
  const color = useMemo(() => new THREE.Color('#3b6cff'), []);
  const scaleVec = useRef(new THREE.Vector3(1, 1, 1));

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.15;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;

    // Recede once we've scrolled well past the hero so it doesn't crowd
    // later sections, but never fully vanish — it's the throughline object.
    const fade = THREE.MathUtils.clamp(1 - scrollState.stage / 2.2, 0.35, 1);
    scaleVec.current.setScalar(fade);
    group.current.scale.lerp(scaleVec.current, 1 - 0.01 ** delta);

    if (ring1.current) ring1.current.rotation.z += delta * 0.08;
    if (ring2.current) ring2.current.rotation.z -= delta * 0.05;
  });

  return (
    <group ref={group} position={[0, 0.1, 0]}>
      <Icosahedron args={[1, tier === 'low' ? 0 : 2]}>
        {tier === 'high' ? (
          <MeshDistortMaterial
            color={color}
            emissive="#0a1560"
            roughness={0.15}
            metalness={0.6}
            distort={0.32}
            speed={1.6}
          />
        ) : (
          <meshStandardMaterial
            color={color}
            roughness={0.25}
            metalness={0.5}
            wireframe={tier === 'low'}
          />
        )}
      </Icosahedron>

      <mesh ref={ring1} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[1.6, 0.008, 8, 96]} />
        <meshBasicMaterial color="#00e5ff" transparent opacity={0.5} />
      </mesh>
      <mesh ref={ring2} rotation={[Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[2.05, 0.006, 8, 96]} />
        <meshBasicMaterial color="#3b6cff" transparent opacity={0.35} />
      </mesh>
    </group>
  );
}
