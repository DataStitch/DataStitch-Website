import Link from 'next/link';
import { HeroGovernanceCard } from './hero-governance-card';
import { HeroWellbeingCard } from './hero-wellbeing-card';
import { HeroFloatingCards } from './hero-floating-cards';

export function ConsultancyHero() {
  return (
    <section className="relative overflow-hidden [background:var(--datatriad-gradient)] px-6 pb-24 pt-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text column */}
          <div className="max-w-xl space-y-6">
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[3.25rem]">
              Close the governance gap.{' '}
              <span className="text-[var(--datatriad-accent)]">Prove your AI is audit-ready.</span>
            </h1>
            <p className="text-base leading-relaxed text-white/75 sm:text-lg">
              Five engagement models for regulated leaders — from rapid diagnostics to embedded
              governance. We turn your AI systems into trusted, auditable evidence.
            </p>
            <Link
              href="/consultation"
              className="inline-flex rounded-full bg-[var(--datatriad-accent)] px-7 py-3.5 text-sm font-semibold text-[var(--datatriad-accent-ink)] transition hover:brightness-110"
            >
              Book Consultation Call
            </Link>
          </div>

          {/* Dashboard mock */}
          <div className="relative mx-auto w-full max-w-md">
            {/* Outer container */}
            <div className="rounded-2xl bg-white/10 p-3 backdrop-blur-sm border border-white/15 shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
              <div className="space-y-3">
                <HeroGovernanceCard />
                <HeroWellbeingCard />
              </div>
            </div>
            {/* Floating mini-cards */}
            <HeroFloatingCards />
          </div>
        </div>
      </div>
    </section>
  );
}
