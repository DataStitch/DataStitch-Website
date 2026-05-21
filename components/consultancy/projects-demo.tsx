const milestones = [
  { action: 'Discovery & Architecture Review', date: '12 Mar 2026, 09:41', done: true },
  { action: 'Governance Framework Design', date: '13 Mar 2026, 11:02', done: true },
  { action: 'Fabric Workspace Provisioning', date: '15 Mar 2026, 14:30', done: true },
  { action: 'Model Migration (Phase 1 of 3)', date: '17 Mar 2026, 16:15', done: true },
  { action: 'Bias Testing & Explainability Audit', date: 'Weeks 14–16 · In progress', done: false, inProgress: true },
];

export function ProjectsDemo() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold text-[#0a1628]">Project timeline</p>
      <p className="mt-0.5 text-xs text-gray-400 mb-4">AI Governance Programme · Active delivery</p>

      <div className="relative space-y-0">
        {/* Vertical line */}
        <div className="absolute left-[10px] top-2 bottom-2 w-px bg-gray-100" />

        {milestones.map((m, i) => (
          <div key={i} className="relative flex items-start gap-3 pb-4 last:pb-0">
            {/* Dot */}
            <div className={`relative z-10 mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 ${
              m.inProgress
                ? 'border-[var(--datastitch-accent)] bg-white'
                : m.done
                ? 'border-[var(--datastitch-accent)] bg-[var(--datastitch-accent)]'
                : 'border-gray-200 bg-white'
            }`}>
              {m.done && !m.inProgress && (
                <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2.5">
                  <polyline points="2 6 5 9 10 3" />
                </svg>
              )}
              {m.inProgress && (
                <div className="h-1.5 w-1.5 rounded-full bg-[var(--datastitch-accent)]" />
              )}
            </div>

            {/* Content */}
            <div>
              <p className={`text-xs font-semibold ${m.inProgress ? 'text-[#0a1628]' : m.done ? 'text-gray-500' : 'text-gray-400'}`}>
                {m.action}
              </p>
              <p className="mt-0.5 text-[10px] text-gray-400">{m.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
