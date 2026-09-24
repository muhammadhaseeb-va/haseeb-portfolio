'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Billboard, Text } from '@react-three/drei';
import * as THREE from 'three';
import { skills } from '@/data/portfolio';
import { scrollState, useExperience } from '@/store/experience';

const RADIUS = 2.6;
const STAGE_CENTER = 2; // skills is stage index 2 — see data/portfolio.js SECTION_IDS
const STAGE_SPAN = 1.1;

function useSpherePositions(count, radius) {
  return useMemo(() => {
    const points = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i += 1) {
      const y = 1 - (i / Math.max(count - 1, 1)) * 2;
      const r = Math.sqrt(Math.max(1 - y * y, 0));
      const theta = golden * i;
      points.push(
        new THREE.Vector3(Math.cos(theta) * r * radius, y * radius * 0.72, Math.sin(theta) * r * radius)
      );
    }
    return points;
  }, [count, radius]);
}

function SkillOrb({ skill, position }) {
  const mesh = useRef(null);
  const scaleTarget = useRef(new THREE.Vector3(1, 1, 1));
  const hoveredSkillId = useExperience((s) => s.hoveredSkillId);
  const setHoveredSkill = useExperience((s) => s.setHoveredSkill);
  const isActive = hoveredSkillId === skill.id;

  useFrame((_, delta) => {
    if (!mesh.current) return;
    const targetScale = isActive ? 1.6 : 1;
    scaleTarget.current.setScalar(targetScale);
    mesh.current.scale.lerp(scaleTarget.current, 1 - 0.001 ** delta);
  });

  return (
    <group position={position}>
      <mesh
        ref={mesh}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHoveredSkill(skill.id);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHoveredSkill(null);
          document.body.style.cursor = 'auto';
        }}
      >
        <sphereGeometry args={[0.16, 24, 24]} />
        <meshStandardMaterial
          color={skill.color}
          emissive={skill.color}
          emissiveIntensity={isActive ? 1.1 : 0.35}
          roughness={0.35}
        />
      </mesh>
      <Billboard>
        <Text
          position={[0, 0.3, 0]}
          fontSize={0.11}
          color={isActive ? '#ffffff' : '#8f9bb8'}
          anchorX="center"
          anchorY="bottom"
          material-transparent
          material-opacity={isActive ? 1 : 0}
        >
          {skill.label}
        </Text>
      </Billboard>
    </group>
  );
}

export default function SkillsUniverse() {
  const group = useRef(null);
  const scaleVec = useRef(new THREE.Vector3(1, 1, 1));
  const positions = useSpherePositions(skills.length, RADIUS);

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.06;

    const distance = Math.abs(scrollState.stage - STAGE_CENTER);
    const visibility = THREE.MathUtils.clamp(1 - distance / STAGE_SPAN, 0, 1);
    scaleVec.current.setScalar(0.6 + visibility * 0.4);
    group.current.scale.lerp(scaleVec.current, 1 - 0.01 ** delta);
    group.current.visible = visibility > 0.02;
  });

  return (
    <group ref={group} position={[0, 0.1, -0.5]}>
      {skills.map((skill, i) => (
        <SkillOrb key={skill.id} skill={skill} position={positions[i]} />
      ))}
    </group>
  );
}
