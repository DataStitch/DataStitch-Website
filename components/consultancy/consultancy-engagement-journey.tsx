import Image from 'next/image';
import Link from 'next/link';
import { assetPath } from '@/lib/asset-path';

const phases = [
  {
    id: 'discovery',
    image: '/consultancy/consultancy_9.png',
    title: 'Discovery Call',
    description:
      'A 45-minute conversation. We listen. You describe the pressure you\'re under — from your board, your regulator, your CTO. We tell you which engagement fits.',
  },
  {
    id: 'proposal',
    image: '/consultancy/consultancy_10.png',
    title: 'Scoped Proposal',
    description:
      'Within 5 business days: a fixed-price proposal with a timeline, a named delivery lead, contractual milestones, and a defined exit criterion. No surprises.',
  },
  {
    id: 'onboarding',
    image: '/consultancy/consultancy_11.png',
    title: 'Secure Onboarding',
    description:
      'Portal access provisioned via Microsoft Entra ID B2C SSO. Technical Assurance Vault opened with your customer-managed encryption keys. Kickoff within the week.',
  },
  {
    id: 'delivery',
    image: '/consultancy/consultancy_12.png',
    title: 'Delivery & Evidence',
    description:
      'Weekly reporting. Fortnightly executive readout. At each milestone: a signed Audit Log you can place directly in front of your regulator or your board.',
  },
];

export function ConsultancyEngagementJourney() {
  return (
    <section className="[background:var(--datastitch-gradient)] px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 max-w-2xl space-y-4">
          <span className="inline-flex rounded-full border border-[var(--datastitch-accent)]/30 bg-[var(--datastitch-accent)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--datastitch-accent)]">
            The Engagement Journey
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            From first call to first audit log, in weeks, not quarters.
          </h2>
          <p className="text-base leading-relaxed text-white/70">
            Every engagement follows the same four-phase rhythm. No mystery process. No scope creep.
            Every milestone contractually defined.
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--datastitch-accent)] px-6 py-3 text-sm font-semibold text-[var(--datastitch-accent-ink)] transition hover:brightness-110"
          >
            Book A Call Now
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>
        </div>

        {/* Phases grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {phases.map((p, i) => (
            <div
              key={p.id}
              className="overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.25)] transition hover:bg-white/15"
            >
              {/* Image */}
              <div className="relative h-32 overflow-hidden">
                <Image
                  src={assetPath(p.image)}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
                {/* Phase number */}
                <div className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[var(--datastitch-accent)] text-xs font-bold text-[var(--datastitch-accent-ink)]">
                  {i + 1}
                </div>
              </div>
              {/* Content */}
              <div className="p-4">
                <p className="text-sm font-bold text-[var(--datastitch-accent)]">{p.title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-white/70">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
