'use client';

import { useState } from 'react';
import { nav, profile } from '@/data/portfolio';
import { useExperience, scrollState } from '@/store/experience';

export default function Navigation() {
  const activeSection = useExperience((s) => s.activeSection);
  const [open, setOpen] = useState(false);

  const goTo = (id) => (event) => {
    const el = document.getElementById(id);
    if (!el) {
      // No matching section on this page (e.g. viewing /learning) — let the
      // browser follow the href, which already points at "/#id".
      setOpen(false);
      return;
    }
    event.preventDefault();
    setOpen(false);
    if (scrollState.lenis) {
      scrollState.lenis.scrollTo(el, { offset: -20 });
    } else {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-hud">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <a
          href="/"
          className="panel flex items-center gap-2 px-4 py-2 text-sm font-semibold tracking-tight"
        >
          <i className="fas fa-satellite-dish text-signal" aria-hidden="true" />
          {profile.name.split(' ')[0]}
        </a>

        <nav className="panel hidden items-center gap-1 px-2 py-2 md:flex">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`/#${item.id}`}
              onClick={goTo(item.id)}
              aria-current={activeSection === item.id ? 'true' : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                activeSection === item.id ? 'bg-ion/20 text-signal' : 'text-ash hover:text-bone'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="panel grid h-11 w-11 place-items-center md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <i className={`fas ${open ? 'fa-xmark' : 'fa-bars'}`} aria-hidden="true" />
        </button>
      </div>

      {open && (
        <nav className="panel mx-6 mb-4 flex flex-col gap-1 p-3 md:hidden">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`/#${item.id}`}
              onClick={goTo(item.id)}
              className={`rounded-lg px-4 py-3 text-base font-medium ${
                activeSection === item.id ? 'bg-ion/20 text-signal' : 'text-ash'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
