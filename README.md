# Haseeb — Cinematic 3D Portfolio

Next.js 14 · react-three-fiber · GSAP ScrollTrigger · Tailwind CSS

## 1. Install

```bash
npm install
cp .env.example .env.local
```

Open `.env.local` and paste your [Web3Forms](https://web3forms.com) access key into
`NEXT_PUBLIC_WEB3FORMS_KEY`. Without it, the contact form shows a friendly
message instead of submitting (it never fails silently).

## 2. Add your images

Copy these files from your old `assets/images/` folder into `public/images/`,
keeping the same names and subfolders:

```
public/images/
├── hero.png
├── profile2.jpg
├── favicon.png
├── contact1.png
├── certificates/
│   ├── hubspot-inbound-sales.png
│   ├── google-bootcamp.png
│   ├── gemini-educator.png
│   ├── google-educator.png
│   ├── digiskills-freelancing.png
│   ├── digiskills-seo.png
│   ├── hp-ai.png
│   └── linkedin-ai-ethics.png
└── educat/
    ├── college.jpg
    └── school.jpg
```

The site renders without them, but certificate plates and portraits will
show broken-image icons until they're in place.

## 3. Run it

```bash
npm run dev      # http://localhost:3000
npm run build && npm start   # production build
```

## Editing content

Everything you'd want to change — name, bio, skills, education, experience,
certificates, contact info, social links — lives in one file:

```
src/data/portfolio.js
```

Edit that file and every section (DOM cards, the 3D skill orbs, the journey
timeline, the certificate plates) updates together, since they all read from
the same arrays.

## Performance tiers

The site detects device capability once on load (`src/hooks/usePerformanceTier.js`)
and writes it to `<html data-tier="...">`:

- **high** — full bloom post-processing, distortion shader, dense stars
- **medium** — default for most phones; no post-processing
- **low** — flat materials, solid glass panels, no grain overlay
- **static** — no WebGL at all (unsupported browser, `prefers-reduced-motion`,
  or Save-Data): the canvas never mounts and the site is plain, fast HTML/CSS

## Known placeholders

- **Twitter link** in `src/data/portfolio.js` → `socials` still points at
  `https://twitter.com/` (no handle was in the original site). Update it once
  you have a real profile URL.
