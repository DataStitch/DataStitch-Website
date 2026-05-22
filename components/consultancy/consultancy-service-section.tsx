import type { ReactNode } from 'react';
import Link from 'next/link';
import { ConsultancyFeatureItem } from './consultancy-feature-item';

interface Feature {
  title: string;
  description: string;
}

interface ConsultancyServiceSectionProps {
  label: string;
  headline: string;
  description: string;
  features: Feature[];
  ctaLabel: string;
  ctaHref?: string;
  demoNode: ReactNode;
  demoBg?: string;
  reversed?: boolean;
}

export function ConsultancyServiceSection({
  label,
  headline,
  description,
  features,
  ctaLabel,
  ctaHref = '/consultation',
  demoNode,
  demoBg = '#eef9f8',
  reversed = false,
}: ConsultancyServiceSectionProps) {
  const textCol = (
    <div className="flex flex-col justify-center space-y-6 py-4">
      {/* Label badge */}
      <span className="inline-flex w-fit rounded-full border border-[var(--datatriad-accent)]/30 bg-[var(--datatriad-accent)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--datatriad-accent-ink)]">
        {label}
      </span>

      {/* Headline + description */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold leading-tight text-[#0a1628] sm:text-3xl">{headline}</h2>
        <p className="text-base leading-relaxed text-gray-500">{description}</p>
      </div>

      {/* Features grid */}
      <div className="grid gap-3 sm:grid-cols-2">
        {features.map((f) => (
          <ConsultancyFeatureItem key={f.title} title={f.title} description={f.description} />
        ))}
      </div>

      {/* CTA */}
      <div>
        <Link
          href={ctaHref}
          className="inline-flex rounded-full border border-[var(--datatriad-accent)] px-6 py-2.5 text-sm font-semibold text-[var(--datatriad-accent-ink)] transition hover:bg-[var(--datatriad-accent)] hover:text-white"
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );

  const demoCol = (
    <div
      className="flex items-center justify-center rounded-3xl p-6 lg:p-8"
      style={{ backgroundColor: demoBg }}
    >
      {demoNode}
    </div>
  );

  return (
    <section className="border-t border-gray-100 bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${reversed ? 'lg:[&>*:first-child]:order-2' : ''}`}>
          {textCol}
          {demoCol}
        </div>
      </div>
    </section>
  );
}
