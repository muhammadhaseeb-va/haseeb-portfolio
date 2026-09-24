'use client';

import { useEffect } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { scrollState, useExperience, SECTION_IDS } from '@/store/experience';
import { milestones } from '@/data/portfolio';

export function useScrollStage(containerRef) {
  const setActiveSection = useExperience((s) => s.setActiveSection);
  const setActiveMilestone = useExperience((s) => s.setActiveMilestone);
  const tier = useExperience((s) => s.tier);

  useEffect(() => {
    if (!containerRef.current || tier === 'static') return undefined;

    const ctx = gsap.context(() => {
      const stageMax = SECTION_IDS.length - 1;

      // Continuous 0..stageMax value the 3D camera reads every frame.
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: (self) => {
          scrollState.stage = self.progress * stageMax;
        },
      });

      // Which section's nav link is highlighted right now.
      SECTION_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        ScrollTrigger.create({
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          onToggle: (self) => {
            if (self.isActive) setActiveSection(id);
          },
        });
      });

      // Journey section gets its own scrub range so the timeline spine can
      // travel independently of the outer camera-stage progress.
      const journeyEl = document.getElementById('journey');
      if (journeyEl) {
        ScrollTrigger.create({
          trigger: journeyEl,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          onUpdate: (self) => {
            scrollState.journey = self.progress;
            const idx = Math.min(
              milestones.length - 1,
              Math.floor(self.progress * milestones.length)
            );
            setActiveMilestone(milestones[idx]?.id ?? null);
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, tier, setActiveSection, setActiveMilestone]);
}
