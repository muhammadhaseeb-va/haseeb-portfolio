'use client';

import { useRef } from 'react';
import { useHeadlineReveal } from '@/hooks/useHeadlineReveal';
import { milestones } from '@/data/portfolio';
import { useExperience } from '@/store/experience';

export default function JourneySection() {
  const ref = useRef(null);
  useHeadlineReveal(ref);
  const activeMilestoneId = useExperience((s) => s.activeMilestoneId);

  return (
    <section id="journey" ref={ref} className="section-shell">
      <h2 className="text-display-lg">
        <span className="line-mask">
          <span>My journey</span>
        </span>
      </h2>
      <p className="reveal lead mt-4 max-w-lg text-ash">
        Education and hands-on experience, side by side — scroll to move through it.
      </p>

      <ol className="reveal mt-12 space-y-4">
        {milestones.map((m) => {
          const isActive = activeMilestoneId === m.id;
          return (
            <li
              key={m.id}
              className={`panel flex flex-col gap-1 px-6 py-5 transition-all duration-500 ease-cine md:flex-row md:items-center md:justify-between ${
                isActive ? 'border-signal/60 shadow-glow-signal' : ''
              }`}
            >
              <div>
                <p className="chip mb-2 w-fit">
                  <i
                    className={`fas ${m.type === 'education' ? 'fa-graduation-cap' : 'fa-briefcase'}`}
                    aria-hidden="true"
                    style={{ color: m.type === 'education' ? '#ffb454' : '#00e5ff' }}
                  />
                  {m.type === 'education' ? m.place : m.org}
                </p>
                <h3 className="text-base font-semibold text-bone md:text-lg">{m.title ?? m.role}</h3>
                {m.description && <p className="mt-1 text-sm text-ash">{m.description}</p>}
              </div>
              <span className="text-sm font-medium text-ash">{m.period}</span>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
