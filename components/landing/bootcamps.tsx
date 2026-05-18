import { SectionHeading } from "./section-heading";

type Bootcamp = {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  rating: string;
  date: string;
  price: string;
};

type BootcampSectionProps = {
  bootcamps: Bootcamp[];
};

export function BootcampSection({ bootcamps }: BootcampSectionProps) {
  return (
    <section className="bg-[var(--suchure-cream)] px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Cohort Bootcamps"
          description="Join focused live cohorts designed for practical implementation and regulatory-ready outcomes."
          centered={false}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {bootcamps.map((bootcamp) => (
            <article key={bootcamp.id} className="rounded-2xl border border-[var(--suchure-border)] bg-white p-5">
              <div className="mb-4 rounded-lg bg-[var(--suchure-soft)] p-3 text-xs font-medium text-[var(--suchure-cyan-strong)]">
                {bootcamp.level}
              </div>
              <h3 className="text-xl font-bold text-[var(--suchure-ink)]">{bootcamp.title}</h3>
              <p className="mt-2 text-sm text-[var(--suchure-muted)]">{bootcamp.description}</p>
              <div className="mt-4 space-y-1 text-sm text-[var(--suchure-muted)]">
                <p>{bootcamp.duration}</p>
                <p>{bootcamp.rating}</p>
                <p>{bootcamp.date}</p>
              </div>
              <p className="mt-4 text-lg font-bold text-[var(--suchure-ink)]">{bootcamp.price}</p>
              <div className="mt-5 flex gap-3">
                <button className="rounded-full bg-[var(--suchure-navy)] px-4 py-2 text-sm font-medium text-white">Register Now</button>
                <button className="rounded-full border border-[var(--suchure-border)] px-4 py-2 text-sm font-medium text-[var(--suchure-ink)]">View Details</button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="rounded-full border border-[var(--suchure-border)] px-5 py-2 text-sm font-medium text-[var(--suchure-ink)]">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
}
