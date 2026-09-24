import { create } from 'zustand';
import { SECTION_IDS } from '@/data/portfolio';

export { SECTION_IDS };

// Mutable, non-reactive bag written every frame by scroll-driven GSAP
// callbacks and read every frame inside R3F's useFrame. Keeping this outside
// React/zustand state means the 3D scene tracks scroll at 60fps without
// triggering a single component re-render.
export const scrollState = {
  stage: 0, // fractional 0..SECTION_IDS.length-1 — drives the camera
  journey: 0, // 0..1 progress through the journey section only
  pointer: { x: 0, y: 0 }, // normalized -1..1, for subtle camera parallax
  lenis: null, // the active Lenis instance, or null on the static tier
};

export const useExperience = create((set, get) => ({
  tier: 'medium',
  setTier: (tier) => set({ tier }),

  loaded: false,
  setLoaded: (loaded) => set({ loaded }),

  activeSection: 'hero',
  setActiveSection: (id) => {
    if (get().activeSection !== id) set({ activeSection: id });
  },

  activeMilestoneId: null,
  setActiveMilestone: (id) => {
    if (get().activeMilestoneId !== id) set({ activeMilestoneId: id });
  },

  hoveredSkillId: null,
  setHoveredSkill: (id) => set({ hoveredSkillId: id }),

  hoveredProjectId: null,
  setHoveredProject: (id) => set({ hoveredProjectId: id }),
}));
