type StatRowProps = {
  label: string;
  value: number;
  fillClass: string;
};

function StatRow({ label, value, fillClass }: StatRowProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between">
        <p className="text-[24px] font-medium text-[#5a5a5a]">{label}</p>
        <p className="text-[24px] text-[#5a5a5a]">{value}%</p>
      </div>
      <div className="h-5 rounded-full bg-[#d2d2d4]">
        <div className={`h-5 rounded-full ${fillClass}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export function RealTimeAuditCard() {
  return (
    <article className="rotate-[-6deg] rounded-[30px] border border-[#d9d9d9] bg-[#f4f4f4] p-8 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
      <h3 className="text-[56px] font-semibold leading-none text-[#2f3237]">Real-time audit</h3>

      <div className="mt-8 flex items-center gap-4">
        <span className="rounded-full bg-[#23bf74] px-7 py-3 text-[42px] font-medium text-white">On Track</span>
        <span className="rounded-full bg-[#d9e8e1] px-6 py-3 text-[42px] font-medium text-[#1cb566]">↗ 20%</span>
        <span className="text-[42px] text-[#555555]">Last month</span>
      </div>

      <div className="my-8 h-px bg-[#d0d0d0]" />

      <div className="space-y-8">
        <StatRow label="Governance Coverage" value={35} fillClass="bg-[#e1a306]" />
        <StatRow label="Policy Compliance" value={73} fillClass="bg-[#34c9bf]" />
        <StatRow label="Risk Review Status" value={49} fillClass="bg-[#eba500]" />
      </div>
    </article>
  );
}