export function AcademyHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--datatriad-navy)] px-6 pb-14 pt-20 text-white sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,_rgba(61,223,208,0.32),_transparent_60%)]" />
      <div className="mx-auto max-w-6xl">
        <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1 text-sm font-semibold text-white/90">
          All Courses
        </span>

        <div className="mt-6 max-w-3xl space-y-4">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Build the skills that get you promoted.
          </h1>
          <p className="text-lg text-white/80 sm:text-xl">
            Hands-on courses in AI, data education, and governance built for professionals ready to move into
            senior roles.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-sm text-white/95 backdrop-blur-sm sm:text-base">
          Not sure where to start? Take a 2-minute skills assessment and get a tailored learning path.
        </div>
      </div>
    </section>
  );
}
