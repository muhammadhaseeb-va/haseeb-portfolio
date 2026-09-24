'use client';

import { useRef } from 'react';
import { useHeadlineReveal } from '@/hooks/useHeadlineReveal';
import { profile, socials } from '@/data/portfolio';
import TypedInterests from './TypedInterests';

export default function Hero() {
  const ref = useRef(null);
  useHeadlineReveal(ref);

  return (
    <section id="hero" ref={ref} className="section-shell items-center text-center">
      <p className="reveal chip mx-auto mb-6">
        <i className="fas fa-location-dot text-signal" aria-hidden="true" />
        {profile.location}
      </p>

      <h1 className="mx-auto max-w-4xl text-display-xl">
        <span className="line-mask">
          <span>Hi there, I&rsquo;m</span>
        </span>
        <span className="line-mask">
          <span className="text-spectrum">{profile.name}</span>
        </span>
        <span className="line-mask">
          <span>{profile.role}</span>
        </span>
      </h1>

      <p className="reveal lead mx-auto mt-6 max-w-xl text-ash">
        I&rsquo;m into <TypedInterests items={profile.interests} />
      </p>

      <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-4">
        <a href="#about" className="btn btn-primary">
          About me <i className="fas fa-arrow-down" aria-hidden="true" />
        </a>
        <div className="flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.id}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="panel grid h-11 w-11 place-items-center text-ash transition-colors duration-300 hover:text-signal"
            >
              <i className={`fab ${s.icon}`} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <div className="reveal mx-auto mt-16 flex justify-center">
        <span className="scroll-cue" aria-hidden="true" />
      </div>
    </section>
  );
}
