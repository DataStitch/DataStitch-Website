import Link from 'next/link';

export function ContactCta() {
  return (
    <section className="bg-[#0e3d38] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-2xl font-bold leading-snug text-white sm:text-3xl">
          Book a Discovery Call
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-base">
          Are you an executive looking for a strategic roadmap? Schedule a 15-minute
          consultation with our lead Governance Architect to discuss your
          organization&apos;s specific needs.
        </p>
        <Link
          href="/consultation"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--datatriad-accent)] px-7 py-3.5 text-sm font-semibold text-[var(--datatriad-accent-ink)] transition hover:brightness-110"
        >
          Book a Discovery Call
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
