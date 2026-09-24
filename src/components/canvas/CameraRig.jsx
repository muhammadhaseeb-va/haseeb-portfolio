'use client';

import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { getCameraTransform } from '@/lib/cameraPath';
import { scrollState } from '@/store/experience';

export default function CameraRig() {
  const { camera } = useThree();
  const targetPos = useRef(new THREE.Vector3(0, 0.4, 6));
  const targetLook = useRef(new THREE.Vector3(0, 0.2, 0));
  const currentLook = useRef(new THREE.Vector3(0, 0.2, 0));
  const pointerOffset = useRef(new THREE.Vector3());
  const combined = useRef(new THREE.Vector3());

  useFrame((_, delta) => {
    getCameraTransform(scrollState.stage, targetPos.current, targetLook.current);

    // Subtle parallax from pointer position. Stays near zero on touch
    // devices since scrollState.pointer is only updated on pointermove.
    pointerOffset.current.set(scrollState.pointer.x * 0.25, scrollState.pointer.y * 0.15, 0);
    combined.current.addVectors(targetPos.current, pointerOffset.current);

    const damp = 1 - 0.001 ** delta;
    camera.position.lerp(combined.current, damp);
    currentLook.current.lerp(targetLook.current, damp);
    camera.lookAt(currentLook.current);
  });

  return null;
}
