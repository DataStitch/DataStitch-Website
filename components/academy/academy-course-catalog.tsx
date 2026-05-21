"use client";

import { useMemo, useState } from "react";
import type { AcademyCourse } from "@/components/academy/types";
import { AcademyCourseCard } from "@/components/academy/academy-course-card";

type AcademyCourseCatalogProps = {
  courses: AcademyCourse[];
};

type SortMode = "Most Popular" | "Price: Low to High" | "Price: High to Low";

const SORT_OPTIONS: SortMode[] = ["Most Popular", "Price: Low to High", "Price: High to Low"];

function toPriceValue(price: string): number {
  const numeric = price.replace(/[^0-9.]/g, "");
  return Number.parseFloat(numeric) || 0;
}

export function AcademyCourseCatalog({ courses }: AcademyCourseCatalogProps) {
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<"All" | AcademyCourse["category"]>("All");
  const [levelFilter, setLevelFilter] = useState<"All" | AcademyCourse["level"]>("All");
  const [durationFilter, setDurationFilter] = useState<"All" | "0-4 weeks" | "5-8 weeks" | "9+ weeks">("All");
  const [sortBy, setSortBy] = useState<SortMode>("Most Popular");

  const totalActiveFilters = [categoryFilter, levelFilter, durationFilter].filter((value) => value !== "All").length;

  const filteredCourses = useMemo(() => {
    const byQuery = courses.filter((course) => {
      const haystack = `${course.title} ${course.description} ${course.instructor}`.toLowerCase();
      return haystack.includes(query.toLowerCase());
    });

    const byFilters = byQuery.filter((course) => {
      const categoryMatch = categoryFilter === "All" || course.category === categoryFilter;
      const levelMatch = levelFilter === "All" || course.level === levelFilter;

      if (!categoryMatch || !levelMatch) {
        return false;
      }

      if (durationFilter === "All") {
        return true;
      }

      const weeks = Number.parseInt(course.duration, 10);
      if (Number.isNaN(weeks)) {
        return false;
      }

      if (durationFilter === "0-4 weeks") {
        return weeks <= 4;
      }
      if (durationFilter === "5-8 weeks") {
        return weeks >= 5 && weeks <= 8;
      }

      return weeks >= 9;
    });

    const sorted = [...byFilters];

    if (sortBy === "Price: Low to High") {
      sorted.sort((a, b) => toPriceValue(a.price) - toPriceValue(b.price));
    } else if (sortBy === "Price: High to Low") {
      sorted.sort((a, b) => toPriceValue(b.price) - toPriceValue(a.price));
    } else {
      sorted.sort((a, b) => Number.parseFloat(b.rating) - Number.parseFloat(a.rating));
    }

    return sorted;
  }, [categoryFilter, courses, durationFilter, levelFilter, query, sortBy]);

  const clearFilters = () => {
    setCategoryFilter("All");
    setLevelFilter("All");
    setDurationFilter("All");
    setQuery("");
  };

  return (
    <section id="academy-courses" className="bg-[var(--datastitch-bg)] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-[var(--datastitch-border)] bg-white p-5 sm:p-6">
          <div className="flex flex-col gap-4 border-b border-[var(--datastitch-border)] pb-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold text-[var(--datastitch-ink)]">Filter By ({totalActiveFilters})</p>
            <button
              type="button"
              onClick={clearFilters}
              className="w-fit text-sm font-medium text-[var(--datastitch-cyan-strong)]"
            >
              Clear all
            </button>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
            <select
              className="rounded-lg border border-[var(--datastitch-border)] bg-white px-3 py-2 text-sm text-[var(--datastitch-ink)]"
              value={categoryFilter}
              onChange={(event) => setCategoryFilter(event.target.value as "All" | AcademyCourse["category"])}
            >
              <option value="All">Learning paths</option>
              <option value="Learning paths">Learning paths</option>
              <option value="Product">Product</option>
              <option value="Instructors">Instructors</option>
            </select>

            <select
              className="rounded-lg border border-[var(--datastitch-border)] bg-white px-3 py-2 text-sm text-[var(--datastitch-ink)]"
              value={levelFilter}
              onChange={(event) => setLevelFilter(event.target.value as "All" | AcademyCourse["level"])}
            >
              <option value="All">Skills level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>

            <select
              className="rounded-lg border border-[var(--datastitch-border)] bg-white px-3 py-2 text-sm text-[var(--datastitch-ink)]"
              value={durationFilter}
              onChange={(event) => setDurationFilter(event.target.value as "All" | "0-4 weeks" | "5-8 weeks" | "9+ weeks")}
            >
              <option value="All">Duration</option>
              <option value="0-4 weeks">0-4 weeks</option>
              <option value="5-8 weeks">5-8 weeks</option>
              <option value="9+ weeks">9+ weeks</option>
            </select>

            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search courses or instructors"
              className="rounded-lg border border-[var(--datastitch-border)] px-3 py-2 text-sm text-[var(--datastitch-ink)] placeholder:text-[var(--datastitch-muted)]"
            />

            <select
              className="rounded-lg border border-[var(--datastitch-border)] bg-white px-3 py-2 text-sm text-[var(--datastitch-ink)]"
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value as SortMode)}
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  Sort by: {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[var(--datastitch-ink)] sm:text-3xl">All Courses</h2>
          <p className="text-sm text-[var(--datastitch-muted)]">{filteredCourses.length} result(s)</p>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredCourses.map((course) => (
            <AcademyCourseCard key={course.id} course={course} />
          ))}
        </div>

        {filteredCourses.length === 0 ? (
          <p className="mt-8 rounded-xl border border-dashed border-[var(--datastitch-border)] bg-white px-5 py-4 text-sm text-[var(--datastitch-muted)]">
            No courses matched your current filters. Try clearing filters or using a broader search term.
          </p>
        ) : null}
      </div>
    </section>
  );
}
