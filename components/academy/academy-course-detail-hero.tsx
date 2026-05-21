import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/asset-path";
import type { AcademyCoursePageData } from "@/components/academy/types";

type AcademyCourseDetailHeroProps = {
  breadcrumb: AcademyCoursePageData["breadcrumb"];
  hero: AcademyCoursePageData["hero"];
};

export function AcademyCourseDetailHero({ breadcrumb, hero }: AcademyCourseDetailHeroProps) {
  return (
    <section className="relative overflow-hidden px-6 pb-14 pt-10 sm:px-10 lg:px-16 lg:pb-20">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#0b223f_0%,#14375d_56%,#32597f_100%)]" />
      <div className="pointer-events-none absolute -left-24 top-20 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-emerald-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <p className="flex items-center gap-2 text-sm font-semibold text-white/80">
          <span>{breadcrumb.section}</span>
          <span aria-hidden="true">/</span>
          <span className="text-white">{breadcrumb.track}</span>
        </p>

        <div className="mt-6 grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              {hero.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={hero.ctaHref}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--datastitch-accent)] px-7 text-base font-semibold text-[var(--datastitch-accent-ink)] transition hover:brightness-105"
              >
                {hero.ctaLabel}
              </Link>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/85">
                <span>{hero.rating}</span>
                <span>{hero.learners}</span>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-2 backdrop-blur-sm">
            <div className="relative h-72 overflow-hidden rounded-[1.25rem] sm:h-80">
              <Image
                src={assetPath(hero.image)}
                alt={hero.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 36rem, 100vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
