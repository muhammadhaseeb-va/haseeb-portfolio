'use client';

import { useEffect, useRef, useState } from 'react';

export default function TypedInterests({ items }) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    let charIndex = 0;
    let deleting = false;
    const current = items[index % items.length];
    let timeoutId;

    const step = () => {
      if (!mounted.current) return;

      if (!deleting) {
        charIndex += 1;
        setDisplay(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          timeoutId = setTimeout(step, 1400);
          return;
        }
      } else {
        charIndex -= 1;
        setDisplay(current.slice(0, charIndex));
        if (charIndex === 0) {
          setIndex((i) => (i + 1) % items.length);
          return;
        }
      }
      timeoutId = setTimeout(step, deleting ? 35 : 55);
    };

    timeoutId = setTimeout(step, 200);

    return () => {
      mounted.current = false;
      clearTimeout(timeoutId);
    };
  }, [index, items]);

  return (
    <span className="text-signal">
      {display}
      <span
        aria-hidden="true"
        className="ml-0.5 inline-block w-[2px] animate-pulse bg-signal align-middle"
        style={{ height: '1em' }}
      />
    </span>
  );
}
