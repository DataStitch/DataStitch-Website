export function ComplianceVerifiedCard() {
  return (
    <article className="rotate-[5deg] rounded-[24px] border border-[#d9d9d9] bg-[#f4f4f4] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-[#33cec2]" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />
          <path d="M8.5 12.5l2.3 2.3 4.7-5" />
        </svg>
        <h4 className="text-[20px] font-semibold text-[#2f3237]">Compliance Verified</h4>
      </div>

      <div className="mt-5 h-3 rounded-full bg-[#d4d4d4]">
        <div className="h-3 w-[80%] rounded-full bg-[#34c9bf]" />
      </div>

      <p className="mt-5 text-[18px] leading-snug text-[#5b5b5b]">
        Governance score optimized for Enterprise deployment.
      </p>
    </article>
  );
}