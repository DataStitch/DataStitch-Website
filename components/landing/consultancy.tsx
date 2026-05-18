const trendBars = [44, 56, 74, 18, 58, 52, 52, 74, 56];

export function ConsultancySection() {
  return (
    <section className="bg-[var(--datastitch-navy)] px-6 py-20 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-5">
            <span className="inline-flex rounded-full border border-[var(--datastitch-accent)]/30 bg-[var(--datastitch-accent)]/12 px-4 py-1 text-sm font-semibold text-[var(--datastitch-accent)]">
              datastitch Consultancy
            </span>
            <h2 className="max-w-xl text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              AI <span className="text-[var(--datastitch-accent)]">governance </span> isn&apos;t optional. Your evidence shouldn&apos;t be improvised.
            </h2>
            <button className="inline-flex rounded-full bg-[var(--datastitch-accent)] px-6 py-3 text-sm font-semibold text-[var(--datastitch-accent-ink)] transition hover:-translate-y-0.5 hover:brightness-110">
              Book Consultation Call
            </button>
          </div>

          <div className="space-y-3 pt-2 text-lg leading-relaxed text-white/85">
            <p>
              We don’t just advise; we architect. Our consultancy provides the surgical precision required to deliver AI that is both powerful and compliant.
            </p>
            <p>
              We work with organisations to review, refine, and strengthen the systems behind responsible AI delivery.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/[0.03] to-transparent p-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:p-5">
          <div className="grid gap-4 lg:grid-cols-12">
            <article className="rounded-2xl border border-white/15 bg-white/[0.04] p-4 lg:col-span-8">
              <div className="mb-5 flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-white/90">Bias Score Trend</h3>
                <button className="inline-flex items-center gap-2 rounded-full border border-white/35 px-3 py-1 text-xs font-medium text-white/80">
                  Last 30 days
                  <span aria-hidden className="text-white/60">⌄</span>
                </button>
              </div>

              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent px-4 pb-4 pt-8">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[length:100%_20px] opacity-50" />

                <div className="relative z-10 flex h-48 items-end gap-3 sm:gap-4">
                  {trendBars.map((height, index) => {
                    const isActive = index === 4;

                    return (
                      <div key={index} className="relative flex-1">
                        {isActive ? (
                          <>
                            <div className="absolute -top-13 left-1/2 -translate-x-1/2 rounded-full bg-[var(--datastitch-accent)] px-3 py-1 text-[11px] font-semibold text-[var(--datastitch-accent-ink)] shadow-[0_0_12px_rgba(61,223,208,0.5)]">
                              75% Optimal
                            </div>
                            <div className="absolute -top-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[var(--datastitch-accent)]" />
                          </>
                        ) : null}
                        <div
                          className={`w-full rounded-md ${
                            isActive
                              ? "bg-gradient-to-b from-[#e5fbf8] via-[#86d9d0] to-[#2ca8a3] shadow-[0_0_24px_rgba(61,223,208,0.35)]"
                              : "bg-white/18"
                          }`}
                          style={{ height: `${height*2.7}px` }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </article>

            <div className="space-y-4 lg:col-span-4">
              <article className="rounded-2xl border border-white/20 bg-white/[0.04] p-5">
                <p className="text-5xl font-semibold leading-none">14</p>
                <p className="mt-2 text-2xl font-medium text-white/90">Vault Docs</p>
                <button className="mt-8 text-sm font-medium text-white/80 underline underline-offset-4">Quick Scan</button>
              </article>

              <article className="rounded-2xl border border-white/20 bg-white/[0.04] p-5">
                <div className="mb-4 h-5 w-5 rounded-full border border-[var(--datastitch-accent)]/70" />
                <h3 className="text-2xl font-semibold text-white/90">Architecture Review</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  Deep-dive technical assessment of your AI pipeline&apos;s integrity and security.
                </p>
                <button className="mt-6 text-sm font-medium text-white/80 underline underline-offset-4">Learn More</button>
              </article>
            </div>

            <article className="rounded-2xl border border-white/20 bg-white/[0.04] p-5 lg:col-span-5">
              <div className="mb-4 h-5 w-5 rounded-full border border-[var(--datastitch-accent)]/70" />
              <h3 className="text-3xl font-semibold text-white/90">Policy Development</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                Custom-built AI governance policies that scale with your innovation roadmap.
              </p>
              <button className="mt-6 text-sm font-medium text-white/80 underline underline-offset-4">Learn More</button>
            </article>

            <article className="rounded-2xl border border-white/20 bg-white/[0.04] p-5 lg:col-span-7">
              <div className="grid items-center gap-6 sm:grid-cols-[1fr_auto]">
                <div>
                  <h3 className="text-3xl font-semibold text-white/90">Continuous Monitoring</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    Ongoing oversight to detect bias, drift, and regulatory non-compliance in production models.
                  </p>
                </div>
                <div className="mx-auto grid h-30 w-30 place-items-center rounded-full bg-[conic-gradient(var(--datastitch-accent)_0_75%,rgba(255,255,255,0.28)_75%_85%,rgba(255,255,255,0.12)_85%_100%)] p-4">
                  <div className="grid h-full w-full place-items-center rounded-full bg-[#0b2b53] text-5xl font-semibold">75%</div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
