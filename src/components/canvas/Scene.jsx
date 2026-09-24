'use client';

import { Stars } from '@react-three/drei';
import CameraRig from './CameraRig';
import HeroCore from './HeroCore';
import SkillsUniverse from './SkillsUniverse';
import JourneyTimeline3D from './JourneyTimeline3D';
import CertificatePlates from './CertificatePlates';
import Effects from './Effects';

export default function Scene({ tier }) {
  return (
    <>
      <ambientLight intensity={0.35} color="#4a5fd9" />
      <directionalLight position={[4, 5, 3]} intensity={1.1} color="#bcd0ff" />
      <pointLight position={[-3, -2, -4]} intensity={0.6} color="#00e5ff" />

      <Stars
        radius={40}
        depth={30}
        count={tier === 'high' ? 3200 : tier === 'medium' ? 1800 : 800}
        factor={2.4}
        fade
        speed={0.4}
      />

      <HeroCore tier={tier} />
      <SkillsUniverse />
      <JourneyTimeline3D />
      <CertificatePlates />

      <CameraRig />
      {tier === 'high' && <Effects />}
    </>
  );
}
