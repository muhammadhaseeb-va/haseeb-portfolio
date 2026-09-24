'use client';

import { useRef } from 'react';
import { useHeadlineReveal } from '@/hooks/useHeadlineReveal';
import { skills } from '@/data/portfolio';
import { useExperience } from '@/store/experience';

export default function SkillsSection() {
  const ref = useRef(null);
  useHeadlineReveal(ref);
  const hoveredSkillId = useExperience((s) => s.hoveredSkillId);
  const setHoveredSkill = useExperience((s) => s.setHoveredSkill);

  return (
    <section id="skills" ref={ref} className="section-shell">
      <h2 className="mx-auto max-w-2xl text-center text-display-lg">
        <span className="line-mask">
          <span>Skills & abilities</span>
        </span>
      </h2>
      <p className="reveal lead mx-auto mt-4 max-w-lg text-center text-ash">
        A floating ecosystem of the tools and disciplines I work with daily — hover a card to light
        it up in the scene behind it.
      </p>

      <div className="reveal mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill) => (
          <button
            key={skill.id}
            type="button"
            onMouseEnter={() => setHoveredSkill(skill.id)}
            onMouseLeave={() => setHoveredSkill(null)}
            onFocus={() => setHoveredSkill(skill.id)}
            onBlur={() => setHoveredSkill(null)}
            className={`panel flex flex-col items-center gap-3 px-4 py-6 text-center transition-transform duration-300 ease-cine ${
              hoveredSkillId === skill.id ? '-translate-y-1 shadow-glow-signal' : ''
            }`}
          >
            <i className={skill.icon} style={{ color: skill.color, fontSize: '1.8rem' }} aria-hidden="true" />
            <span className="text-sm font-medium text-bone">{skill.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
