const props = [
  {
    id: 'integrity',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: 'Full-Stack Integrity',
    description:
      'We engineer governance from the data pipeline to the dashboard. Not audits-after-the-fact, not policy without enforcement. Every recommendation is implementable because we implement it ourselves.',
  },
  {
    id: 'jurisdiction',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: 'Jurisdiction-Native',
    description:
      'UK GDPR, the Nigerian NDPA 2023, and the EU AI Act are three different regulatory universes. Our frameworks are jurisdiction-aware from the schema level up. No retrofitting.',
  },
  {
    id: 'microsoft',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Microsoft-Native Stack',
    description:
      'Power BI, Microsoft Fabric, Azure AI, Entra ID, Purview. Everything we build lives inside the platform you already licence. No rip-and-replace. No new vendor sprawl.',
  },
];

export function ConsultancyWhySuchure() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 space-y-3 text-center">
          <span className="inline-flex rounded-full border border-[var(--datastitch-accent)]/30 bg-[var(--datastitch-accent)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--datastitch-accent-ink)]">
            The Engagement Journey
          </span>
          <h2 className="text-3xl font-bold text-[#0a1628] sm:text-4xl">
            Built for the intersection of innovation and regulation.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-3">
          {props.map((p) => (
            <div
              key={p.id}
              className="space-y-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--datastitch-accent)]/10 text-[var(--datastitch-accent-ink)]">
                {p.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-[#0a1628]">{p.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
