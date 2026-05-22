"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { assetPath } from "@/lib/asset-path";

const TESTIMONIALS = [
  {
    id: "chidi-main",
    quote:
      "DataTriad transformed our AI implementation strategy. We went from 'experimental' to 'enterprise-grade' in less than 6 months.",
    name: "Chidima Nanao",
    role: "Chief Data Officer - Global FinTech Group",
  },
  {
    id: "chidi-ops",
    quote:
      "The governance module gave our team a practical roadmap. We now ship AI systems with clear controls and audit-ready evidence.",
    name: "Chidima Nanao",
    role: "Chief Data Officer - Global FinTech Group",
  },
  {
    id: "chidi-risk",
    quote:
      "Our leadership finally got alignment across product, risk, and engineering. The difference in delivery confidence is massive.",
    name: "Chidima Nanao",
    role: "Chief Data Officer - Global FinTech Group",
  },
  {
    id: "tobi-data",
    quote:
      "I moved from ad-hoc experimentation to leading deployment decisions in my org after completing the core learning path.",
    name: "Tobi Akinola",
    role: "Data Product Lead - Digital Banking",
  },
  {
    id: "ngozi-ai",
    quote:
      "The curriculum closes the gap between regulation and implementation. We now build faster with less rework and fewer surprises.",
    name: "Ngozi Emeka",
    role: "AI Governance Manager - InsurTech",
  },
  {
    id: "wale-ml",
    quote:
      "The labs made everything practical. We adopted stronger model controls and our production readiness improved in one quarter.",
    name: "Wale Adeyemi",
    role: "MLOps Lead - Regulated FinTech",
  },
] as const;

export function AcademySocialProof() {
  const [pageIndex, setPageIndex] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(TESTIMONIALS.length / cardsPerPage);

  const visibleTestimonials = useMemo(() => {
    const start = pageIndex * cardsPerPage;
    return TESTIMONIALS.slice(start, start + cardsPerPage);
  }, [pageIndex]);

  const goToPrev = () => {
    setPageIndex((current) => (current === 0 ? totalPages - 1 : current - 1));
  };

  const goToNext = () => {
    setPageIndex((current) => (current === totalPages - 1 ? 0 : current + 1));
  };

  return (
    <section className="bg-[var(--datatriad-bg)] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold leading-tight text-[var(--datatriad-ink)] sm:text-5xl">
            From where they were to where they are now
          </h2>

          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              {[0, 1, 2].map((idx) => (
                <Image
                  key={idx}
                  src={assetPath("/academy_imgs/user-placeholder.svg")}
                  alt="Learner avatar"
                  width={38}
                  height={38}
                  className="rounded-full border-2 border-[var(--datatriad-bg)] bg-[var(--datatriad-soft)]"
                />
              ))}
            </div>
            <p className="text-sm text-[var(--datatriad-muted)] sm:text-base">
              Trusted by over 50,000+ learners and professionals
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleTestimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-2xl border border-[var(--datatriad-border)] bg-white p-6 shadow-[0_6px_20px_rgba(0,0,0,0.04)]"
            >
              <p className="text-lg leading-snug text-[var(--datatriad-ink)]">{testimonial.quote}</p>

              <div className="mt-5 flex items-center justify-between gap-3 border-t border-[var(--datatriad-border)] pt-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={assetPath("/academy_imgs/user-placeholder.svg")}
                    alt={testimonial.name}
                    width={34}
                    height={34}
                    className="rounded-full bg-[var(--datatriad-soft)]"
                  />

                  <div>
                    <p className="text-sm font-semibold text-[var(--datatriad-ink)]">{testimonial.name}</p>
                    <p className="text-xs text-[var(--datatriad-muted)]">{testimonial.role}</p>
                  </div>
                </div>

                <p className="text-sm font-semibold text-amber-500">★★★★★</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous testimonials"
            onClick={goToPrev}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--datatriad-border)] text-[var(--datatriad-muted)]"
          >
            &lt;
          </button>

          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={`dot-${idx}`}
              type="button"
              aria-label={`Go to testimonials page ${idx + 1}`}
              onClick={() => setPageIndex(idx)}
              className={`h-3 w-3 rounded-full ${
                idx === pageIndex ? "bg-[var(--datatriad-cyan-strong)]" : "bg-[var(--datatriad-border)]"
              }`}
            />
          ))}

          <button
            type="button"
            aria-label="Next testimonials"
            onClick={goToNext}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--datatriad-border)] text-[var(--datatriad-muted)]"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
