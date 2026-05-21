const models = ['Credit Score-v3', 'FraudDetect-v7', 'AMI-flagging', 'ChurnPredict-v2'];
// Bias % values – first group breaches threshold (>5%), rest within
const biasValues = [8.2, 3.1, 4.7, 2.4];
const THRESHOLD = 5;
const MAX = 10;
const CHART_H = 100;

export function RetainerDemo() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold text-[#0a1628]">Bias scores by model — March 2026</p>
      <p className="mt-0.5 text-xs text-gray-400">Demographic parity gap (%) · Threshold: 5%</p>

      {/* Legend */}
      <div className="mt-3 flex flex-wrap items-center gap-3">
        {[
          { label: 'Threshold breached', color: '#ef4444' },
          { label: 'Within threshold', color: '#3ddfd0' },
          { label: 'Limit (5%)', color: '#f59e0b' },
        ].map((l) => (
          <div key={l.label} className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full" style={{ background: l.color }} />
            <span className="text-[10px] text-gray-500">{l.label}</span>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="relative mt-4">
        {/* Y-axis labels */}
        <div className="flex">
          <div className="flex w-8 flex-col-reverse justify-between pr-1" style={{ height: `${CHART_H}px` }}>
            {[0, 4, 5, 8, 10].map((v) => (
              <span key={v} className="text-[9px] text-gray-400 text-right">{v}%</span>
            ))}
          </div>

          {/* Bars + threshold line */}
          <div className="relative flex flex-1 items-end gap-3">
            {/* Threshold line */}
            <div
              className="pointer-events-none absolute left-0 right-0 border-t border-dashed border-amber-400"
              style={{ bottom: `${(THRESHOLD / MAX) * CHART_H}px` }}
            />

            {models.map((m, i) => {
              const breached = biasValues[i] > THRESHOLD;
              return (
                <div key={m} className="flex flex-1 flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t-md"
                    style={{
                      height: `${(biasValues[i] / MAX) * CHART_H}px`,
                      background: breached ? '#ef4444' : '#3ddfd0',
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* X-axis */}
        <div className="ml-8 mt-1.5 flex gap-3">
          {models.map((m) => (
            <div key={m} className="flex-1 text-center text-[9px] text-gray-400 leading-tight">
              {m}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
