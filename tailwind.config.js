/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,mdx}'],

  // Hover variants only apply on devices that can actually hover.
  // Prevents "sticky hover" states on touch screens.
  future: { hoverOnlyWhenSupported: true },

  theme: {
    extend: {
      /* ------------------------------------------------------------------
       * Palette — built around a deep ultramarine night sky, not black.
       *   night   : the world the camera flies through
       *   ion     : structural blue (links, rails, orbits)
       *   signal  : live data / active state (from the cyan in the AI icon)
       *   lantern : the one warm light — timeline "you are here" + CTAs
       * ---------------------------------------------------------------- */
      colors: {
        void: '#050818',
        night: {
          DEFAULT: '#0a1030',
          800: '#0e1748',
          700: '#152062',
        },
        ion: {
          DEFAULT: '#3b6cff',
          300: '#86a5ff',
          600: '#2450d6',
        },
        signal: {
          DEFAULT: '#00e5ff',
          300: '#7bf0ff',
          600: '#00b8cc',
        },
        lantern: {
          DEFAULT: '#ffb454',
          300: '#ffd08a',
          600: '#e08a1e',
        },
        bone: '#e8ecf7',
        ash: '#8f9bb8',
      },

      /* Fonts are injected as CSS variables by next/font in app/layout.jsx */
      fontFamily: {
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        'display-xl': [
          'clamp(2.5rem, 7vw, 6rem)',
          { lineHeight: '0.98', letterSpacing: '-0.035em', fontWeight: '600' },
        ],
        'display-lg': [
          'clamp(2rem, 4.8vw, 4rem)',
          { lineHeight: '1.02', letterSpacing: '-0.03em', fontWeight: '600' },
        ],
        'display-md': [
          'clamp(1.5rem, 3vw, 2.5rem)',
          { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '500' },
        ],
        lead: ['clamp(1.05rem, 1.5vw, 1.3rem)', { lineHeight: '1.65' }],
      },

      /* Layer map — canvas < vignette < content < hud < grain < loader */
      zIndex: {
        canvas: '0',
        vignette: '5',
        content: '10',
        hud: '40',
        grain: '50',
        loader: '70',
      },

      transitionTimingFunction: {
        cine: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },

      boxShadow: {
        'glow-ion': '0 0 0 1px rgba(59,108,255,.45), 0 14px 60px -12px rgba(59,108,255,.6)',
        'glow-signal': '0 0 0 1px rgba(0,229,255,.35), 0 12px 50px -14px rgba(0,229,255,.55)',
        'glow-lantern': '0 0 0 1px rgba(255,180,84,.4), 0 12px 50px -14px rgba(255,180,84,.55)',
      },

      backgroundImage: {
        'grid-lines':
          'linear-gradient(to right, rgba(232,236,247,.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(232,236,247,.05) 1px, transparent 1px)',
        'sky-fall':
          'radial-gradient(120% 80% at 50% 0%, #152062 0%, #0a1030 45%, #050818 100%)',
      },

      /* Only keyframes used through `animate-*` utilities live here.
         Keyframes used by raw CSS (grain, scroll cue) are in globals.css. */
      keyframes: {
        'float-y': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.55' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        sweep: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(220%)' },
        },
      },
      animation: {
        'float-y': 'float-y 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.22, 1, 0.36, 1) infinite',
        sweep: 'sweep 2.8s cubic-bezier(0.22, 1, 0.36, 1) infinite',
      },

      /* Input-capability & viewport-shape screens for adaptive 3D behaviour */
      screens: {
        coarse: { raw: '(pointer: coarse)' },
        fine: { raw: '(pointer: fine)' },
        short: { raw: '(max-height: 700px)' },
      },
    },
  },
  plugins: [],
};
