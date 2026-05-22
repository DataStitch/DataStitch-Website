import Link from 'next/link';

type NextStepCtaProps = {
    title?: string;
    description?: string;
    primaryActionLabel?: string;
    primaryActionHref?: string;
    secondaryActionLabel?: string;
    secondaryActionHref?: string;
};

const defaultProps: Required<NextStepCtaProps> = {
    title: 'Your next role starts with your next step.',
    description:
        'Join thousands of data and AI professionals building the skills that senior roles demand with a learning path designed specifically for where you want to go.',
    primaryActionLabel: 'Find My Learning Path',
    primaryActionHref: '/consultation',
    secondaryActionLabel: 'Browse All Course',
    secondaryActionHref: '/academy',
};

export function NextStepCta(props: NextStepCtaProps) {
    const {
        title,
        description,
        primaryActionLabel,
        primaryActionHref,
        secondaryActionLabel,
        secondaryActionHref,
    } = {
        ...defaultProps,
        ...props,
    };

    return (
        <section className='px-6 py-14 sm:px-10 lg:px-16'>
            <div className='overflow-hidden rounded-[calc(2rem-3px)] bg-[linear-gradient(118deg,#526f80_0%,#2a4263_45%,#1b3560_100%)] px-6 py-16 text-center text-white sm:px-12 sm:py-20'>
                <div className='mx-auto max-w-3xl'>
                    <h2 className='text-3xl font-semibold tracking-tight text-white sm:text-5xl'>
                        {title}
                    </h2>
                    <p className='mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/85 sm:text-xl'>
                        {description}
                    </p>

                    <div className='mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row'>
                        <Link
                            href={primaryActionHref}
                            className='inline-flex min-h-12 min-w-56 items-center justify-center rounded-full bg-[var(--datatriad-accent)] px-8 text-base font-semibold text-[#0d3f44] transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70'
                        >
                            {primaryActionLabel}
                        </Link>

                        <Link
                            href={secondaryActionHref}
                            className='inline-flex min-h-12 min-w-52 items-center justify-center rounded-full bg-white/12 px-8 text-base font-semibold text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70'
                        >
                            {secondaryActionLabel}
                        </Link>
                    </div>
                </div>
            </div>{' '}
        </section>
    );
}
