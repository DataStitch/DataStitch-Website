const testimonials = [
  {
    quote:
      "DataTriad transformed our AI implementation strategy. We went from 'experimental' to 'enterprise-grade' in less than 6 months.",
    name: 'Chidima Nanao',
    title: 'Chief Data Officer',
    company: 'Global FinTech Group',
    initials: 'CN',
  },
  {
    quote:
      'The QuickScan diagnostic gave us an honest, board-level view of exactly where our risk exposure was. We had a remediation plan before the week was out.',
    name: 'James Okafor',
    title: 'Head of AI Risk',
    company: 'International Insurance Group',
    initials: 'JO',
  },
  {
    quote:
      "Having a named DataTriad reviewer embedded in our stand-ups means governance is never an afterthought. It's baked in from sprint zero.",
    name: 'Priya Mbanefoh',
    title: 'VP Engineering',
    company: 'RegTech Platform',
    initials: 'PM',
  },
];

export function ConsultancyTestimonials() {
  return (
    <section className="bg-gray-50 px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            {/* Avatar stack */}
            <div className="flex -space-x-2">
              {testimonials.map((t) => (
                <div
                  key={t.initials}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[var(--datatriad-navy)] text-xs font-semibold text-white"
                >
                  {t.initials}
                </div>
              ))}
            </div>
            <span className="text-sm text-gray-500">Trusted by over 50,000+ learners and professionals</span>
          </div>
          <h2 className="text-3xl font-bold text-[#0a1628] sm:text-4xl">
            From where they were to where they are now
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.initials}
              className="flex flex-col justify-between gap-6 rounded-2xl bg-white p-6 shadow-sm border border-gray-100"
            >
              {/* Quote */}
              <div className="relative">
                <svg
                  className="absolute -left-1 -top-1 h-8 w-8 text-gray-100"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="relative z-10 text-sm leading-relaxed text-gray-700 pl-2">{t.quote}</p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[var(--datatriad-navy)] text-xs font-semibold text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0a1628]">{t.name}</p>
                  <p className="text-xs text-gray-400">
                    {t.title} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
