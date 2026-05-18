export function GovernanceHealthTrendCard() {
  return (
    <article className="rounded-[30px] border border-[#d9d9d9] bg-[#f4f4f4] p-7 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-[48px] font-semibold leading-none text-[#2f3237] md:text-[56px]">
          Governance Health Trend
        </h3>
        <button className="rounded-full border border-[#c8c8c8] bg-[#f8f8f8] px-6 py-2 text-[14px] font-medium text-[#8a8a8a]">
          Last 180 days
        </button>
      </div>

      <svg viewBox="0 0 1120 430" className="h-auto w-full" role="img" aria-label="Governance trend chart">
        <defs>
          <linearGradient id="lineBlue" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1a6fce" />
            <stop offset="100%" stopColor="#1868c0" />
          </linearGradient>
        </defs>

        {[40, 80, 120, 160, 200, 240, 280, 320, 360, 400].map((y) => (
          <line key={y} x1="0" y1={y} x2="1120" y2={y} stroke="#d8d8d8" strokeWidth="2" />
        ))}

        <polyline
          fill="none"
          stroke="url(#lineBlue)"
          strokeWidth="4"
          points="40,200 180,100 320,40 460,90 600,140 720,310 860,210 980,150 1080,148"
        />

        <polyline
          fill="none"
          stroke="#e3a40a"
          strokeWidth="4"
          strokeDasharray="10 10"
          points="40,230 170,110 330,95 480,120 600,150 720,370 860,240 930,160 1080,195"
        />

        <line x1="890" y1="140" x2="890" y2="390" stroke="#cecece" strokeWidth="2" strokeDasharray="6 8" />

        <circle cx="470" cy="120" r="12" fill="#1a6fce" />
        <circle cx="470" cy="120" r="32" fill="rgba(51,207,194,0.18)" />
        <circle cx="880" cy="165" r="12" fill="#1a6fce" />
        <circle cx="880" cy="165" r="32" fill="rgba(51,207,194,0.18)" />

        <text x="725" y="155" fontSize="44" fill="#d3a000" fontWeight="500">↗ 40%</text>

        {["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"].map((m, i) => (
          <text key={m} x={40 + i * 95} y="305" fontSize="24" fill="#737373">{m}</text>
        ))}
      </svg>
    </article>
  );
}