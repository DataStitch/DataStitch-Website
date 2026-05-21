const slots = [
  { time: '9:00 AM', available: false },
  { time: '10:30 AM', available: true },
  { time: '1:00 PM', available: true },
  { time: '2:30 PM', available: false },
  { time: '4:00 PM', available: true },
];

export function VirtualMentorDemo() {
  return (
    <div className="w-full max-w-sm space-y-3">
      {/* Booking card */}
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-teal-50">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e554f" strokeWidth="1.8">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#0a1628]">Book a Session</p>
            <p className="text-xs text-gray-400">Today · Available slots</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {slots.map((s) => (
            <button
              key={s.time}
              disabled={!s.available}
              className={`rounded-lg border py-2 text-xs font-medium transition ${
                s.available
                  ? 'border-[var(--datastitch-accent)]/30 bg-[var(--datastitch-accent)]/5 text-[var(--datastitch-accent-ink)] hover:bg-[var(--datastitch-accent)]/15'
                  : 'border-gray-100 bg-gray-50 text-gray-300 cursor-not-allowed'
              }`}
            >
              {s.time}
            </button>
          ))}
        </div>
      </div>

      {/* Session details */}
      <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
        <p className="mb-2.5 text-xs font-semibold text-gray-400 uppercase tracking-wide">Session type</p>
        <div className="space-y-2">
          {[
            { duration: '30 min', label: 'Rapid advisory session', icon: '⚡' },
            { duration: '60 min', label: 'Deep-dive consultation', icon: '🔍' },
          ].map((t) => (
            <div key={t.duration} className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">
              <span className="text-base">{t.icon}</span>
              <div>
                <p className="text-xs font-semibold text-[#0a1628]">{t.label}</p>
                <p className="text-[10px] text-gray-400">{t.duration} · Microsoft Teams</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
