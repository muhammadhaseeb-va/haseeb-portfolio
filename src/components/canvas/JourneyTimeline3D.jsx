'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { milestones } from '@/data/portfolio';
import { scrollState, useExperience } from '@/store/experience';

const SPACING = 1.6;
const STAGE_CENTER = 3; // journey is stage index 3 — see data/portfolio.js SECTION_IDS
const STAGE_SPAN = 1.1;

export default function JourneyTimeline3D() {
  const group = useRef(null);
  const nodeRefs = useRef([]);
  const setActiveMilestone = useExperience((s) => s.setActiveMilestone);

  const totalLength = (milestones.length - 1) * SPACING;

  const basePositions = useMemo(
    () => milestones.map((_, i) => new THREE.Vector3(i % 2 === 0 ? 0.6 : -0.6, 0, i * SPACING)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useFrame((_, delta) => {
    if (!group.current) return;

    const distance = Math.abs(scrollState.stage - STAGE_CENTER);
    const visibility = THREE.MathUtils.clamp(1 - distance / STAGE_SPAN, 0, 1);
    group.current.visible = visibility > 0.02;

    // Journey progress (0..1) slides the whole spine past the fixed camera
    // focal point at z = 0, so "now" is always what's in frame.
    const z = totalLength * scrollState.journey;
    group.current.position.z = -z;

    let closestIndex = 0;
    let closestDist = Infinity;

    basePositions.forEach((p, i) => {
      const worldZ = p.z + group.current.position.z;
      const dist = Math.abs(worldZ);
      if (dist < closestDist) {
        closestDist = dist;
        closestIndex = i;
      }

      const node = nodeRefs.current[i];
      if (node) {
        const focus = THREE.MathUtils.clamp(1 - dist / (SPACING * 0.9), 0, 1);
        const targetScale = 0.5 + focus * 0.9;
        node.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 1 - 0.002 ** delta);
        node.material.emissiveIntensity = 0.3 + focus * 1.2;
      }
    });

    setActiveMilestone(milestones[closestIndex]?.id ?? null);
  });

  return (
    <group ref={group} position={[1.2, -0.3, 2]}>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, totalLength / 2]}>
        <cylinderGeometry args={[0.004, 0.004, totalLength, 8]} />
        <meshBasicMaterial color="#1c2a6b" />
      </mesh>

      {milestones.map((m, i) => (
        <mesh
          key={m.id}
          ref={(el) => {
            nodeRefs.current[i] = el;
          }}
          position={basePositions[i]}
        >
          <sphereGeometry args={[0.09, 20, 20]} />
          <meshStandardMaterial
            color={m.type === 'education' ? '#ffb454' : '#00e5ff'}
            emissive={m.type === 'education' ? '#ffb454' : '#00e5ff'}
            emissiveIntensity={0.3}
            roughness={0.4}
          />
        </mesh>
      ))}
    </group>
  );
}
