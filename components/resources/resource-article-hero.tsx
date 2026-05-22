import Image from 'next/image';
import Link from 'next/link';
import { assetPath } from '@/lib/asset-path';

export function ResourceArticleHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #02284b 0%, #006ADD 50%, #1a4a8a 100%)',
      }}
    >
      {/* Background SVG gradient blob */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -right-40 -top-20 h-[600px] w-[700px] rounded-full bg-[#3DDFD0] blur-[160px]" />
        <div className="absolute -left-40 top-40 h-[400px] w-[500px] rounded-full bg-[#0056B3] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm">
          <Link href="/resources" className="font-medium text-white/80 hover:text-white transition">
            Resources
          </Link>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/50">
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <span className="text-[var(--datatriad-accent)] font-medium">Ai Governance Kit</span>
        </nav>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left: Article info */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h1
                className="text-5xl font-bold leading-[0.9375em] text-white"
                style={{ fontFamily: 'var(--font-geist-sans), DM Sans, sans-serif' }}
              >
                The AI Governance Starter Kit
              </h1>
              <p className="text-lg leading-relaxed text-white/80">
                A plain-English walkthrough of what responsible AI governance actually requires — from
                data lineage to model explainability. No jargon, no theory. Just the practical
                framework your organisation needs to get started.
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F5F5F5]">
                <span className="text-sm font-semibold text-[#0A0A0A]">DS</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-white/90">Dr Samuel Ubanatu</p>
                <div className="flex items-center gap-1">
                  <span className="text-[10px] font-medium text-white/60">CEO, DataTriad</span>
                  <span className="text-[10px] text-white/40">· AI Governance Specialist</span>
                </div>
              </div>
            </div>

            {/* Date & reading time */}
            <div className="flex items-center gap-2 text-sm text-white/70">
              <span>May 9, 2025</span>
              <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
              <span>37 mins read</span>
            </div>
          </div>

          {/* Right: Article image */}
          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
              <Image
                src={assetPath('/resources/ai-governance-hero.png')}
                alt="AI Governance — brain network with productivity dashboards"
                width={432}
                height={445}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
