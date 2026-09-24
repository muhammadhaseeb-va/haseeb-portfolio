'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture, Billboard } from '@react-three/drei';
import * as THREE from 'three';
import { certificates } from '@/data/portfolio';
import { scrollState, useExperience } from '@/store/experience';

const STAGE_CENTER = 4; // certificates is stage index 4 — see data/portfolio.js SECTION_IDS
const STAGE_SPAN = 1.1;
const RADIUS = 3.1;

function Plate({ cert, angle }) {
  const mesh = useRef(null);
  const scaleTarget = useRef(new THREE.Vector3(1, 1, 1));
  const texture = useTexture(cert.image);
  const hoveredProjectId = useExperience((s) => s.hoveredProjectId);
  const setHoveredProject = useExperience((s) => s.setHoveredProject);
  const isActive = hoveredProjectId === cert.id;

  const position = useMemo(
    () => [Math.sin(angle) * RADIUS, Math.cos(angle * 1.3) * 0.5, Math.cos(angle) * RADIUS - 1.2],
    [angle]
  );

  useFrame((_, delta) => {
    if (!mesh.current) return;
    const targetScale = isActive ? 1.25 : 1;
    scaleTarget.current.set(targetScale, targetScale, 1);
    mesh.current.scale.lerp(scaleTarget.current, 1 - 0.001 ** delta);
  });

  return (
    <Billboard position={position}>
      <mesh
        ref={mesh}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHoveredProject(cert.id);
        }}
        onPointerOut={() => setHoveredProject(null)}
      >
        <planeGeometry args={[0.9, 0.62]} />
        <meshBasicMaterial map={texture} toneMapped={false} transparent />
      </mesh>
      <mesh position={[0, 0, -0.01]} scale={[1.04, 1.08, 1]}>
        <planeGeometry args={[0.9, 0.62]} />
        <meshBasicMaterial
          color={isActive ? '#ffb454' : '#152062'}
          transparent
          opacity={isActive ? 0.9 : 0.6}
        />
      </mesh>
    </Billboard>
  );
}

export default function CertificatePlates() {
  const group = useRef(null);

  useFrame(() => {
    if (!group.current) return;
    const distance = Math.abs(scrollState.stage - STAGE_CENTER);
    const visibility = THREE.MathUtils.clamp(1 - distance / STAGE_SPAN, 0, 1);
    group.current.visible = visibility > 0.02;
    group.current.rotation.y = (1 - visibility) * 0.4;
  });

  return (
    <group ref={group}>
      {certificates.map((cert, i) => (
        <Plate key={cert.id} cert={cert} angle={(i / certificates.length) * Math.PI * 2} />
      ))}
    </group>
  );
}
