const categories = ['Explainability', 'Fairness', 'Transparency', 'Accountability', 'Data min.', 'Human oversight'];
const feb = [72, 58, 65, 80, 43, 70];
const mar = [78, 65, 72, 85, 52, 75];
const MAX_H = 72; // px

export function HeroWellbeingCard() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold text-[#0a1628] mb-0.5">
        Wellbeing indicator scores — monthly comparison
      </p>
      <p className="text-[10px] text-gray-400 mb-3">
        Six governance dimensions · Scale 0–100 · Higher is better · Jan–Mar 2026
      </p>

      {/* Chart */}
      <div className="flex items-end gap-1.5" style={{ height: `${MAX_H}px` }}>
        {categories.map((cat, i) => (
          <div key={cat} className="flex flex-1 items-end gap-0.5">
            <div
              className="flex-1 rounded-sm bg-blue-200"
              style={{ height: `${(feb[i] / 100) * MAX_H}px` }}
            />
            <div
              className="flex-1 rounded-sm bg-[#3ddfd0]"
              style={{ height: `${(mar[i] / 100) * MAX_H}px` }}
            />
          </div>
        ))}
      </div>

      {/* X-axis */}
      <div className="flex gap-1.5 mt-1">
        {categories.map((cat) => (
          <div key={cat} className="flex-1 text-center text-[8px] text-gray-400 truncate leading-tight">
            {cat.split(' ')[0]}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-2 flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-blue-200" />
          <span className="text-[10px] text-gray-500">February</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#3ddfd0]" />
          <span className="text-[10px] text-gray-500">March</span>
        </div>
      </div>
    </div>
  );
}
