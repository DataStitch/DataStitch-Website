import { SectionHeading } from "./section-heading";

type Instructor = {
  id: string;
  name: string;
  role: string;
  rating: string;
  quote: string;
};

type InstructorsSectionProps = {
  instructors: Instructor[];
};

export function InstructorsSection({ instructors }: InstructorsSectionProps) {
  return (
    <section className="bg-[var(--datatriad-bg)] px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Learn from people who've done the job"
          description="Every datatriad instructor is a current or recently active practitioner at a leading UK or Nigerian organisation."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((instructor) => (
            <article key={instructor.id} className="rounded-2xl border border-[var(--datatriad-border)] bg-white p-5">
              <div className="mb-4 h-48 rounded-xl bg-[var(--datatriad-soft)]" />
              <h3 className="text-lg font-bold text-[var(--datatriad-ink)]">{instructor.name}</h3>
              <p className="text-sm text-[var(--datatriad-muted)]">{instructor.role}</p>
              <p className="mt-2 text-sm font-semibold text-[var(--datatriad-ink)]">{instructor.rating} Rating</p>
              <p className="mt-3 text-sm text-[var(--datatriad-muted)]">“{instructor.quote}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
