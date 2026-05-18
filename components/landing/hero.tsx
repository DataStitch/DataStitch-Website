import { HeroCardsCluster } from "./hero-cards-cluster";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden [background:var(--suchure-gradient)] px-6 pb-20 pt-24 sm:px-10 lg:px-16 min-h-[600px] flex">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Close the governance gap before it becomes a risk.
          </h1>
          <p className="mt-5 text-lg text-white/80 sm:text-xl">
            DataStitch equips data professionals with governance-first AI skills and helps organisations
            review, strengthen, and evidence responsible AI delivery.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="relative flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
              <Image
                src="/hero_imgs/squiggly-arrow.svg"
                alt="Decorative arrow"
                className="pointer-events-none absolute -left-16 top-8 hidden -rotate-12 sm:block"
                width={96}
                height={76}
              />
              <button className="w-full rounded-full bg-[var(--suchure-accent)] px-6 py-3 text-sm font-semibold text-[var(--suchure-accent-ink)] sm:w-auto">
                Book Consultation Call
              </button>
              <button className="w-full rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white sm:w-auto">
                Explore Academy
              </button>
            </div>
          </div>
        </div>

       <HeroCardsCluster />
      </div>
    </section>
  );
}
