import { SectionHeading } from "./section-heading";

const learnerSteps = [
  {
    step: "01",
    title: "Choose your pathway",
    description:
      "Complete a short skills assessment. Our AI generates a personalised route to your target role.",
  },
  {
    step: "02",
    title: "Learn from practitioners",
    description:
      "Move at your pace through video modules, live sessions, labs, and searchable workshop replays.",
  },
  {
    step: "03",
    title: "Get certified and hired",
    description:
      "Pass your exam with confidence, publish your certificate, and join a governance-first talent network.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-[var(--suchure-bg)] px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl flex flex-col items-center">
        <SectionHeading
          title="How Suchure works for you"
          description="Simple, structured, and outcome-focused — whether you're learning or governing."
          centered={true}
        />

        <div className="mt-8 inline-flex rounded-xl bg-[var(--suchure-soft)] p-1 text-sm">
          <button className="rounded-lg bg-white px-4 py-2 font-medium text-[var(--suchure-ink)] shadow-sm">For Learners</button>
          <button className="rounded-lg px-4 py-2 text-[var(--suchure-muted)]">For Executives</button>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {learnerSteps.map((step) => (
            <article key={step.step} className="rounded-2xl border border-[var(--suchure-border)] bg-white p-6">
              <p className="text-5xl font-bold text-[var(--suchure-navy-soft)]">{step.step}</p>
              <h3 className="mt-4 text-xl font-bold text-[var(--suchure-ink)]">{step.title}</h3>
              <p className="mt-2 text-sm text-[var(--suchure-muted)]">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
