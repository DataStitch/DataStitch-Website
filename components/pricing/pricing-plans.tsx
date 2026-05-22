'use client';

import { useState } from 'react';
import Link from 'next/link';

const ANNUAL_MULTIPLIER = 0.85; // 15% off

type Plan = {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number | null;
  cta: string;
  ctaHref: string;
  features: string[];
  popular: boolean;
};

const plans: Plan[] = [
  {
    id: 'individual',
    name: 'Individual',
    tagline: 'Master the fundamentals of data',
    monthlyPrice: 49,
    cta: 'Start Learning',
    ctaHref: '/consultation',
    features: [
      'Full Academy Access',
      'Weekly Curated Insights',
      'Community Forum Access',
    ],
    popular: false,
  },
  {
    id: 'professional',
    name: 'Professional',
    tagline: 'Advanced certification and lab environments.',
    monthlyPrice: 149,
    cta: 'Start Professional',
    ctaHref: '/consultation',
    features: [
      'Everything in Individual',
      'Sandboxed AI Labs',
      'Professional Certifications',
      'Priority Q&A Support',
    ],
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'The complete AI governance ecosystem.',
    monthlyPrice: null,
    cta: 'Book a Call',
    ctaHref: '/consultation',
    features: [
      'Everything in Professional',
      'Custom Governance Frameworks',
      'Dedicated Account Manager',
      'SLA-backed Enterprise Support',
    ],
    popular: false,
  },
];

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="mt-0.5 shrink-0 text-[var(--datatriad-accent)]"
    >
      <path
        d="M3 8.5L6.5 12L13 5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PriceDisplay({ plan, annual }: { plan: Plan; annual: boolean }) {
  if (plan.monthlyPrice === null) {
    return (
      <span className="text-4xl font-bold text-[var(--datatriad-ink)] sm:text-5xl">Custom</span>
    );
  }
  const price = annual
    ? Math.round(plan.monthlyPrice * ANNUAL_MULTIPLIER)
    : plan.monthlyPrice;
  return (
    <span className="flex items-end gap-0.5">
      <span className="text-4xl font-bold text-[var(--datatriad-ink)] sm:text-5xl">
        ${price}
      </span>
      <span className="mb-1.5 text-sm text-[var(--datatriad-muted)]">/mo</span>
    </span>
  );
}

function PricingCard({ plan, annual }: { plan: Plan; annual: boolean }) {
  const isPopular = plan.popular;
  const cardBg = isPopular ? 'bg-[#e6f7f5]' : 'bg-white';
  const btnFilled = isPopular;

  return (
    <div className="flex flex-col">
      {/* Most Popular badge */}
      {isPopular ? (
        <p className="mb-2 text-center text-xs font-semibold text-[var(--datatriad-accent)]">
          Most Popular
        </p>
      ) : (
        <p className="mb-2 invisible text-xs">&nbsp;</p>
      )}

      <div className={`flex flex-1 flex-col rounded-3xl p-6 shadow-sm ${cardBg}`}>
        {/* Header */}
        <div>
          <h3 className="text-2xl font-bold text-[var(--datatriad-ink)] sm:text-3xl">
            {plan.name}
          </h3>
          <p className="mt-1 text-sm text-[var(--datatriad-muted)]">{plan.tagline}</p>
        </div>

        {/* Divider */}
        <hr className="my-5 border-black/10" />

        {/* CTA + Price row */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href={plan.ctaHref}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              btnFilled
                ? 'bg-[var(--datatriad-accent)] text-[var(--datatriad-accent-ink)] hover:brightness-105'
                : 'border border-[var(--datatriad-border)] bg-white text-[var(--datatriad-ink)] hover:bg-gray-50'
            }`}
          >
            {plan.cta}
          </Link>
          <PriceDisplay plan={plan} annual={annual} />
        </div>

        {/* Divider */}
        <hr className="my-5 border-black/10" />

        {/* Features */}
        <ul className="flex flex-col gap-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5">
              <CheckIcon />
              <span className="text-sm text-[var(--datatriad-muted)]">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function PricingPlans() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="bg-[var(--datatriad-navy)] px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        {/* Hero text */}
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-4xl font-normal leading-tight text-white sm:text-5xl">
            Unlock Unlimited{' '}
            <span className="block font-bold">AI and Data Expertise</span>
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
            Scale your AI initiatives with absolute certainty. From individual mastery to global
            enterprise governance frameworks.
          </p>
        </div>

        {/* Toggle */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-1 rounded-full border border-white/15 bg-white/5 p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                !annual
                  ? 'bg-[var(--datatriad-ink)] text-white shadow'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                annual
                  ? 'bg-[var(--datatriad-ink)] text-white shadow'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Annually &ndash; 15% save
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} annual={annual} />
          ))}
        </div>
      </div>
    </section>
  );
}
