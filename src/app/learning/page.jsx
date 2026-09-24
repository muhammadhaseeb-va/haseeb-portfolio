import Link from 'next/link';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { learningStack } from '@/data/portfolio';

export const metadata = {
  title: 'Current Learning Stack & Roadmap',
  description: 'Active hands-on execution, practical skill acquisition, and technical exploration.',
};

export default function LearningPage() {
  return (
    <>
      <div className="vignette" aria-hidden="true" />
      <Navigation />
      <main className="content-layer relative">
        <section className="section-shell">
          <h1 className="text-display-lg">
            Current <span className="text-spectrum">learning roadmap</span>
          </h1>
          <p className="lead mt-4 max-w-lg text-ash">
            Active hands-on execution, practical skill acquisition, and technical exploration.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {learningStack.map((item) => (
              <div key={item.id} className="panel p-8">
                <i className={item.icon} style={{ color: item.color, fontSize: '2.4rem' }} aria-hidden="true" />
                <h2 className="mt-4 text-lg font-semibold text-bone">{item.title}</h2>
                <p className="mt-2 text-sm text-ash">{item.description}</p>
              </div>
            ))}
          </div>

          <Link href="/" className="btn btn-primary mt-12 w-fit">
            <i className="fas fa-arrow-left" aria-hidden="true" /> Back to main portfolio
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
