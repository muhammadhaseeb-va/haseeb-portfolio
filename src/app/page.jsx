'use client';

import dynamic from 'next/dynamic';
import ExperienceProvider from '@/components/providers/ExperienceProvider';
import PageShell from '@/components/providers/PageShell';
import Navigation from '@/components/ui/Navigation';
import Hero from '@/components/ui/Hero';
import About from '@/components/ui/About';
import SkillsSection from '@/components/ui/SkillsSection';
import JourneySection from '@/components/ui/JourneySection';
import ProjectCards from '@/components/ui/ProjectCards';
import ContactCTA from '@/components/ui/ContactCTA';
import Footer from '@/components/ui/Footer';

// WebGL needs `window`, so the canvas is never rendered on the server.
const SceneCanvas = dynamic(() => import('@/components/canvas/SceneCanvas'), { ssr: false });

export default function HomePage() {
  return (
    <ExperienceProvider>
      <SceneCanvas />
      <div className="vignette" aria-hidden="true" />
      <Navigation />
      <PageShell>
        <Hero />
        <About />
        <SkillsSection />
        <JourneySection />
        <ProjectCards />
        <ContactCTA />
      </PageShell>
      <Footer />
    </ExperienceProvider>
  );
}
