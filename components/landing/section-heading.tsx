type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : "text-left"}>
      {eyebrow ? (
        <p className="mb-3 inline-flex rounded-full bg-[var(--datastitch-soft)] px-3 py-1 text-sm font-medium text-[var(--datastitch-cyan-strong)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-[var(--datastitch-ink)] sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mx-auto mt-4 max-w-3xl text-base text-[var(--datastitch-muted)] sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
