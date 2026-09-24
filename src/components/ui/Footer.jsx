import { nav, profile, socials, contact } from '@/data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="content-layer relative border-t border-bone/10 bg-void/80 px-6 py-16 md:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-bone">{profile.name}&rsquo;s Portfolio</h3>
          <p className="mt-3 text-sm text-ash">
            Thank you for visiting my personal portfolio. Connect with me over socials — keep
            rising.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ash">Quick links</h3>
          <ul className="mt-3 space-y-2">
            {nav.map((item) => (
              <li key={item.id}>
                <a href={`/#${item.id}`} className="text-sm text-ash transition-colors hover:text-signal">
                  <i className="fas fa-chevron-circle-right mr-2 text-xs" aria-hidden="true" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ash">Contact info</h3>
          <ul className="mt-3 space-y-2 text-sm text-ash">
            <li>
              <i className="fas fa-phone mr-2" aria-hidden="true" />
              {contact.phone}
            </li>
            <li>
              <i className="fas fa-envelope mr-2" aria-hidden="true" />
              {contact.email}
            </li>
            <li>
              <i className="fas fa-map-marked-alt mr-2" aria-hidden="true" />
              {contact.location}
            </li>
          </ul>
          <div className="mt-4 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="text-ash transition-colors hover:text-signal"
              >
                <i className={`fab ${s.icon}`} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-7xl text-center text-xs text-ash">
        Designed with <i className="fa fa-heart text-lantern" aria-hidden="true" /> by{' '}
        <a href={socials[0].url} target="_blank" rel="noreferrer" className="text-bone hover:text-signal">
          {profile.name}
        </a>{' '}
        · © {year}
      </p>
    </footer>
  );
}
