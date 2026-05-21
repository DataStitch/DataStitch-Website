const circumference = 2 * Math.PI * 40;

const tealLen = circumference * 0.6;
const amberLen = circumference * 0.25;
const navyLen = circumference * 0.15;

export function HeroGovernanceCard() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
      <p className="mb-3 text-xs font-semibold text-[#0a1628]">Overall governance score</p>
      <div className="flex items-center gap-5">
        {/* Donut chart */}
        <div className="relative flex-shrink-0">
          <svg width="96" height="96" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="14" />
            {/* Teal – strong (60%) */}
            <circle
              cx="50" cy="50" r="40" fill="none" stroke="#3ddfd0" strokeWidth="14"
              strokeDasharray={`${tealLen} ${circumference}`}
              strokeDashoffset={0}
              transform="rotate(-90 50 50)"
            />
            {/* Amber – moderate (25%) */}
            <circle
              cx="50" cy="50" r="40" fill="none" stroke="#f59e0b" strokeWidth="14"
              strokeDasharray={`${amberLen} ${circumference}`}
              strokeDashoffset={-tealLen}
              transform="rotate(-90 50 50)"
            />
            {/* Navy – at risk (15%) */}
            <circle
              cx="50" cy="50" r="40" fill="none" stroke="#001e3f" strokeWidth="14"
              strokeDasharray={`${navyLen} ${circumference}`}
              strokeDashoffset={-(tealLen + amberLen)}
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-bold text-[#0a1628]">75</span>
            <span className="text-[10px] text-gray-400">Score / 100</span>
          </div>
        </div>

        {/* Verdict */}
        <div className="space-y-1">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span className="text-[11px] text-gray-500">Verdict</span>
          </div>
          <p className="text-xs font-medium text-gray-700 leading-snug">
            Moderate — remediation advised
          </p>
        </div>
      </div>
    </div>
  );
}
