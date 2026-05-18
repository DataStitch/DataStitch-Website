type TrustStripProps = {
  entities: string[];
};

export function TrustStrip({ entities }: TrustStripProps) {
  return (
    <section className="bg-[var(--datastitch-cream)] px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-lg text-[var(--datastitch-muted)]">Trusted by Global Entities & Regulatory Bodies</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {entities.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[var(--datastitch-border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--datastitch-ink)]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
