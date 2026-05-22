import Image from "next/image";
import instructors from "@/data/instructors.json";
import { assetPath } from "@/lib/asset-path";

export function AcademyInstructors() {
  return (
    <section className="bg-[var(--datatriad-bg)] px-6 pb-10 pt-2 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl rounded-2xl border border-[var(--datatriad-border)] bg-white px-5 py-6 sm:px-7 sm:py-8">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-[var(--datatriad-ink)] sm:text-4xl">The Minds Behind the Curriculum.</h2>

          <div className="hidden items-center gap-2 sm:flex" aria-hidden="true">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--datatriad-border)] text-lg text-[var(--datatriad-muted)]">
              &lt;
            </span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--datatriad-border)] text-lg text-[var(--datatriad-muted)]">
              &gt;
            </span>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((instructor) => (
            <article key={instructor.id} className="rounded-xl border border-[var(--datatriad-border)] bg-white p-3">
              <div className="overflow-hidden rounded-lg bg-[var(--datatriad-soft)]">
                <Image
                  src={assetPath("/academy_imgs/user-placeholder.svg")}
                  alt={instructor.name}
                  width={320}
                  height={220}
                  className="h-40 w-full object-cover"
                />
              </div>

              <div className="mt-3 space-y-1">
                <h3 className="text-xl font-semibold text-[var(--datatriad-ink)]">{instructor.name}</h3>
                <p className="text-sm text-[var(--datatriad-muted)]">{instructor.role}</p>
                <p className="pt-1 text-sm text-[var(--datatriad-muted)]">
                  <span className="mr-1 text-3xl font-bold leading-none text-[var(--datatriad-ink)]">{instructor.rating}</span>
                  Rating
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
