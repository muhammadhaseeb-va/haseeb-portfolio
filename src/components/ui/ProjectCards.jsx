'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useHeadlineReveal } from '@/hooks/useHeadlineReveal';
import { certificates } from '@/data/portfolio';
import { useExperience } from '@/store/experience';

export default function ProjectCards() {
  const ref = useRef(null);
  useHeadlineReveal(ref);
  const hoveredProjectId = useExperience((s) => s.hoveredProjectId);
  const setHoveredProject = useExperience((s) => s.setHoveredProject);

  return (
    <section id="certificates" ref={ref} className="section-shell">
      <h2 className="text-display-lg">
        <span className="line-mask">
          <span>Certificates & licenses</span>
        </span>
      </h2>
      <p className="reveal lead mt-4 max-w-lg text-ash">
        Eight credentials from hands-on bootcamps and self-directed study.
      </p>

      <div className="reveal mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert) => (
          <a
            key={cert.id}
            href={cert.url}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setHoveredProject(cert.id)}
            onMouseLeave={() => setHoveredProject(null)}
            onFocus={() => setHoveredProject(cert.id)}
            onBlur={() => setHoveredProject(null)}
            className={`panel group flex flex-col overflow-hidden transition-transform duration-300 ease-cine ${
              hoveredProjectId === cert.id ? '-translate-y-1 shadow-glow-lantern' : ''
            }`}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-night-800">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
                className="object-cover transition-transform duration-500 ease-cine group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-5">
              <p className="chip w-fit">{cert.issuer}</p>
              <h3 className="text-base font-semibold text-bone">{cert.title}</h3>
              <p className="text-sm text-ash">{cert.description}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-3 text-sm font-medium text-signal">
                View certificate <i className="fas fa-arrow-up-right-from-square" aria-hidden="true" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
