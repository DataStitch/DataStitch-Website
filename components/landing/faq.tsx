type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  items: FaqItem[];
};

export function FaqSection({ items }: FaqSectionProps) {
  return (
    <section className="bg-[var(--suchure-bg)] px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-bold text-[var(--suchure-ink)] sm:text-4xl">Questions we get asked every cohort</h2>

        <div className="mt-8 space-y-4">
          {items.map((item) => (
            <details key={item.question} className="rounded-2xl border border-[var(--suchure-border)] bg-white p-5">
              <summary className="cursor-pointer list-none text-base font-medium text-[var(--suchure-ink)]">
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[var(--suchure-muted)]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
