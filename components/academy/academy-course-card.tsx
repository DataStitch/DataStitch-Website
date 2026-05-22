import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/asset-path";
import type { AcademyCourse } from "@/components/academy/types";

type AcademyCourseCardProps = {
  course: AcademyCourse;
};

export function AcademyCourseCard({ course }: AcademyCourseCardProps) {
  return (
    <article
      className="overflow-hidden rounded-2xl border border-[var(--datatriad-border)] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.04)]"
    >
      <Image src={assetPath(course.image)} alt={course.title} width={420} height={240} className="h-44 w-full object-cover" />

      <div className="space-y-4 p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full bg-[var(--datatriad-soft)] px-2 py-1 font-semibold text-[var(--datatriad-cyan-strong)]">
            {course.level}
          </span>
          <span className="text-[var(--datatriad-muted)]">{course.duration}</span>
          <span className="text-[var(--datatriad-muted)]">{course.rating} Rating</span>
        </div>

        <h3 className="text-xl font-bold text-[var(--datatriad-ink)]">{course.title}</h3>
        <p className="text-sm text-[var(--datatriad-muted)]">{course.description}</p>
        <p className="text-sm text-[var(--datatriad-muted)]">Instructor: {course.instructor}</p>

        <div className="flex items-center gap-3">
          <p className="text-lg font-bold text-[var(--datatriad-ink)]">{course.price}</p>
          <p className="text-sm text-[var(--datatriad-muted)] line-through">{course.originalPrice}</p>
        </div>

        <Link
          href="/academy/course"
          className="block w-full rounded-full border border-[var(--datatriad-border)] px-4 py-2 text-center text-sm font-semibold text-[var(--datatriad-ink)]"
        >
          View Course
        </Link>
      </div>
    </article>
  );
}