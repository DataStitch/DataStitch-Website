'use client';

import { useState } from 'react';

export function ResourceNewsletterCta() {
  const [email, setEmail] = useState('');

  return (
    <section
      className="relative overflow-hidden py-20"
      style={{ background: '#0056B3' }}
    >
      {/* Decorative blur blobs */}
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -left-20 -top-20 h-[500px] w-[600px] rounded-full bg-[#FFD9DD] blur-[500px]" />
        <div className="absolute -right-20 bottom-0 h-[400px] w-[500px] rounded-full bg-[#FFEDC3] blur-[500px]" />
      </div>

      <div className="relative mx-auto flex max-w-[500px] flex-col items-center gap-11 px-6 text-center">
        {/* Heading */}
        <div className="flex flex-col items-center gap-3">
          <h2
            className="text-[45px] font-bold leading-[0.822] text-white"
            style={{ fontFamily: 'var(--font-geist-sans), DM Sans, sans-serif' }}
          >
            Stay sharp. Stay ahead.
          </h2>
          <p className="text-[18px] leading-[1.444] text-[#D8F9F6]">
            One fortnightly email with practical insights on AI governance, career growth, and real
            tools practitioners use, no noise.
          </p>
        </div>

        {/* Email input row */}
        <div className="flex w-full items-center justify-between gap-2 rounded-full border border-white/30 bg-white px-6 py-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 bg-transparent text-[18px] text-[#7C7C7C] outline-none placeholder:text-[#7C7C7C]"
          />
          <button
            type="button"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#00428A] px-5 py-4 text-base font-semibold text-[#FAFAFA] transition hover:brightness-110"
          >
            Subscribe
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
