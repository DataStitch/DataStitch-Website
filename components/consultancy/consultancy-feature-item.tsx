interface ConsultancyFeatureItemProps {
  title: string;
  description: string;
}

export function ConsultancyFeatureItem({ title, description }: ConsultancyFeatureItemProps) {
  return (
    <div className="flex gap-3 rounded-2xl bg-gray-50/80 p-4">
      {/* Icon */}
      <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--datatriad-accent)]/15">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--datatriad-accent-ink)]">
          <rect x="3" y="3" width="18" height="18" rx="2" strokeDasharray="4 2" />
        </svg>
      </div>
      {/* Text */}
      <div className="space-y-0.5">
        <p className="text-sm font-semibold text-[#0a1628]">{title}</p>
        <p className="text-sm leading-snug text-gray-500">{description}</p>
      </div>
    </div>
  );
}
