'use client';

import { useState } from 'react';

export function ResourcesHero() {
  const [query, setQuery] = useState('');

  return (
    <section
      className="relative overflow-hidden py-24"
      style={{
        background: 'linear-gradient(135deg, #02284b 0%, #006ADD 50%, #1a4a8a 100%)',
      }}
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -right-40 -top-20 h-[600px] w-[700px] rounded-full bg-[#3DDFD0] blur-[160px]" />
        <div className="absolute -left-40 top-40 h-[400px] w-[500px] rounded-full bg-[#0056B3] blur-[120px]" />
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 text-center">
        <h1
          className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[56px]"
          style={{ fontFamily: 'var(--font-geist-sans), DM Sans, sans-serif' }}
        >
          The resources you need to build, govern, and lead with AI
        </h1>
        <p className="text-lg leading-relaxed text-white/75">
          Practical guides, tools, and insights for data professionals
          <br className="hidden sm:block" /> and the organisations they serve.
        </p>

        {/* Search bar */}
        <div className="flex w-full max-w-xl items-center gap-3 rounded-full border border-white/20 bg-white px-5 py-3 shadow-lg">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9CA3AF"
            strokeWidth="2"
            className="shrink-0"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for guide, tools , governance frameworks..."
            className="flex-1 bg-transparent text-base text-[#1a1a1a] outline-none placeholder:text-[#9CA3AF]"
          />
          <button
            type="button"
            aria-label="Search"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#006ADD] transition hover:brightness-110"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
