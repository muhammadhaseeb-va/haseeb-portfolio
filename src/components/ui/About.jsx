'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useHeadlineReveal } from '@/hooks/useHeadlineReveal';
import { profile } from '@/data/portfolio';

export default function About() {
  const ref = useRef(null);
  useHeadlineReveal(ref);

  return (
    <section id="about" ref={ref} className="section-shell">
      <div className="grid items-center gap-12 md:grid-cols-[0.85fr_1.15fr]">
        <div className="reveal panel relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden">
          <Image
            src={profile.portraitImage}
            alt={profile.name}
            fill
            sizes="(min-width: 768px) 360px, 80vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-display-lg">
            <span className="line-mask">
              <span>About me</span>
            </span>
          </h2>
          <p className="reveal chip mt-4 w-fit">{profile.tagline}</p>

          <div className="reveal mt-6 space-y-4 text-lead text-ash">
            {profile.bio.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <ul className="reveal mt-8 space-y-3">
            {profile.coreSkills.map((item) => (
              <li key={item.label} className="panel px-4 py-3">
                <p className="text-sm font-semibold text-bone">{item.label}</p>
                <p className="text-sm text-ash">{item.detail}</p>
              </li>
            ))}
          </ul>

          <div className="reveal mt-8 flex flex-wrap items-center gap-4 text-sm text-ash">
            <span className="chip">
              <i className="fas fa-envelope text-signal" aria-hidden="true" /> {profile.email}
            </span>
            <span className="chip">
              <i className="fas fa-location-dot text-signal" aria-hidden="true" /> {profile.location}
            </span>
          </div>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="reveal btn btn-ghost mt-8"
          >
            Resume <i className="fas fa-chevron-right" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
