export function QuickScanCard() {
  return (
    <article className="rotate-[4deg] rounded-[24px] border border-[#d9d9d9] bg-[#f4f4f4] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
      <p className="text-[18px] text-[#666666]">Quick Scan</p>

      <div className="mt-2 flex items-center justify-between gap-3">
        <h4 className="text-[48px] font-semibold leading-none text-[#2f3237]">Audit-ready</h4>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#23bf74] text-2xl text-white">✓</span>
      </div>

      <p className="mt-2 text-[20px] font-medium text-[#d69a00]">3 risks resolved</p>
    </article>
  );
}