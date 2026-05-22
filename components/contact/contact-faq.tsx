'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Can I switch between plans at any time?',
    a: 'Yes. You can upgrade or downgrade your plan at any time from your account settings. Changes take effect at the start of your next billing cycle.',
  },
  {
    q: 'Is there a free trial available?',
    a: 'We offer a 7-day free trial on the Individual and Professional plans so you can explore the platform before committing.',
  },
  {
    q: 'Can I access DataTriad on a mobile device or slow connection?',
    a: 'Yes. The platform is fully responsive and optimised for mobile devices. Course content is designed to load efficiently on slower connections.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit and debit cards, as well as bank transfers for annual Enterprise contracts.',
  },
  {
    q: 'What happens when I cancel my subscription?',
    a: 'You retain access until the end of your current billing period. Your progress and certificates are preserved should you choose to resubscribe.',
  },
];

export function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl border-2 border-dashed border-[var(--datatriad-cyan-strong)]/40 p-8">
          <h2 className="text-center text-3xl font-bold text-[var(--datatriad-ink)] sm:text-4xl">
            Questions we hear most often
          </h2>

          <div className="mt-8 space-y-3">
            {faqs.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="overflow-hidden rounded-2xl bg-[#f5f5f5]"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-medium text-[var(--datatriad-ink)] sm:text-base">
                      {item.q}
                    </span>
                    <span
                      className={`shrink-0 text-xl font-light text-[var(--datatriad-muted)] transition-transform duration-200 ${
                        isOpen ? 'rotate-45' : 'rotate-0'
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="px-5 pb-5 text-sm leading-relaxed text-[var(--datatriad-muted)]">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
