import { SectionHeading } from "./section-heading";

type Course = {
  id: string;
  title: string;
  level: string;
  duration: string;
  rating: string;
  price: string;
  originalPrice: string;
  description: string;
};

type CoursesSectionProps = {
  courses: Course[];
};

export function CoursesSection({ courses }: CoursesSectionProps) {
  return (
    <section className="bg-[var(--datatriad-bg)] px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Explore courses designed to help you level up" centered={false} />

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <article key={course.id} className="rounded-2xl border border-[var(--datatriad-border)] bg-white">
              <div className="h-44 rounded-t-2xl bg-[var(--datatriad-soft)]" />
              <div className="space-y-4 p-5">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="rounded-full bg-amber-100 px-2 py-1 font-medium text-amber-700">{course.level}</span>
                  <span className="text-[var(--datatriad-muted)]">{course.duration}</span>
                  <span className="text-[var(--datatriad-muted)]">{course.rating}</span>
                </div>
                <h3 className="text-xl font-bold text-[var(--datatriad-ink)]">{course.title}</h3>
                <p className="text-sm text-[var(--datatriad-muted)]">{course.description}</p>
                <div className="flex items-center gap-3">
                  <p className="text-lg font-bold text-[var(--datatriad-ink)]">{course.price}</p>
                  <p className="text-sm text-[var(--datatriad-muted)] line-through">{course.originalPrice}</p>
                </div>
                <button className="w-full rounded-full border border-[var(--datatriad-border)] px-4 py-2 text-sm font-medium text-[var(--datatriad-ink)]">
                  View Course
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="rounded-full border border-[var(--datatriad-border)] px-5 py-2 text-sm font-medium text-[var(--datatriad-ink)]">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
}
