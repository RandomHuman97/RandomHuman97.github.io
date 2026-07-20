const awards = [
  {
    title: "Top 1.4% - High School Bracket",
    location: "NCL Spring 2026 Individual Game",
    meta: ["19th / 1392 Participants"],
    year: '2026'
  },
  {
    title: "Top 1.3% - Standard Bracket",
    location: "NCL Spring 2026 Individual Game ",
    meta: ["90th / 7011 Participants"],
    year: '2026'
  },
  {
    title: '1st - Cybersecurity',
    location: 'TSA Southern Leadership Conference',
    year: '2026',
  },
  {
    title: '1st - Internet Applications',
    location: 'Lanier Regional Technology Competition',
    year: '2025',
  },
  {
    title: '2nd - Cybersecurity',
    location: 'TSA Southern Leadership Conference',
    year: '2025',
  },
  {
    title: '2nd - Physical Computing',
    location: 'Lanier Regional Technology Competition',
    year: '2026',
  },
  {
    title: '3rd - Mental Health / Wellness Apps',
    location: 'Divergent Teams Hackathon',
    year: '2025',
  },
  {
    title: '4th - Webmaster',
    location: 'TSA Southern Leadership Conference',
    year: '2025',
  },
];

function groupAwardsByYear(items) {
  const map = new Map();
  for (const a of items) {
    if (!map.has(a.year)) map.set(a.year, []);
    map.get(a.year).push(a);
  }
  return [...map.entries()].sort((a, b) => Number(b[0]) - Number(a[0]));
}

function Awards() {
  const byYear = groupAwardsByYear(awards);

  return (
    <section
      id="awards"
      className="mx-auto mt-5 flex max-w-5xl flex-col rounded-3xl bg-dark px-6 py-14 text-darkest sm:px-10 sm:py-16"
    >
      <header className="mb-10 text-center sm:mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Awards & competitions</h2>
        <p className="mx-auto mt-3 max-w-xl text-pretty text-sm leading-relaxed text-darkest/85 sm:text-base">
          Highlights from the various events I've been involved in, including TSA, regional tech competitions, and hackathons.
        </p>
      </header>

      <div className="mx-auto w-full max-w-4xl space-y-10">
        {byYear.map(([year, items]) => (
          <div key={year}>
            <div className="mb-4 flex items-center gap-3 px-1">
              <span className="rounded-full bg-darker px-3 py-1 text-xs font-semibold uppercase tracking-wider text-light">
                {year}
              </span>
              <span className="h-px flex-1 bg-darke/40" aria-hidden />
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {items.map((award) => (
                <li key={`${award.title}-${award.location}`}>
                  <article className="h-full rounded-2xl bg-light p-5 text-left shadow-xl transition hover:outline outline-12 outline-darke">
                    <h3 className="text-lg font-bold leading-snug text-darkest">{award.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-darkest/75">{award.location}</p>
                    {award.meta && award.meta.map((m, index) => (
                      <p key={index} className="mt-1 text-xs leading-relaxed text-darkest/50">
                        {m}
                      </p>
                    ))}
                  </article>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Awards;
