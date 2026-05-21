// 12-week PSI drift data for three models
const weeks = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const creditData = [0.03, 0.04, 0.05, 0.05, 0.07, 0.09, 0.06, 0.05, 0.04, 0.06, 0.07, 0.05];
const fraudData  = [0.02, 0.03, 0.02, 0.04, 0.03, 0.04, 0.05, 0.03, 0.02, 0.03, 0.04, 0.03];
const THRESHOLD  = 0.08;
const MAX_VAL    = 0.12;

const CHART_W = 240;
const CHART_H = 80;

function buildPath(data: number[]) {
  return data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * CHART_W;
      const y = CHART_H - (v / MAX_VAL) * CHART_H;
      return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');
}

export function FractionalDemo() {
  const thresholdY = CHART_H - (THRESHOLD / MAX_VAL) * CHART_H;

  return (
    <div className="w-full max-w-sm rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold text-[#0a1628]">Model drift index — 12-week trend</p>
      <p className="mt-0.5 text-xs text-gray-400 mb-3">
        Population stability index (PSI) · Alert threshold: 0.08
      </p>

      {/* Legend */}
      <div className="mb-3 flex flex-wrap gap-3">
        {[
          { label: 'CreditScore-v3', color: '#3ddfd0' },
          { label: 'FraudDetect-v7', color: '#f59e0b' },
          { label: 'Threshold', color: '#94a3b8' },
        ].map((l) => (
          <div key={l.label} className="flex items-center gap-1.5">
            <span className="h-2 w-5 rounded-sm" style={{ background: l.color, opacity: l.label === 'Threshold' ? 0.6 : 1 }} />
            <span className="text-[10px] text-gray-500">{l.label}</span>
          </div>
        ))}
      </div>

      {/* Chart */}
      <svg
        viewBox={`0 0 ${CHART_W} ${CHART_H}`}
        width="100%"
        height={CHART_H}
        style={{ overflow: 'visible' }}
      >
        {/* Gridlines */}
        {[0, 0.04, 0.08, 0.12].map((v) => {
          const y = CHART_H - (v / MAX_VAL) * CHART_H;
          return (
            <line
              key={v}
              x1={0} y1={y} x2={CHART_W} y2={y}
              stroke="#e5e7eb" strokeWidth="1"
            />
          );
        })}

        {/* Threshold dashed line */}
        <line
          x1={0} y1={thresholdY} x2={CHART_W} y2={thresholdY}
          stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 3"
        />

        {/* Credit score line */}
        <path d={buildPath(creditData)} fill="none" stroke="#3ddfd0" strokeWidth="2" strokeLinejoin="round" />

        {/* Fraud detect line */}
        <path d={buildPath(fraudData)} fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinejoin="round" />
      </svg>

      {/* X-axis labels */}
      <div className="mt-1 flex justify-between">
        {weeks.map((w) => (
          <span key={w} className="text-[8px] text-gray-400">{w}</span>
        ))}
      </div>
    </div>
  );
}
