import { Link } from 'react-router';
import { HashLink } from 'react-router-hash-link';

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/RandomHuman97',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:nicholas.karneyenka@gmail.com',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Contact page',
    to: '/contact',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

function Hero() {
  return (
    <section className="relative mx-auto mt-5 flex max-w-5xl flex-col items-center justify-center overflow-hidden rounded-3xl bg-dark px-6 py-16 text-darkest sm:px-10 sm:py-16">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-light/10 via-transparent to-transparent" aria-hidden />
      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="mb-5 text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          nicholas karneyenka
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-pretty text-base leading-relaxed text-darkest/90 sm:text-lg">
          A developer with a passion for low level, backend, and frontend development.
        </p>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          <HashLink
            to="/#projects"
            smooth
            className="rounded-full bg-light px-7 py-3 font-semibold text-darker shadow-lg transition hover:bg-darker hover:text-white hover:shadow-xl"
          >
            View portfolio
          </HashLink>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map((item) => {
              const className =
                'flex h-11 w-11 items-center justify-center rounded-full bg-light text-darker shadow-md ring-1 ring-darke/20 transition hover:-translate-y-0.5 hover:bg-darker hover:text-white hover:ring-darker/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-darke focus-visible:ring-offset-2 focus-visible:ring-offset-dark';

              if (item.to) {
                return (
                  <Link key={item.label} to={item.to} className={className} aria-label={item.label} title={item.label}>
                    {item.icon}
                  </Link>
                );
              }

              const isExternal = item.href.startsWith('http');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={className}
                  aria-label={item.label}
                  title={item.label}
                  {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {item.icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
