import Link from 'next/link';

export function ResourcesCta() {
  return (
    <section
      className="relative overflow-hidden py-20"
      style={{
        background: 'linear-gradient(135deg, #02284b 0%, #1a4a8a 100%)',
      }}
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -left-20 -top-20 h-[500px] w-[600px] rounded-full bg-[#3DDFD0] blur-[160px]" />
        <div className="absolute -right-20 bottom-0 h-[400px] w-[500px] rounded-full bg-[#006ADD] blur-[140px]" />
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center">
        <h2
          className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
          style={{ fontFamily: 'var(--font-geist-sans), DM Sans, sans-serif' }}
        >
          Ready to turn this knowledge into a career move?
        </h2>
        <p className="text-base leading-relaxed text-white/75 sm:text-lg">
          The Academy gives you a personalised learning pathway, hands-on labs, and direct access to
          senior practitioners, so you can go from mid-level to senior in months, not years.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/consultation"
            className="rounded-full bg-[var(--datatriad-accent)] px-6 py-3 text-sm font-semibold text-[var(--datatriad-accent-ink)] transition hover:brightness-110"
          >
            Find My Learning Path
          </Link>
          <Link
            href="/academy"
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition hover:border-white hover:bg-white/10"
          >
            Browse All Course
          </Link>
        </div>
      </div>
    </section>
  );
}
