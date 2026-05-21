const miniCircumference = 2 * Math.PI * 15;

export function HeroFloatingCards() {
  return (
    <>
      {/* Audit Readiness */}
      <div className="absolute -left-4 bottom-8 w-48 rounded-xl border border-gray-100 bg-white p-3 shadow-xl sm:-left-10">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-50">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0e554f" strokeWidth="2">
              <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
            </svg>
          </div>
          <span className="text-xs font-semibold text-[#0a1628]">Audit Readiness</span>
        </div>
        <div className="flex items-center gap-2">
          {/* Mini donut */}
          <div className="relative flex-shrink-0">
            <svg width="36" height="36" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="15" fill="none" stroke="#e5e7eb" strokeWidth="6" />
              <circle
                cx="20" cy="20" r="15" fill="none" stroke="#3ddfd0" strokeWidth="6"
                strokeDasharray={`${miniCircumference * 0.75} ${miniCircumference}`}
                strokeDashoffset={0}
                transform="rotate(-90 20 20)"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-[#0a1628]">
              75%
            </div>
          </div>
          <div>
            <p className="text-[10px] font-semibold text-[#0a1628]">Governance Score</p>
            <span className="inline-block rounded-full bg-amber-50 border border-amber-200 px-2 py-0.5 text-[9px] text-amber-700">
              To improve
            </span>
          </div>
        </div>
      </div>

      {/* Model Drift */}
      <div className="absolute -right-2 top-8 w-44 rounded-xl border border-gray-100 bg-white p-3 shadow-xl sm:-right-8">
        <div className="mb-2.5 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-50">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0e554f" strokeWidth="2">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </div>
          <span className="text-xs font-semibold text-[#0a1628]">Model Drift</span>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-gray-500">Status</span>
            <span className="rounded-full bg-teal-50 px-2 py-0.5 text-[10px] font-semibold text-teal-700">
              Low
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-gray-500">Threshold</span>
            <span className="text-[10px] text-gray-500">Within threshold</span>
          </div>
        </div>
      </div>
    </>
  );
}
