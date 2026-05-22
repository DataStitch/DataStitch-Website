export function ContactHero() {
  return (
    <section
      className="px-6 py-24 sm:px-10 lg:px-16"
      style={{ background: 'var(--datatriad-gradient)' }}
    >
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
          Find the Right{' '}
          <span className="block font-extrabold">Level of Support</span>
        </h1>
        <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
          Select the plan that fits your goals — whether you&apos;re building your expertise,
          strengthening governance, or managing AI systems with confidence.
        </p>
      </div>
    </section>
  );
}
