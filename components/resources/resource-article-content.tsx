import Image from 'next/image';
import { assetPath } from '@/lib/asset-path';

const pillars = [
  {
    number: '01',
    title: 'Data lineage and provenance',
    body: 'Can you trace every data point in your training set back to its source? Who collected it, under what consent, and how was it processed before it reached your model? If you can\'t answer this in under an hour, your governance starts here.',
  },
  {
    number: '02',
    title: 'Bias assessment and monitoring',
    body: 'Have you tested your model\'s outputs across demographic groups? Bias doesn\'t always show up at launch — it can emerge or shift as the model encounters new data distributions in production.',
  },
  {
    number: '03',
    title: 'Version control and model registry',
    body: 'Every model change — a retrain, a threshold adjustment, a new feature — must be tracked. If your model registry is a shared folder with files named "model_final_v3_REAL.pkl", this pillar needs work.',
    expandable: true,
  },
  {
    number: '04',
    title: 'Model explainability',
    body: 'Can you explain, in plain language, why your model made a specific decision? For high-risk AI (clinical, credit, hiring), this isn\'t optional — it\'s a legal requirement under both the EU AI Act and existing UK discrimination law.',
  },
];

export function ResourceArticleContent() {
  return (
    <section className="bg-[#F2F2F2] py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[800px]">

          {/* Section: Why governance */}
          <div className="mb-10 flex flex-col gap-6">
            <h2
              className="text-[32px] font-bold leading-none text-[#1A1A1A]"
              style={{ fontFamily: 'var(--font-geist-sans), DM Sans, sans-serif' }}
            >
              Why governance is not a compliance checkbox
            </h2>
            <div className="flex flex-col gap-5 text-[18px] leading-[1.444] text-[#555555]">
              <p>
                Most organisations treat AI governance as something that happens after the build — a
                set of audits and sign-offs that happen once the model is already in production.
                That&apos;s the wrong order. Governance built retrospectively costs five to ten times
                more than governance built in from the start. The documentation doesn&apos;t exist.
                The decisions can&apos;t be traced. The data lineage is a black box.
              </p>
              <p>
                This guide walks you through what a governance-first approach actually looks like in
                practice — and how to apply it whether you&apos;re starting from scratch or trying to
                bring existing systems into line.
              </p>
            </div>
          </div>

          {/* Article main image */}
          <div className="relative mb-10 h-[360px] w-full overflow-hidden rounded-2xl sm:h-[440px]">
            <Image
              src={assetPath('/resources/ai-governance-hero.png')}
              alt="AI Governance — brain network with productivity dashboards"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Callout: Who this guide is for */}
          <div
            className="mb-16 rounded-lg border-l-4 border-[#006ADD] px-6 py-4"
            style={{ background: 'rgba(0, 66, 138, 0.1)' }}
          >
            <p className="text-[18px] leading-[1.444] text-[#555555]">
              <span className="font-semibold text-[#1A1A1A]">Who this guide is for:</span> Data
              engineers, AI leads, and technical programme directors who need to understand governance
              requirements without wading through 200-page regulatory documents. Also useful for CDOs
              who want a clear brief to share with their technical teams.
            </p>
          </div>

          {/* Section: Four pillars */}
          <div className="mb-10 flex flex-col gap-24">
            {/* Heading + intro */}
            <div className="flex flex-col gap-6">
              <h2
                className="text-[32px] font-bold leading-none text-[#1A1A1A]"
                style={{ fontFamily: 'var(--font-geist-sans), DM Sans, sans-serif' }}
              >
                The four pillars of AI governance
              </h2>
              <p className="text-[18px] leading-[1.444] text-[#555555]">
                Every major AI governance framework — EU AI Act, ISO/IEC 42001, the UK AI Safety
                Institute guidance — converges on the same five pillars. The terminology differs but
                the substance is consistent.
              </p>
            </div>

            {/* Pillar cards grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {pillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="flex flex-col gap-11 rounded-2xl border border-[rgba(221,221,221,0.5)] p-[45px_24px] backdrop-blur-[40px]"
                  style={{ background: 'rgba(61, 223, 208, 0.1)' }}
                >
                  <div className="flex flex-col gap-6">
                    {/* Number badge */}
                    <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#199589]">
                      <span className="text-[18px] font-semibold leading-none text-white/80">
                        {pillar.number}
                      </span>
                    </div>

                    {/* Expand icon for card 03 */}
                    {pillar.expandable && (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#555555"
                        strokeWidth="2"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    )}

                    <div className="flex flex-col gap-2">
                      <h3
                        className="text-[24px] font-bold leading-[1.302] text-[#1A1A1A]"
                        style={{ fontFamily: 'var(--font-geist-sans), DM Sans, sans-serif' }}
                      >
                        {pillar.title}
                      </h3>
                      <p className="text-[16px] leading-[1.5] text-[#555555]">{pillar.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Callout: If most answers were partial */}
          <div
            className="rounded-lg border-l-4 border-[#006ADD] px-6 py-4"
            style={{ background: 'rgba(0, 66, 138, 0.1)' }}
          >
            <p className="text-[18px] font-bold leading-[1.444] text-[#555555]">
              If most of your answers were partial or false:{' '}
              <span className="font-normal">
                You&apos;re in good company — and exactly where this guide, and the tools below, can
                help. Start with pillar 1 (data lineage). Everything else builds from there.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
