export function QuickScanDemo() {
  return (
    <div className="w-full max-w-sm space-y-3">
      {/* Intake progress card */}
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            {/* Icon badge */}
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-teal-50">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e554f" strokeWidth="1.8">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#0a1628]">AI Governance Assessment — Q2 2026</p>
              <p className="mt-0.5 text-xs text-gray-400">Last updated 2 hours ago</p>
            </div>
          </div>
          <button className="flex-shrink-0 rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-50">
            Resume Intake
          </button>
        </div>

        {/* Progress */}
        <div className="mt-4 space-y-2">
          {/* Bar */}
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
            <div className="h-full w-1/2 rounded-full bg-[var(--datastitch-accent)]" />
          </div>
          {/* Labels */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">Progress: Step 2 of 4</span>
            <span className="text-xs font-semibold text-[var(--datastitch-accent-ink)]">50%</span>
          </div>
        </div>
      </div>

      {/* Step tracker */}
      <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
        <p className="mb-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Intake steps</p>
        <div className="space-y-2">
          {[
            { step: 'Organisation profile', done: true },
            { step: 'AI tool inventory', done: true },
            { step: 'Architecture upload', done: false, active: true },
            { step: 'Governance questionnaire', done: false },
          ].map((s) => (
            <div key={s.step} className="flex items-center gap-2.5">
              <div className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
                s.done ? 'bg-[var(--datastitch-accent)]' : s.active ? 'border-2 border-[var(--datastitch-accent)] bg-white' : 'border-2 border-gray-200 bg-white'
              }`}>
                {s.done && (
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2">
                    <polyline points="2 6 5 9 10 3" />
                  </svg>
                )}
              </div>
              <span className={`text-xs ${s.done ? 'text-gray-400 line-through' : s.active ? 'font-semibold text-[#0a1628]' : 'text-gray-400'}`}>
                {s.step}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
